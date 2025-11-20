'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

interface RecipeImageGalleryProps {
  images: string[];
  recipeTitle: string;
}

export function RecipeImageGallery({ images, recipeTitle }: RecipeImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (images.length === 0) return null;

  // Prepare slides for lightbox
  const slides = images.map(url => ({
    src: url,
    alt: recipeTitle,
  }));

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Single image - show without carousel
  if (images.length === 1) {
    return (
      <>
        <div
          className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => handleImageClick(0)}
        >
          <Image
            src={images[0]}
            alt={recipeTitle}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          {/* Zoom indicator */}
          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span>🔍</span>
            <span>לחץ להגדלה</span>
          </div>
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          index={lightboxIndex}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 3,
            scrollToZoom: true,
          }}
        />
      </>
    );
  }

  // Multiple images - show carousel with lightbox
  return (
    <>
      <div className="mb-8">
        <Carousel
          opts={{
            align: "center",
            direction: "rtl", // RTL support for Hebrew
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((imageUrl, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={imageUrl}
                    alt={`${recipeTitle} - תמונה ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0} // Priority only for first image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                  {/* Zoom indicator */}
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span>🔍</span>
                    <span>לחץ להגדלה</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="right-4 left-auto" />
          <CarouselNext className="left-4 right-auto" />
        </Carousel>

        {/* Image counter */}
        <div className="text-center mt-2 text-sm text-gray-600">
          {images.length} תמונות • לחץ על תמונה להגדלה
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        carousel={{
          finite: false,
        }}
        render={{
          buttonPrev: images.length > 1 ? undefined : () => null,
          buttonNext: images.length > 1 ? undefined : () => null,
        }}
      />
    </>
  );
}
