import { personal_directorio } from "../constants/constants";
import { CardPersonal } from "../components/CardPersonal";
import imageBIC28 from "/conocenos/image1.jpeg"

export const Conocenos = () => {
  return (
    <div className="m-auto py-4 max-w-screen-xl">
      <div className="flex flex-col flex-wrap my-4 md:flex-nowrap flex-1 m-auto">
        <div className="my-4 max-w-prose px-4 m-auto flex flex-col">
          <p className="text-xl font-bold py-4 text-gray-1000">¿Quiénes somos?</p>
          <p className="text-lg mx-auto">Somos una institución de educación media superior que forma parte del <b>Colegio Superior para la Educación Integral Intercultural de Oaxaca (CSEIIO)</b>. Brindamos formación académica y comunitaria a jóvenes de Santos Reyes Pápalo y comunidades cercanas, fortaleciendo la identidad indígena, el trabajo colaborativo y el conocimiento local.</p>
          <img src={imageBIC28} alt="Fotografía BIC 28" className="py-2" />
        </div>

        <div className="my-4 max-w-prose px-4 m-auto flex flex-col">
          <p className="text-xl font-bold py-4 text-gray-1000">Mensaje del director</p>
          <p className="text-blue-600 m-auto text-center font-semibold my-2"> Mtro. Uriel González Castro<br /> Director del plantel BIC 28 Santos Reyes Pápalo</p>
          <p className="text-lg mx-auto">Queridas y queridos estudiantes del Bachillerato Integral Comunitario No. 28:
            Reciban un afectuoso saludo de parte de todo el equipo que conforma nuestra institución. Nos llena de alegría tenerlos con nosotros y darles la más cálida bienvenida a este nuevo ciclo escolar.
            En este espacio educativo encontrarán acompañamiento, respeto y compromiso. Nuestro propósito es caminar junto a ustedes en la construcción de sus sueños, brindándoles el apoyo necesario para que alcancen cada una de sus metas. Sabemos que están iniciando una etapa clave en su formación, y estamos convencidos de que con esfuerzo, dedicación y colaboración, lograrán grandes cosas.
            Para ello, ponemos a su disposición una amplia gama de recursos y servicios: orientación educativa, acceso al centro de cómputo, biblioteca, actividades académicas, culturales y deportivas, así como programas de becas diseñados para apoyarlos durante su trayectoria.

            Los invitamos a involucrarse, a participar activamente y a aprovechar al máximo cada oportunidad. Este bachillerato es su casa, y juntos construiremos un ambiente donde aprender, crecer y transformar sean parte de la experiencia diaria.

            ¡Les deseamos el mayor de los éxitos en este nuevo comienzo y les reiteramos nuestra más sincera bienvenida!</p>
        </div>

        <div className="my-4 max-w-prose px-4 m-auto flex flex-col">
          <p className="text-xl font-bold py-4 text-gray-1000">Misión</p>
          <p className="text-lg mx-auto">Ofrecer servicios educativos de calidad socioculturalmente pertinentes al desarrollo de los pueblos originarios de Oaxaca, en particular el de Santos Reyes Pápalo, con innovaciones en las diferentes áreas del conocimiento científico, tecnológico y cultural e incorporando la formación y capacitación productiva en su modelo educativo</p>
        </div>

        <div className="my-4 max-w-prose px-4 m-auto flex flex-col">
          <p className="text-xl font-bold py-4 text-gray-1000">Visión</p>
          <p className="text-lg mx-auto">Ser una institución educativa de referencia en la región, reconocida por su compromiso con la formación integral de los jóvenes de los pueblos originarios, impulsando el desarrollo comunitario a través de una educación de calidad, intercultural, científica y tecnológica, con enfoque productivo, humano y transformador.</p>
        </div>
      </div>

      <div className="my-4 max-w-prose px-4 m-auto flex flex-col min-w-full">
        <p className="text-xl font-bold py-4 text-gray-1000 text-center">Directorio</p>
        <div className="contenedor-directorio flex flex-row flex-wrap items-center justify-center m-auto">
          {personal_directorio.map((persona) => (
            <CardPersonal key={persona.id} id={persona.id} nombre={persona.nombre} escolaridad={persona.escolaridad} puesto={persona.puesto} correo={persona.correo} link_img={persona.link_img} />
          ))}
        </div>
      </div>
    </div>
  )
}