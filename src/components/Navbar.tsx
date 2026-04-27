import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من أنا" },
  { href: "#services", label: "الخدمات" },
  { href: "#stats", label: "الإنجازات" },
  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#contact", label: "تواصل" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-elegant" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-display text-primary-foreground font-bold text-lg shadow-gold">
            ع
          </div>
          <span className="font-display text-lg md:text-xl font-bold text-gradient-gold">
            عمر المحاسب
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-gradient-gold text-primary-foreground font-semibold text-sm shadow-gold hover:scale-105 transition-transform"
        >
          استشارة مجانية
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-primary"
          aria-label="القائمة"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden glass border-t border-gold overflow-hidden"
        >
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
