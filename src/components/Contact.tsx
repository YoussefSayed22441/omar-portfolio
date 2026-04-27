import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const EMAIL = "omar.accountant@example.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `رسالة من ${form.name}`);
    const body = encodeURIComponent(
      `الاسم: ${form.name}\nالبريد: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const info = [
    { icon: Phone, label: "اتصال", value: "+966 50 000 0000" },
    { icon: Mail, label: "بريد", value: EMAIL },
    { icon: MapPin, label: "العنوان", value: "الرياض، المملكة العربية السعودية" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-radial-gold">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3">تواصل معي</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            لنبدأ <span className="text-gradient-gold">العمل معًا</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            احجز استشارتك المجانية اليوم وسأرد عليك خلال 24 ساعة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {info.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                  <p className="font-semibold truncate">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 shadow-elegant space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">الاسم</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  placeholder="اسمك الكامل"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">البريد الإلكتروني</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">الموضوع</label>
              <input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                placeholder="موضوع الرسالة"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">الرسالة</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
                placeholder="كيف يمكنني مساعدتك؟"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-gold text-primary-foreground font-bold shadow-gold"
            >
              إرسال الرسالة
              <Send className="h-4 w-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
