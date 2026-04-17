import { motion } from 'motion/react';

const plans = [
  {
    name: 'Rest',
    subtitle: '休憩プラン',
    price: '¥3,000',
    period: '〜',
    details: [
      '24時間入室OK',
      'ご利用時間: 5時間〜',
      '全日共通料金',
      'ウェルカムドリンク付き',
      'アメニティ完備',
    ],
  },
  {
    name: 'Stay',
    subtitle: '宿泊プラン',
    price: '¥4,500',
    period: '〜',
    details: [
      'チェックイン: 15:00〜',
      'チェックアウト: 翌15:00（最長24時間）',
      '全日共通料金',
      'ウェルカムドリンク付き',
      '朝食サービス付き',
      'アメニティ完備',
    ],
    highlight: true,
  },
  {
    name: 'Free Time',
    subtitle: 'フリータイム',
    price: '¥4,300',
    period: '〜',
    details: [
      '4:00〜24:00（最長20時間）',
      '全日共通料金',
      'ウェルカムドリンク付き',
      'アメニティ完備',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Pricing</h2>
          <p className="text-gray-500 tracking-widest text-sm">ご利用料金</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative p-10 flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ${
                plan.highlight ? 'border-t-4 border-accent' : 'border-t-4 border-transparent'
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-0 right-0 bg-accent text-white text-xs tracking-widest px-3 py-1 font-medium">
                  RECOMMEND
                </span>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 tracking-widest mb-6">{plan.subtitle}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-serif">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {plan.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400">※料金は税込価格です。<br/>※季節により変動する場合がございます。</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
