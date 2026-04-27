import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 15, suffix: "+", label: "سنة خبرة" },
  { value: 200, suffix: "+", label: "عميل سعيد" },
  { value: 500, suffix: "+", label: "مشروع منجز" },
  { value: 99, suffix: "%", label: "نسبة الرضا" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="glass rounded-3xl p-8 md:p-14 shadow-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-2">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
