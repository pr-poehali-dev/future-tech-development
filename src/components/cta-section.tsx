import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-violet-900/20 via-purple-900/10 to-violet-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Готов начать зарабатывать на своём контенте?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Присоединяйся к тысячам молодых создателей, которые уже превращают хобби в доход. Нужно только 100 подписчиков и 5 минут на онбординг.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-8 py-4 border-0"
            >
              Скачать LinkUp бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-violet-500 text-violet-300 hover:bg-violet-600 hover:text-white text-lg px-8 py-4 bg-transparent"
            >
              Смотреть демо
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ Бесплатный старт</span>
            <span>✓ Без опыта</span>
            <span>✓ Первый заработок за день</span>
            <span>✓ Реальные бренды</span>
          </div>
        </div>
      </div>
    </section>
  )
}
