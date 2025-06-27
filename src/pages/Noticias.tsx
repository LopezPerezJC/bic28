import { noticias } from '../data/Noticias.json'
import { CardNews } from '../components/CardNews'

export const Noticias = () => {
  return (
    <div className="my-4 w-full  md:max-w-[1280px] mx-auto px-4 m-auto">
      <p className="text-xl font-bold p-6 text-gray-1000">Últimas noticias sobre el BIC 28</p>
      <div className="flex flex-wrap m-auto align-center">
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
  )
}
