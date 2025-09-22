import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  DollarSign,
  Globe,
  Mail,
  MessageCircle,
  Palette,
  Smartphone,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function Home() {
  const whatsappNumber = "5513982264495";
  const whatsappMessage =
    "Olá! Vi sua página e gostaria de um orçamento para uma landing page.";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Entrega Rápida",
      description:
        "Sua landing page pronta em poucos dias, sem comprometer a qualidade.",
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
              href="#testimonials"
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

          <a
            href={whatsappLink}
            target="_blank"
            className="bg-[#171717] hover:bg-[#303030] px-4 py-2 rounded-md text-[#FDFEFF] font-bold cursor-pointer text-[14px] hidden md:flex items-center gap-2"
          >
            <MessageCircle className="w-4" />
            Falar Agora
          </a>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <p className="bg-blue-100 text-[10px] text-[#2445c9] font-semibold w-[110px] rounded-lg p-1 mb-6 hover:bg-blue-200">
              ⚡ Entrega Rápida!
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
            <a
              href={whatsappLink}
              target="_blank"
              className="bg-[#155DFC] hover:bg-[#003ab8] flex items-center justify-center gap-2 cursor-pointer rounded-md text-[#FDFEFF] p-3"
            >
              <Zap className="h-5 w-5 mr-2" />
              Quero um Orçamento GRÁTIS!
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-green-600" />
              Entrega rápida
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
        <div className="container mx-auto text-center">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-left">
                Seu Site Profissional
              </h3>
              <p className="text-gray-600 mb-4 text-left">
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

      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            Mais de 100 empresários já transformaram seus negócios com nossas
            landing pages.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-start rounded-lg border border-gray-200 p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <h4 className="text-gray-600 text-sm mb-8">
                  {testimonial.business}
                </h4>

                <p className="text-gray-600 italic text-left">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="cointainer mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para aumentar suas vendas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato agora e receba sua landing page profissional em
            poucos dias. Orçamento sem compromisso!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              className="flex items-center justify-center bg-[#48BC5D] text-white hover:bg-gray-100 hover:text-[#20974d] transition-colors duration-400 cursor-pointer rounded-md px-4 py-2 text-lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp: (13) 98226-4495
            </a>
            <a
              href="mailto:luizhn1703@gmail.com"
              target="blank"
              className="flex items-center justify-center bg-white text-blue-600 hover:bg-blue-300 hover:text-white transition-colors duration-400 cursor-pointer rounded-md px-4 py-2 text-lg"
            >
              <Mail className="h-5 w-5 mr-2" />
              Enviar E-mail
            </a>
          </div>

          <p className="mt-6 text-sm opacity-75">
            Resposta em até 2 horas • Orçamento gratuito • Sem compromisso
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">LandingPro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Criamos landing pages profissionais que convertem visitantes em
                clientes. Entrega rápida e preço justo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Landing Pages</li>
                <li>Sites Institucionais</li>
                <li>E-commerce</li>
                <li>Manutenção</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>FAQ</li>
                <li>Documentação</li>
                <li>Contato</li>
                <li>Garantia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>WhatsApp: (13) 98226-4495</li>
                <li>Email: luizhn1703@gmail.com</li>
                <li>Horário: 9h às 16h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 LandingPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
