import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько нужно подписчиков, чтобы начать зарабатывать?",
      answer:
        "Всего 100 подписчиков — это минимальный порог для доступа к заданиям в маркетплейсе BrandConnect. Бренды специально размещают задания для микроинфлюенсеров, потому что их аудитория более вовлечённая.",
    },
    {
      question: "Как быстро приходит оплата за задание?",
      answer:
        "После прохождения модерации (обычно несколько часов) деньги сразу зачисляются на внутренний счёт в приложении. Вывод доступен на банковскую карту или электронный кошелёк.",
    },
    {
      question: "Я совсем новичок в соцсетях — справлюсь?",
      answer:
        "Именно для тебя и создан LinkUp. AI-навигатор Creator Compass строит персональную дорожную карту с нуля, CreatorLab помогает создать контент даже без опыта, а Академия объясняет всё от алгоритмов до общения с брендами.",
    },
    {
      question: "Какую комиссию берёт платформа?",
      answer:
        "5–10% от суммы задания, в зависимости от уровня пользователя. Чем выше уровень и рейтинг — тем ниже комиссия. Пользователи уровня Профи платят минимальную комиссию.",
    },
    {
      question: "Что такое Creator Coins и как их использовать?",
      answer:
        "Creator Coins — внутренняя валюта платформы. Зарабатываешь за регистрацию, первые задания и активность. Тратить можно на продвижение профиля в поиске для брендов или доступ к эксклюзивным вебинарам.",
    },
    {
      question: "Есть ли Pro-подписка и что она даёт?",
      answer:
        "Да, Pro-подписка стоит $5 в месяц и даёт: ранний доступ к лучшим кампаниям, расширенную аналитику с детальными прогнозами и приоритетную поддержку.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на всё, что волнует начинающих инфлюенсеров перед стартом в LinkUp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-violet-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-violet-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
