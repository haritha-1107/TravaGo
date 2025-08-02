

const Footer = () => {
  return (
    <footer className=" max-w-7xl w-full mx-auto text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">TravaGo</h2>
          <p className="text-sm">
            Explore the world with comfort and confidence. TravaGO brings top
            travel experiences to your fingertips.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: TravaGo@mail.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Location: Delhi,India</p>
        </div>

        
      </div>

      <div className="mt-10 text-center text-sm border-t border-white/30 pt-4">
        © {new Date().getFullYear()} TravaGo 
      </div>
    </footer>
  );
};

export default Footer;
