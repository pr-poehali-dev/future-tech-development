import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "AI-навигатор Creator Compass",
    description: "Умный онбординг: AI сканирует твои соцсети, определяет нишу и строит персональную дорожную карту к первому заработку.",
    icon: "Brain",
    badge: "AI",
  },
  {
    title: "Маркетплейс BrandConnect",
    description: "Биржа заданий от реальных брендов — фото, reels, stories. Доступна с 100 подписчиков. Оплата $5–50 за задание.",
    icon: "Briefcase",
    badge: "Заработок",
  },
  {
    title: "Контент-студия CreatorLab",
    description: "AI генерирует сценарии, подписи и хэштеги. Шаблоны автоматически добавляют логотип бренда — контент соответствует брифу с первого раза.",
    icon: "Wand2",
    badge: "Инструменты",
  },
  {
    title: "Академия Influencer School",
    description: "Микро-уроки по 2–3 минуты в формате TikTok: алгоритмы, работа с брендами, юридические основы. Учишься — зарабатываешь XP.",
    icon: "GraduationCap",
    badge: "Обучение",
  },
  {
    title: "Аналитика InsightHub",
    description: "Понятная статистика: заработок, рейтинг, уровень. AI прогнозирует доход на следующий месяц на основе твоей активности.",
    icon: "BarChart3",
    badge: "Аналитика",
  },
  {
    title: "Сообщество CreatorCircle",
    description: "Лента успехов, вопросы другим создателям и командные задания для сложных кампаний. Расти быстрее вместе.",
    icon: "Users",
    badge: "Комьюнити",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">6 модулей. Один путь к доходу</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё необходимое для старта карьеры в креативной экономике — в одном приложении
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} fallback="Star" size={32} className="text-violet-500" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}