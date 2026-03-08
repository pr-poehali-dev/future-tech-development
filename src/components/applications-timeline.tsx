import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Скачиваешь и проходишь онбординг",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            За 5 минут AI-навигатор Creator Compass сканирует твои соцсети, определяет нишу и уровень, присваивает XP и строит персональную дорожную карту роста.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Авторизация через TikTok или Instagram
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              AI определяет нишу: мода, юмор, спорт, бьюти
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Получаешь уровень: Новичок → Блогер → Профи
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Берёшь задание от бренда",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            В маркетплейсе BrandConnect видишь только те задания, которые подходят тебе по нише и уровню. Чёткий бриф, фиксированная оплата, никаких сюрпризов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Фото продукта, short-video, stories, отзыв
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Оплата $5–50 за задание, доступно с 100 подписчиков
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Умный матчинг по истории и предпочтениям
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Создаёшь контент в CreatorLab",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Встроенная студия помогает сделать контент идеально по брифу даже без опыта. AI генерирует сценарии, подписи и автоматически добавляет логотип бренда.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              3 варианта сценария: юмор, обзор, сравнение
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              AI-подписи и 30 релевантных хэштегов
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Автоматическое наложение логотипа и промокода
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Получаешь оплату и растёшь",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            После одобрения модерацией деньги зачисляются на внутренний счёт, XP повышает рейтинг — открывая доступ к более дорогим кампаниям. Аналитика показывает прогресс и прогнозирует доход.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Двухуровневая модерация: AI + человек в спорных случаях
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Комиссия платформы 5–10% в зависимости от уровня
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              AI прогнозирует доход при текущей активности
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как это работает</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От первого входа до первого заработка — понятный путь для каждого, кто хочет зарабатывать в соцсетях
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
