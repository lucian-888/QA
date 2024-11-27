// app/layout.tsx
import '../styles/globals.css';
import Footer from './components/Footer';

export const metadata = {
  title: "Queen of Africa Modèle Photo",
  description: "Portfolio website for a photo model",
  links: [
    {
      rel: 'preload',
      href: '/styles/globals.css',
      as: 'style',
    },
    {
      rel: 'stylesheet',
      href: '/styles/globals.css',
    },
    {
      rel: 'icon',
      href: '/favicon.ico', 
      type: 'image/x-icon',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-100 bg-gray-700">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
