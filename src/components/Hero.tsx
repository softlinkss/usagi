import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-bg-new.mp4"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif mb-6 tracking-wider"
        >
          HOTEL USAGI
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl font-light tracking-widest mb-12 max-w-2xl"
        >
          日常を忘れ、洗練された空間で<br className="md:hidden" />特別なひとときを。
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          href="#rooms"
          className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/50 hover:bg-white hover:text-primary transition-all duration-500 tracking-widest text-sm"
        >
          客室を見る
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-white/50"
        />
      </motion.div>
    </section>
  );
}
