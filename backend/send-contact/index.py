import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта студии АЙЛИС на почту владельца."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    message = body.get('message', '').strip()

    if not name or not contact or not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Заполните все поля'}
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    from_email = 'ailis19@mail.ru'
    to_email = 'ailis19@mail.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта АЙЛИС от {name}'
    msg['From'] = from_email
    msg['To'] = to_email

    html = f"""
    <html><body style="font-family: Arial, sans-serif; color: #333; max-width: 600px;">
      <h2 style="color: #1a1a2e;">Новая заявка с сайта студии АЙЛИС</h2>
      <table style="width:100%; border-collapse:collapse;">
        <tr><td style="padding:8px; font-weight:bold; width:140px;">Имя:</td><td style="padding:8px;">{name}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold;">Контакт:</td><td style="padding:8px;">{contact}</td></tr>
        <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Сообщение:</td><td style="padding:8px;">{message}</td></tr>
      </table>
    </body></html>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'success': True}
    }