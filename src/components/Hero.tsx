import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";

const ThreeScene = lazy(() => import("./ThreeScene"));

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-radial-gold"
    >
      {/* 3D background */}
      <div className="absolute inset-0 opacity-80">
        <Suspense fallback={null}>
          <ThreeScene />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-32 md:py-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs md:text-sm text-primary">محاسب قانوني معتمد · خبرة +15 سنة</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block">حلول محاسبية</span>
            <span className="block shimmer-text">دقيقة وموثوقة</span>
            <span className="block text-foreground/90">لأعمالك</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            أقدم خدمات محاسبية متكاملة، استشارات ضريبية، ومراجعة مالية احترافية تساعد شركتك على النمو والامتثال الكامل للأنظمة.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-bold shadow-gold"
            >
              احجز استشارة
              <ArrowLeft className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold text-primary hover:bg-primary/10 transition-colors"
            >
              اكتشف الخدمات
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
