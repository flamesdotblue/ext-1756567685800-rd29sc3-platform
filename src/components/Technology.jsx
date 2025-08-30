import { Cpu, Gauge, Factory, Orbit } from 'lucide-react';

function Technology() {
  const items = [
    {
      icon: Cpu,
      title: 'Metamaterial Emissive Layers',
      text: 'Tailored spectral emissivity and low absorptivity via nano-patterned surfaces for maximum heat rejection and minimal solar gain.'
    },
    {
      icon: Gauge,
      title: 'Capillary Loop Heat Pipes',
      text: 'Passive, fault-tolerant transport with wide turndown ratios and excellent microgravity performance.'
    },
    {
      icon: Factory,
      title: 'Space-grade Composites',
      text: 'Radiation-resistant laminates and self-healing coatings that mitigate micrometeoroid abrasion and pinhole leaks.'
    },
    {
      icon: Orbit,
      title: 'On-Orbit Modularity',
      text: 'Tileable panels and quick-connect manifolds for scalable thermal architectures from 100 W to multi-kW systems.'
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#090017]">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Engineering Core</h2>
          <p className="mt-3 text-white/70">Technologies that unlock reliable thermal control across orbits and environments.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-white/10 p-6 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <it.icon className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Mission integration, from concept to orbit</h3>
              <p className="mt-2 text-white/80">Share your thermal loads, duty cycles, and orbit profile—our team will return a radiator architecture and mass budget within 72 hours.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
              Start a Design Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
