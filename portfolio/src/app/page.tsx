'use client'
import { useEffect, useState } from 'react';
import ContactModal from '@/components/contact-modal';
import ImageCarousel from '@/components/image-carousel';
export default function Page() {

  const [contactModal, setContactModal] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    window.dispatchEvent(new Event("storage")); 
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <main className="text-gray-900">
      <section id="hero" className="bg-white shadow-md mt-12">
        <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
          {/* Left Image */}
          <div 
            className="absolute z-10 left-0 top-0 w-[33%] h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/banner_turtle.jpg')",
              clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
          ></div>

          {/* Center Content */}
          <div className="relative z-0 bg-green-500 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-2xl font-bold">Tae-Min Kim</h1>
            <p className="text-lg">Software Engineer | Community Leader | Thrill Seeker</p>
          </div>

          {/* Right Image */}
          <div 
            className="absolute z-10 right-0 top-0 w-[33%] h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/banner_disc.jpg')",
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>
        </div>
      </section>
        
      <section id="about" className="container mx-auto my-12 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">♪ Welcome To My Life ♪</h2>
          <p className="text-xl">
            What's up y'all? I'm Tae-Min, a Software Engineer with eight years of experience developing products
            and helping clients implement solutions to exceed their business requirements. I enjoy innovating solutions 
            for interesting problems, but most importantly empowering others and making life easier. With a strong 
            background in object oriented programming, database management, and full stack development, I am very confident
            in my technical skills and have a strong passion for mentoring and empowering others.
          </p>
          <br/>
          <p className="text-xl">
            Outside of work, I love to seek new experiences and broaden my perspective of the world. Whether I'm tasting new flavors,
            traveling to new places, or trying new activities, I like to be active in learning more about what makes people
            happy, and spreading that joy with others. There are so many awesome experiences in the world, you will never know what 
            you don't know unless you step outside your comfort zone and embrace the unknown. 
          </p>
          <br/>
          <p className="text-xl">
            Check out some of my projects that I personally use, and my favorite hobbies below!
          </p>
      </section>
      
      <section id="projects" className="container mx-auto my-12 p-6">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white shadow-md border rounded-lg">
                  <h3 className="text-2xl font-semibold">
                    Dank Bank&nbsp;
                    <a href="https://www.github.com/tmkim/dank_bank"
                    className="font-semibold text-blue-500 text-lg italic hover:text-blue-700 transition-colors duration-300"
                    >(Git Repo)</a>
                  </h3>
                  <p className="text-lg">
                    Ever want to share something you love, but have trouble coming up with 
                    recommendations on the spot? Same.. which is why I put together a "bank" of 
                    things I really enjoy. So if you want to learn about things that make me happy,
                    please check out my&nbsp;
                    <a href="/DankBank" className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                    Dank Bank
                    </a>!
                  </p> 
                  <pre className="text-wrap">
                    Made using Django Rest Framework, Next.js, Tailwind CSS, PostgreSQL, AWS S3
                  </pre>
              </div>
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h3 className="text-2xl font-semibold">
                    T Planet&nbsp;
                    <a href="https://www.github.com/tmkim/t-planet"
                    className="font-semibold text-blue-500 text-lg italic hover:text-blue-700 transition-colors duration-300"
                    >(Git Repo)</a>
                  </h3>
                  <p className="text-lg">
                    Do you like to study with flash cards? Need a place where you can create and share
                    flash cards with friends? Come check out&nbsp;
                    <a href="/T-Planet" className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                    T Planet
                    </a>
                    , a social studying website where you can create your own sets of flash cards,
                    share them with others, and check out what others are studying!
                  </p> 
                  <pre className="text-wrap">
                    Made using Next.js (full stack), Tailwind CSS, PostgreSQL, AWS S3
                  </pre>
              </div>
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h3 className="text-2xl font-semibold">
                    Rave Map&nbsp;
                    <a href="https://www.github.com/tmkim/RaveMap"
                    className="font-semibold text-blue-500 text-lg italic hover:text-blue-700 transition-colors duration-300"
                    >(Git Repo)</a>
                  </h3>
                  <p className="text-lg">
                    Traveling to a new city and looking for upcoming EDM shows in the area?
                    Take a look at this&nbsp;
                    <a href="/T-Planet" className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                    Rave Map
                    </a>
                    &nbsp;to find local events and see their venues on a map to help you 
                    plan your next trip!
                  </p> 
                  <pre className="text-wrap">
                    Python (Django), EDMTrain API, Google Maps API, Bootstrap, JQuery, AJAX<br />
                    Powered by <a href="https://edmtrain.com/"
                    className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
                    >EDM Train</a> API
                  </pre>
              </div>
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h3 className="text-2xl font-semibold">
                    TCG Bounty Hunter 
                    <a href="https://www.github.com/tmkim/tcgbh"
                    className="font-semibold text-blue-500 text-lg italic hover:text-blue-700 transition-colors duration-300"
                    >&nbsp;(in development)</a>
                    <span className=""> </span>
                  </h3>
                  <p className="text-lg">
                    If you're looking to build your next deck of trading cards, check out my &nbsp;
                    <a href="/T-Planet" className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
                    TCG Bounty Hunter
                    </a>
                    &nbsp;to help figure out the estimated total cost of any sized set of cards, 
                    using current market prices found on TCGPlayer!
                  </p> 
                  <pre className="text-wrap">
                    Django Rest Framework, Pandas, Next.js, Tailwind CSS, PostgreSQL, AWS S3<br />
                    Powered by <a href="https://tcgcsv.com/"
                    className="font-semibold text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
                    >TCG CSV</a> API
                  </pre>
              </div>
          </div>
      </section>

      <section id="hobbies" className="container mx-auto my-12 p-6">
        <h2 className="text-2xl font-semibold mb-4">Hobbies (insert image carousel + descriptions)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Activities
                </h1>
                <p>
                  Disc Golf, Skiing, Swimming, Kendama...
                </p>
                <ImageCarousel folder="hobbies" imageNames={['game1.png', 'game2.png', 'game3.png', 'game4.png', 'game5.png']} />

              </div>
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Cooking
                </h1>
                <p>
                  Add some photos of things that I've cooked...
                </p>
              </div>
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Gaming
                </h1>
                <p>
                  Some of my favorite games - WoW, Melee, Animal Crossing, Monster Train ...
                </p>
              </div>
              <div className="p-6 bg-white shadow-md border rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Travel
                </h1>
                <p>
                  Festivals, Restaurants, Vacations ...
                </p>
              </div>
          </div>
      </section>
      
      <section id="contact" className="container mx-auto my-12 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="mt-6 flex gap-4">
          <button
            className="flex items-center justify-center min-w-[160px] px-4 py-2 text-lg font-semibold bg-green-500 rounded-md hover:bg-green-600 hover:cursor-pointer"
            onClick={() => setContactModal(true)}
          >
            <p className="text-white hover:underline">Send me an Email</p>
          </button>
          <button
            className="flex items-center justify-center min-w-[160px] px-4 py-2 text-lg font-semibold bg-green-500 rounded-md hover:bg-green-600"
          >
            <a href="https://www.linkedin.com/in/tmk13" className="text-white hover:underline">Find me on LinkedIn</a>
          </button>
          </div>
      </section>

      {contactModal && (
        <div>
          <ContactModal 
          onClose={() => setContactModal(false)} 
          />
        </div>
      )}
    </main>
  );
}
