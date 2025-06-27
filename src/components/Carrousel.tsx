import React, { useState } from "react"

type CarouselImage = {
  id: number,
  title: string,
  href: string,
}

type CarouselProps = {
  images: CarouselImage[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

export const Carousel = ({ images, autoSlide = false, autoSlideInterval = 5000, }: CarouselProps) => {
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const next = () => {
    setCurrent((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  React.useEffect(() => {
    if (!autoSlide) return
    const interval = setInterval(() => {
      next()
    }, autoSlideInterval)
    return () => clearInterval(interval)
  }, [autoSlide, autoSlideInterval])

  return (
    <div className="relative min-w-full min-h-full max-w-3xl mx-auto overflow-hidden rounded my-4">
      <div
        className="flex transition-transform ease-out duration-4000"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((image) => ( //index deleted* replaced by image.id
          <img
            key={image.id}
            src={image.href}
            alt={image.title}
            className="w-full flex-shrink-0 object-cover h-100 sm:h-140"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        >
          ❮
        </button>
        <button
          onClick={next}
          className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        >
          ❯
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  )
}
