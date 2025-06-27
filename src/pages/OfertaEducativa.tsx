import logoBIC28Blanco from '/assets/LOGO-BIC-28-VECTORIZADO_BLANCO-SIN-FONDO.png'

export const OfertaEducativa = () => {
  return (
    <div className="my-4 w-full  md:max-w-[1280px] mx-auto px-4 m-auto flex flex-col md:flex-row md:justify-center no-scrollbar">
      <div className="md:my-4 m-auto flex flex-col md:px-4 w-full h-20 md:h-auto md:max-w-60 sticky top-0 z-50 bg-gray-200 md:bg-transparent md:relative">
        <p className='text-lg text-black font-bold text-center md:text-left md:my-2'>Contenido</p>
        <ul className="flex flex-nowrap max-h-20 md:max-h-800 overflow-x-scroll md:overflow-x-hidden md:flex-col max-w-dvw lg:max-w-prose text-blue-600 md:left">
          <li className="flex  min-w-max mr-4 p-1 hover:bg-gray-100/50 border-x-1 md:border-0 w-full">
            <a href="#section1">Nuestro enfoque educativo</a>
          </li>
          <li className="flex min-w-max mr-4 p-1 hover:bg-gray-100/50 border-x-1 md:border-0 w-full">
            <a href="#section2">Nuestro componente de formación laboral</a>
          </li>
          <li className="flex min-w-max mr-4 p-1 hover:bg-gray-100/50 border-x-1 md:border-0 w-full">
            <a href="#section3">Áreas de conocimientos</a>
          </li>
          <li className="flex min-w-max mr-4 p-1 hover:bg-gray-100/50 border-x-1 md:border-0 w-full">
            <a href="#section4">Módulos</a>
          </li>
          <li className="flex min-w-max mr-4 p-1 hover:bg-gray-100/50 border-x-1 md:border-0 w-full">
            <a href="#section5">Requisitos de inscripción</a>
          </li>
          <li className="flex min-w-max mr-4 p-1 hover:bg-gray-100/50 border-x-1 md:border-0 w-full">
            <a href="#section6">¿Por qué estudiar en el BIC 28 de Santos Reyes Pápalo?</a>
          </li>
        </ul>
      </div>
      <div className="section_content  w-full md:max-w-[w-dvw] lg:m-auto flex flex-col right-0 max-h-dvh overflow-auto no-scrollbar">
        <div className="my-4 flex flex-col max-w-dvw lg:max-w-prose px-4 m-auto">
          <p className="text-xl font-bold py-4 text-gray-1000" id='section1'>Nuestro enfoque educativo</p>
          <p className="text-lg mx-auto my-4"><b>Interculturalidad.</b> Valoramos y promovemos el respeto por las distintas culturas y lenguas, formando estudiantes conscientes de su identidad.</p>

          <p className="text-lg mx-auto my-4"><b>Desarrollo integral.</b> Fomentamos la formación academica, social, cultural y ética de nuestros estudiantes, preparandolos para el mundo laboral.</p>

          <p className="text-lg mx-auto my-4"><b>Compromiso con las comunidades.</b> Formamos líderes capaces de generar cambios positivos en sus comunidades, contribuyendo al desarrollo social y cultural.</p>
        </div>

        <div className="my-4 flex flex-col max-w-dvw lg:max-w-prose px-4 m-auto">
          <p className="text-xl font-bold py-t-4 text-gray-1000" id='section2'>Nuestro componente de formación laboral:</p>

          <p className="text-xl font-bold py-1 text-gray-1000 text-blue-600">Desarrollo comunitario</p>

          <p className="text-lg mx-auto my-4">Se enfoca en integrar a los BIC en la vida comunitaria, considerando las necesidades y demandas de las comunidades indígenas. Este componente busca fortalecer el bienestar comunitario, la participación ciudadana y la cohesión socia a traves de proyectos y acciones que promuevan el desarrollo integral de los pueblos indigenas de Oaxaca.</p>

          <div className="">
            <p className="text-xl font-bold py-1 text-gray-1000 text-blue-600 id='section3'">Áreas de conocimientos</p>
            <div className="container-item-area text-lg">
              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#8C44FF] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p>Humanidades</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#F44C63] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p>Ciencias sociales</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#00B0A6] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p>Lenguaje y comunicación</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#0098D4] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p>Ciencias naturales</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#8E418D] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p>Matemáticas</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#F98927] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p>Metodología de la investigación</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#59B038] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p>Escuela y comunidad</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#9D2449] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p>Expresión, creatividad y desarrollo físico</p>
              </div>
            </div>
          </div>

          <div className="modulos">
            <p className="text-xl font-bold py-4 text-gray-1000 text-blue-600" id='section4'>Módulos</p>

            <div className="text-lg">
              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#285C4D] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='max-h-5 max-w-5' />
                </div>
                <p><b>Módulo I:</b> MCCEMS (Marco Curricular Común de la Educación Media Superior)</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#B38E5D] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='max-h-5 max-w-5' />
                </div>
                <p><b>Módulo II:</b> MCCEMS (Marco Curricular Común de la Educación Media Superior)</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#9D2449] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p><b>Módulo III:</b> Ciencia y comunidad</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#59B038] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p><b>Módulo IV:</b> Comunidad y recursos</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#F98927] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p><b>Módulo V:</b> Proyecto comunitario</p>
              </div>

              <div className="item-area flex flex-row items-center">
                <div className="relative after:absolute after:inset-0 after:bg-[#00B0A6] after:mix-blend-soft-light after:rounded-xl max-h-5 max-w-5 before:absolute before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10 mr-2">
                  <img src={logoBIC28Blanco} className='h-5 w-5' />
                </div>
                <p><b>Módulo VI:</b> Educación y desarrollo integral</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 flex flex-col max-w-dvw lg:max-w-prose px-4 m-auto">
          <p className="text-xl font-bold py-t-4 py-b-4 text-gray-1000 text-center" id='section5'>Requisitos de inscripcion</p>

          <div className="container-docs my-4 px-4 left-0">
            <div className="requisito1 border-1 bg-blue-100 text-left px-4">
              <p>Certificado de Secundaria</p>
            </div>
            <div className="requisito1 border-1 text-left px-4">
              <p>Acta de Nacimiento</p>
            </div>
            <div className="requisito1 border-1 bg-blue-100 text-left px-4">
              <p>CURP</p>
            </div>
            <div className="requisito1 border-1 text-left px-4">
              <p>6 fotografias (Blanco y negro) tamaño infantil</p>
            </div>
            <div className="requisito1 border-1 bg-blue-100 text-left px-4">
              <p>Carta de buena conducta</p>
            </div>
            <div className="requisito1 border-1 text-left px-4">
              <p>Certificado médico</p>
            </div>
          </div>

        </div>


        <div className="my-4 flex flex-col max-w-dvw lg:max-w-prose px-4 m-auto" id='section6'>
          <p className="text-xl font-bold py-t-4 text-gray-1000">¿Por qué estudiar en el BIC 28 de Santos Reyes Pápalo?</p>
          <p className="text-lg mx-auto my-2"><b>Formación academica de calidad</b> que combina el conocimiento tradicional con el moderno para el desarrollo comunitario.</p>

          <p className="text-lg mx-auto my-2"><b>Enfoque cultural </b>que te permite comprender y valorar las diversas culturas de Oaxaca y el mundo.</p>

          <p className="text-lg mx-auto my-2"><b>Fortalecimiento de tu identidad </b>cultural y linguistica, promoviendo las lenguas y tradiciones indígenas.</p>
        </div>
      </div>
    </div>
  )
}
