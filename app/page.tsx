import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-primary overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <button className="text-white">
          <Menu size={24} />
        </button>
        <h1 className="text-4xl md:text-5xl font-bold text-white">Alma<span className="text-[#b03aae9f]">IA</span> </h1>
        <Link href="/contacto">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">Contactanos</button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 relative z-10">
            <Image src="/almie-hero.svg" alt="Almie character" width={300} height={300} className="mx-auto" />
          </div>
          <div className="md:w-1/2 z-10">
            <div className="bg-white p-8 rounded-3xl max-w-md">
              <div className="absolute left-1/2 md:left-0 top-1/2 md:top-1/2 md:-translate-x-[20px] -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent md:border-t-[20px] md:border-t-transparent md:border-r-[40px] md:border-r-white md:border-b-[20px] md:border-b-transparent"></div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Bienvenido a Alma IA,</h2>
              <p className="text-xl text-gray-800">
                soy <span className="font-bold">Almie</span>, y sere tu guia en tu recorrido nuestra web
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white pt-16 pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10 pl-4">
              <h2 className="text-4xl font-bold mb-8 text-blue-500">Divertido, facil y seguro</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-transparent  p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/diario.svg" alt="Diary" width={24} height={24} />
                  </div>
                  <p className="text-neutral-700">Tienes un diario para registrar sus emociones.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/chat.svg" alt="Chat" width={24} height={24} />
                  </div>
                  <p className="text-neutral-700">Chat personalizado con Almie.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent  p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/calendario.svg" alt="Tasks" width={24} height={24} />
                  </div>
                  <p className="text-neutral-700">Organización de tareas y recordatorios divertidos.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/editar.svg" alt="Personalize" width={24} height={24} />
                  </div>
                  <p className="text-neutral-700">Personaliza a Almie y hazlo mas cercano a ti.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent  p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/niños/sos.svg" alt="Help" width={24} height={24} />
                  </div>
                  <p className="text-neutral-700">Tenemos un boton de ayuda y denuncia cuando lo necesites.</p>
                </div>
              </div>
            </div>
              <div className="relative justify-self-end z-10 ">
                <Image
                  src="/almie-emociones.svg"
                  alt="Almie happy"
                  width={500}
                  height={400}
                  className="bottom-0 right-0"
                />
              </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#a9d4fb"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Psychologists Section */}
      <section className="bg-[#a9d4fb] pt-16 pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10">
              <Image src="/almie-psicologo.svg" alt="Almie with glasses" width={300} height={300} className="mx-auto" />
            </div>
            <div className="md:w-1/2 z-10">
              <h2 className="text-6xl font-bold mb-6 text-white">Respaldado por psicologos</h2>
              <p className="text-neutral-700">
                AlmalA ha sido desarrollado junto a un equipo de psicólogos y especialistas en bienestar infantil,
                asegurando que cada herramienta y actividad esté basada en evidencia científica para el desarrollo
                emocional de los estudiantes.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="bg-white pt-16 pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10">
              <h2 className="text-6xl font-bold mb-8 text-blue-500">Ayuda a los docentes</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/profesores/diario.svg" alt="Summary" width={24} height={24} />
                  </div>
                  <p className="text-neutral-700">Tendras resúmenes con el estado emocional de los estudiantes.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/profesores/alertas.svg" alt="Alerts" width={24} height={24} />
                  </div>
                  <p className="text-neutral-700">Alertas sobre cambios de comportamiento facilitando una intervención oportuna.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-transparent p-2 rounded-md mr-4">
                    <Image className="filter invert-[25%] sepia-[0%] saturate-[0%] hue-rotate-[0deg] brightness-[96%] contrast-[86%]" src="/profesores/graficos.svg" alt="Graphs" width={24} height={24} />
                  </div>
                  <p className="text-neutral-700">Gráficos de evolución a lo largo del tiempo para detectar patrones.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 z-10">
              <Image
                src="/almie-reportes.svg"
                alt="Almie with megaphone"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#a9d4fb"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Parents Section */}
      <section className="bg-[#a9d4fb] pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center z-10">
            <div className="md:w-1/2 mb-8 md:mb-0 z-10">
              <Image src="/almie-padre.svg" alt="Almie with family" width={300} height={300} className="mx-auto" />
            </div>
            <div className="md:w-1/2 z-10">
              <h2 className="text-5xl font-bold mb-6 text-white">Conoce mejor a tu hijo</h2>
              <p className="text-neutral-700">
                Accede a información sobre el estado emocional de tu hijo, sus avances y necesidades. Recibe reportes
                claros y herramientas para fortalecer su bienestar desde casa.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white pt-16 pb-32 relative">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-4xl font-bold mb-12 text-blue-500 max-w-3xl mx-auto">
            Transformemos la forma que cuidas tu bienestar con AlmaIA
          </h2>
          <div className="relative max-w-md mx-auto flex z-10 border p-1 rounded-lg">
            <Input type="text" placeholder="Nombre" className="rounded-l-lg border-r-0 " />
            <Input type="tel" placeholder="Teléfono" className="rounded-none border-l-0 border-r-0" />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg rounded-l-none">
              Contactanos
            </Button>
          </div>
        </div>
        <div className="absolute -bottom-2 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#a9d4fb"
              fillOpacity="1"
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#a9d4fb]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0 mr-12">
              <div className="flex flex-col items-center mb-4  m-16">
                <div className="p-2 rounded-md mr-2">
                  <Image src="/almaia-icon-app.svg" alt="Almie logo" width={105} height={105} />
                </div>
                <span className="text-xl font-bold text-white">AlmaIA</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4">Productos</h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="#" className="hover:underline">
                      AlmaIA app
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      AlmaIA web
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Almie
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Redes</h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="#" className="hover:underline">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      TikTok
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      X
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Términos y privacidad</h4>
                <ul className="space-y-2 text-white">
                  <li>
                    <Link href="#" className="hover:underline">
                      Términos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

