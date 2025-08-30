import Hero from './components/Hero';
import Products from './components/Products';
import Technology from './components/Technology';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Products />
      <Technology />
      <Footer />
    </div>
  );
}

export default App;
