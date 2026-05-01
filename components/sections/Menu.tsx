"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Info, Leaf } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

// --- Données du menu ---
const categories = [
  { id: "pitas", label: "Pitas & Durums" },
  { id: "lahmacun", label: "Lahmacun" },
  { id: "assiettes", label: "Assiettes" },
  { id: "routiers", label: "Routiers" },
  { id: "fritures", label: "Fritures" },
  { id: "boissons", label: "Boissons" },
];

const menuData = {
  pitas: [
    { name: "Pita Viande", smallPrice: "5,00€", largePrice: "9,00€", desc: "Viande de boeuf finement épicée.", tags: ["halal"] },
    { name: "Pita Poulet", smallPrice: "5,00€", largePrice: "9,00€", desc: "Poulet mariné maison.", tags: ["halal"] },
    { name: "Pita Mixte", smallPrice: "5,50€", largePrice: "9,00€", desc: "Mélange boeuf et poulet.", tags: ["halal"] },
    { name: "Pita Kofte", smallPrice: "5,50€", largePrice: "9,00€", desc: "Boulettes de viande hachée aux épices turques.", tags: ["halal"] },
    { name: "Pita Merguez", smallPrice: "5,50€", largePrice: "9,00€", desc: "Saucisses épicées.", tags: ["halal"] },
    { name: "Pita Végétarien", smallPrice: "4,50€", largePrice: "7,50€", desc: "Crudités fraîches et feta.", tags: ["veg"] },
  ],
  lahmacun: [
    { name: "Le Véritable Lahmacun", price: "6,00€", desc: "Galette turque à la viande hachée épicée, oignons, tomates et persil. Notre spécialité !", tags: ["halal", "specialty"] },
  ],
  assiettes: [
    { name: "Assiette Maison (2 pers.)", price: "31,00€", desc: "7 viandes au choix, servie avec frites et salade." },
    { name: "Assiette Calimero", price: "21,00€", desc: "5 viandes au choix, servie avec frites et salade." },
    { name: "Assiette Simple (1 viande)", price: "10,50€", desc: "1 viande au choix, servie avec frites et salade." },
  ],
  routiers: [
    { name: "Fricandelle", price: "6,00€", desc: "Dans un pain avec crudités." },
    { name: "Hamburger", price: "6,50€", desc: "Burger classique avec crudités." },
    { name: "Mexicanos", price: "7,00€", desc: "Snack épicé dans un pain." },
  ],
  fritures: [
    { name: "Frites", price: "1,90€", desc: "Frites fraîches croustillantes." },
    { name: "Chicken Fingers", price: "4,50€", desc: "Aiguillettes de poulet panées." },
    { name: "Pita Box", price: "4,50€", desc: "Viande, frites et sauce dans une box." },
  ],
  boissons: [
    { name: "Coca-Cola", price: "2,00€" },
    { name: "Fanta", price: "2,00€" },
    { name: "Sprite", price: "2,00€" },
    { name: "Ayran", price: "2,00€", desc: "Boisson traditionnelle turque à base de yaourt." },
    { name: "Eau", price: "2,00€" },
  ],
};

