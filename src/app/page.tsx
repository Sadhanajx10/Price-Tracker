import Image from 'next/image';
import Searchbar from '../../components/Searchbar';
import HeroCarousel from '../../components/HeroCarousel';

const Home = () => {
  return (
    <>
      <section className="px-6 border border-red-500 min-h-[100px] bg-white">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex felx-col justify-center">
            <p className="small-text flex items-center mb-2">
              Smart Shopping Starts here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
                className="ml-2" // Added margin for better spacing
              />
            </p>

            <h1 className="mt-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              Unleash the power of
              <span className="text-primary"> Price-Tracker</span>
            </h1>
            <p className="mt-6"> {/* Added margin to create space below the h1 */}
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <Searchbar></Searchbar>
          </div>

          <HeroCarousel></HeroCarousel>
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>

        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {['Apple Iphone 16', 'Book', 'Sneakers'].map
            ((product) => (
              <div>{product}</div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Home;
