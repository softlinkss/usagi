import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Stype Room',
    description: '安らぎとくつろぎをお約束するSタイプのお部屋。広々とした空間と選び抜かれたインテリアが、特別な日を彩ります。',
    features: ['クイーンベッド', '大型テレビ', '持込冷蔵庫', 'クロームキャスト'],
    image: '/stype-room.jpg', // アップロードされた画像へのパス（publicフォルダ内に配置してください）
  },
  {
    id: 2,
    name: 'Ctype Room',
    description: '洗練されたモダンデザインのCタイプのお部屋。落ち着いた色調で統一され、心身ともにリラックスできる空間です。',
    features: ['ダブルベッド', '持込冷蔵庫', 'アダルトグッズ', 'クロームキャスト'],
    image: '/ctype-room.jpg', // アップロードされた画像へのパス（publicフォルダ内に配置してください）
  },
  {
    id: 3,
    name: 'Btype Room',
    description: 'シンプルでありながら機能性を備えたBタイプのお部屋。快適な滞在に必要な設備をコンパクトにまとめました。',
    features: ['ダブルベッド', '持込冷蔵庫', 'アダルトグッズ', 'クロームキャスト'],
    image: '/btype-room.jpg', // アップロードされた画像へのパス（publicフォルダ内に配置してください）
  },
];

export default function Rooms() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="rooms" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Rooms</h2>
          <p className="text-gray-500 tracking-widest text-sm">客室のご案内</p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`flex flex-col ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-10 md:gap-20 items-center`}
            >
              {/* Image */}
              <div 
                className="w-full md:w-1/2 overflow-hidden cursor-pointer relative group"
                onClick={() => setSelectedImage(room.image)}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src={room.image}
                  alt={room.name}
                  className="w-full h-[300px] md:h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md tracking-widest text-sm">
                    拡大表示
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-serif mb-6">{room.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-light">
                  {room.description}
                </p>
                
                <div className="mb-10">
                  <h4 className="text-sm tracking-widest text-gray-400 mb-4 uppercase">Equipment</h4>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full mt-2 shrink-0" />
                        <span className="text-sm text-gray-600 font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#pricing"
                  className="inline-block border-b border-primary pb-1 text-sm tracking-widest hover:text-accent hover:border-accent transition-colors duration-300 w-max"
                >
                  料金を見る
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              aria-label="Close modal"
            >
              <X size={36} strokeWidth={1.5} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged room view"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