const sauces = [
  "Aïoli", "Tzatziki", "Harissa", "Samouraï", "Maison piquant", "Hannibal", 
  "Hawaï", "Andalouse", "Algérienne", "Brésil", "Cocktail", "Tartare", 
  "Ketchup curry", "Mayo", "Ananas"
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("pitas");
  
  // Intersection Observer pour le ScrollSpy
  useEffect(() => {
    const observers: { observer: IntersectionObserver; el: HTMLElement }[] = [];
    categories.forEach((cat) => {
      const el = document.getElementById(`section-${cat.id}`);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveCategory(cat.id);
                // Scroll la nav bar pour centrer l'onglet actif si besoin
                const navBtn = document.getElementById(`nav-${cat.id}`);
                if (navBtn) {
                  navBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                }
              }
            });
          },
          { rootMargin: "-20% 0px -70% 0px", threshold: 0.1 }
        );
        observer.observe(el);
        observers.push({ observer, el });
      }
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      // Offset for sticky header
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full pb-20 bg-creme-light">
      
      {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 w-full bg-creme-light/90 backdrop-blur-md border-b border-charcoal/5 shadow-sm">
        <div className="container-page py-3">
          <ul className="flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide snap-x">
            {categories.map((cat) => (
              <li key={cat.id} className="snap-start">
                <button
                  id={`nav-${cat.id}`}
                  onClick={() => scrollToSection(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-olive text-white shadow-soft"
                      : "bg-white border border-charcoal/10 text-charcoal/70 hover:border-olive/50 hover:text-olive"
                  }`}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-8 space-y-16">
        
        {/* Pitas & Durums */}
        <div id="section-pitas" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-6">Pitas & Durums</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuData.pitas.map((item, idx) => (
              <MenuItemCard key={idx} item={item} hasSizes />
            ))}
          </div>
        </div>

        {/* Lahmacun */}
        <div id="section-lahmacun" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-6">Lahmacun</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuData.lahmacun.map((item, idx) => (
              <MenuItemCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Assiettes */}
        <div id="section-assiettes" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-6">Assiettes de Viandes</h2>
          <p className="text-charcoal/70 mb-6">Toutes nos assiettes sont servies avec frites fraîches et salade.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuData.assiettes.map((item, idx) => (
              <MenuItemCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Routiers */}
        <div id="section-routiers" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-6">Routiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuData.routiers.map((item, idx) => (
              <MenuItemCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Fritures */}
        <div id="section-fritures" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-6">Fritures & Snacks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuData.fritures.map((item, idx) => (
              <MenuItemCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Boissons */}
        <div id="section-boissons" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-6">Boissons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menuData.boissons.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-charcoal/5 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-charcoal">{item.name}</h3>
                  {item.desc && <p className="text-sm text-charcoal/60 mt-1">{item.desc}</p>}
                </div>
                <span className="font-bold text-olive">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sauces */}
        <div className="pt-8 border-t border-charcoal/10">
          <h2 className="text-2xl font-display text-charcoal mb-4">Nos Sauces Maison (Incluses)</h2>
          <div className="flex flex-wrap gap-2">
            {sauces.map((sauce, idx) => (
              <span key={idx} className="px-4 py-1.5 bg-white border border-charcoal/10 rounded-full text-sm font-medium text-charcoal/80">
                {sauce}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Composant pour une carte Menu
function MenuItemCard({ item, hasSizes = false }: { item: any; hasSizes?: boolean }) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="item-1" className="bg-white rounded-2xl shadow-sm border border-charcoal/5 overflow-hidden">
        <Accordion.Header className="w-full">
          <Accordion.Trigger className="w-full flex justify-between items-start p-5 text-left hover:bg-black/[0.02] transition-colors group">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg md:text-xl text-charcoal font-display">{item.name}</h3>
                {item.tags?.includes("veg") && <Leaf className="w-4 h-4 text-olive" />}
              </div>
              
              {hasSizes ? (
                <div className="flex gap-4 mt-3">
                  <span className="text-sm font-semibold text-charcoal bg-olive/10 px-3 py-1.5 rounded-lg">Petit: <span className="text-olive">{item.smallPrice}</span></span>
                  <span className="text-sm font-semibold text-charcoal bg-olive/10 px-3 py-1.5 rounded-lg">Grand: <span className="text-olive">{item.largePrice}</span></span>
                </div>
              ) : (
                <div className="text-olive font-bold mt-1 text-lg">{item.price}</div>
              )}
            </div>
            
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-creme-light border border-charcoal/10 group-hover:border-olive transition-colors">
              <ChevronDown className="w-4 h-4 text-charcoal/60 group-data-[state=open]:rotate-180 transition-transform duration-300" />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <div className="p-5 pt-0 border-t border-charcoal/5 mt-2 text-charcoal/80">
            <p className="mb-4 leading-relaxed">{item.desc}</p>
            {item.tags?.includes("halal") && (
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal bg-charcoal/5 px-3 py-1 rounded-full uppercase tracking-wider">
                100% Halal
              </div>
            )}
            <div className="mt-4 flex gap-2 items-center text-sm text-charcoal/60 bg-creme-light/50 p-3 rounded-lg border border-charcoal/5">
              <Info className="w-4 h-4 text-olive" />
              <span>Allergènes: {item.tags?.includes("veg") ? "Gluten, Lait" : "Gluten"}</span>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
