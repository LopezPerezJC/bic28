import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import patternBIC28 from '/assets/PATTERN-BIC-28.png'
import { Footer } from "../components/shared/Footer"
import { Carousel } from "../components/Carrousel"
import { imagesCarousel } from "../constants/constants"

export const RootLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  // bg-[#9D2449]
  // bg-[url('/PATTERN_SQUARE_GLOBAL.svg')]  bg-cover bg-center bg-no-repeat    
  return (
    <div className="max-w-full font-montserrat ">
      <div className=''>
        <div className="flex flex-col">
          <div className="min-w-full">
            <img src={patternBIC28} alt="Patron BIC 28" />
          </div>
          <Navbar />
          {/* <div className="min-w-full">
            <img src={patternCSEIIO} alt="Patron CSEIIO" />
          </div> */}
        </div>
      </div>

      <div className="max-w-screen-xl m-auto">
        {
          pathname === '/' && (
            <Carousel images={imagesCarousel} autoSlide />
          )
        }
      </div>

      <div className="w-full my-4 m-auto flex-1 bg-[url('/assets/PATTERN_SQUARE_GLOBAL.svg')]  bg-cover bg-center bg-no-repeat">
        <Outlet></Outlet>
      </div>

      <div className='bg-[#9D2449]'>
        <div className="bg-[url('/assets/PATTERN_SQUARE_GLOBAL.svg')]  bg-cover bg-center bg-no-repeat flex md:block">
          <Footer />
        </div>
      </div>
    </div>
  )
}