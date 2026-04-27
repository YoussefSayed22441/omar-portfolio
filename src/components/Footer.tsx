export default function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-card/40">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-gold flex items-center justify-center font-display text-primary-foreground font-bold">
            ع
          </div>
          <span className="font-display font-bold text-gradient-gold">عمر المحاسب</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} جميع الحقوق محفوظة · صُمم بعناية
        </p>
      </div>
    </footer>
  );
}
