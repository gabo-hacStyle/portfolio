import React from "react";
import { tools } from "@/lib/data";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans transition-colors duration-300">
      {/* HERO */}
      <section
        className="relative flex items-center justify-center h-[40vh] bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-800 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/40 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg mb-4">
            <img
              src="/Gabriel Fajardo.jpg"
              alt="Foto de perfil"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-300 drop-shadow mb-2">
            Gabriel Fajardo
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
           Web Developer | Junior Data Analyst 
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Quién soy */}
        <section id="quien-soy" className="space-y-4">
          <h2 className="text-3xl font-bold text-indigo-400">This is me</h2>
          <p className="text-lg text-gray-300">
+4 years learning and applying web development. Real-world experience in the field as frontend developer with NextJS. From managing databases, adapting models, creating controllers, to building responsive websites, untill their final production and deployment using docker.

Also, I&apos;ve got along with backend and the data world: certified by Inidicium academy as Analytics engineer.

Responsible, passionate and proactive. Fast learner, troubleshooter and great coworker.          </p>

<a
            href="/assets/CV.pdf"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            download
          >
          Download CV</a>
        </section>

{/* Herramientas */}
        <section id="herramientas" className="space-y-4">
          <h2 className="text-3xl font-bold text-indigo-400">Tools and skills:</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center bg-background rounded-lg p-3 shadow hover:scale-105 transition-transform border border-accent/20"
                title={tool.name}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-10 w-10 object-contain mb-2"
                  loading="lazy"
                />
                <span className="text-xs text-foreground/70 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Experiencia */}
        <section id="experiencia" className="space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-400">Experience:</h2>
          <p className="text-lg text-gray-300">
            I have collaborated with LATAM organizations and companies based in the USA. Building their platforms from bare beginnings. Or making their sites more confortable for the end users, taking them to accomplish an easier behavior within the page.
          </p>

          <div className="space-y-8">
            <article className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 items-start hover:shadow-indigo-500/20 transition-shadow">
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-2xl font-bold text-indigo-200">
                     Freelance - AnReHis platform 
                  </h3>
                  <span className="text-sm text-gray-400 mt-2 sm:mt-0">
                    November 2024
                  </span>
                </div>
                <p className="mt-3 text-gray-300">
                    This project was originally created for a Latin American academic institution, 
                    AnReHis stands for Analytical Research History. It aggregates historical data from 
                    various sources within the institution, transforms this data into analytical models, 
                    and ultimately displays it on a fully functional web platform accessible from anywhere in the world. 
                    The analytical dashboard is interactive in real-time, allowing users to 
                    download reports in PDF format based on their search filters. This web platform is secured with 
                    role-based access control (only authorized users from the institution can access it) in both the
                    backend and frontend using JWT. 
                    Additionally, it is accessible in three different languages and is fully responsive.                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Spring Boot</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Docker </span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Linux</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Microservices</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Nextjs</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Analytics Engineering</span>
                </div>
                <div className="flex flex-col gap-3 justify-center mt-12">
                <video
                  src="/assets/anrehis/anrehis-demo.mp4"
                  controls
                  className="w-full rounded-md object-cover bg-gray-700 flex-shrink-0"
                />
                <span><i>** This platform is only accesible by the company&apos;s staff</i></span>
              </div>
              </div>
              
            </article>

            {/* Experiencia 1 */}
            <article className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 items-start hover:shadow-indigo-500/20 transition-shadow">
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-2xl font-bold text-indigo-200">
                    Frontend Developer — Kairos Research
                  </h3>
                  <span className="text-sm text-gray-400 mt-2 sm:mt-0">
                    Jan 2024 - Dec 2024
                  </span>
                </div>
                <p className="mt-3 text-gray-300">
My most-proud platform built (Frontend side). This is a completely functional platform built with NextJS14, TailwindCSS and Typescript. Covering different applications in this plataform such as dashboard analytics, whatchlist of tokens and projects, as well as a lessons section, I have learnt the best techniques to cache info, having dynamic data constantly updating automatically, creating a complete on-boarding process for new-users, protecting routes from the server, among other especialities. This web platform is fully responsive.                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">React</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Next.js</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Tailwind CSS</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">TypeScript</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">SWR</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">State management</span>
                </div>
                 <div className="flex flex-col gap-3 justify-center mt-12">
                <img
                  src="/assets/dragon.jpg"
                  alt="Logo Kairos Research"
                  className="w-full rounded-md object-cover bg-gray-700 flex-shrink-0"
                />
                <span><i>** Currently this platform is being used by company's members.</i></span>
              </div>
              </div>
             

              
            </article>
            {/* Experiencia 2 */}
            
            <article className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6 items-start hover:shadow-indigo-500/20 transition-shadow">
             
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-2xl font-bold text-indigo-200">
                     Web administrator -  Fatela & AWF
                  </h3>
                  <span className="text-sm text-gray-400 mt-2 sm:mt-0">
                    2020 - Present
                  </span>
                </div>
                    <div className="mt-3 text-gray-300">
                        I collaborated with two wide-impact companies in the folllowing tasks:
                        <ul>
                          <li>Improve the visual appearance of their pages to make it modern and 
                        intuitive for both new clients and long-time users.</li>
                        <li>Check for security and software updates </li>
                        <li>Update data and solving domain/server issues</li>
                        </ul>
                        
                                      
                     </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Wordpress</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Server management</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">UX/UI</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">HTML5 & CSS3</span>
                </div>
               
                
              
              </div>
            </article>
          </div>
        </section>

        {/* Certificados */}
        {/* <section id="certificados" className="space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-400">Certifications</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="bg-gray-800 shadow rounded p-4 border-l-4 border-indigo-400">
              <p className="font-medium text-indigo-200">Certificado Next.js Developer</p>
              <p className="text-sm text-gray-400">Plataforma: Udemy | Año: 2024</p>
            </li>
            <li className="bg-gray-800 shadow rounded p-4 border-l-4 border-indigo-400">
              <p className="font-medium text-indigo-200">Tailwind CSS Avanzado</p>
              <p className="text-sm text-gray-400">Plataforma: Platzi | Año: 2023</p>
            </li>
          </ul>
        </section> */}
        {/* Proyectos */}
        <section id="proyectos" className="space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-400">Some personal projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols gap-6">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-indigo-500/20 transition-shadow">
              <h3 className="text-xl font-bold text-indigo-200">IoT project: Valerina</h3>
              <p className="text-gray-300 mt-2">
Development and installation of an IoT complete system into a fish-farming project in my region.  
       </p>
       <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">IoT</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Raspberri pi</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">Linux</span>
                  <span className="bg-indigo-700/80 px-2 py-1 rounded text-xs font-medium">MQTT and Lora</span>
                </div>     
              
            </div>
            </div>
            </section>


        {/* Contacto */}
        <section id="contacto" className="space-y-4">
          <h2 className="text-3xl font-semibold text-indigo-400">Contact</h2>
          <p className="text-gray-300">
            A fit for your business or future great projects?
          </p>
         
            <a
              href="mailto:gabo2023brazil@gmail.com"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Let&apos;s talk!
          </a>
          {/* <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-200">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="mt-1 block w-full rounded border-gray-600 bg-gray-900 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded border-gray-600 bg-gray-900 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-200">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="mt-1 block w-full rounded border-gray-600 bg-gray-900 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white font-medium px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Enviar
            </button>
          </form> */}
        </section>
      </div>
    </main>
  );
}