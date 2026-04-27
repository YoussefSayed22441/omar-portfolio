import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  {
    name: "خالد العتيبي",
    role: "مدير عام · شركة النجم التجارية",
    text: "خدمة استثنائية ودقة عالية في العمل. الأستاذ عمر ساعدنا في تنظيم حساباتنا وتقليل المصاريف بنسبة 30% خلال السنة الأولى.",
  },
  {
    name: "سارة المطيري",
    role: "مؤسسة · متجر إلكتروني",
    text: "أفضل محاسب تعاملت معه. سريع الاستجابة، يشرح كل شيء بوضوح، وتعامله احترافي وراقي. أنصح به بقوة.",
  },
  {
    name: "محمد الزهراني",
    role: "شريك · مكتب استشارات هندسية",
    text: "الإقرارات الضريبية أصبحت أسهل بكثير معه. خبرة عميقة بالأنظمة السعودية وحلول مبتكرة لكل تحدٍ مالي.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3">آراء العملاء</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            ماذا يقول <span className="text-gradient-gold">عملائي</span>
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-7 relative hover:shadow-gold transition-shadow"
            >
              <Quote className="absolute top-5 left-5 h-10 w-10 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 relative">{t.text}</p>
              <div className="pt-4 border-t border-border">
                <p className="font-display font-bold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
