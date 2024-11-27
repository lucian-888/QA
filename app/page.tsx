"use client";

import Image from 'next/image';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const galleryImages = [
    { src: '/images/gallery1.webp', alt: 'Gallery 1' },
    { src: '/images/gallery2.webp', alt: 'Gallery 2' },
    { src: '/images/gallery3.webp', alt: 'Gallery 3' },
    { src: '/images/gallery4.webp', alt: 'Gallery 4' },
    { src: '/images/gallery5.webp', alt: 'Gallery 5' },
    { src: '/images/gallery6.webp', alt: 'Gallery 6' },
    { src: '/images/gallery7.webp', alt: 'Gallery 7' },
    { src: '/images/gallery8.webp', alt: 'Gallery 8' },
    { src: '/images/gallery9.webp', alt: 'Gallery 9' },
    { src: '/images/gallery14.webp', alt: 'Gallery 14' },
    { src: '/images/gallery15.webp', alt: 'Gallery 15' },
    { src: '/images/gallery16.webp', alt: 'Gallery 16' },
  ];

 
  return (
    <div className="font-sans text-gray-700">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[100vh] bg-cover bg-center bg-gray-900 pt-32">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content container */}
        <div className="relative flex flex-col items-center justify-center w-full h-full text-center text-white p-15">
          {/* Three-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {/* Column 1 */}
            <div className="relative">
              <img src="/images/gallery11.webp" alt="Model Photo 1" className="w-full h-auto rounded-lg" />
            </div>
            {/* Column 2 */}
            <div className="relative">
              <img src="/images/gallery12.webp" alt="Model Photo 2" className="w-full h-auto rounded-lg" />
            </div>
            {/* Column 3 */}
            <div className="relative">
              <img src="/images/gallery13.webp" alt="Model Photo 3" className="w-full h-auto rounded-lg" />
            </div>
          </div>
          <section>
            <h1 className="opacity-60 mt-14 text-4xl font-semibold">Modele photo</h1>
          </section>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold">À PROPOS</h2>
          <p className="mt-4 text-gray-600">
            Je suis une modèle photo passionnée avec de l&apos;expérience dans les séances photo de mode, de portrait et commerciales.
          </p>
          <p className="mt-4 text-gray-600">
            En travaillant avec des photographes et des stylistes de renom, j&apos;apporte énergie et élégance à chaque projet.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold">GALERIE</h2>
          <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div 
                key={i} 
                className="cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  width={385} 
                  height={385} 
                  className="rounded-lg shadow-md" 
                  style={{ width: 'auto', height: 'auto' }} // maintain aspect ratio
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold">CONTACT</h2>
          <p className="mt-4 text-gray-600">Intéressé(e) pour travailler ensemble ? Contactez-moi.</p>

          <form 
          action="https://formspree.io/f/xyzynpjy" 
          method="POST" 
          className="mt-8 max-w-md mx-auto space-y-4"
        >
          <label className="block text-gray-700">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              className="w-full p-3 border rounded-lg shadow-sm"
              required
            />
          </label>
          <label className="block text-gray-700">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg shadow-sm"
              required
            />
          </label>
          <label className="block text-gray-700">
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 border rounded-lg shadow-sm"
              rows={3}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-400"
          >
            Send Message
          </button>
        </form>

        </div>
      </section>

      {/* Lightbox for Gallery */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages}
        index={index}
        plugins={[Thumbnails]}
      />
    </div>
  );
}
