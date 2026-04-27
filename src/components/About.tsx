import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldCheck } from "lucide-react";

const credentials = [
  { icon: Award, title: "محاسب قانوني معتمد", desc: "زمالة الهيئة السعودية للمحاسبين القانونيين (SOCPA)" },
  { icon: GraduationCap, title: "ماجستير محاسبة", desc: "جامعة الملك سعود — مرتبة الشرف الأولى" },
  { icon: ShieldCheck, title: "شهادة CPA دولية", desc: "محاسب قانوني أمريكي معتمد" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold text-primary mb-3">من أنا</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              شريكك المالي <span className="text-gradient-gold">الموثوق</span>
            </h2>
            <div className="gold-divider w-24 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg">
              أنا عمر السالم، محاسب قانوني بخبرة تتجاوز 15 عامًا في تقديم الخدمات المحاسبية والاستشارات المالية لأكثر من 200 شركة في المملكة العربية السعودية ودول الخليج.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              أؤمن بأن المحاسبة ليست أرقامًا فقط، بل أداة استراتيجية لاتخاذ قرارات أعمال أذكى. أعمل مع كل عميل كشريك حقيقي، يفهم تحدياته ويصمم له حلولًا مالية ذكية تدفع نموه.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {credentials.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 flex items-start gap-5 hover:shadow-gold transition-shadow"
              >
                <div className="shrink-0 h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <c.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
