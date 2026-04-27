import { motion } from "framer-motion";
import { Calculator, FileText, TrendingUp, Briefcase, PiggyBank, ScrollText } from "lucide-react";

const services = [
  { icon: Calculator, title: "المحاسبة العامة", desc: "إعداد القوائم المالية، دفاتر الأستاذ، وكشوف الحسابات وفق المعايير الدولية." },
  { icon: FileText, title: "الإقرارات الضريبية", desc: "إعداد وتقديم إقرارات ضريبة القيمة المضافة وضريبة الدخل بدقة وفي الموعد." },
  { icon: TrendingUp, title: "الاستشارات المالية", desc: "تحليل مالي معمق، تخطيط استراتيجي، ودراسات الجدوى لقراراتك الكبرى." },
  { icon: Briefcase, title: "مراجعة الحسابات", desc: "مراجعة داخلية وخارجية احترافية لضمان الدقة والامتثال الكامل." },
  { icon: PiggyBank, title: "إدارة الرواتب", desc: "حساب وتسوية رواتب الموظفين، التأمينات، ومستحقات نهاية الخدمة." },
  { icon: ScrollText, title: "تأسيس الشركات", desc: "إجراءات التسجيل، الهيكل المحاسبي، وإعداد النظام المالي من الصفر." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-card/30">
      <div className="absolute inset-0 bg-radial-gold opacity-50" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3">خدماتي</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            حلول <span className="text-gradient-gold">شاملة</span> لكل احتياجاتك
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-2xl p-7 hover:border-gold transition-all overflow-hidden"
            >
              <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
