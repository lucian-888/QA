

export default function Footer() {
  return (
    <footer className="p-5 bg-gray-700 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        
        {/* Left side with social links */}
        <div className="text-white flex items-center space-x-4 mb-4 md:mb-0">
          <a 
            href="https://www.facebook.com/queen.of.africa6" 
            className="text-white flex items-center space-x-2" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
          >
            <img src="images/facebook-icon.png" alt="Facebook" style={{ width: '22px', height: '22px' }} />
          </a>

          <a 
            href="https://www.instagram.com/queen_of_africa6/profilecard/" 
            className="text-white flex items-center space-x-2" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
          >
            <img src="images/instagram-icon.png" alt="Instagram" style={{ width: '22px', height: '22px' }} />
          </a>
      </div>



        {/* Center with copyright text */}
        <div className="text-white  mb-4 md:mb-0">
          <p>© {new Date().getFullYear()} Tous droits réservés</p>
        </div>

        {/* Right side with the logo */}
        <div>
          <a href="https://lucianbistreanu.com/" target="_blank" rel="noopener noreferrer">
          <p className="text-[11px] text-white hover:text-crimson cursor-pointer">by BISTREANU</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
