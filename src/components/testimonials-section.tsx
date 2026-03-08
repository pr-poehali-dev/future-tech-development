import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Анна, 17 лет",
    role: "Ниша: бьюти | Уровень: Блогер | 1 800 подписчиков",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "За первый месяц заработала $87 на заданиях от брендов косметики. AI сам подобрал задания под мой стиль — я просто делала то, что люблю.",
  },
  {
    name: "Дима, 21 год",
    role: "Ниша: спорт | Уровень: Блогер | 3 200 подписчиков",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Думал, что для работы с брендами нужны сотни тысяч подписчиков. Оказалось — нет. Первое задание взял с 400 подписчиками и заработал $20 за день.",
  },
  {
    name: "Маша, 19 лет",
    role: "Ниша: мода | Уровень: Профи | 4 900 подписчиков",
    avatar: "/professional-woman-scientist.png",
    content:
      "Creator Compass показал, что мне нужно постить чаще. Через месяц активности я перешла на уровень Профи — теперь доступны задания по $40–50.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Реальные истории роста</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Подростки и молодёжь, которые уже зарабатывают на своём контенте через LinkUp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
