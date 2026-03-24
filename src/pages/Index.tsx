import { Gem, Sparkles, ShieldCheck, Heart, Leaf, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const CONTACT_URL = "https://functions.poehali.dev/6f352a73-e887-4380-b804-3eb2137e9a37"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    try {
      const res = await fetch(CONTACT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setFormStatus('success')
        setForm({ name: '', contact: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const faqs: FAQ[] = [
    {
      question: "Из каких камней вы создаёте украшения?",
      answer:
        "Айсылу работает с натуральными камнями: аметист, розовый кварц, малахит, лунный камень, яшма, агат, лазурит и многие другие. Каждый камень подбирается вручную с учётом его природных свойств и энергетики. Мы не используем искусственные или синтетические материалы.",
    },
    {
      question: "Можно ли заказать украшение под себя?",
      answer:
        "Да! Индивидуальный заказ — одно из главных направлений студии. Вы можете выбрать камни, стиль плетения, цвет нити и назначение украшения (оберег, подарок, к определённому случаю). Айсылу проведёт консультацию и создаст украшение специально для вас.",
    },
    {
      question: "Что такое обережные украшения?",
      answer:
        "Обережные украшения — это изделия, созданные с намерением защиты и поддержки их владельца. В студии АЙЛИС каждый оберег плетётся вручную с вниманием к традиционным символам и природным свойствам камней. Это не просто красивое украшение, а личный талисман.",
    },
    {
      question: "Как записаться на мастер-класс?",
      answer:
        "Мастер-классы проводятся в уютной студии небольшими группами. Чтобы записаться, заполните форму на сайте или напишите нам напрямую. Мы сообщим о ближайших датах и программах. Подходит для начинающих — опыт не нужен!",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/da4606ca-1797-411f-8a60-714c94b86306/bucket/895965df-2758-4575-9fe0-4c287fd4ce12.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Gem" size={18} />
            <span className="font-medium text-balance">Студия АЙЛИС</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Украшения", "Мастер-классы", "Галерея", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/ailis_katalog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Telegram
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Заказать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Авторские украшения из натуральных камней</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Украшения с душой.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Студия АЙЛИС — ручная работа Айсылу Гильмановой. Браслеты-обереги, изделия из натуральных камней и мастер-классы, где вы создаёте своё украшение сами.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Смотреть коллекцию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Записаться на мастер-класс
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Gem" size={16} />
            <span className="text-sm font-medium">Только натуральные камни — никаких имитаций</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Handmade */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Авторская работа</h3>
              <p className="text-white/80 leading-relaxed">Каждое украшение создаётся вручную лично Айсылу.</p>
            </div>

            {/* Natural stones */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Натуральные камни</h3>
              <p className="text-white/80 leading-relaxed">Только природные самоцветы, отобранные вручную.</p>
            </div>

            {/* Individual order */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Под заказ</h3>
              <p className="text-white/80 leading-relaxed">Создадим украшение специально под вас или в подарок.</p>
            </div>

            {/* Masterclasses */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Мастер-классы</h3>
              <p className="text-white/80 leading-relaxed">Научитесь плести обереги сами в уютной студии.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-balance">Наши работы</h2>
            <p className="text-xl text-white/80">Украшения, созданные с любовью в студии АЙЛИС</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="https://cdn.poehali.dev/projects/da4606ca-1797-411f-8a60-714c94b86306/bucket/5fb91af8-81ae-4070-985f-0b710bd378f1.jpg"
                alt="Браслет из розового кварца и оникса"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="https://cdn.poehali.dev/projects/da4606ca-1797-411f-8a60-714c94b86306/bucket/54a18b2d-6c7f-42cf-98e1-6b05f37c4526.jpg"
                alt="Колье и чокер из жемчуга и бусин"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img
                src="https://cdn.poehali.dev/projects/da4606ca-1797-411f-8a60-714c94b86306/bucket/3e13e428-434f-415d-8561-2fdb64d2941a.jpg"
                alt="Авторское колье с жемчугом и цепочками"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section — как устроен процесс */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как создаётся ваше украшение</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От выбора камней до готового оберега — каждый шаг с вниманием и любовью.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Консультация</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Обсуждаем ваши пожелания, намерение украшения и выбираем подходящие камни вместе с Айсылу.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Выбор камней</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Айсылу вручную подбирает натуральные самоцветы, учитывая их природные свойства и вашу энергетику.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Создание</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Каждое украшение плетётся вручную с намерением. Процесс занимает от нескольких часов до нескольких дней.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Ваш оберег</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Получаете готовое украшение в красивой упаковке с описанием камней и их свойств. Идеально как подарок.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Заказать украшение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё о украшениях, обережах, мастер-классах и индивидуальных заказах в студии АЙЛИС.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Icon name="Check" size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Заявка отправлена!</h4>
                    <p className="text-gray-600">Айсылу свяжется с вами в ближайшее время.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 text-sm text-gray-500 underline">Отправить ещё</button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium mb-2">Email или телефон</label>
                      <input
                        type="text"
                        id="contact"
                        value={form.contact}
                        onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Как с вами связаться"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Что вас интересует?</label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                        placeholder="Расскажите об украшении, поводе или запишитесь на мастер-класс..."
                        required
                      />
                    </div>
                    {formStatus === 'error' && (
                      <p className="text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
                    )}
                    <Button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base disabled:opacity-60"
                    >
                      {formStatus === 'sending' ? 'Отправляем...' : 'Отправить'}
                    </Button>
                  </form>
                )}
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Хотите заказать украшение или записаться на мастер-класс? Напишите нам — Айсылу ответит лично и поможет выбрать то, что подходит именно вам.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-rose-400 flex items-center justify-center text-white text-2xl font-bold">
                      А
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Айсылу Гильманова</h4>
                      <p className="text-gray-600">Мастер-ювелир, основатель студии АЙЛИС</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Создаю авторские украшения из натуральных камней с любовью и намерением. Каждое изделие — это история и энергия.
                  </p>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Gem" size={22} />
                  <span className="text-xl font-semibold">Студия АЙЛИС</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Авторские украшения из натуральных камней ручной работы. Браслеты-обереги, индивидуальные заказы и мастер-классы от Айсылу Гильмановой.
                </p>
              </div>

              {/* Catalog Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">УКРАШЕНИЯ</h3>
                <ul className="space-y-3">
                  {["Браслеты-обереги", "Украшения из камней", "Индивидуальный заказ", "Подарочные наборы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Studio Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">СТУДИЯ</h3>
                <ul className="space-y-3">
                  {["О мастере", "Мастер-классы", "Галерея работ", "Отзывы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://t.me/ailis_katalog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed flex items-center gap-1"
                    >
                      Каталог в Telegram
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Вопросы и ответы", "Доставка", "Уход за украшениями"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости студии и новые коллекции</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Студия АЙЛИС — Айсылу Гильманова</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index