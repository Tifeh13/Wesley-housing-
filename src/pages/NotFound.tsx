import Seo from '../components/Seo';
import { ButtonLink } from '../components/Buttons';

export default function NotFound() {
  return (
    <div className="bg-navy-950 min-h-[70vh] flex items-center text-ivory">
      <div className="mx-auto max-w-xl px-5 text-center py-24">
        <p className="font-display text-7xl text-gold-400">404</p>
        <h1 className="mt-4 font-display text-3xl">This address isn't on our map</h1>
        <p className="mt-4 text-navy-200 leading-relaxed">
          The page you're looking for may have moved. Let's get you back to some beautiful homes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink to="/" variant="gold" size="lg">
            Back to Home
          </ButtonLink>
          <ButtonLink to="/properties" variant="outline-light" size="lg">
            Browse Properties
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
