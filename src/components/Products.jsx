import { Rocket, Sun, Thermometer, Shield } from 'lucide-react';

const products = [
  {
    name: 'AstraLine XR',
    icon: Rocket,
    desc: 'Ultra-light flexible radiator panels optimized for LEO smallsats and high-agility platforms.',
    specs: ['< 2.1 kg/m²', 'Emissivity 0.92', 'Deployable roll-out'],
  },
  {
    name: 'HelioGrid M7',
    icon: Sun,
    desc: 'High-flux radiator array for crewed stations and power-dense orbital factories.',
    specs: ['> 1.5 kW/m²', 'Micrometeoroid shielding', 'Modular tiling'],
  },
  {
    name: 'CryoWeave C3',
    icon: Thermometer,
    desc: 'Cryogenic thermal rejection for propellant depots and deep-space probes.',
    specs: ['Down to 20 K', 'Vibration-damped manifolds', 'Low outgassing'],
  },
  {
    name: 'AegisShield R',
    icon: Shield,
    desc: 'Radiator with integrated MMOD and radiation-resistant laminates for cislunar ops.',
    specs: ['MMOD Whipple layers', 'Self-healing coating', 'Radi-hard materials'],
  },
];

function Products() {
  return (
    <section id="products" className="relative py-20 md:py-28 bg-gradient-to-b from-black to-[#0a0013]">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(800px 400px at 20% 20%, rgba(187, 134, 252, 0.15), transparent), radial-gradient(600px 300px at 80% 60%, rgba(147, 51, 234, 0.12), transparent)'
        }} />
      </div>
      <div className="container mx-auto px-6 md:px-10 max-w-7xl relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Radiator Lines</h2>
          <p className="mt-3 text-white/70">
            Engineered for distinct mission profiles—from agile CubeSats to heavy-lift platforms.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-white/20 transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <p.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 min-h-[56px]">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.specs.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <button className="text-sm font-medium text-purple-300 hover:text-purple-200">
                  Technical brief →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
