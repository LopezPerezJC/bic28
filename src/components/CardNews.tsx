import { Link } from "react-router-dom"

type CardProps = {
  id: string,
  title: string,
  description: string,
  link: string,
  img_cover_link: string,
}

export const CardNews = ({ id, title, description, link, img_cover_link }: CardProps) => {
  return (
    <div className="my-4 mx-2 bg-gray-100 rounded-xl flex flex-row p-4 overflow-hidden max-w-100 max-h-60 xs:w-full md:min-w-[400px] " id={`${id}`}>
      <div className="flex flex-col flex-1 justify-between">
        <p className="font-bold py-2 mr-2">{title}</p>
        <p className="mr-4 overflow-hidden hidden min-sm:block">{description}</p>
        <Link to={`${link}${id}`}>
          <p className="font-bold py-2 text-blue-600">Leer más</p>
        </Link>
      </div>
      <img src={img_cover_link} className="rounded-tr-xl rounded-br-xl w-30 h-30 md:h-50 md:w-50 m-auto" alt={`portada ${title}`} />
    </div>
  )
}
