import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  DollarSign,
  Globe,
  MessageCircle,
  Palette,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Entrega Rápida",
      description:
        "Sua landing page pronta em até 48 horas, sem comprometer a qualidade.",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "Design Moderno",
      description:
        "Layouts atuais e profissionais que convertem visitantes em clientes.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "100% Responsivo",
      description:
        "Perfeita em todos os dispositivos: desktop, tablet e mobile.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "Otimizada para Conversão",
      description: "Estratégias comprovadas para aumentar suas vendas e leads.",
    },
  ];

  const benefits = [
    "Design profissional e moderno",
    "Código limpo e otimizado",
    "SEO básico incluído",
    "Formulários de contato funcionais",
    "Integração com redes sociais",
    "Suporte pós-entrega",
    "Revisões ilimitadas",
    "Hospedagem gratuita incluída",
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      business: "Consultoria Empresarial",
      text: "Minha landing page ficou incrível! As vendas aumentaram 300% no primeiro mês.",
      rating: 5,
    },
    {
      name: "João Santos",
      business: "E-commerce de Roupas",
      text: "Entrega super rápida e resultado além das expectativas. Recomendo!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      business: "Serviços de Beleza",
      text: "Profissional, rápido e preço justo. Já indiquei para várias amigas.",
      rating: 5,
    },
  ];

  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 ">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 ">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">LandingPro</span>
          </div>

          <nav className="hidden gap-8 md:flex items-center ">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#depoiments"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contato
            </a>
          </nav>

          <button className="bg-[#171717] hover:bg-[#222222] px-4 py-2 rounded-md text-[#FDFEFF] font-bold cursor-pointer text-[14px] hidden md:flex items-center gap-2">
            <MessageCircle className="w-4" />
            Falar Agora
          </button>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <p className="bg-blue-100 text-[10px] text-[#2445c9] font-semibold w-[110px] rounded-lg p-1 mb-6 hover:bg-blue-200">
              ⚡ Entrega Rapida!
            </p>
          </div>

          <h1 className="text-gray-900 flex flex-col text-4xl md:text-6xl leading-tight font-bold mb-6">
            Landing Pages que
            <span className="text-blue-600">Convertem Visitantes</span> em
            Clientes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Crie uma presença online profissional para seu negócio com landing
            pages modernas, responsivas e otimizadas para conversão. Entrega
            rápida e preço justo!
          </p>

          <div className="flex items-center justify-center gap-2">
            <button className="bg-[#155DFC] hover:bg-[#003ab8] flex items-center justify-center gap-2 cursor-pointer rounded-md text-[#FDFEFF] p-3">
              <Zap className="h-5 w-5 mr-2" />
              Quero um Orçamento GRÁTIS!
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-green-600" />
              Entrega em 48h
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-green-600" />
              Preço justo
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
              Suporte incluído
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            Combinamos velocidade, qualidade e preço justo para entregar a
            landing page perfeita para seu negócio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card Here! it doesnt have component lib, i created my own card */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-md border border-gray-200 p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                O que está incluído no seu projeto?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Cada landing page é desenvolvida com atenção aos detalhes e
                inclui tudo que você precisa para começar a converter visitantes
                hoje mesmo.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <h3 className="text-gray-700">{benefit}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between mb-6">
                <Code className="h-8 w-8 text-blue-600" />
                <p className="bg-green-100 text-green-800 text-[12px] font-semibold rounded-lg py-1 px-2">
                  Ativo
                </p>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Seu Site Profissional
              </h3>
              <p className="text-gray-600 mb-4">
                Landing page moderna e responsiva
              </p>
              <div className="space-y-2">
                <div className="h-2 bg-blue-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full w-4/5"></div>
                </div>
                <div className="h-2 bg-purple-200 rounded-full">
                  <div className="h-2 bg-purple-600 rounded-full w-3/5"></div>
                </div>
                <div className="h-2 bg-green-200 rounded-full">
                  <div className="h-2 bg-green-600 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
