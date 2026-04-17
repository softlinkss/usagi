import { motion } from 'motion/react';
import { MapPin, Phone, Car } from 'lucide-react';
import Logo from './Logo';

export default function Access() {
  return (
    <section id="access" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Access</h2>
          <p className="text-gray-500 tracking-widest text-sm">アクセス情報</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex flex-col justify-center"
          >
            <h3 className="flex items-center gap-3 text-2xl font-serif mb-8">
              <Logo className="w-7 h-7 text-accent" />
              HOTEL USAGI
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm tracking-widest text-gray-400 mb-2 uppercase">Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    〒701-1143<br />
                    岡山県岡山市北区吉宗42-53<br />
                    <span className="text-sm text-gray-500">(岡山運転免許センター南)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm tracking-widest text-gray-400 mb-2 uppercase">Phone</h4>
                  <a
                    href="tel:086-294-2220"
                    className="text-xl font-serif text-primary hover:text-accent transition-colors duration-300"
                  >
                    086-294-2220
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm tracking-widest text-gray-400 mb-2 uppercase">By Car</h4>
                  <p className="text-gray-600 leading-relaxed">
                    岡山ICより車で約10分<br />
                    無料駐車場完備
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 h-[400px] lg:h-[500px] bg-gray-100"
          >
            <iframe
              src="https://maps.google.com/maps?q=ホテル うさぎ 岡山県岡山市北区吉宗42-53&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HOTEL USAGI Location"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
