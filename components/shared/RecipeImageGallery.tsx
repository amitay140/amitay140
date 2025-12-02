'use client';

import { useState } from 'react';
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
          className="relative w-full h-[50vh] min-h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl cursor-pointer group mx-auto max-w-[1920px]"
          onClick={() => handleImageClick(0)}
        >
          <img
            src={images[0]}
            alt={recipeTitle}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Dark Gradient Overlay for better text contrast if needed later */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
          
          {/* Zoom indicator */}
          <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
      <div className="mb-12 mx-auto max-w-[1920px]">
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
                  className="relative w-full h-[50vh] min-h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={imageUrl}
                    alt={`${recipeTitle} - תמונה ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                  
                  {/* Zoom indicator */}
                  <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>🔍</span>
                    <span>לחץ להגדלה</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="right-8 left-auto bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white h-12 w-12" />
          <CarouselNext className="left-8 right-auto bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white h-12 w-12" />
        </Carousel>
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
