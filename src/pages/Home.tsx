import { noticias } from '../data/Noticias.json'
import { CardNews } from '../components/CardNews'

export const HomePage = () => {
  return (
    <div className="m-auto py-4 max-w-screen-xl bg-gray-50">
      <p className="text-5xl font-bold text-center my-10">Formando jóvenes con <span className='text-white bg-[#00B0A6] p-2 inline-block rotate-[2deg]'>identidad</span>, <span className='text-white bg-[#8E418D] p-2 inline-block rotate-[-2deg]'>compromiso</span> y <span className='text-white bg-[#F98927] p-2 inline-block rotate-[2deg]'>Saberes comunitarios</span></p>

      <div className="flex flex-row flex-wrap my-4 md:flex-nowrap m-auto">
        <div className="flex flex-1 flex-col h-full align-star mx-auto">
          <div className="my-4 flex flex-col max-w-dvw lg:max-w-prose px-4 m-auto">
            <p className="text-xl font-bold py-4 text-gray-1000">¿Quiénes somos?</p>
            <p className="text-lg mx-auto">Somos una institución de educación media superior que forma parte del <b>Colegio Superior para la Educación Integral Intercultural de Oaxaca (CSEIIO)</b>. Brindamos formación académica y comunitaria a jóvenes de Santos Reyes Pápalo y comunidades cercanas, fortaleciendo la identidad indígena, el trabajo colaborativo y el conocimiento local.</p>
          </div>

          <div className="my-4 flex flex-col max-w-dvw lg:max-w-prose px-4 m-auto">
            <p className="text-xl font-bold py-4 text-gray-1000">Vinculación Comunitaria</p>
            <p className="text-lg mx-auto">Nos caracterizamos por colaborar con la comunidad apoyando su produccion sustentable y etnodesarrollo.
              <br />Contamos con un asesor-promotor especializado, quien acompaña a los grupos productores en sus gestiones y labores, proponiendo actividades para el desarrollo de la comunidad. <br />
              Conoce más sobre nuestro <b>componente de desarrollo comunitario</b>.
            </p>
          </div>
          <div className="my-4 flex flex-col w-full p-4 lg:max-w-prose px-4 m-auto">
            <p className="text-xl font-bold py-4 text-gray-1000">Ubicación</p>
            <iframe
              className='max-w-dvw h-[200px] lg:w-[600px] lg:h-[450px] bg-gray-100/50 rounded-md'
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.92079540651446!2d-96.8747142405038!3d17.803099356058798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c69b56925363cf%3A0xf50b0d725a1f6723!2sBachillerato%20Integral%20Comunitario%20No%2028!5e0!3m2!1ses!2smx!4v1750961989227!5m2!1ses!2smx">
            </iframe>
          </div>
        </div>

        <div className="my-4 max-w-[calc(65ch-100px)] mx-auto px-4 m-auto">
          <p className="text-xl font-bold p-6 text-gray-1000">Últimas noticias sobre el BIC 28</p>
          {
            noticias.map((card) => (
              <CardNews
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
                link={card.link}
                img_cover_link={card.img_cover_link} />
            )
            )
          }
        </div>
      </div>
    </div>
  )
}
