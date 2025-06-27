import { socialLinks } from '../../constants/constants'

export const Footer = () => {
  return (
    <footer className="max-w-screen-xl m-auto p-2 px-12 flex justify-center gap-2 text-slate-200 text-sm flex-wrap md:flex-no-wrap mt-10">
      <div className="flex flex-col justify-center items-center mr-2">
        <p className='text-xl font-black'>
          Síguenos
        </p>
        <p className='mb-2'>¡Forma parte de nuestra comunidad!</p>
        <div className="flex w-20">
          {
            socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target='_blank'
                rel="nonreferrer"
                className='text-slate-300 border border-gray-8000 w-full py-3.5 flex items-center justify-center transition-all hover:bg-white-100/10 hover:bg-[#9D2449]'
              >
                {link.icon}
              </a>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col">
        <p className=" text-xl text-bolder hidden md:inline">Bachillerato Integral Comunitario N° 28 Santos Reyes Pápalo</p>
        <p className="text-white text-2xl font-black md:hidden m-auto">BIC 28</p>
        <div className="flex flex-col my-2">
          <p className='font-bold text-lg'>Dirección</p>
          <p>Carretera Cuicatlan-Santos Reyes Pápalo, Kilometro 21, entrada principal, C.P. 68645.</p>
        </div>

        <div className="flex flex-col my-2">
          <p className='font-bold text-lg'>Contacto</p>
          <p>953 171 08 63 / 951 170 3469 </p>
        </div>
      </div>
    </footer>
  )
}