import { IoIosSchool } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

type personalProps = {
  id: number,
  nombre: string,
  escolaridad: string,
  puesto: string,
  correo: string,
  link_img: string,
}


export const CardPersonal = ({ id, nombre, escolaridad, puesto, correo, link_img }: personalProps) => {
  return (
    <div className="card_directorio flex flex-col items-center bg-gray-100/30 p-2 rounded-md m-2 w-75 h-65" id={`${id}`}>
      <img src={link_img} alt={`Fotografía ${nombre}`} className="h-30 w-30 rounded-full my-2" />
      <p className="nombre font-semibold">{nombre}</p>
      <div className="perfil-academico flex flex-row align-center justify-center m-auto my-1">
        <span className="mr-2 m-auto flex flex-row items-center"><IoIosSchool color="#9D2449" className="flex flex-1" /></span>
        <p className="italic">{escolaridad}</p>
      </div>
      <div className="puesto flex flex-row align-center justify-center m-auto">
        <p className=" font-semibold text-blue-600 text-center">{puesto}</p>
      </div>
      {correo ? (
        <div className="correo flex flex-row align-center justify-center m-auto">
          <span className="mr-2 m-auto flex flex-row items-center">
            <IoIosMail color="#9D2449" className="flex flex-1" />
          </span>
          <a href={`mailto:${correo}`} className="correo font-light">
            {correo}
          </a>
        </div>
      ) : null}
    </div>
  )
}
