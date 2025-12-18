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
  description?: string;
  /** Elements to be rendered as an overlay on the image gallery. */
  children?: React.ReactNode;
}

interface HeroContentProps {
  recipeTitle: string;
  description?: string;
  children?: React.ReactNode;
}

const HeroContent = ({ recipeTitle, description, children }: HeroContentProps) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none z-10">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
      {recipeTitle}
    </h1>
    {description && (
      <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md mb-6">
        {description}
      </p>
    )}
    {children && <div className="pointer-events-auto">{children}</div>}
  </div>
);

export function RecipeImageGallery({ images, recipeTitle, description, children }: RecipeImageGalleryProps) {
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

  // Single image
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
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
          
          <HeroContent recipeTitle={recipeTitle} description={description}>
            {children}
          </HeroContent>

          {/* Zoom indicator */}
          <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
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
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        />
      </>
    );
  }

  // Multiple images
  return (
    <>
      <div className="relative w-full h-[50vh] min-h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl mx-auto max-w-[1920px]">
        <Carousel
          opts={{ align: "center", direction: "rtl", loop: true }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {images.map((imageUrl, index) => (
              <CarouselItem key={index} className="h-full">
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={imageUrl}
                    alt={`${recipeTitle} - תמונה ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
                   
                  {/* Zoom indicator */}
                  <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span>🔍</span>
                    <span>לחץ להגדלה</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="right-8 left-auto bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white h-12 w-12 z-20" />
          <CarouselNext className="left-8 right-auto bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white h-12 w-12 z-20" />
        </Carousel>

        {/* Overlay Content (sits on top of the slider) */}
        <HeroContent recipeTitle={recipeTitle} description={description}>
          {children}
        </HeroContent>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
      />
    </>
  );
}
