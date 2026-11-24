'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, MoveUpRight } from 'lucide-react'

type ProjectGalleryProps = {
  images: string[]
  title: string
  variant?: 'desktop' | 'phone'
}

export default function ProjectGallery({ images, title, variant = 'desktop' }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  const showImage = (step: number) => {
    setActiveIndex((currentIndex) => (currentIndex + step + images.length) % images.length)
  }

  return (
    <div className={`project-gallery${variant === 'phone' ? ' phone' : ''}`}>
      <a
        className="project-gallery-image"
        href={activeImage}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir captura ${activeIndex + 1} de ${title} en tamaño original`}
      >
        <img src={activeImage} alt={`${title} — captura ${activeIndex + 1}`} />
      </a>
      <a className="project-gallery-open" href={activeImage} target="_blank" rel="noreferrer">
        Ver tamaño original <MoveUpRight size={13} />
      </a>
      {images.length > 1 && (
        <>
          <button className="project-gallery-arrow previous" type="button" aria-label="Captura anterior" onClick={() => showImage(-1)}>
            <ChevronLeft size={19} />
          </button>
          <button className="project-gallery-arrow next" type="button" aria-label="Captura siguiente" onClick={() => showImage(1)}>
            <ChevronRight size={19} />
          </button>
          <div className="project-gallery-dots" role="group" aria-label="Seleccionar captura">
            {images.map((image, index) => (
              <button
                key={image}
                className="project-gallery-dot"
                type="button"
                aria-label={`Ver captura ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </>
      )}
      <span className="project-gallery-count" aria-live="polite">{activeIndex + 1} / {images.length}</span>
    </div>
  )
}
