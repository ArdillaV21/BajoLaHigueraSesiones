import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, Users, Clock, Award, Phone, Mail, MapPin, Calendar, Brain, Headphones, ArrowRight, FileText, MessageCircle, CheckCircle, Heart } from 'lucide-react'

export default function BajolaHigueraWebsite() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with rounded container */}
      <section className="pt-8 pb-12">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden h-[600px] md:h-[700px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/hero-bg.png"
                alt="Espacio de meditación con persona"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Navigation - floating over the image */}
            <div className="relative z-20 flex justify-between items-center p-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">B</span>
                </div>
                <div className="text-white">
                  <div className="font-semibold text-lg leading-tight">Bajo</div>
                  <div className="font-light text-sm leading-tight">la Higuera</div>
                </div>
              </div>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-2 rounded-full">
                Agendar Sesión
              </Button>
            </div>

            {/* Hero Content */}
            <div className="relative z-20 flex items-center justify-center h-full text-white px-8">
              <div className="text-center max-w-4xl">
                {/* Welcome text */}
                <div className="flex items-center justify-center mb-8">
                  <span className="text-amber-400 mr-2">✦</span>
                  <span className="text-lg text-amber-200">Bienvenidos A Bajo La Higuera</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Acompañamiento en
                  <br />
                  meditación
                </h1>
                
                <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  Transforma tu vida desde adentro con sesiones guiadas que calman la mente y fortalecen el alma
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-3 text-lg rounded-full">
                    Conoce Más
                  </Button>
                  
                  <div className="flex items-center text-white">
                    <Phone className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <p className="text-sm text-gray-200">Agendar sesión</p>
                      <p className="font-semibold text-lg">+54 9 381 466 2416</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redescubre Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="relative">
              {/* Main photo */}
              <div className="relative w-full max-w-md">
                <Image
                  src="/placeholder.svg?height=600&width=400&text=Hombre+sonriendo+camiseta+verde"
                  alt="Instructor de meditación"
                  width={400}
                  height={600}
                  className="rounded-3xl object-cover w-full"
                />

                {/* Secondary photo - positioned in top right */}
                <div className="absolute -top-6 -right-12 w-56 h-36 z-10">
                  <Image
                    src="/placeholder.svg?height=144&width=224&text=Dos+hombres+juntos"
                    alt="Instructores"
                    width={224}
                    height={144}
                    className="rounded-3xl object-cover border-4 border-white shadow-xl w-full h-full"
                  />
                </div>

                {/* Dotted line connecting to badge */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                  <svg width="3" height="60" className="text-gray-400">
                    <line
                      x1="1.5"
                      y1="0"
                      x2="1.5"
                      y2="60"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                    />
                  </svg>
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-300 rounded-2xl px-6 py-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-800 leading-none">10</div>
                      <div className="text-sm text-gray-700 font-medium mt-1">
                        Años de
                        <br />
                        experiencia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="mb-8">
                <a
                  href="#"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 text-sm font-medium"
                >
                  <span className="mr-2 text-amber-500">✦</span>
                  Volver A Casa
                </a>
              </div>

              <h2 className="text-5xl font-light text-gray-800 mb-8 leading-tight">Redescubre tu paz interior</h2>

              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                La mente no siempre es un buen lugar para vivir. Entre la ansiedad, las dudas y el constante ir y venir
                de pensamientos, es fácil perderse de lo esencial: tu autenticidad, tu descanso, tu claridad. La
                meditación es un camino para despejar el ruido y reencontrarte contigo mismo.
              </p>

              {/* Small diamond separator */}
              <div className="flex justify-start mb-8">
                <span className="text-amber-500 text-sm">✦</span>
              </div>

              {/* Benefits box */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-gray-600 font-medium">Recupera Tu Bienestar Emocional</div>
                  <div className="text-gray-600 font-medium">Encuentra Claridad Mental</div>
                  <div className="text-gray-600 font-medium">Vive Con Más Serenidad</div>
                  <div className="text-gray-600 font-medium">Reconecta Contigo Mismo</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-500 italic text-lg leading-relaxed">
                "La curiosa paradoja es que cuando me acepto tal como soy, entonces puedo cambiar."
                <footer className="mt-3 text-gray-400 not-italic text-base">— C. Rogers</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Los Beneficios Section */}
      <section id="beneficios" className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-8">
            {/* Left side - Gray container only around this content */}
            <div className="bg-gray-100 rounded-3xl p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-amber-500 text-sm">✦ Beneficios</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Los beneficios
                <br />
                de la meditación
                <br />
                contemplativa
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                La meditación contemplativa mejora tu bienestar mental y emocional, reduciendo el estrés y promoviendo
                una profunda paz interior. Descubre cómo esta práctica puede transformar tu vida.
              </p>
            </div>

            {/* Right side - Top 4 cards only */}
            <div className="space-y-4">
              {/* Top row - 2 cards */}
              <div className="grid grid-cols-2 gap-4">
                {/* Autoconocimiento Profundo */}
                <Card className="bg-amber-200 border-none rounded-3xl p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 border-2 border-gray-700 rounded-full flex items-center justify-center mb-4">
                      <div className="w-6 h-6 border border-gray-700 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Autoconocimiento Profundo</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Explora tu mundo interior con una mirada compasiva, entendiendo patrones y creencias que influyen en
                      tu bienestar.
                    </p>
                  </CardContent>
                </Card>

                {/* Superación de Bloqueos */}
                <Card className="bg-amber-200 border-none rounded-3xl p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 border-2 border-gray-700 rounded-full flex items-center justify-center mb-4">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Superación de Bloqueos</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Aprende a gestionar dudas y resistencias internas que pueden surgir en el proceso de meditación y
                      transformación personal.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Middle row - 2 cards */}
              <div className="grid grid-cols-2 gap-4">
                {/* Acompañamiento Personalizado */}
                <Card className="bg-amber-200 border-none rounded-3xl p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 border-2 border-gray-700 rounded-full flex items-center justify-center mb-4">
                      <div className="relative">
                        <div className="w-6 h-6 border border-gray-700 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Acompañamiento Personalizado</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Un espacio seguro y cercano para profundizar en tu práctica, con orientación individual adaptada a
                      tu camino.
                    </p>
                  </CardContent>
                </Card>

                {/* Integración y Transformación */}
                <Card className="bg-amber-200 border-none rounded-3xl p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 border-2 border-gray-700 rounded-full flex items-center justify-center mb-4">
                      <div className="relative">
                        <div className="w-4 h-4 border border-gray-700"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 border border-gray-700"></div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Integración y Transformación</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Convierte la meditación en una herramienta de cambio real, integrándola en tu vida de manera
                      auténtica y sostenible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Bottom row - Full width card spanning both columns */}
          <Card className="bg-gray-800 border-none rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Personas+meditando"
                alt="Personas meditando"
                fill
                className="object-cover opacity-60"
              />
            </div>
            <CardContent className="p-0 relative z-10">
              <p className="text-white/80 text-sm mb-2">Inicia tu transformación</p>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Agenda tu sesión
                <br />
                hoy
              </h3>
              <p className="text-white/90 leading-relaxed mb-4 text-sm">
                Descubre cómo la meditación puede ayudarte a encontrar claridad, equilibrio y bienestar.
              </p>
              <div className="flex items-center text-white">
                <Phone className="w-4 h-4 mr-2" />
                <div>
                  <p className="text-xs text-white/80">Whatsapp</p>
                  <p className="font-semibold text-sm">+54 9 381 466 2416</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sesiones de Meditación - New Design */}
      {/* Sesiones de Meditación - Symmetrical Design */}
      <section id="sesiones" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Left Image - Full height */}
            <div className="lg:col-span-1 flex">
              <Image
                src="/placeholder.svg?height=600&width=400&text=Dos+mujeres+meditando"
                alt="Dos mujeres meditando juntas"
                width={400}
                height={600}
                className="rounded-3xl object-cover w-full h-full"
              />
            </div>

            {/* Center Content */}
            <div className="lg:col-span-1 flex flex-col justify-between py-4">
              <div>
                <div className="mb-6">
                  <span className="text-amber-500 text-sm">✦ ¿Para Quién Es Este Espacio?</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-12 leading-tight">
                  Sesiones de
                  <br />
                  meditación
                  <br />
                  personalizadas
                </h2>
              </div>

              {/* Sessions Info - Centered vertically */}
              <div className="space-y-8 flex-grow flex flex-col justify-center">
                {/* Individual Sessions */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sesiones individuales de 1 hora (virtual)</h4>
                    <p className="text-gray-600 text-sm">Frecuencia recomendada: cada 7 o 15 días.</p>
                  </div>
                </div>

                {/* Enfoque */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Enfoque</h4>
                    <p className="text-gray-600 text-sm">
                      Mindfulness, Tradiciones Contemplativas, Neurociencias y Enfoque Centrado en la Persona.
                    </p>
                  </div>
                </div>

                {/* Metodología */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Metodología</h4>
                    <p className="text-gray-600 text-sm">
                      Escucha profunda, autoexploración y meditación guiada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-1 flex flex-col justify-between py-4">
              {/* Top Text */}
              <div className="flex-grow flex items-start">
                <p className="text-gray-600 leading-relaxed text-sm">
                  Este espacio está destinado a quienes desean profundizar en su práctica de meditación contemplativa, especialmente aquellos que buscan integrar la meditación de manera auténtica en su vida diaria. Si sientes que tu práctica no avanza o se ha vuelto desafiante, o si necesitas un acompañamiento más cercano en tu camino interior, nuestras sesiones de meditación guiada pueden ofrecerte el apoyo necesario para explorar lo que surge en tu práctica con mayor profundidad.
                </p>
              </div>

              {/* Bottom Image */}
              <div className="mt-8 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=280&width=400&text=Personas+relajándose"
                  alt="Personas en sesión de relajación"
                  width={400}
                  height={280}
                  className="rounded-3xl object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      {/* Metodología - New Design */}
      <section id="metodologia" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="bg-emerald-800 text-white rounded-3xl p-12 relative overflow-hidden">
      {/* Top section with title and description */}
      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* Left - Title */}
        <div>
          <div className="mb-6">
            <div className="flex items-center mb-6">
              <span className="text-amber-400 mr-2">✦</span>
              <span className="text-amber-200 text-sm">Los Núcleos Del Acompañamiento</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Un enfoque integral para
              <br />
              tu bienestar
            </h2>
          </div>
        </div>
        
        {/* Right - Description */}
        <div className="flex items-center">
          <p className="text-emerald-100 text-sm leading-relaxed">
            Con un enfoque personalizado y apoyo constante, te acompañamos hacia una transformación consciente y equilibrada. Confía en nosotros para ayudarte a alcanzar tus objetivos de bienestar.
          </p>
        </div>
      </div>

      {/* Main content grid with image and principles */}
      <div className="grid lg:grid-cols-3 gap-12 items-stretch relative z-10">
        {/* Left Column - Two sections */}
        <div className="space-y-16 flex flex-col justify-between">
          {/* Observación */}
          <div>
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 border border-white/50 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4">Observación</h4>
            <p className="text-emerald-100 text-sm leading-relaxed">
              El arte de ver sin juzgar. Aprenderás a mirar tu experiencia meditativa sin forzar, sin expectativas, solo con apertura al momento presente.
            </p>
          </div>

          {/* Comprensión */}
          <div>
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4">Comprensión</h4>
            <p className="text-emerald-100 text-sm leading-relaxed">
              No se trata de controlar, sino de escuchar lo que la meditación nos revela. Exploramos juntos patrones internos, resistencias y aprendizajes.
            </p>
          </div>
        </div>

        {/* Center Column - Taller Image - Full height */}
        <div className="flex justify-center items-stretch">
          <div className="relative w-full max-w-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iwofuRmmn5WeJPPxgSovLzMGyFY5e6.png"
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
            <div className="w-16 h-16 border-2 border-amber-400/30 rounded-full flex items-center justify-center mb-6">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4">Compasión</h4>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Abrazar lo que eres, aquí y ahora. La compasión nos permite sostenernos con ternura y aceptación durante todo el proceso.
            </p>
          </div>

          {/* Transformación */}
          <div>
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute -top-1 -right-2 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-2 left-3 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4">Transformación</h4>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Te ayudamos a construir una relación amorosa contigo mismo y a integrar estos principios en tu vida cotidiana.
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
        <span className="text-amber-600 text-sm font-medium">Tu Camino Hacia El Bienestar</span>
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
            Nos especializamos en estrategias de salud personalizadas, diseñadas para 
            ayudarte a lograr equilibrio, energía y éxito duradero. Con nuestra orientación 
            experta y un enfoque integral, podrás adoptar hábitos más saludables desde la 
            comodidad de tu hogar.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom section - Image with overlay cards */}
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M3DM9xeGNRdemHBryJmN968sbXSUoP.png"
          alt="Grupo de personas en clase de bienestar"
          width={1200}
          height={600}
          className="w-full h-[600px] object-cover"
        />
        
        {/* Overlay cards */}
        <div className="absolute bottom-6 right-6 space-y-4 w-80">
          {/* First card */}
          <Card className="bg-white/95 backdrop-blur-sm border-none rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Gestión Del Bienestar A Largo Plazo</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Te ofrecemos una guía personalizada para crear hábitos sostenibles que 
                apoyen tu salud, ayudándote a mantener un bienestar duradero.
              </p>
              <a href="#" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm">
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
                Te ayudamos a adoptar un estilo de vida más saludable, a través de un 
                enfoque integral que se ajusta a tus necesidades y objetivos específicos.
              </p>
              <a href="#" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm">
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
      <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="relative rounded-3xl overflow-hidden h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jNEmQ3KITzQO98qFDxvqcmk9e1Smm.png"
          alt="Persona meditando al atardecer junto al agua"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-12">
        {/* Top Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Text content */}
          <div className="text-white">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <span className="text-amber-400 mr-2">✦</span>
                <span className="text-amber-200 text-sm">Mira Nuestro Video</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Historias de
                <br />
                transformación a través
                <br />
                del bienestar
              </h2>
              
              <p className="text-white/90 leading-relaxed text-lg mb-8 max-w-lg">
                Descubre historias inspiradoras de transformación y crecimiento personal a través 
                de nuestros videos de bienestar. Muestra cómo las clases online pueden cambiar 
                tu vida hacia un camino más saludable y feliz.
              </p>
              
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-3 rounded-full">
                Ver Más En Instagram
              </Button>
            </div>
          </div>

          {/* Right side - Circular logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-32 h-32 border-2 border-amber-400/30 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-amber-400 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-black font-bold text-xs leading-tight">Bajo</div>
                    <div className="text-black font-light text-xs leading-tight">la Higuera</div>
                  </div>
                </div>
              </div>
              {/* Decorative text around circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-40 h-40 -rotate-12" viewBox="0 0 160 160">
                  <defs>
                    <path id="circle" d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"/>
                  </defs>
                  <text className="text-xs fill-white/70 font-light">
                    <textPath href="#circle">
                      • Bajo la Higuera • Transformación • Bienestar •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="grid md:grid-cols-4 gap-8 text-white">
          <div>
            <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
            <p className="text-white/80 text-sm">Años de experiencia</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-400 mb-2">150+</div>
            <p className="text-white/80 text-sm">Horas de coaching personalizado</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-400 mb-2">200+</div>
            <p className="text-white/80 text-sm">Sesiones completadas con éxito</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-400 mb-2">3K+</div>
            <p className="text-white/80 text-sm">Alumnos satisfechos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Guía paso a paso - New Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-emerald-800 text-white rounded-3xl p-12 relative overflow-hidden">
            {/* Top section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Left - Title */}
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-amber-400 mr-2">✦</span>
                  <span className="text-amber-200 text-sm">¿Cómo Funciona?</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Guía paso a paso para
                  <br />
                  agendar tu sesión
                </h2>
              </div>
              
              {/* Right - Description */}
              <div className="flex items-center">
                <p className="text-emerald-100 leading-relaxed">
                  Agendar una sesión de meditación contemplativa nunca ha sido tan fácil. Te guiamos 
                  paso a paso para que disfrutes de una experiencia profunda y transformadora.
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">1</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-3">Llena El Formulario</h4>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Completa tus datos y selecciona el día 
                  y la hora para tu sesión de meditación.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">2</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-3">Recibe Confirmación</h4>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Recibirás un correo electrónico con los 
                  detalles de tu sesión y una 
                  confirmación por WhatsApp.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">3</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-3">Prepárate Para La Sesión</h4>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  El día de la sesión, asegúrate de estar 
                  en un entorno tranquilo para 
                  maximizar tu experiencia de meditación 
                  virtual.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">4</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-3">Disfruta La Meditación</h4>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Durante la sesión, sumérgete en una 
                  práctica de meditación contemplativa 
                  para encontrar calma y claridad mental.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section - Booking form */}
          <div className="bg-white rounded-3xl p-12 -mt-8 relative z-10 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <div className="mb-6">
                  <span className="text-emerald-600 text-sm font-medium">Agendar Sesión</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Agenda tu sesión de
                  <br />
                  meditación
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  Agenda fácilmente una sesión en línea de meditación 
                  contemplativa personalizada. Da el primer paso hacia el 
                  bienestar mental y emocional hoy mismo.
                </p>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Tres+personas+meditando"
                    alt="Tres personas en sesión de meditación"
                    width={400}
                    height={200}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">¿Listo para reservar?</h4>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Haz clic en el botón para agendar tu sesión directamente con 
                  Joaquín Carma por WhatsApp.
                </p>
                
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium">
                  Agendar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-800 mb-8">Agenda</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ¿Listo para comenzar tu viaje hacia el bienestar? Agenda tu primera sesión y descubre cómo la meditación
                puede transformar tu vida de manera positiva.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Instructor 1"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Instructor 2"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Instructor 3"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full">
                ¿Cómo empezamos?
              </Button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-medium mb-8 text-gray-800">Reserva tu sesión</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Nombre" className="border-gray-200 rounded-lg py-3 px-4" />
                  <Input placeholder="Apellido" className="border-gray-200 rounded-lg py-3 px-4" />
                </div>
                <Input placeholder="Email" type="email" className="border-gray-200 rounded-lg py-3 px-4" />
                <Input placeholder="Teléfono" className="border-gray-200 rounded-lg py-3 px-4" />
                <select className="w-full p-3 border border-gray-200 rounded-lg bg-white">
                  <option>Tipo de sesión</option>
                  <option>Individual</option>
                  <option>Grupal</option>
                  <option>Taller</option>
                </select>
                <Textarea
                  placeholder="Cuéntanos sobre tus objetivos"
                  rows={3}
                  className="border-gray-200 rounded-lg py-3 px-4"
                />
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black py-3 rounded-lg">
                  Reservar sesión
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Consultas - Functional Accordion FAQ */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left side - Images */}
      <div className="relative">
        {/* Top image */}
        <div className="relative mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6fcohc49rZ1JTiyuXBQValuarmuF93.png"
            alt="Grupo de personas meditando con manos en posición de oración"
            width={400}
            height={300}
            className="rounded-3xl object-cover w-full"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
          {/* Dotted circle */}
          <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-full"></div>
        </div>

        {/* Bottom image */}
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6fcohc49rZ1JTiyuXBQValuarmuF93.png"
            alt="Hombre meditando con grupo en el fondo"
            width={400}
            height={300}
            className="rounded-3xl object-cover w-full"
          />
          
          {/* Cross pattern decoration */}
          <div className="absolute -bottom-4 -left-4 grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2">
                <svg viewBox="0 0 8 8" className="w-full h-full text-emerald-600">
                  <path d="M4 0v8M0 4h8" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - FAQ Content */}
      <div>
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <span className="text-amber-500 mr-2">✦</span>
            <span className="text-amber-600 text-sm font-medium">Preguntas Frecuentes</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Consultas comunes sobre
            <br />
            las sesiones de
            <br />
            meditación y mentoría
          </h2>
        </div>

        {/* Functional Accordion */}
        <Accordion type="single" collapsible defaultValue="item-3" className="space-y-4">
          {/* FAQ Item 1 */}
          <AccordionItem value="item-1" className="border border-gray-200 rounded-2xl px-6 py-2 data-[state=open]:bg-amber-50">
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <div className="flex items-center justify-between w-full">
                <h4 className="font-semibold text-gray-800 text-lg pr-4">
                  ¿Qué es una sesión de meditación contemplativa?
                </h4>
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="bg-gray-100 rounded-xl p-4 mt-2">
                <p className="text-gray-600 leading-relaxed">
                  Una sesión de meditación contemplativa es un espacio dedicado a la práctica profunda de la atención plena y la autoexploración. Durante estas sesiones, te guiamos a través de técnicas específicas para calmar la mente, observar tus pensamientos sin juicio y conectar con tu sabiduría interior.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 2 */}
          <AccordionItem value="item-2" className="border border-gray-200 rounded-2xl px-6 py-2 data-[state=open]:bg-amber-50">
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <div className="flex items-center justify-between w-full">
                <h4 className="font-semibold text-gray-800 text-lg pr-4">
                  ¿Cómo funcionan las mentorías con Joaquín?
                </h4>
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="bg-gray-100 rounded-xl p-4 mt-2">
                <p className="text-gray-600 leading-relaxed">
                  Las mentorías con Joaquín están diseñadas para guiarte en tu proceso de crecimiento personal. Durante las sesiones, abordaremos tus desafíos, metas y bloqueos emocionales, utilizando herramientas de meditación y reflexión para que puedas avanzar de manera consciente y serena.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 3 - Default Open */}
          <AccordionItem value="item-3" className="border border-gray-200 rounded-2xl px-6 py-2 data-[state=open]:bg-amber-50">
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <div className="flex items-center justify-between w-full">
                <h4 className="font-semibold text-gray-800 text-lg pr-4">
                  ¿Qué puedo esperar de las sesiones de meditación contemplativa?
                </h4>
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">-</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="bg-gray-100 rounded-xl p-4 mt-2">
                <p className="text-gray-600 leading-relaxed">
                  En las sesiones de meditación, te guiaré para que logres una mayor presencia mental, reduciendo el estrés y aumentando tu bienestar general. Al final de la sesión, es probable que te sientas más relajado, equilibrado y con una mayor claridad mental.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 4 */}
          <AccordionItem value="item-4" className="border border-gray-200 rounded-2xl px-6 py-2 data-[state=open]:bg-amber-50">
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <div className="flex items-center justify-between w-full">
                <h4 className="font-semibold text-gray-800 text-lg pr-4">
                  ¿Puedo realizar las sesiones de meditación de forma online?
                </h4>
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="bg-gray-100 rounded-xl p-4 mt-2">
                <p className="text-gray-600 leading-relaxed">
                  Sí, todas nuestras sesiones se realizan de forma virtual a través de plataformas seguras como Zoom o Google Meet. Solo necesitas un espacio tranquilo, una conexión estable a internet y la disposición para sumergirte en la práctica desde la comodidad de tu hogar.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 5 */}
          <AccordionItem value="item-5" className="border border-gray-200 rounded-2xl px-6 py-2 data-[state=open]:bg-amber-50">
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <div className="flex items-center justify-between w-full">
                <h4 className="font-semibold text-gray-800 text-lg pr-4">
                  ¿Cuáles son los beneficios a largo plazo de la meditación y la mentoría?
                </h4>
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">+</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="bg-gray-100 rounded-xl p-4 mt-2">
                <p className="text-gray-600 leading-relaxed">
                  Los beneficios a largo plazo incluyen una mayor estabilidad emocional, mejor manejo del estrés, incremento en la autoconciencia, relaciones más saludables, y una sensación general de paz y propósito en la vida. La práctica constante te ayuda a desarrollar herramientas internas duraderas para el bienestar.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</section>

      {/* Historias de éxito */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-light text-center text-gray-800 mb-16">
            Historias de éxito de
            <br />
            nuestros alumnos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-50 border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Testimonio 1"
                    width={50}
                    height={50}
                    className="rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">Laura M.</h4>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "La meditación cambió completamente mi perspectiva de vida. Ahora manejo mucho mejor el estrés diario
                  y tengo más claridad mental en todas mis decisiones."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Testimonio 2"
                    width={50}
                    height={50}
                    className="rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">Roberto S.</h4>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Increíble experiencia de transformación personal. Las técnicas aprendidas me ayudan diariamente en mi
                  trabajo y en mis relaciones personales."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-none rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Testimonio 3"
                    width={50}
                    height={50}
                    className="rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">Carmen R.</h4>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Encontré paz interior que no sabía que necesitaba. El acompañamiento personalizado realmente hace
                  toda la diferencia en el proceso."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
                <span className="text-xl font-medium">Bajo la Higuera</span>
              </div>
              <p className="text-emerald-200 mb-6 leading-relaxed">
                Acompañamiento profesional en meditación para transformar tu vida y encontrar la paz interior que
                buscas.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer">
                  <span className="text-sm font-medium">f</span>
                </div>
                <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer">
                  <span className="text-sm font-medium">ig</span>
                </div>
                <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer">
                  <span className="text-sm font-medium">tw</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6">Servicios</h4>
              <ul className="space-y-3 text-emerald-200">
                <li className="hover:text-white cursor-pointer">Sesiones individuales</li>
                <li className="hover:text-white cursor-pointer">Sesiones grupales</li>
                <li className="hover:text-white cursor-pointer">Talleres especializados</li>
                <li className="hover:text-white cursor-pointer">Retiros de meditación</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6">Enlaces útiles</h4>
              <ul className="space-y-3 text-emerald-200">
                <li className="hover:text-white cursor-pointer">Sobre nosotros</li>
                <li className="hover:text-white cursor-pointer">Metodología</li>
                <li className="hover:text-white cursor-pointer">Testimonios</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6">Contacto</h4>
              <div className="space-y-4 text-emerald-200">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>+34 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>info@bajolahiguera.site</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-700 mt-12 pt-8 text-center text-emerald-300">
            <p>&copy; 2024 Bajo la Higuera. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
