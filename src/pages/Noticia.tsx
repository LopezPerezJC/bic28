import { useParams } from "react-router-dom";
import { noticias } from "../data/Noticias.json";
import { Link } from "react-router-dom";

export const Noticia = () => {
  const { id } = useParams<{ id: string }>();
  const noticia = noticias?.find((item) => item.id === id);

  if (!noticia) return <div className="w-full h-[50vh] m-auto flex flex-col flex-1 items-center justify-start top-[-50] mt-30">
    <p className="font-bold text-xl">Lo sentimos, esta noticia no existe :(</p>
    <Link to={'/noticias'} className=" font-bold text-xl">Ir a la sección principal de <p className="block py-4 px-2 m-2 rounded-2xl text-white bg-[#9D2449] hover:bg-[#d3567b] text-center">noticias</p></Link >
  </div>

  const contenidoNoticia = noticia.contenido;

  return (
    <div className="m-auto py-4 max-w-screen-xl p-4">
      <div className="w-full md:max-w-prose m-auto">
        <p className="text-2xl font-bold text-center py-4">{noticia.title}</p>
        <div className="my-2">
          {
            contenidoNoticia === undefined ? <p>El contenido del blog esta vacío</p> : contenidoNoticia.map((item, index) => {
              switch (item.tipo) {
                case 'parrafo':
                  return <p key={index} className="text-lg my-2">{item.contenido}</p>;
                case 'imagen':
                  return <img src={item.url} key={index} className="my-6" alt="Contenido de la noticia" />;
                case 'embebido':
                  return (
                    <iframe
                      key={index}
                      width="560"
                      height="315"
                      src={`${item.url}`}
                      title="Video de YouTube"
                      frameBorder="0"
                      allowFullScreen
                      className="my-6"
                    ></iframe>
                  );
                default:
                  return <p key={index}>
                    Tipo de contenido no reconocido
                  </p>;
              }
            })
          }
        </div>
        <div className="flex flex-row flex-wrap align-center justify-center py-2">
          <p className="mr-2">Última edición: {noticia.fecha_modificado}</p>
          <p>Redactado por: {noticia.redactado_por}</p>
        </div>
      </div>
    </div>
  )
}
