'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useEffect, useState } from 'react'

import condotecDashboardImg from '@/app/assets/images/condotec-dashboard.png'
import smartLandingPageImg from '@/app/assets/images/lp-smartconsig.png'
import spendDashboardImg from '@/app/assets/images/spend-dashboard.png'
import smartSystemImg from '@/app/assets/images/system-smartconsig.png'
import Image from 'next/image'

const images = [
  {
    id: 1,
    path: condotecDashboardImg,
    alt: 'Condotec painel',
  },
  {
    id: 2,
    path: spendDashboardImg,
    alt: 'Spendmanagement painel',
  },
  {
    id: 3,
    path: smartLandingPageImg,
    alt: 'Grupo Smartconsig site',
  },
  {
    id: 4,
    path: smartSystemImg,
    alt: 'Grupo Smartconsig sistema interno',
  },
]

export function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => setCurrentIndex((previous) => (previous + 1) % images.length)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full flex flex-col space-y-6 py-6 px-4 sm:flex-row sm:justify-center sm:items-center sm:py-16 sm:px-0">
      <div className="w-full flex flex-col text-center space-y-6 sm:text-left md:space-y-12">
        <h3 className="text-4xl font-medium sm:text-5xl md:text-6xl lg:text-7xl">
          Principais projetos
        </h3>
        <p className="text-muted-foreground px-6 sm:text-lg sm:px-0 sm:max-w-md">
          Desenvolvemos soluções do absoluto zero
          para atender diversos nichos e públicos,
          como financeiro, adminstrativo, portabilidades e etc. 
          Reserve um espaço na sua agenda e fale conosco sobre
          sua idéia ou projeto existente.
        </p>

        <Button type="button" className="w-full sm:max-w-md">
          Fale conosco
        </Button>
      </div>

      <Card className="w-full h-auto overflow-hidden">
        <div className="relative aspect-video">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`
                absolute top-0 left-0 size-full transition-opacity duration-1000 
                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`
              }
            >
              <Image
                src={image.path}
                alt={image.alt}
                className="object-cover size-full"
                sizes="(max-width: 1920px) 100vw, 1920px"
                priority
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}