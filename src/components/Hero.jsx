import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10 max-w-7xl">
          <div className="backdrop-blur-[1px]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
              Cosmic Radiators for the Next Space Age
            </h1>
            <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-white/80">
              We design and manufacture high-efficiency thermal radiation systems for spacecraft, orbital platforms, and deep-space probes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 text-sm md:text-base font-medium hover:bg-white/90 transition"
              >
                Explore Radiator Lines
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm md:text-base font-medium hover:bg-white/10 transition"
              >
                Request Mission Brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
