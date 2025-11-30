import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const slides = [
  {
    id: 1,
    title: 'Исследование зависимости давления от площади опоры',
    subtitle: 'Физический эксперимент',
    type: 'title'
  },
  {
    id: 2,
    title: 'Цель и задачи исследования',
    type: 'goals',
    content: {
      goal: 'Изучить зависимость давления от площади опоры при постоянной силе',
      tasks: [
        'Провести серию экспериментов с различными площадями опоры',
        'Измерить давление для каждого случая',
        'Построить график зависимости P(S)',
        'Сделать выводы о характере зависимости'
      ]
    }
  },
  {
    id: 3,
    title: 'Формула и гипотеза',
    type: 'formula',
    content: {
      formula: 'P = F / S',
      where: [
        'P — давление (Па)',
        'F — сила (Н)',
        'S — площадь опоры (м²)'
      ],
      hypothesis: 'При постоянной силе давление обратно пропорционально площади опоры'
    }
  },
  {
    id: 4,
    title: 'Эксперимент и результаты',
    type: 'experiment',
    content: {
      description: 'Эксперимент: груз массой 10 кг (F = 100 Н) размещался на опорах различной площади',
      data: [
        { area: 0.01, pressure: 10000 },
        { area: 0.02, pressure: 5000 },
        { area: 0.05, pressure: 2000 },
        { area: 0.1, pressure: 1000 },
        { area: 0.2, pressure: 500 }
      ],
      conclusion: 'Результаты подтверждают обратную пропорциональность: при увеличении площади опоры в 2 раза давление уменьшается в 2 раза'
    }
  },
  {
    id: 5,
    title: 'График зависимости P(S)',
    type: 'chart'
  },
  {
    id: 6,
    title: 'Применение в жизни',
    type: 'applications',
    content: [
      {
        title: 'Строительство',
        description: 'Широкий фундамент уменьшает давление на грунт',
        icon: 'Building2'
      },
      {
        title: 'Лыжи и снегоступы',
        description: 'Большая площадь опоры предотвращает проваливание в снег',
        icon: 'Mountain'
      },
      {
        title: 'Гусеничный транспорт',
        description: 'Гусеницы распределяют вес по большой площади',
        icon: 'Truck'
      },
      {
        title: 'Ножи и иглы',
        description: 'Малая площадь острия создаёт высокое давление',
        icon: 'Scissors'
      }
    ]
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const renderSlideContent = () => {
    const slide = slides[currentSlide];

    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
            <div className="mb-8">
              <Icon name="FlaskConical" size={80} className="text-primary mx-auto mb-6" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {slide.title}
            </h1>
            <p className="text-2xl text-muted-foreground font-medium">{slide.subtitle}</p>
          </div>
        );

      case 'goals':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary">{slide.title}</h2>
            <Card className="p-8 mb-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
              <div className="flex items-start gap-4">
                <Icon name="Target" size={32} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3">Цель</h3>
                  <p className="text-lg">{slide.content.goal}</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 border-2">
              <div className="flex items-start gap-4">
                <Icon name="ListChecks" size={32} className="text-secondary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold mb-4">Задачи</h3>
                  <ul className="space-y-3">
                    {slide.content.tasks.map((task: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-lg">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'formula':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary">{slide.title}</h2>
            <Card className="p-10 mb-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-2">
              <div className="text-center mb-6">
                <Icon name="Calculator" size={48} className="text-secondary mx-auto mb-4" />
                <div className="text-6xl font-heading font-bold text-foreground mb-4">
                  P = F / S
                </div>
                <div className="space-y-2">
                  {slide.content.where.map((item: string, idx: number) => (
                    <p key={idx} className="text-lg text-muted-foreground">{item}</p>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="p-8 border-2 border-accent">
              <div className="flex items-start gap-4">
                <Icon name="Lightbulb" size={32} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3">Гипотеза</h3>
                  <p className="text-lg">{slide.content.hypothesis}</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'experiment':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-6 text-primary">{slide.title}</h2>
            <Card className="p-6 mb-6 bg-muted/50">
              <div className="flex items-start gap-3">
                <Icon name="Beaker" size={24} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{slide.content.description}</p>
              </div>
            </Card>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left font-heading">Площадь опоры S (м²)</th>
                    <th className="p-4 text-left font-heading">Давление P (Па)</th>
                    <th className="p-4 text-left font-heading">Произведение P×S</th>
                  </tr>
                </thead>
                <tbody>
                  {slide.content.data.map((row: any, idx: number) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-muted/30' : 'bg-card'}>
                      <td className="p-4 border border-border">{row.area}</td>
                      <td className="p-4 border border-border">{row.pressure}</td>
                      <td className="p-4 border border-border font-semibold text-primary">
                        {row.pressure * row.area} Н
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-green-800 dark:text-green-300">Вывод</h3>
                  <p className="text-green-900 dark:text-green-100">{slide.content.conclusion}</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'chart':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary">{slide.title}</h2>
            <Card className="p-8">
              <div className="relative h-96">
                <svg viewBox="0 0 500 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  
                  <line x1="50" y1="350" x2="450" y2="350" stroke="currentColor" strokeWidth="2" className="text-border" />
                  <line x1="50" y1="50" x2="50" y2="350" stroke="currentColor" strokeWidth="2" className="text-border" />
                  
                  <text x="250" y="390" textAnchor="middle" className="text-sm fill-muted-foreground">Площадь опоры S (м²)</text>
                  <text x="20" y="200" textAnchor="middle" transform="rotate(-90, 20, 200)" className="text-sm fill-muted-foreground">Давление P (Па)</text>
                  
                  <text x="70" y="365" textAnchor="middle" className="text-xs fill-muted-foreground">0.01</text>
                  <text x="150" y="365" textAnchor="middle" className="text-xs fill-muted-foreground">0.05</text>
                  <text x="250" y="365" textAnchor="middle" className="text-xs fill-muted-foreground">0.1</text>
                  <text x="350" y="365" textAnchor="middle" className="text-xs fill-muted-foreground">0.15</text>
                  <text x="430" y="365" textAnchor="middle" className="text-xs fill-muted-foreground">0.2</text>
                  
                  <text x="45" y="80" textAnchor="end" className="text-xs fill-muted-foreground">10000</text>
                  <text x="45" y="150" textAnchor="end" className="text-xs fill-muted-foreground">7500</text>
                  <text x="45" y="220" textAnchor="end" className="text-xs fill-muted-foreground">5000</text>
                  <text x="45" y="290" textAnchor="end" className="text-xs fill-muted-foreground">2500</text>
                  <text x="45" y="355" textAnchor="end" className="text-xs fill-muted-foreground">0</text>
                  
                  <path
                    d="M 70,70 Q 150,100 250,180 T 430,320"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-slide-in"
                  />
                  
                  <circle cx="70" cy="70" r="6" className="fill-primary" />
                  <circle cx="150" cy="150" r="6" className="fill-primary" />
                  <circle cx="250" cy="220" r="6" className="fill-primary" />
                  <circle cx="350" cy="280" r="6" className="fill-primary" />
                  <circle cx="430" cy="320" r="6" className="fill-primary" />
                </svg>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                График показывает обратную зависимость: с увеличением площади давление уменьшается
              </p>
            </Card>
          </div>
        );

      case 'applications':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-8 text-primary">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.content.map((app: any, idx: number) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name={app.icon} size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold mb-2">{app.title}</h3>
                      <p className="text-muted-foreground">{app.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Icon name="Presentation" size={24} className="text-primary" />
              <span className="font-heading font-semibold text-lg">
                Слайд {currentSlide + 1} из {slides.length}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                size="sm"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                variant="outline"
                size="sm"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {renderSlideContent()}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t p-4">
        <div className="container mx-auto flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Перейти к слайду ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
