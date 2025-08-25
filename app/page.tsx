"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Brain, Headphones, ArrowRight, MapPin, Phone, Instagram, Mail } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function BajolaHigueraWebsite() {
  return (
    <div id="inicio" className="min-h-screen bg-gray-100">
      {/* Hero Section with rounded container */}
      <section className="pt-4 md:pt-8 pb-8 md:pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/fotohero.jpg"
                alt="Espacio de meditación con persona"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-20 flex justify-between items-center p-4 md:p-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/bajologo.png"
                  alt="Bajo La Higuera Logo"
                  width={180}
                  height={180}
                  className="rounded-full"
                />
              </div>
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base"
                onClick={() => {
                  window.open("https://wa.me/5493814662416", "_blank")
                }}
              >
                Agendar Sesión
              </Button>
            </div>

            <div className="relative z-20 flex items-center justify-center h-full text-white px-4">
              <div className="text-center max-w-4xl">
                {/* Welcome text */}
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <span className="text-amber-400 mr-2">✦</span>
                  <span className="text-base md:text-lg text-amber-200">Bienvenidos A Bajo La Higuera</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  Acompañamiento en
                  <br />
                  meditación
                </h1>

                <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
                  Transforma tu vida desde adentro con sesiones guiadas que calman la mente y fortalecen el alma
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center z-30">
              <button
                aria-label="Scroll down"
                onClick={() => {
                  const nextSection = document.querySelector("section:nth-of-type(2)")
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="flex flex-col items-center group focus:outline-none"
              >
                <span className="text-xs md:text-sm text-amber-200 mb-2 group-hover:text-amber-400 transition-colors">
                  Desliza hacia abajo
                </span>
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 animate-bounce text-amber-200 group-hover:text-amber-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-start">
            <div className="relative order-2 lg:order-1">
              {/* Main photo */}
              <div className="relative w-full max-w-sm mx-auto lg:max-w-md lg:mx-0 mt-4 md:mt-8 lg:mt-12">
                <Image
                  src="/images/fotosection1.jpg"
                  alt="Instructor de meditación"
                  width={400}
                  height={600}
                  className="rounded-2xl md:rounded-3xl object-cover w-full"
                />
              </div>
            </div>

            <div className="pt-2 md:pt-4 order-1 lg:order-2">
              <div className="mb-3 md:mb-4">
                <span className="font-bold text-teal-900 text-xs md:text-sm">
                  <span className="mr-2 font-bold text-amber-200 text-xs md:text-sm">✦</span>
                  Volver A Casa
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4 md:mb-6 leading-tight">
                Redescubre tu paz interior
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-lg">
                La mente no siempre es un buen lugar para vivir. Entre la ansiedad, las dudas y el constante ir y venir
                de pensamientos, es fácil perderse de lo esencial: tu autenticidad, tu descanso, tu claridad. La
                meditación es un camino para despejar el ruido y reencontrarte contigo mismo.
              </p>

              <div className="bg-gray-50 rounded-xl md:rounded-3xl p-4 md:p-8 border border-gray-100 shadow-sm mb-6 md:mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                  <div className="text-gray-600 font-medium text-xs md:text-base">Recupera Tu Bienestar Emocional</div>
                  <div className="text-gray-600 font-medium text-xs md:text-base">Encuentra Claridad Mental</div>
                  <div className="text-gray-600 font-medium text-xs md:text-base">Vive Con Más Serenidad</div>
                  <div className="text-gray-600 font-medium text-xs md:text-base">Reconecta Contigo Mismo</div>
                </div>
              </div>

              <blockquote className="text-gray-500 italic text-sm md:text-lg leading-relaxed">
                "La curiosa paradoja es que cuando me acepto tal como soy, entonces puedo cambiar."
                <footer className="mt-2 md:mt-3 text-gray-400 not-italic text-xs md:text-base">— C. Rogers</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-stretch mb-6 md:mb-8">
            {/* Left side - Gray container only around this content */}
            <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-amber-500 font-bold text-sm">✦ Beneficios</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight">
                Los beneficios
                <br />
                de la meditación
                <br />
                contemplativa
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                La meditación contemplativa mejora tu bienestar mental y emocional, reduciendo el estrés y promoviendo
                una profunda paz interior. Descubre cómo esta práctica puede transformar tu vida.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {/* Top row - 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Autoconocimiento Profundo */}
                <Card className="bg-amber-200 border-none rounded-2xl md:rounded-3xl p-4 md:p-6">
                  <CardContent className="p-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-700 rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 border border-gray-700 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-800">
                      Autoconocimiento Profundo
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                      Explora tu mundo interior con una mirada compasiva, entendiendo patrones y creencias que influyen
                      en tu bienestar.
                    </p>
                  </CardContent>
                </Card>

                {/* Superación de Bloqueos */}
                <Card className="bg-amber-200 border-none rounded-2xl md:rounded-3xl p-4 md:p-6">
                  <CardContent className="p-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-700 rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-800">
                      Superación de Bloqueos
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                      Aprende a gestionar dudas y resistencias internas que pueden surgir en el proceso de meditación y
                      transformación personal.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Middle row - 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Acompañamiento Personalizado */}
                <Card className="bg-amber-200 border-none rounded-2xl md:rounded-3xl p-4 md:p-6">
                  <CardContent className="p-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-700 rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <div className="relative">
                        <div className="w-5 h-5 md:w-6 md:h-6 border border-gray-700 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-800">
                      Acompañamiento Personalizado
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                      Un espacio seguro y cercano para profundizar en tu práctica, con orientación individual adaptada a
                      tu camino.
                    </p>
                  </CardContent>
                </Card>

                {/* Integración y Transformación */}
                <Card className="bg-amber-200 border-none rounded-2xl md:rounded-3xl p-4 md:p-6">
                  <CardContent className="p-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-700 rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <div className="relative">
                        <div className="w-3 h-3 md:w-4 md:h-4 border border-gray-700"></div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 border border-gray-700"></div>
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-800">
                      Integración y Transformación
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                      Convierte la meditación en una herramienta de cambio real, integrándola en tu vida de manera
                      auténtica y sostenible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <Card className="bg-gray-800 border-none rounded-2xl md:rounded-3xl p-4 md:p-6 relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/fondocontact.jpeg"
                alt="Personas meditando"
                fill
                className="object-cover opacity-30"
              />
            </div>
            <CardContent className="p-0 relative z-10">
              <p className="text-white/80 text-xs md:text-sm mb-2">Inicia tu transformación</p>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                Agenda tu sesión
                <br />
                hoy
              </h3>
              <p className="text-white/90 leading-relaxed mb-4 text-xs md:text-sm">
                Descubre cómo la meditación puede ayudarte a encontrar claridad, equilibrio y bienestar.
              </p>
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base"
                onClick={() => window.open("https://wa.me/5493814662416", "_blank")}
              >
                Agenda tu sesión
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sesiones de Meditación - New Design */}
      {/* Sesiones de Meditación - Symmetrical Design */}
      <section id="sesiones" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Left Image - Full height */}
            <div className="lg:col-span-1 flex order-2 lg:order-1">
              <Image
                src="/images/meditation1.png"
                alt="Dos mujeres meditando juntas"
                width={400}
                height={600}
                className="rounded-2xl md:rounded-3xl object-cover w-full h-full"
              />
            </div>

            {/* Center Content */}
            <div id="servicios" className="lg:col-span-1 flex flex-col justify-between py-2 md:py-4 order-1 lg:order-2">
              <div>
                <div className="mb-4 md:mb-6">
                  <span className="font-bold text-teal-900 text-xs md:text-sm">✦ ¿Para Quién Es Este Espacio?</span>
                </div>

                <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-12 leading-tight">
                  Sesiones de
                  <br />
                  meditación
                  <br />
                  personalizadas
                </h2>
              </div>

              {/* Sessions Info - Centered vertically */}
              <div className="space-y-4 md:space-y-8 flex-grow flex flex-col justify-center">
                {/* Individual Sessions */}
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-teal-900 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 md:w-6 md:h-6 text-teal-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                      Sesiones individuales de 1 hora (virtual)
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">Frecuencia recomendada: cada 7 o 15 días.</p>
                  </div>
                </div>

                {/* Enfoque */}
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-teal-900 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 md:w-6 md:h-6 text-teal-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Enfoque</h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Mindfulness, Tradiciones Contemplativas, Neurociencias y Enfoque Centrado en la Persona.
                    </p>
                  </div>
                </div>

                {/* Metodología */}
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-teal-900 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-4 h-4 md:w-6 md:h-6 text-teal-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Metodología</h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Escucha profunda, autoexploración y meditación guiada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-1 flex flex-col justify-between py-2 md:py-4 order-3">
              {/* Top Text */}
              <div className="flex-grow flex items-start mb-4 md:mb-0">
                <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                  Este espacio está destinado a quienes desean profundizar en su práctica de meditación contemplativa,
                  especialmente aquellos que buscan integrar la meditación de manera auténtica en su vida diaria. Si
                  sientes que tu práctica no avanza o se ha vuelto desafiante, o si necesitas un acompañamiento más
                  cercano en tu camino interior, nuestras sesiones de meditación guiada pueden ofrecerte el apoyo
                  necesario para explorar lo que surge en tu práctica con mayor profundidad.
                </p>
              </div>

              {/* Bottom Image */}
              <div className="mt-4 md:mt-8 flex-shrink-0">
                <Image
                  src="/images/meditation2.png"
                  alt="Personas en sesión de relajación"
                  width={400}
                  height={280}
                  className="rounded-2xl md:rounded-3xl object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      {/* Metodología - New Design */}
      <section id="metodologia" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-teal-900 text-white rounded-2xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
            {/* Top section with title and description */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
              {/* Left - Title */}
              <div>
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center mb-4 md:mb-6">
                    <span className="text-amber-400 mr-2">✦</span>
                    <span className="font-bold text-amber-200 text-xs md:text-sm">Los Núcleos Del Acompañamiento</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    Un enfoque integral para
                    <br />
                    tu bienestar
                  </h2>
                </div>
              </div>

              {/* Right - Description */}
              <div className="flex items-center">
                <p className="text-emerald-100 text-xs md:text-sm leading-relaxed">
                  Con un enfoque personalizado y apoyo constante, te acompañamos hacia una transformación consciente y
                  equilibrada. Confía en nosotros para ayudarte a alcanzar tus objetivos de bienestar.
                </p>
              </div>
            </div>

            {/* Main content grid with image and principles */}
            <div className="grid lg:grid-cols-3 gap-6 md:gap-12 items-stretch relative z-10">
              {/* Left Column - Two sections */}
              <div className="space-y-8 md:space-y-16 flex flex-col justify-between">
                {/* Observación */}
                <div>
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-white/30 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <div className="w-6 h-6 md:w-8 md:h-8 border border-white/50 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-medium mb-2 md:mb-4">Observación</h4>
                  <p className="text-emerald-100 text-xs md:text-sm leading-relaxed">
                    El arte de ver sin juzgar. Aprenderás a mirar tu experiencia meditativa sin forzar, sin
                    expectativas, solo con apertura al momento presente.
                  </p>
                </div>

                {/* Comprensión */}
                <div>
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-white/30 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-white md:w-6 md:h-6"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-medium mb-2 md:mb-4">Comprensión</h4>
                  <p className="text-emerald-100 text-xs md:text-sm leading-relaxed">
                    Desarrollar una comprensión profunda de los patrones mentales y emocionales que surgen durante la
                    práctica.
                  </p>
                </div>
              </div>

              {/* Center Column - Taller Image - Full height */}
              <div className="flex justify-center items-stretch">
                <div className="relative w-full max-w-sm">
                  <Image
                    src="/images/Joaquinsentado.png"
                    alt="Persona meditando en sala moderna"
                    width={350}
                    height={800}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Right Column - Two sections */}
              <div className="space-y-16 flex flex-col justify-between">
                {/* Compasión */}
                <div>
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-white/50 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-medium mb-2 md:mb-4">Compasión</h4>
                  <p className="text-emerald-100 text-xs md:text-sm leading-relaxed">
                    Cultivar una actitud de amabilidad y aceptación hacia uno mismo y hacia los demás durante la
                    práctica.
                  </p>
                </div>

                {/* Transformación */}
                <div>
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-white/30 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <div className="relative">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <div className="absolute -top-1 -right-2 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute top-2 left-3 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-medium mb-2 md:mb-4">Transformación</h4>
                  <p className="text-emerald-100 text-xs md:text-sm leading-relaxed">
                    Integrar las enseñanzas de la meditación en la vida diaria, promoviendo un cambio positivo y
                    duradero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformación - New Design Based on Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Top section - Title and description */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <span className="text-amber-500 mr-2">✦</span>
              <span className="text-teal-900 text-sm font-bold">Tu Camino Hacia El Bienestar</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left - Title */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Transforma tu salud con
                  <br />
                  nuestras clases online
                </h2>
              </div>

              {/* Right - Description */}
              <div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Nos especializamos en estrategias de salud personalizadas, diseñadas para ayudarte a lograr
                  equilibrio, energía y éxito duradero. Con nuestra orientación experta y un enfoque integral, podrás
                  adoptar hábitos más saludables desde la comodidad de tu hogar.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section - Image with overlay cards */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="images/JoaquinConGente.png"
                alt="Grupo de personas en clase de bienestar"
                width={800}
                height={600}
                className="w-[800px] h-[600px] object-cover"
              />

              {/* Overlay cards */}
              <div className="absolute bottom-6 right-6 space-y-4 w-80">
                {/* First card */}
                <Card className="bg-white/95 backdrop-blur-sm border-none rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Gestión Del Bienestar A Largo Plazo</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Te ofrecemos una guía personalizada para crear hábitos sostenibles que apoyen tu salud, ayudándote
                      a mantener un bienestar duradero.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-bold text-sm"
                    >
                      Comienza Ahora
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </CardContent>
                </Card>

                {/* Second card */}
                <Card className="bg-white/95 backdrop-blur-sm border-none rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Soluciones De Salud Personalizadas</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Te ayudamos a adoptar un estilo de vida más saludable, a través de un enfoque integral que se
                      ajusta a tus necesidades y objetivos específicos.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-bold text-sm"
                    >
                      Únete A Las Clases
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historias Section - New Design */}

      {/* Historias de Éxito - Testimonials Carousel */}
      <section id="testimonios" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div className="mb-4 md:mb-6">
              <span className="text-amber-500 font-bold text-xs md:text-sm">✦ Testimonios</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              Historias de éxito de
              <br />
              nuestros alumnos
            </h2>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            className="w-full touch-pan-x"
          >
            <CarouselContent className="-ml-1 md:-ml-4">
              {/* Testimonio 1 */}
              <CarouselItem className="pl-1 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                <Card className="bg-amber-200 border-none rounded-2xl md:rounded-3xl p-4 md:p-6 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3 md:mr-4">
                        <span className="text-white font-bold text-sm md:text-base">M</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">María González</h4>
                        <p className="text-gray-600 text-xs md:text-sm">Estudiante de meditación</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm flex-grow">
                      "Las sesiones con Joaquín han transformado completamente mi relación con el estrés. Ahora tengo
                      herramientas reales para encontrar paz en medio del caos diario."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonio 2 */}
              <CarouselItem className="pl-1 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-6 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3 md:mr-4">
                        <span className="text-white font-bold text-sm md:text-base">C</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">Carlos Mendoza</h4>
                        <p className="text-gray-600 text-xs md:text-sm">Profesional ejecutivo</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm flex-grow">
                      "La meditación contemplativa me ayudó a encontrar claridad en decisiones importantes. El
                      acompañamiento personalizado hace toda la diferencia."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonio 3 */}
              <CarouselItem className="pl-1 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                <Card className="bg-emerald-100 border-none rounded-2xl md:rounded-3xl p-4 md:p-6 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3 md:mr-4">
                        <span className="text-white font-bold text-sm md:text-base">A</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">Ana Rodríguez</h4>
                        <p className="text-gray-600 text-xs md:text-sm">Madre y emprendedora</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm flex-grow">
                      "Después de meses de práctica, siento que he recuperado mi centro. Las técnicas que aprendí las
                      uso todos los días con resultados increíbles."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonio 4 */}
              <CarouselItem className="pl-1 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-6 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3 md:mr-4">
                        <span className="text-white font-bold text-sm md:text-base">L</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">Luis Fernández</h4>
                        <p className="text-gray-600 text-xs md:text-sm">Estudiante universitario</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm flex-grow">
                      "La ansiedad que sentía antes de los exámenes desapareció. Ahora puedo concentrarme mejor y mi
                      rendimiento académico mejoró notablemente."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonio 5 */}
              <CarouselItem className="pl-1 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                <Card className="bg-amber-200 border-none rounded-2xl md:rounded-3xl p-4 md:p-6 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3 md:mr-4">
                        <span className="text-white font-bold text-sm md:text-base">S</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">Sofía Torres</h4>
                        <p className="text-gray-600 text-xs md:text-sm">Artista y terapeuta</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm flex-grow">
                      "Las sesiones me conectaron con una creatividad que no sabía que tenía. La meditación se volvió mi
                      refugio y mi fuente de inspiración."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonio 6 */}
              <CarouselItem className="pl-1 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
                <Card className="bg-emerald-100 border-none rounded-2xl md:rounded-3xl p-4 md:p-6 h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3 md:mr-4">
                        <span className="text-white font-bold text-sm md:text-base">R</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">Roberto Silva</h4>
                        <p className="text-gray-600 text-xs md:text-sm">Consultor empresarial</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-xs md:text-sm flex-grow">
                      "Mi capacidad para manejar situaciones difíciles cambió completamente. Ahora respondo desde la
                      calma en lugar de reaccionar desde el estrés."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-6 md:hidden">
              <div className="flex space-x-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contacto" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-teal-900 rounded-2xl md:rounded-3xl p-6 md:p-12 relative z-10 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                  Agenda tu sesión de
                  <br />
                  meditación
                </h3>

                <p className="text-white leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  Agenda fácilmente una sesión en línea de meditación contemplativa personalizada. Da el primer paso
                  hacia el bienestar mental y emocional hoy mismo.
                </p>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl md:rounded-2xl p-4 md:p-8 border border-emerald-100">
                  <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-800">Sesiones personalizadas</h4>
                      <p className="text-gray-600 text-xs md:text-sm">Adaptadas a tus necesidades específicas</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-800">Horarios flexibles</h4>
                      <p className="text-gray-600 text-xs md:text-sm">Encuentra el momento perfecto para ti</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 border border-gray-100">
                <div className="text-center space-y-4 md:space-y-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                      ¿Listo para transformar tu bienestar?
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Conecta directamente con Joaquín Correa y agenda tu sesión personalizada de meditación
                      contemplativa.
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <Button
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full"
                      onClick={() => window.open("https://wa.me/5493814662416", "_blank")}
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                      </svg>
                      Agendar por WhatsApp
                    </Button>

                    <p className="text-xs md:text-sm text-gray-500">
                      Respuesta inmediata • Sin compromiso • Consulta gratuita
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultas - Functional Accordion FAQ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left side - Images */}
            <div className="relative order-2 lg:order-1">
              {/* Top image */}
                <div className="relative mt-4 md:mt-8 hidden md:block">
                <Image
                  src="/chicosmeditando.png"
                  alt="Grupo de personas meditando con manos en posición de oración"
                  width={400}
                  height={300}
                  className="rounded-2xl md:rounded-3xl object-cover w-full"
                />
                </div>
              {/* Decorative elements */}
              <div className="flex justify-end mt-4">
                {/* Dotted circle */}
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-gray-300 rounded-full"></div>
              </div>
              {/* Bottom image */}
              <div className="relative">
                {/* Cross pattern decoration */}
                <div className="absolute -bottom-4 -left-4 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2">
                      <svg viewBox="0 0 8 8" className="w-full h-full text-emerald-600">
                        <path d="M4 0v8M0 4h8" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - FAQ Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
                  Consultas comunes sobre las sesiones de
                  <br />
                  meditación y mentoría
                </h2>
              </div>

              {/* Functional Accordion */}
              <Accordion type="single" collapsible defaultValue="item-3" className="space-y-2">
                {/* FAQ Item 1 */}
                <AccordionItem
                  value="item-1"
                  className="border border-gray-200 rounded-xl md:rounded-2xl px-4 md:px-6 data-[state=open]:bg-amber-50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-3 md:py-4">
                    <div className="flex items-center justify-between w-full">
                      <h4 className="font-semibold text-gray-800 text-sm md:text-lg pr-4">
                        ¿Qué es una sesión de meditación contemplativa?
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 md:pb-4">
                    <div className="bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-4 mt-2">
                      <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                        La meditación contemplativa es una práctica profunda que te invita a conectar con el momento
                        presente, favoreciendo la paz interior y el autoconocimiento. Es una herramienta poderosa para
                        reducir el estrés y mejorar la claridad mental.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem
                  value="item-2"
                  className="border border-gray-200 rounded-xl md:rounded-2xl px-4 md:px-6 data-[state=open]:bg-amber-50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-3 md:py-4">
                    <div className="flex items-center justify-between w-full">
                      <h4 className="font-semibold text-gray-800 text-sm md:text-lg pr-4">
                        ¿Cómo funcionan las mentorías conmigo?
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 md:pb-4">
                    <div className="bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-4 mt-2">
                      <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                        Las mentorías con Joaquín están diseñadas para guiarte en tu proceso de crecimiento personal.
                        Durante las sesiones, abordaremos tus desafíos, metas y bloqueos emocionales, utilizando
                        herramientas de meditación y reflexión para que puedas avanzar de manera consciente y serena.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 - Default Open */}
                <AccordionItem
                  value="item-3"
                  className="border border-gray-200 rounded-xl md:rounded-2xl px-4 md:px-6 data-[state=open]:bg-amber-50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-3 md:py-4">
                    <div className="flex items-center justify-between w-full">
                      <h4 className="font-semibold text-gray-800 text-sm md:text-lg pr-4">
                        ¿Qué puedo esperar de las sesiones de meditación contemplativa?
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 md:pb-4">
                    <div className="bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-4 mt-2">
                      <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                        En las sesiones de meditación, te guiaré para que logres una mayor presencia mental, reduciendo
                        el estrés y aumentando tu bienestar general. Al final de la sesión, es probable que te sientas
                        más relajado, equilibrado y con una mayor claridad mental.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem
                  value="item-4"
                  className="border border-gray-200 rounded-xl md:rounded-2xl px-4 md:px-6 data-[state=open]:bg-amber-50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-3 md:py-4">
                    <div className="flex items-center justify-between w-full">
                      <h4 className="font-semibold text-gray-800 text-sm md:text-lg pr-4">
                        ¿Puedo realizar las sesiones de meditación de forma online?
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 md:pb-4">
                    <div className="bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-4 mt-2">
                      <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                        Sí, las sesiones de meditación y mentoría pueden realizarse de manera online, lo que te permite
                        participar desde la comodidad de tu hogar o cualquier lugar donde te sientas cómodo. El formato
                        online es igual de efectivo para trabajar en tu bienestar mental y emocional.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 5 */}
                <AccordionItem
                  value="item-5"
                  className="border border-gray-200 rounded-xl md:rounded-2xl px-4 md:px-6 data-[state=open]:bg-amber-50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-3 md:py-4">
                    <div className="flex items-center justify-between w-full">
                      <h4 className="font-semibold text-gray-800 text-sm md:text-lg pr-4">
                        ¿Cuáles son los beneficios a largo plazo de la meditación y la mentoría?
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 md:pb-4">
                    <div className="bg-gray-100 rounded-lg md:rounded-xl p-3 md:p-4 mt-2">
                      <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                        Los beneficios a largo plazo incluyen una mayor paz interior, reducción del estrés, una mente
                        más clara, mejor manejo de las emociones y un enfoque más equilibrado ante los desafíos de la
                        vida. La práctica constante puede transformar profundamente tu bienestar emocional y mental.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
      <footer className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Image
                src="/images/logo2.png"
                alt="Bajo la Higuera Logo"
                width={150}
                height={50}
                className="mb-6"
              />
              <p className="text-emerald-200 mb-6 leading-relaxed">
                Bajo la Higuera - Meditación Contemplativa. Encuentra Paz Interior y Transformación a Través de la Práctica Contemplativa. Tu Camino hacia el Bienestar Mental y Emocional.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer"
                onClick={() => window.open("https://www.instagram.com/bajo.lahiguera/", "_blank")}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 mr-12">

              <div>
                <h4 className="text-lg font-medium mb-6">Navegación</h4>
                <ul className="space-y-3 text-emerald-200">
                <li className="hover:text-white cursor-pointer">
                    <a href="#inicio">Inicio</a>
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    <a href="#servicios">Servicios</a>
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    <a href="#testimonios">Testimonios</a>
                  </li>
                  <li className="hover:text-white cursor-pointer">
                    <a href="#contacto">Contacto</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-6">Contacto</h4>
                <div className="space-y-4 text-emerald-200">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>+543814662416</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>Joqcorrea14@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>Tucumán, Argentina</span>
                  </div>
                </div>
            </div>
            </div>
          </div>

          <div className="border-t border-emerald-700 mt-12 pt-8">
            <div className="text-center text-emerald-300 mb-6">
              <p>&copy; 2025 Bajo la Higuera. Todos los derechos reservados.</p>
            </div>

            <div className="text-center">
              <p className="text-white text-sm">Desarrollado con amor por</p>
              <div className="flex justify-center">
                <Image
                  width={220}
                  height={50}
                  src="/images/ginkgologo.svg"
                  alt="GinkGoDevs"
                  className=" opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => window.open("https://ginkgodevs.com", "_blank")}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
