function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 md:px-10 py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold">Cosmic Radiators</p>
            <p className="text-sm text-white/60 mt-1">Thermal systems for orbital and deep-space missions</p>
          </div>
          <nav className="flex gap-6 text-sm text-white/70">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} Cosmic Radiators. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
