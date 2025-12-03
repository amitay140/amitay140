import Link from 'next/link';
import Image from 'next/image';

interface EditorialCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  meta?: string; // Optional badge/meta info (e.g. "15 min", "Video")
}

export function EditorialCard({ title, subtitle, image, href, meta }: EditorialCardProps) {
  return (
    <Link
      href={href}
      className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-slate-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {meta && (
          <div className="absolute top-4 end-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
            {meta}
          </div>
        )}
        
        <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-blue-100 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-200 text-sm font-medium line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
