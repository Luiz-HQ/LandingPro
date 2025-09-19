import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  MessageCircle,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 ">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 ">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">LandingPro</span>
          </div>

          <nav className="hidden gap-8 md:flex items-center">
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

      <section>
        <div className="py-20 px-4">
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
        </div>
      </section>
    </main>
  );
}
