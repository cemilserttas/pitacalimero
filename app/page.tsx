"use client";

import { useEffect, useState } from "react";
import { translations, Locale } from "./translations";

export default function Page() {
  const [locale, setLocale] = useState<Locale>('fr');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("pitas");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [storeStatus, setStoreStatus] = useState({ color: 'red', text: 'Chargement...' });

  useEffect(() => {
    // Language detection
    const browserLang = navigator.language.split('-')[0];
    const savedLang = localStorage.getItem('calimero-lang');
    if (savedLang && ['fr', 'en', 'nl', 'de'].includes(savedLang)) {
      setLocale(savedLang as Locale);
    } else if (['fr', 'en', 'nl', 'de'].includes(browserLang)) {
      setLocale(browserLang as Locale);
    }
  }, []);

  const t = translations[locale];

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Dimanche, 5 = Vendredi
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;
      const eveningEnd = day === 5 ? 24 : 23;

      let status = { color: 'red', text: t.status.closed_tomorrow };

      if (currentTime >= 11 && currentTime < 14.5) {
        if (14.5 - currentTime <= 1) {
          status = { color: 'orange', text: t.status.closes_in(Math.ceil((14.5 - currentTime) * 60)) };
        } else {
          status = { color: 'green', text: t.status.open_until_1430 };
        }
      } else if (currentTime >= 17 && currentTime < eveningEnd) {
        if (eveningEnd - currentTime <= 1) {
          status = { color: 'orange', text: t.status.closes_in(Math.ceil((eveningEnd - currentTime) * 60)) };
        } else {
          status = { color: 'green', text: t.status.open_until_night(eveningEnd === 24 ? '00:00' : '23:00') };
        }
      } else if (currentTime < 11) {
        status = { color: 'red', text: t.status.closed_opens_11 };
      } else if (currentTime >= 14.5 && currentTime < 17) {
        status = { color: 'red', text: t.status.closed_opens_17 };
      }

      setStoreStatus(status);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, [t.status]);

  // Handle Scroll logic for hiding header and ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);

      const sections = t.categories.map(c => document.getElementById(c.id));
      const scrollPosition = currentScrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(t.categories[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, t.categories]);

  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (langCode: Locale) => {
    setLocale(langCode);
    localStorage.setItem('calimero-lang', langCode);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* TopAppBar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isHeaderVisible 
            ? "translate-y-0 bg-[#faf9f7]/90 dark:bg-[#0f1110]/90 backdrop-blur-xl shadow-sm" 
            : "-translate-y-full bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="material-symbols-outlined text-[#506600] dark:text-[#a7c64a] scale-102 active:scale-95 transition-transform duration-300 ease-out p-2 rounded-full hover:bg-[#e8e8e6] z-50 relative"
            >
              {isMobileMenuOpen ? "close" : "menu"}
            </button>
            <span 
              className="font-['Epilogue'] font-black tracking-tighter text-[#1a1c1b] dark:text-[#faf9f7] text-2xl uppercase cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Pita Calimero
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div 
              onClick={(e) => scrollToId(e, 'horaires')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-[10px] md:text-xs font-bold cursor-pointer hover:scale-105 transition-transform border border-outline-variant/20 shadow-sm"
            >
              <div className={`w-2 h-2 rounded-full animate-pulse ${storeStatus.color === 'green' ? 'bg-[#84cc16]' : storeStatus.color === 'orange' ? 'bg-[#f97316]' : 'bg-[#ef4444]'}`}></div>
              <span className={storeStatus.color === 'green' ? 'text-[#65a30d]' : storeStatus.color === 'orange' ? 'text-[#ea580c]' : 'text-[#dc2626]'}>{storeStatus.text}</span>
            </div>
            <a href="tel:+32466367157" className="hidden md:flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-sm">phone</span>
              0466 36 71 57
            </a>
          </div>
        </div>
      </nav>

      {/* The small colored line that stays when header is hidden */}
      <div 
        className={`fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-primary-container z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isHeaderVisible ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        }`}
      />

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#faf9f7] dark:bg-[#1a1c1b] z-40 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col min-h-full h-full overflow-y-auto pt-24 px-8 pb-8">
          <div className="flex flex-col gap-6 text-2xl font-display font-black text-on-surface">
            <a href="#menu-nav" onClick={(e) => scrollToId(e, 'menu-nav')} className="hover:text-primary transition-colors">{t.nav.menu}</a>
            <a href="#histoire" onClick={(e) => scrollToId(e, 'histoire')} className="hover:text-primary transition-colors">{t.nav.history}</a>
            <a href="#contact" onClick={(e) => scrollToId(e, 'contact')} className="hover:text-primary transition-colors">{t.nav.contact}</a>
            <a href="#localisation" onClick={(e) => scrollToId(e, 'localisation')} className="hover:text-primary transition-colors">{t.nav.location}</a>
          </div>

          <div className="mt-8 pt-8 border-t border-outline-variant/20">
            <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4">{t.nav.lang}</h4>
            <div className="flex gap-4">
              <button onClick={() => changeLanguage('fr')} className={`w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center font-bold text-sm hover:bg-primary hover:text-on-primary transition-all ${locale === 'fr' ? 'bg-primary text-on-primary' : ''}`}>FR</button>
              <button onClick={() => changeLanguage('en')} className={`w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center font-bold text-sm hover:bg-primary hover:text-on-primary transition-all ${locale === 'en' ? 'bg-primary text-on-primary' : ''}`}>EN</button>
              <button onClick={() => changeLanguage('nl')} className={`w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center font-bold text-sm hover:bg-primary hover:text-on-primary transition-all ${locale === 'nl' ? 'bg-primary text-on-primary' : ''}`}>NL</button>
              <button onClick={() => changeLanguage('de')} className={`w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center font-bold text-sm hover:bg-primary hover:text-on-primary transition-all ${locale === 'de' ? 'bg-primary text-on-primary' : ''}`}>DE</button>
            </div>
          </div>

          <div className="mt-auto">
            <div className="bg-primary-container/20 p-6 rounded-2xl">
              <h4 className="font-bold mb-2">{t.nav.order}</h4>
              <a href="tel:+32466367157" className="block text-3xl font-display font-black text-primary hover:underline hover:scale-105 transition-all w-fit">
                0466 36 71 57
              </a>
              <p className="text-sm mt-2 text-on-surface-variant">{t.nav.open_days}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-black">
          <iframe 
            src="https://www.youtube.com/embed/NKoJDyKo1QQ?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=NKoJDyKo1QQ&playsinline=1"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-[72px]">
          <span className="font-label text-label-md uppercase tracking-[0.2em] text-[#a7c64a] mb-4 block drop-shadow-md">
            {t.hero.welcome}
          </span>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white mb-6 drop-shadow-xl break-words max-w-full">
            {t.hero.title_1}<span className="text-[#a7c64a] italic">{t.hero.title_2}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-8 drop-shadow-md">
            {t.hero.desc}
          </p>
          <div className="flex items-center gap-4">
            <a
              className="px-8 py-4 bg-primary text-on-primary rounded-xl font-semibold scale-102 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 text-center inline-block cursor-pointer"
              onClick={(e) => scrollToId(e, 'menu-nav')}
            >
              {t.hero.btn}
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12">

        {/* Menu Navigation */}
        <section
          className={`sticky z-30 py-4 -mx-4 px-4 mb-12 border-b border-outline-variant/20 shadow-sm overflow-hidden transition-all duration-500 bg-surface/90 backdrop-blur-xl ${
            isHeaderVisible ? "top-[72px]" : "top-0"
          }`}
          id="menu-nav"
        >
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-3 pb-2 max-w-7xl mx-auto">
            {t.categories.map((cat) => (
              <a 
                key={cat.id}
                className={`px-6 py-2.5 rounded-full font-medium whitespace-nowrap text-sm transition-all cursor-pointer select-none ${
                  activeSection === cat.id 
                    ? "bg-primary text-on-primary font-bold shadow-sm hover:scale-105 active:scale-95" 
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:scale-105 active:scale-95"
                }`}
                onClick={(e) => scrollToId(e, cat.id)}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </section>

        {/* Section: Pitas & Durums */}
        <section className="mb-16 scroll-mt-32" id="pitas">
          <h2 className="font-display font-black text-3xl mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            {t.pitas_section.title}
          </h2>
          <p className="text-on-surface-variant mb-8 -mt-4 text-sm italic">
            {t.pitas_section.desc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.pitas_section.items.map((item, idx) => (
              <div key={idx} className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/10 hover:shadow-md transition-all group">
                {item.img && (
                  <div className="aspect-[16/9] mb-4 rounded-lg overflow-hidden bg-white">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-display font-bold text-lg">{item.name}</h4>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-tighter">{t.pitas_section.size}</div>
                    <div className="font-display font-black text-primary">{item.p} / {item.g}</div>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant mb-4">{item.desc}</p>
                <details className="group/acc">
                  <summary className="flex items-center gap-2 cursor-pointer list-none text-on-surface-variant/60 font-bold text-[10px] uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs transition-transform group-open/acc:rotate-180">expand_more</span> {t.pitas_section.allergens}
                  </summary>
                  <div className="mt-2 flex gap-2">
                    <span className="w-6 h-6 rounded-full bg-error-container/20 flex items-center justify-center material-symbols-outlined text-[12px] text-error" title="Gluten">bakery_dining</span>
                    {(item.name.includes("Feta") || item.name.includes("Vegetarian") || item.name.includes("Vegetarisch") || item.name.includes("Vegetarisch")) && (
                      <span className="w-6 h-6 rounded-full bg-error-container/20 flex items-center justify-center material-symbols-outlined text-[12px] text-error" title="Lactose">water_drop</span>
                    )}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Lahmacun (Signature) */}
        <section className="mb-16 scroll-mt-32" id="lahmacun">
          <div className="group bg-surface-container-lowest rounded-xl p-8 border-2 border-primary-container relative overflow-hidden flex flex-col md:flex-row gap-8 transition-all hover:shadow-xl">
            <div className="absolute top-4 right-4 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
              {t.lahmacun.badge}
            </div>
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden">
              <img
                alt="Traditional Turkish Lahmacun"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyvG5OhAdAi9SSysyFlkCT5LI9kvpLW0NcAEzdK3aj_Dpkt1_T41iTF9_QwBx1WxZbpOj9gnFKLb8_mMuCRr17RRsvDaYDN6Y7fLX-cV1BMbVK7B4rIinEThC5CsidH7bN6kwhWaQzYHNuBjUM22UZOafCtXbPcqug9ZtA_vDIE7pIKIvd0Aa_CTGKJCd1hX68d_9tKtZiBxwx_5ua-_XRK64is99mE7rJbOWwlkmQEK8XT_qFoWfnHoTg_-_8aN_L46R8txz4AIM"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="font-display font-black text-3xl tracking-tight mb-2">{t.lahmacun.title}</h2>
              <span className="font-display font-bold text-3xl text-primary mb-4">{t.lahmacun.price}</span>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                {t.lahmacun.desc}
              </p>
              <details className="group/acc">
                <summary className="flex items-center gap-2 cursor-pointer list-none text-primary font-bold text-sm uppercase tracking-wider">
                  <span className="material-symbols-outlined transition-transform group-open/acc:rotate-180">expand_more</span>
                  {t.lahmacun.details}
                </summary>
                <div className="mt-4 pt-4 border-t border-outline-variant/20 space-y-4">
                  <p className="text-sm text-on-surface-variant">
                    {t.lahmacun.ingredients}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[16px]">bakery_dining</span> {t.lahmacun.gluten}
                    </div>
                    <div className="flex items-center gap-1 bg-tertiary-container/30 px-2 py-1 rounded text-[10px] font-bold text-on-tertiary-container">
                      <span className="material-symbols-outlined text-[16px]">eco</span> {t.lahmacun.maison}
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Section: Assiettes */}
        <section className="mb-16 scroll-mt-32" id="assiettes">
          <h2 className="font-display font-black text-3xl mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            {t.assiettes_section.title}
          </h2>
          <p className="text-on-surface-variant mb-8 -mt-4 text-sm italic">
            {t.assiettes_section.desc}
          </p>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth">
            {t.assiettes_section.items.map((item, idx) => (
              <div key={idx} className="bg-on-surface text-surface rounded-xl p-8 flex flex-col gap-6 overflow-hidden group border border-on-surface min-w-[85vw] md:min-w-[400px] flex-1 snap-center shadow-xl">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-container">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={item.img}
                  />
                  {idx < 2 && (
                    <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-on-primary shadow-sm">
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="font-display font-black text-3xl mb-1">{item.name}</h3>
                  <p className="text-surface/70 mb-4 italic text-sm">{item.desc}</p>
                  <div className="font-display font-bold text-4xl mb-6 text-primary-container">{item.price}</div>
                  <ul className="grid grid-cols-1 gap-y-2 mt-auto text-sm text-surface/80">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-sm">check_circle</span> {item.viandes}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-sm">check_circle</span> {t.assiettes_section.frites}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-sm">check_circle</span> {idx < 2 ? t.assiettes_section.sauces : t.assiettes_section.sauce_single}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Menu Étudiant */}
        <section className="mb-16 scroll-mt-32" id="etudiant">
          <h2 className="font-display font-black text-3xl mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            {t.etudiant.title}
          </h2>
          <div className="bg-primary text-on-primary rounded-2xl p-8 relative overflow-hidden shadow-xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4 uppercase tracking-widest backdrop-blur-sm border border-white/30">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {t.etudiant.happy}
                </div>
                <h3 className="font-display font-black text-4xl mb-4">{t.etudiant.subtitle}</h3>
                <p className="text-on-primary/90 text-lg max-w-md mb-6 leading-relaxed">
                  {t.etudiant.desc}
                </p>
                <div className="flex gap-2">
                  <span className="material-symbols-outlined bg-white/20 p-2 rounded-full backdrop-blur-sm shadow-sm">school</span>
                  <span className="material-symbols-outlined bg-white/20 p-2 rounded-full backdrop-blur-sm shadow-sm">local_pizza</span>
                  <span className="material-symbols-outlined bg-white/20 p-2 rounded-full backdrop-blur-sm shadow-sm">local_drink</span>
                </div>
              </div>
              <div className="text-center bg-white text-primary p-6 rounded-3xl min-w-[200px] shadow-lg transform rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                <span className="block text-sm font-bold uppercase tracking-widest mb-1 text-on-surface-variant">{t.etudiant.price_tag}</span>
                <span className="block font-display font-black text-6xl">{t.etudiant.price}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Routiers & Pita Box */}
        <section className="mb-16 scroll-mt-32" id="routiers">
          <h2 className="font-display font-black text-3xl mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            {t.routiers.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-primary/5 border-2 border-primary/20 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded inline-block mb-3 uppercase">
                  {t.routiers.badge}
                </div>
                <h4 className="font-display font-black text-2xl mb-2">{t.routiers.box_title}</h4>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {t.routiers.box_desc}
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-display font-black text-primary">{t.routiers.box_price}</span>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {t.routiers.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                    <span className={idx === 0 ? "font-bold" : "font-medium"}>{item.name}</span>
                    <span className="font-display font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Fritures & Snacks */}
        <section className="mb-16 scroll-mt-32" id="fritures">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-display font-black text-3xl mb-4">{t.fritures.title}</h2>
              <p className="text-on-surface-variant mb-8 text-sm">
                {t.fritures.desc}
              </p>
              <div className="bg-surface-container-high rounded-xl p-6 flex items-center gap-4 group">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    alt="Belgian fries"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQeOOt3757FdAD8bSY5t465FqNHuUPgHIhyNLUz0-5ZRl3wRGrW3LYjAxhsS9fY-rLITCcRmfbLBHZ8E9c9z3t2Omcd43bZFSB9tnq59PLCURFroNjaXvIqoKhLckVx9grAaWwGzfr8Ygvv252NSqpqTUAId8nQc9HbRAzK_h-PBS0rdWsD4PBVjpOXxM_vKnxrl5g3P3OR8MyqyLssMbDnO0iP7m0tf_Hl2J0tlUKkMfZ5esk2qGBCpHFCudKbVyY_Js9pK272fk"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <span className="font-bold">{t.fritures.frites_title}</span>
                    <span className="font-bold text-primary">{t.fritures.frites_price}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[9px] font-black px-1.5 py-0.5 bg-primary/20 text-primary rounded">
                      {t.fritures.vegan}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                {t.fritures.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                    <span>{item.name}</span>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Sauces & Boissons */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 scroll-mt-32" id="boissons">
          <div className="bg-tertiary-container/10 border border-tertiary-container/30 rounded-2xl p-8">
            <h3 className="font-display font-black text-2xl mb-6 flex items-center gap-2 text-on-tertiary-container">
              <span className="material-symbols-outlined">restaurant_menu</span>
              {t.boissons.sauces_title}
            </h3>
            <p className="text-sm mb-6 text-on-tertiary-container/80 italic">
              {t.boissons.sauces_desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.boissons.sauces_list.map((s, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-surface-container-lowest rounded-lg text-xs font-bold shadow-sm border border-outline-variant/10 text-on-surface-variant">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-black text-2xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">local_bar</span>
                {t.boissons.drinks_title}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                  <span className="font-medium">{t.boissons.softs}</span>
                  <span className="font-display font-bold text-primary text-xl">{t.boissons.price}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                  <span className="font-medium">{t.boissons.water}</span>
                  <span className="font-display font-bold text-primary text-xl">{t.boissons.price}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-xl border border-primary/20">
                  <div className="flex flex-col">
                    <span className="font-bold text-primary">{t.boissons.ayran}</span>
                    <span className="text-[10px] uppercase tracking-wider text-primary/70">{t.boissons.ayran_desc}</span>
                  </div>
                  <span className="font-display font-bold text-primary text-xl">{t.boissons.price}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-surface-container-high rounded-xl text-center">
              <p className="text-xs text-on-surface-variant/60 font-bold uppercase tracking-widest">
                {t.boissons.taxes}
              </p>
            </div>
          </div>
        </section>

        {/* Legend Allergens */}
        <section className="mb-16 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/20">
          <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">info</span>
            {t.legend.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-on-surface-variant">
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-error-container/20 flex items-center justify-center material-symbols-outlined text-[12px] text-error">bakery_dining</span> {t.legend.gluten}</div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-error-container/20 flex items-center justify-center material-symbols-outlined text-[12px] text-error">water_drop</span> {t.legend.lactose}</div>
            <div className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-tertiary-container/30 flex items-center justify-center material-symbols-outlined text-[12px] text-on-tertiary-container">eco</span> {t.legend.maison}</div>
            <div className="flex items-center gap-2"><span className="px-1.5 py-0.5 bg-primary/20 text-primary text-[10px] font-black rounded">VEGAN</span> {t.legend.vegan}</div>
          </div>
        </section>

        {/* Histoire */}
        <section className="mb-24 scroll-mt-32" id="histoire">
          <div className="bg-primary text-on-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')" }}></div>
            <h2 className="font-display font-black text-4xl mb-6 relative z-10">{t.histoire.title}</h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed relative z-10 text-on-primary/90">
              {t.histoire.desc}
            </p>
          </div>
        </section>

        {/* Horaires */}
        <section className="mb-12 scroll-mt-32" id="horaires">
          <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 text-center border border-outline-variant/20">
            <h2 className="font-display font-black text-3xl mb-6">{t.horaires.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-surface p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold mb-2">{t.horaires.lun_jeu}</h4>
                <p className="text-on-surface-variant">11:00 - 14:30</p>
                <p className="text-on-surface-variant">17:00 - 23:00</p>
              </div>
              <div className="bg-surface p-6 rounded-2xl shadow-sm ring-2 ring-primary/20">
                <h4 className="font-bold mb-2 text-primary">{t.horaires.ven}</h4>
                <p className="text-on-surface-variant">11:00 - 14:30</p>
                <p className="text-on-surface-variant">17:00 - 00:00</p>
              </div>
              <div className="bg-surface p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold mb-2">{t.horaires.sam_dim}</h4>
                <p className="text-on-surface-variant">11:00 - 14:30</p>
                <p className="text-on-surface-variant">17:00 - 23:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f4f4f1] dark:bg-[#1a1c1b] full-width py-12 px-8 border-t-4 border-primary" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div className="space-y-4 text-center md:text-left">
            <span className="font-['Epilogue'] font-bold text-[#1a1c1b] dark:text-[#faf9f7] text-3xl">
              Pita Calimero
            </span>
            <p className="font-['Plus_Jakarta_Sans'] text-label-md uppercase tracking-[0.05em] text-[#1a1c1b]/70 dark:text-[#faf9f7]/70">
              {t.footer.since}
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#1a1c1b]/70 dark:text-[#faf9f7]/70 flex items-center justify-center md:justify-start gap-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Rue du Commerce 2 A, 4960 Malmedy
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/p/Grille-Calimero-Pita-61556068083922/" target="_blank" rel="noopener noreferrer" className="bg-[#506600] text-white p-2.5 rounded-full hover:scale-110 transition-transform flex items-center justify-center w-11 h-11 shadow-md hover:shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="https://share.google/dRhudv2OoYSNci71E" target="_blank" rel="noopener noreferrer" className="bg-[#506600] text-white p-2.5 rounded-full hover:scale-110 transition-transform flex items-center justify-center w-11 h-11 shadow-md hover:shadow-lg">
                <span className="material-symbols-outlined text-[24px]">location_on</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end justify-center gap-4" id="localisation">
            <p className="font-['Plus_Jakarta_Sans'] text-label-md uppercase tracking-[0.05em] text-[#1a1c1b]/70 dark:text-[#faf9f7]/70">
              {t.footer.takeaway}
            </p>
            <a 
              href="tel:+32466367157" 
              className="flex items-center gap-3 bg-[#506600] text-white px-8 py-4 rounded-full font-display font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#506600]/20"
            >
              <span className="material-symbols-outlined text-3xl">phone</span>
              0466 36 71 57
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/30 text-center">
          <p className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-[0.1em] text-[#1a1c1b]/40">
            {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
          </p>
        </div>
      </footer>
    </>
  );
}
