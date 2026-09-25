import { StarIcon } from './Icons';

export default function Rating({ size = 14 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-gold-500" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={size === 16 ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
      ))}
    </div>
  );
}
