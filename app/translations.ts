export type Locale = 'fr' | 'en' | 'nl' | 'de';

export const translations = {
  fr: {
    nav: {
      menu: "Menu Complet",
      history: "L'Histoire",
      contact: "Contact",
      location: "Localisation",
      lang: "Langue / Language",
      order: "Commander maintenant",
      open_days: "Ouvert du mardi au dimanche",
    },
    status: {
      loading: "Chargement...",
      closed_tomorrow: "Fermé - Ouvre demain à 11h00",
      closes_in: (min: number) => `Ferme dans ${min} min`,
      open_until_1430: "Ouvert jusqu'à 14h30",
      open_until_night: (time: string) => `Ouvert jusqu'à ${time}`,
      closed_opens_11: "Fermé - Ouvre à 11h00",
      closed_opens_17: "Fermé - Ouvre à 17h00",
    },
    hero: {
      welcome: "Bienvenue chez Pita Calimero",
      title_1: "L'authenticité turque par ",
      title_2: "Kadir",
      desc: "Découvrez l'authenticité de nos recettes maison, où chaque pain est pétri avec passion et chaque viande marinée selon nos secrets de famille.",
      btn: "Explorer le Menu",
      badge_1: "Fait",
      badge_2: "Maison",
    },
    categories: [
      { id: "pitas", label: "Pitas & Durums" },
      { id: "lahmacun", label: "Lahmacun" },
      { id: "assiettes", label: "Assiettes" },
      { id: "routiers", label: "Routiers" },
      { id: "fritures", label: "Fritures" },
      { id: "boissons", label: "Boissons" }
    ],
    pitas_section: {
      title: "Pitas & Durums",
      desc: "Servis dans notre pain artisanal pétri chaque matin. Choix de sauce inclus.",
      size: "Petit / Grand",
      allergens: "Allergènes",
      items: [
        { name: "Pita Viande", desc: "Viande de boeuf et agneau marinée maison", p: "6,00€", g: "7,50€", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-GWEar56Rcw1ZLR9aVAc_ivClMlEFluaPvj7hdAke2oxljl-m8QCAI8gnst3LIHEx6kHsd8foxXCAi_KTT6RuSLj3kMDbXVG_eRyC14cD7hm4LEbfR3Da7WIFij6MYwmKjDIZJIYDUCt58_Z2FC8eIMFRI5Kn46V7jIL4IgbIfq48qESNb7Ryq7SK0X6EvcDCHZelkRQfKolgtfXUYSmEoS2PpesCE_KwVRzIm9PvNXvaJBHeQdC0WXZf31hKAivSXgs88gfccg4" },
        { name: "Pita Poulet", desc: "Poulet fermier grillé aux épices orientales", p: "6,00€", g: "7,50€", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZfYV2Jts2Vd34cWM-EmpGB0Kxr9uNA3j563jzXIIh2d3ExtTeGKBD5ovi5LzBS95fnBqSCqLKkiB_b9VbV_sjHbGrbLzquQZOm3RdaLZEnMAghRtMndFSYrUCyMw-L-b6dannKytnKkXmSjUKwbTen2yosmETKyHsNduJ7nXbPt3iSJg0ce6PRhBjookeMm95Rk12wdXaZ9Qlcn12caLZsffLbcSa6LJlWQya8IjahrhDmWyEFz2hCYHBCwlE-tJCjNLBwsjgpI" },
        { name: "Mixte", desc: "Mélange savoureux de viande et poulet", p: "6,50€", g: "8,00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Kofte", desc: "Boulettes de viande hachée aux herbes fraîches", p: "7,00€", g: "8,00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Merguez", desc: "Merguez artisanales relevées", p: "7,00€", g: "8,00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Brochette", desc: "Brochettes de boeuf tendres", p: "7,50€", g: "9,00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Blanc Poulet", desc: "Filet de poulet blanc grillé", p: "7,50€", g: "9,00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Adana", desc: "Brochette de viande hachée épicée traditionnelle", p: "7,00€", g: "9,00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Hawaii", desc: "Poulet grillé et tranches d'ananas frais", p: "7,00€", g: "8,00€", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
        { name: "Feta", desc: "Pita végétarienne avec véritable feta et crudités", p: "6,50€", g: "8,00€", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800" },
        { name: "Végétarien", desc: "Assortiment de crudités fraîches et mezzés", p: "5,00€", g: "6,00€", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    lahmacun: {
      badge: "Signature",
      title: "Le Véritable Lahmacun",
      price: "6,00€",
      desc: "Notre spécialité historique : une galette fine garnie d'un mélange de viande et légumes frais selon la tradition anatolienne. Préparé sur place.",
      details: "Détails & Allergènes",
      ingredients: "Pain artisanal, viande hachée de boeuf, oignons, tomates, persil, épices orientales.",
      gluten: "GLUTEN",
      maison: "MAISON"
    },
    assiettes_section: {
      title: "Nos Assiettes Gourmandes",
      desc: "Toutes nos assiettes sont servies généreusement avec frites fraîches et salade composée.",
      items: [
        { badge: "Le Festin pour 2", name: "Assiette Maison", desc: "7 viandes : pita viande, poulet, brochette, côte d'agneau, merguez, kofte, adana", price: "31,00€", viandes: "7 viandes marinées", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvilY4lGnt3XUc47b20QElFGfsdzdtVQ--vYS9vs8v_KSgXLAqZ00ne1X2wTnzyVYZNRHXkJmfGcKcZVniFGpWA2gqClOG2XY9PQb7BSC5kTp2Cj1CVj4ktfUZuwPmmJzX-ItlkaOgIeWRmiak2DFhQ6W-Dz7LYyLUCOOhtvhe6sObLDxo-TMEpqvJlITb-GldoOsflvHO8cGIR19wuoxgSpuPS4CCNRLrHCMKAkUC9gVOjUHG0P-o06vVf5aBCvG5_VLs7Xd7uZY" },
        { badge: "Signature", name: "Assiette Calimero", desc: "5 viandes : pita viande, poulet, brochette, merguez, kofte", price: "20,00€", viandes: "5 viandes variées", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { badge: "Côte d'Agneau", name: "Assiette Côte d'Agneau", desc: "Côte d'agneau marinée, frites et salade", price: "20,00€", viandes: "Côte d'agneau", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800" },
        { badge: "Classique", name: "Assiette Salade", desc: "Assiette salade fraîche composée", price: "7,00€", viandes: "Salade fraîche", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
        { badge: "Rapide", name: "Assiette Salata-Frites", desc: "Salade et frites", price: "8,00€", viandes: "Salade + frites", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" }
      ],
      frites: "Frites fraîches et salade",
      sauces: "2 Sauces au choix",
      sauce_single: "Sauce au choix"
    },
    etudiant: {
      title: "Menu Étudiant",
      happy: "Happy Student Hour : 12h00 - 14h00",
      subtitle: "Le Menu Étudiant",
      desc: "Sur présentation de ta carte étudiante : 1 Pita ou Durum au choix + Portion de frites + 1 Boisson (33cl).",
      price_tag: "Prix Unique",
      price: "9,50€"
    },
    routiers: {
      title: "Section Routiers",
      badge: "Top Vente",
      box_title: "Pita Box",
      box_desc: "Viande au choix + frites croustillantes + sauce dans une box nomade.",
      box_price: "4,50€",
      items: [
        { name: "Pitas Routiers (Mixte)", price: "8,50€" },
        { name: "Mexicanos", price: "6,00€" },
        { name: "Fricandelle Special", price: "6,00€" },
        { name: "Hamburger Routier", price: "6,00€" },
        { name: "Poulycroc", price: "6,00€" },
        { name: "Viandelle", price: "6,00€" }
      ]
    },
    fritures: {
      title: "La Friture",
      desc: "Le savoir-faire belge : nos frites sont cuites en deux bains pour un croustillant parfait.",
      frites_title: "Ravier Frites",
      frites_price: "2,50€ / 3,00€",
      vegan: "VEGAN",
      items: [
        { name: "Cheeseburger Maison", price: "5,00€" },
        { name: "Hamburger fromage", price: "4,00€" },
        { name: "Hamburger", price: "3,50€" },
        { name: "Chicken Fingers", price: "3,50€" },
        { name: "Chicken Nuggets", price: "3,50€" },
        { name: "Fricandelle", price: "1,90€" },
        { name: "Poulycroc", price: "2,00€" },
        { name: "Mexicanos", price: "2,00€" },
        { name: "Viandelle", price: "2,00€" }
      ]
    },
    boissons: {
      sauces_title: "Nos Sauces Maison",
      sauces_desc: "Incluses dans vos pitas & assiettes. Recettes secrètes de la famille.",
      sauces_list: ["Aïoli", "Tzatziki", "Harissa", "Samourai", "Maison Piquant", "Hannibal", "Hawaï", "Andalouse", "Algérienne", "Brésil", "Cocktail", "Tartare", "Ketchup Curry", "Mayo", "Ananas"],
      drinks_title: "Boissons Fraîches",
      softs: "Canettes Softs (Coca, Fanta, Sprite)",
      water: "Eau Minérale",
      ayran: "Ayran Traditionnel",
      ayran_desc: "Boisson au yaourt",
      bottles: "Bouteilles",
      energy: "Boissons Énergisantes",
      price_soft: "2,00€",
      price_bottle: "2,50€",
      price_water: "1,50€",
      price_energy: "2,50€",
      price_ayran: "1,30€",
      price: "2,00€",
      taxes: "Prix nets taxes et service compris"
    },
    legend: {
      title: "Légende & Allergènes",
      gluten: "Gluten",
      lactose: "Lactose",
      maison: "Fait Maison",
      vegan: "Végétalien"
    },
    histoire: {
      title: "Notre Histoire",
      desc: "Depuis 1998, Kadir et sa famille vous accueillent au cœur de Malmedy. Fort de plus de 25 ans d'expérience, Pita Calimero est l'adresse incontournable pour savourer des préparations maison, généreuses et authentiques. Notre secret ? La passion du métier, des viandes rigoureusement sélectionnées et des pains pétris avec amour chaque matin."
    },
    horaires: {
      title: "Nos Horaires d'Ouverture",
      lun_jeu: "Lundi - Jeudi",
      ven: "Vendredi",
      sam_dim: "Samedi - Dimanche"
    },
    footer: {
      since: "Since 2020",
      takeaway: "Commander à emporter :",
      rights: "© {year} Pita Calimero - par Cemil SERTTAS"
    }
  },
  en: {
    nav: {
      menu: "Full Menu",
      history: "Our Story",
      contact: "Contact",
      location: "Location",
      lang: "Language",
      order: "Order Now",
      open_days: "Open Tuesday to Sunday",
    },
    status: {
      loading: "Loading...",
      closed_tomorrow: "Closed - Opens tomorrow at 11:00 AM",
      closes_in: (min: number) => `Closes in ${min} min`,
      open_until_1430: "Open until 2:30 PM",
      open_until_night: (time: string) => `Open until ${time}`,
      closed_opens_11: "Closed - Opens at 11:00 AM",
      closed_opens_17: "Closed - Opens at 5:00 PM",
    },
    hero: {
      welcome: "Welcome to Pita Calimero",
      title_1: "Authentic Turkish food by ",
      title_2: "Kadir",
      desc: "Discover the authenticity of our homemade recipes, where every bread is kneaded with passion and every meat marinated according to our family secrets.",
      btn: "Explore Menu",
      badge_1: "Home",
      badge_2: "Made",
    },
    categories: [
      { id: "pitas", label: "Pitas & Durums" },
      { id: "lahmacun", label: "Lahmacun" },
      { id: "assiettes", label: "Platters" },
      { id: "routiers", label: "Road Snacks" },
      { id: "fritures", label: "Fries & Snacks" },
      { id: "boissons", label: "Drinks" }
    ],
    pitas_section: {
      title: "Pitas & Durums",
      desc: "Served in our homemade bread baked every morning. Sauce included.",
      size: "Small / Large",
      allergens: "Allergens",
      items: [
        { name: "Meat Pita", desc: "Homemade marinated beef and lamb", p: "6.00€", g: "7.50€", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-GWEar56Rcw1ZLR9aVAc_ivClMlEFluaPvj7hdAke2oxljl-m8QCAI8gnst3LIHEx6kHsd8foxXCAi_KTT6RuSLj3kMDbXVG_eRyC14cD7hm4LEbfR3Da7WIFij6MYwmKjDIZJIYDUCt58_Z2FC8eIMFRI5Kn46V7jIL4IgbIfq48qESNb7Ryq7SK0X6EvcDCHZelkRQfKolgtfXUYSmEoS2PpesCE_KwVRzIm9PvNXvaJBHeQdC0WXZf31hKAivSXgs88gfccg4" },
        { name: "Chicken Pita", desc: "Farm chicken grilled with oriental spices", p: "6.00€", g: "7.50€", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZfYV2Jts2Vd34cWM-EmpGB0Kxr9uNA3j563jzXIIh2d3ExtTeGKBD5ovi5LzBS95fnBqSCqLKkiB_b9VbV_sjHbGrbLzquQZOm3RdaLZEnMAghRtMndFSYrUCyMw-L-b6dannKytnKkXmSjUKwbTen2yosmETKyHsNduJ7nXbPt3iSJg0ce6PRhBjookeMm95Rk12wdXaZ9Qlcn12caLZsffLbcSa6LJlWQya8IjahrhDmWyEFz2hCYHBCwlE-tJCjNLBwsjgpI" },
        { name: "Mixed", desc: "Delicious mix of meat and chicken", p: "6.50€", g: "8.00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Kofte", desc: "Minced meat balls with fresh herbs", p: "7.00€", g: "8.00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Merguez", desc: "Spicy artisanal sausages", p: "7.00€", g: "8.00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Beef Skewer", desc: "Tender beef skewers", p: "7.50€", g: "9.00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "White Chicken", desc: "Grilled white chicken breast", p: "7.50€", g: "9.00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Adana", desc: "Traditional spicy minced meat skewer", p: "7.00€", g: "9.00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Hawaii", desc: "Grilled chicken and fresh pineapple slices", p: "7.00€", g: "8.00€", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
        { name: "Feta", desc: "Vegetarian pita with real feta and veggies", p: "6.50€", g: "8.00€", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800" },
        { name: "Vegetarian", desc: "Assortment of fresh veggies and mezzes", p: "5.00€", g: "6.00€", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    lahmacun: {
      badge: "Signature",
      title: "The Real Lahmacun",
      price: "6.00€",
      desc: "Our historic specialty: a thin flatbread topped with a mix of fresh meat and vegetables following Anatolian tradition. Made on site.",
      details: "Details & Allergens",
      ingredients: "Homemade bread, minced beef, onions, tomatoes, parsley, oriental spices.",
      gluten: "GLUTEN",
      maison: "HOMEMADE"
    },
    assiettes_section: {
      title: "Our Generous Platters",
      desc: "All our platters are generously served with fresh fries and a mixed salad.",
      items: [
        { badge: "Feast for 2", name: "House Platter", desc: "7 meats: meat pita, chicken, skewer, lamb chop, merguez, kofte, adana", price: "31.00€", viandes: "7 marinated meats", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvilY4lGnt3XUc47b20QElFGfsdzdtVQ--vYS9vs8v_KSgXLAqZ00ne1X2wTnzyVYZNRHXkJmfGcKcZVniFGpWA2gqClOG2XY9PQb7BSC5kTp2Cj1CVj4ktfUZuwPmmJzX-ItlkaOgIeWRmiak2DFhQ6W-Dz7LYyLUCOOhtvhe6sObLDxo-TMEpqvJlITb-GldoOsflvHO8cGIR19wuoxgSpuPS4CCNRLrHCMKAkUC9gVOjUHG0P-o06vVf5aBCvG5_VLs7Xd7uZY" },
        { badge: "Signature", name: "Calimero Platter", desc: "5 meats: meat pita, chicken, skewer, merguez, kofte", price: "20.00€", viandes: "5 assorted meats", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { badge: "Lamb Chop", name: "Lamb Chop Platter", desc: "Marinated lamb chop, fries and salad", price: "20.00€", viandes: "Lamb chop", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800" },
        { badge: "Classic", name: "Salad Platter", desc: "Fresh composed salad", price: "7.00€", viandes: "Fresh salad", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
        { badge: "Quick", name: "Salad & Fries Platter", desc: "Salad and fries", price: "8.00€", viandes: "Salad + fries", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" }
      ],
      frites: "Fresh fries and salad",
      sauces: "2 Sauces included",
      sauce_single: "Sauce included"
    },
    etudiant: {
      title: "Student Menu",
      happy: "Happy Student Hour : 12:00 PM - 2:00 PM",
      subtitle: "The Student Menu",
      desc: "Show your student card: 1 Pita or Durum of your choice + Portion of fries + 1 Drink (33cl).",
      price_tag: "Fixed Price",
      price: "9.50€"
    },
    routiers: {
      title: "Road Snacks",
      badge: "Best Seller",
      box_title: "Pita Box",
      box_desc: "The practical format: Meat of choice + crispy fries + sauce in a portable box.",
      box_price: "4.50€",
      items: [
        { name: "Mixed Road Pita", price: "8.50€" },
        { name: "Mexicanos", price: "6.00€" },
        { name: "Special Fricandelle", price: "6.00€" },
        { name: "Road Hamburger", price: "6.00€" },
        { name: "Poulycroc", price: "6.00€" },
        { name: "Viandelle", price: "6.00€" }
      ]
    },
    fritures: {
      title: "Fries & Snacks",
      desc: "Belgian expertise: our fries are double-cooked for perfect crispiness.",
      frites_title: "Fries Tray",
      frites_price: "2.50€ / 3.00€",
      vegan: "VEGAN",
      items: [
        { name: "Homemade Cheeseburger", price: "5.00€" },
        { name: "Cheese Hamburger", price: "4.00€" },
        { name: "Hamburger", price: "3.50€" },
        { name: "Chicken Fingers", price: "3.50€" },
        { name: "Chicken Nuggets", price: "3.50€" },
        { name: "Fricandelle", price: "1.90€" },
        { name: "Poulycroc", price: "2.00€" },
        { name: "Mexicanos", price: "2.00€" },
        { name: "Viandelle", price: "2.00€" }
      ]
    },
    boissons: {
      sauces_title: "Our Homemade Sauces",
      sauces_desc: "Included with your pitas & platters. Secret family recipes.",
      sauces_list: ["Aïoli", "Tzatziki", "Harissa", "Samourai", "Spicy House", "Hannibal", "Hawaii", "Andalouse", "Algerian", "Brazil", "Cocktail", "Tartar", "Curry Ketchup", "Mayo", "Pineapple"],
      drinks_title: "Cold Drinks",
      softs: "Canned Softs (Coke, Fanta, Sprite)",
      water: "Still Water",
      ayran: "Traditional Ayran",
      ayran_desc: "Yogurt drink",
      bottles: "Bottles",
      energy: "Energy Drinks",
      price_soft: "2.00€",
      price_bottle: "2.50€",
      price_water: "1.50€",
      price_energy: "2.50€",
      price_ayran: "1.30€",
      price: "2.00€",
      taxes: "Net prices, taxes and service included"
    },
    legend: {
      title: "Legend & Allergens",
      gluten: "Gluten",
      lactose: "Lactose",
      maison: "Homemade",
      vegan: "Vegan"
    },
    histoire: {
      title: "Our Story",
      desc: "Since 1998, Kadir and his family welcome you in the heart of Malmedy. With over 25 years of experience, Pita Calimero is the essential place to enjoy generous, authentic homemade preparations. Our secret? Passion for the craft, rigorously selected meats, and bread baked with love every morning."
    },
    horaires: {
      title: "Our Opening Hours",
      lun_jeu: "Monday - Thursday",
      ven: "Friday",
      sam_dim: "Saturday - Sunday"
    },
    footer: {
      since: "Since 2020",
      takeaway: "Order for takeaway:",
      rights: "© {year} Pita Calimero - by Cemil SERTTAS"
    }
  },
  nl: {
    nav: {
      menu: "Volledig Menu",
      history: "Ons Verhaal",
      contact: "Contact",
      location: "Locatie",
      lang: "Taal / Language",
      order: "Nu Bestellen",
      open_days: "Geopend van dinsdag tot zondag",
    },
    status: {
      loading: "Laden...",
      closed_tomorrow: "Gesloten - Opent morgen om 11:00",
      closes_in: (min: number) => `Sluit in ${min} min`,
      open_until_1430: "Open tot 14:30",
      open_until_night: (time: string) => `Open tot ${time}`,
      closed_opens_11: "Gesloten - Opent om 11:00",
      closed_opens_17: "Gesloten - Opent om 17:00",
    },
    hero: {
      welcome: "Welkom bij Pita Calimero",
      title_1: "Authentiek Turks door ",
      title_2: "Kadir",
      desc: "Ontdek de authenticiteit van onze huisgemaakte recepten, waar elk broodje met passie wordt gekneed en elk stuk vlees wordt gemarineerd volgens onze familiegeheimen.",
      btn: "Bekijk het Menu",
      badge_1: "Huis",
      badge_2: "Gemaakt",
    },
    categories: [
      { id: "pitas", label: "Pita's & Durums" },
      { id: "lahmacun", label: "Lahmacun" },
      { id: "assiettes", label: "Schotels" },
      { id: "routiers", label: "Snacks" },
      { id: "fritures", label: "Friet & Snacks" },
      { id: "boissons", label: "Dranken" }
    ],
    pitas_section: {
      title: "Pita's & Durums",
      desc: "Geserveerd in ons ambachtelijk brood dat elke ochtend wordt gebakken. Saus inbegrepen.",
      size: "Klein / Groot",
      allergens: "Allergenen",
      items: [
        { name: "Pita Vlees", desc: "Huisgemarineerd rund- en lamsvlees", p: "6,00€", g: "7,50€", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-GWEar56Rcw1ZLR9aVAc_ivClMlEFluaPvj7hdAke2oxljl-m8QCAI8gnst3LIHEx6kHsd8foxXCAi_KTT6RuSLj3kMDbXVG_eRyC14cD7hm4LEbfR3Da7WIFij6MYwmKjDIZJIYDUCt58_Z2FC8eIMFRI5Kn46V7jIL4IgbIfq48qESNb7Ryq7SK0X6EvcDCHZelkRQfKolgtfXUYSmEoS2PpesCE_KwVRzIm9PvNXvaJBHeQdC0WXZf31hKAivSXgs88gfccg4" },
        { name: "Pita Kip", desc: "Gegrilde scharrelkip met oosterse kruiden", p: "6,00€", g: "7,50€", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZfYV2Jts2Vd34cWM-EmpGB0Kxr9uNA3j563jzXIIh2d3ExtTeGKBD5ovi5LzBS95fnBqSCqLKkiB_b9VbV_sjHbGrbLzquQZOm3RdaLZEnMAghRtMndFSYrUCyMw-L-b6dannKytnKkXmSjUKwbTen2yosmETKyHsNduJ7nXbPt3iSJg0ce6PRhBjookeMm95Rk12wdXaZ9Qlcn12caLZsffLbcSa6LJlWQya8IjahrhDmWyEFz2hCYHBCwlE-tJCjNLBwsjgpI" },
        { name: "Mix", desc: "Heerlijke mix van vlees en kip", p: "6,50€", g: "8,00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Kofte", desc: "Gehaktballetjes met verse kruiden", p: "7,00€", g: "8,00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Merguez", desc: "Pittige ambachtelijke worstjes", p: "7,00€", g: "8,00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Runderspies", desc: "Malse runderspiesjes", p: "7,50€", g: "9,00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Wit Kip", desc: "Gegrild wit kipfilet", p: "7,50€", g: "9,00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Adana", desc: "Traditionele pittige gehaktspies", p: "7,00€", g: "9,00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Hawaii", desc: "Gegrilde kip en verse ananasschijfjes", p: "7,00€", g: "8,00€", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
        { name: "Feta", desc: "Vegetarische pita met echte feta en rauwkost", p: "6,50€", g: "8,00€", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800" },
        { name: "Vegetarisch", desc: "Assortiment van verse rauwkost en mezze", p: "5,00€", g: "6,00€", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    lahmacun: {
      badge: "Signature",
      title: "De Echte Lahmacun",
      price: "6,00€",
      desc: "Onze historische specialiteit: een dunne platbrood belegd met een mix van vers vlees en groenten volgens de Anatolische traditie. Ter plaatse bereid.",
      details: "Details & Allergenen",
      ingredients: "Ambachtelijk brood, rundergehakt, uien, tomaten, peterselie, oosterse kruiden.",
      gluten: "GLUTEN",
      maison: "HUISGEMAAKT"
    },
    assiettes_section: {
      title: "Onze Royale Schotels",
      desc: "Al onze schotels worden royaal geserveerd met verse frietjes en een gemengde salade.",
      items: [
        { badge: "Feest voor 2", name: "Huis Schotel", desc: "7 vlees: pita vlees, kip, spies, lamskotelet, merguez, kofte, adana", price: "31,00€", viandes: "7 gemarineerde vleessoorten", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvilY4lGnt3XUc47b20QElFGfsdzdtVQ--vYS9vs8v_KSgXLAqZ00ne1X2wTnzyVYZNRHXkJmfGcKcZVniFGpWA2gqClOG2XY9PQb7BSC5kTp2Cj1CVj4ktfUZuwPmmJzX-ItlkaOgIeWRmiak2DFhQ6W-Dz7LYyLUCOOhtvhe6sObLDxo-TMEpqvJlITb-GldoOsflvHO8cGIR19wuoxgSpuPS4CCNRLrHCMKAkUC9gVOjUHG0P-o06vVf5aBCvG5_VLs7Xd7uZY" },
        { badge: "Signature", name: "Calimero Schotel", desc: "5 vlees: pita vlees, kip, spies, merguez, kofte", price: "20,00€", viandes: "5 diverse vleessoorten", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { badge: "Lamskotelet", name: "Lamskotelet Schotel", desc: "Gemarineerde lamskotelet, friet en salade", price: "20,00€", viandes: "Lamskotelet", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800" },
        { badge: "Klassiek", name: "Salade Schotel", desc: "Verse gemengde salade", price: "7,00€", viandes: "Verse salade", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
        { badge: "Snel", name: "Salade & Friet Schotel", desc: "Salade en friet", price: "8,00€", viandes: "Salade + friet", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" }
      ],
      frites: "Verse frietjes en salade",
      sauces: "2 Sauzen naar keuze",
      sauce_single: "Saus naar keuze"
    },
    etudiant: {
      title: "Studentenmenu",
      happy: "Happy Student Hour : 12:00 - 14:00",
      subtitle: "Het Studentenmenu",
      desc: "Op vertoon van je studentenkaart: 1 Pita of Durum naar keuze + Portie frietjes + 1 Drankje (33cl).",
      price_tag: "Vaste Prijs",
      price: "9,50€"
    },
    routiers: {
      title: "Snacks",
      badge: "Best Seller",
      box_title: "Pita Box",
      box_desc: "Het praktische formaat: Vlees naar keuze + knapperige frietjes + saus in een handige box.",
      box_price: "4,50€",
      items: [
        { name: "Pita Routier (Mix)", price: "8,50€" },
        { name: "Mexicanos", price: "6,00€" },
        { name: "Fricandelle Speciaal", price: "6,00€" },
        { name: "Hamburger Routier", price: "6,00€" },
        { name: "Poulycroc", price: "6,00€" },
        { name: "Viandelle", price: "6,00€" }
      ]
    },
    fritures: {
      title: "Friet & Snacks",
      desc: "Belgisch vakmanschap: onze frietjes worden in twee baden gebakken voor een perfecte knapperigheid.",
      frites_title: "Friet Tray",
      frites_price: "2,50€ / 3,00€",
      vegan: "VEGAN",
      items: [
        { name: "Huisgemaakte Cheeseburger", price: "5,00€" },
        { name: "Kaas Hamburger", price: "4,00€" },
        { name: "Hamburger", price: "3,50€" },
        { name: "Chicken Fingers", price: "3,50€" },
        { name: "Chicken Nuggets", price: "3,50€" },
        { name: "Fricandelle", price: "1,90€" },
        { name: "Poulycroc", price: "2,00€" },
        { name: "Mexicanos", price: "2,00€" },
        { name: "Viandelle", price: "2,00€" }
      ]
    },
    boissons: {
      sauces_title: "Onze Huisgemaakte Sauzen",
      sauces_desc: "Inbegrepen bij uw pita's & schotels. Geheime familierecepten.",
      sauces_list: ["Aïoli", "Tzatziki", "Harissa", "Samourai", "Pikant Huis", "Hannibal", "Hawaii", "Andalouse", "Algerijnse", "Brazilië", "Cocktail", "Tartaar", "Curry Ketchup", "Mayo", "Ananas"],
      drinks_title: "Koude Dranken",
      softs: "Blikjes Frisdrank (Cola, Fanta, Sprite)",
      water: "Plat Water",
      ayran: "Traditionele Ayran",
      ayran_desc: "Yoghurtdrank",
      bottles: "Flessen",
      energy: "Energiedranken",
      price_soft: "2,00€",
      price_bottle: "2,50€",
      price_water: "1,50€",
      price_energy: "2,50€",
      price_ayran: "1,30€",
      price: "2,00€",
      taxes: "Netto prijzen, inclusief belastingen en service"
    },
    legend: {
      title: "Legende & Allergenen",
      gluten: "Gluten",
      lactose: "Lactose",
      maison: "Huisgemaakt",
      vegan: "Veganistisch"
    },
    histoire: {
      title: "Ons Verhaal",
      desc: "Sinds 1998 verwelkomen Kadir en zijn familie u in het hart van Malmedy. Met meer dan 25 jaar ervaring is Pita Calimero dé plek om te genieten van gulle, authentieke huisgemaakte bereidingen. Ons geheim? Passie voor het vak, zorgvuldig geselecteerd vlees en brood dat elke ochtend met liefde wordt gebakken."
    },
    horaires: {
      title: "Onze Openingstijden",
      lun_jeu: "Maandag - Donderdag",
      ven: "Vrijdag",
      sam_dim: "Zaterdag - Zondag"
    },
    footer: {
      since: "Since 2020",
      takeaway: "Bestellen om af te halen:",
      rights: "© {year} Pita Calimero - door Cemil SERTTAS"
    }
  },
  de: {
    nav: {
      menu: "Komplettes Menü",
      history: "Unsere Geschichte",
      contact: "Kontakt",
      location: "Standort",
      lang: "Sprache",
      order: "Jetzt Bestellen",
      open_days: "Geöffnet Dienstag bis Sonntag",
    },
    status: {
      loading: "Laden...",
      closed_tomorrow: "Geschlossen - Öffnet morgen um 11:00 Uhr",
      closes_in: (min: number) => `Schließt in ${min} Min`,
      open_until_1430: "Geöffnet bis 14:30 Uhr",
      open_until_night: (time: string) => `Geöffnet bis ${time}`,
      closed_opens_11: "Geschlossen - Öffnet um 11:00 Uhr",
      closed_opens_17: "Geschlossen - Öffnet um 17:00 Uhr",
    },
    hero: {
      welcome: "Willkommen bei Pita Calimero",
      title_1: "Authentisch türkisch von ",
      title_2: "Kadir",
      desc: "Entdecken Sie die Authentizität unserer hausgemachten Rezepte, bei denen jedes Brot mit Leidenschaft geknetet und jedes Fleisch nach unseren Familiengeheimnissen mariniert wird.",
      btn: "Menü Entdecken",
      badge_1: "Haus-",
      badge_2: "gemacht",
    },
    categories: [
      { id: "pitas", label: "Pitas & Durums" },
      { id: "lahmacun", label: "Lahmacun" },
      { id: "assiettes", label: "Teller" },
      { id: "routiers", label: "Snacks" },
      { id: "fritures", label: "Pommes & Snacks" },
      { id: "boissons", label: "Getränke" }
    ],
    pitas_section: {
      title: "Pitas & Durums",
      desc: "Serviert in unserem jeden Morgen handgemachten Brot. Soße inklusive.",
      size: "Klein / Groß",
      allergens: "Allergene",
      items: [
        { name: "Pita Fleisch", desc: "Hausmariniertes Rind- und Lammfleisch", p: "6,00€", g: "7,50€", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-GWEar56Rcw1ZLR9aVAc_ivClMlEFluaPvj7hdAke2oxljl-m8QCAI8gnst3LIHEx6kHsd8foxXCAi_KTT6RuSLj3kMDbXVG_eRyC14cD7hm4LEbfR3Da7WIFij6MYwmKjDIZJIYDUCt58_Z2FC8eIMFRI5Kn46V7jIL4IgbIfq48qESNb7Ryq7SK0X6EvcDCHZelkRQfKolgtfXUYSmEoS2PpesCE_KwVRzIm9PvNXvaJBHeQdC0WXZf31hKAivSXgs88gfccg4" },
        { name: "Pita Hähnchen", desc: "Gegrilltes Hähnchen mit orientalischen Gewürzen", p: "6,00€", g: "7,50€", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZfYV2Jts2Vd34cWM-EmpGB0Kxr9uNA3j563jzXIIh2d3ExtTeGKBD5ovi5LzBS95fnBqSCqLKkiB_b9VbV_sjHbGrbLzquQZOm3RdaLZEnMAghRtMndFSYrUCyMw-L-b6dannKytnKkXmSjUKwbTen2yosmETKyHsNduJ7nXbPt3iSJg0ce6PRhBjookeMm95Rk12wdXaZ9Qlcn12caLZsffLbcSa6LJlWQya8IjahrhDmWyEFz2hCYHBCwlE-tJCjNLBwsjgpI" },
        { name: "Mix", desc: "Köstliche Mischung aus Fleisch und Hähnchen", p: "6,50€", g: "8,00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Kofte", desc: "Hackfleischbällchen mit frischen Kräutern", p: "7,00€", g: "8,00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Merguez", desc: "Würzige handwerkliche Würstchen", p: "7,00€", g: "8,00€", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" },
        { name: "Rinderspieß", desc: "Zarte Rindfleischspieße", p: "7,50€", g: "9,00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Weißes Hähnchen", desc: "Gegrillte Hähnchenbrust", p: "7,50€", g: "9,00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Adana", desc: "Traditioneller pikanter Hackfleischspieß", p: "7,00€", g: "9,00€", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { name: "Hawaii", desc: "Gegrilltes Hähnchen und frische Ananasscheiben", p: "7,00€", g: "8,00€", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
        { name: "Feta", desc: "Vegetarische Pita mit echtem Feta und Rohkost", p: "6,50€", g: "8,00€", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800" },
        { name: "Vegetarisch", desc: "Auswahl an frischem Gemüse und Mezze", p: "5,00€", g: "6,00€", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    lahmacun: {
      badge: "Signatur",
      title: "Die Echte Lahmacun",
      price: "6,00€",
      desc: "Unsere historische Spezialität: ein dünnes Fladenbrot, belegt mit einer Mischung aus frischem Fleisch und Gemüse nach anatolischer Tradition. Vor Ort zubereitet.",
      details: "Details & Allergene",
      ingredients: "Hausgemachtes Brot, Rinderhackfleisch, Zwiebeln, Tomaten, Petersilie, orientalische Gewürze.",
      gluten: "GLUTEN",
      maison: "HAUSGEMACHT"
    },
    assiettes_section: {
      title: "Unsere Reichhaltigen Teller",
      desc: "Alle unsere Teller werden großzügig mit frischen Pommes und einem gemischten Salat serviert.",
      items: [
        { badge: "Festmahl für 2", name: "Haus-Teller", desc: "7 Fleischsorten: Fleischpita, Hähnchen, Spieß, Lammkotlett, Merguez, Kofte, Adana", price: "31,00€", viandes: "7 marinierte Fleischsorten", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvilY4lGnt3XUc47b20QElFGfsdzdtVQ--vYS9vs8v_KSgXLAqZ00ne1X2wTnzyVYZNRHXkJmfGcKcZVniFGpWA2gqClOG2XY9PQb7BSC5kTp2Cj1CVj4ktfUZuwPmmJzX-ItlkaOgIeWRmiak2DFhQ6W-Dz7LYyLUCOOhtvhe6sObLDxo-TMEpqvJlITb-GldoOsflvHO8cGIR19wuoxgSpuPS4CCNRLrHCMKAkUC9gVOjUHG0P-o06vVf5aBCvG5_VLs7Xd7uZY" },
        { badge: "Signatur", name: "Calimero Teller", desc: "5 Fleischsorten: Fleischpita, Hähnchen, Spieß, Merguez, Kofte", price: "20,00€", viandes: "5 verschiedene Fleischsorten", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800" },
        { badge: "Lammkotlett", name: "Lammkotlett Teller", desc: "Mariniertes Lammkotlett, Pommes und Salat", price: "20,00€", viandes: "Lammkotlett", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800" },
        { badge: "Klassisch", name: "Salat Teller", desc: "Frischer gemischter Salat", price: "7,00€", viandes: "Frischer Salat", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
        { badge: "Schnell", name: "Salat & Pommes Teller", desc: "Salat und Pommes", price: "8,00€", viandes: "Salat + Pommes", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800" }
      ],
      frites: "Frische Pommes und Salat",
      sauces: "2 Soßen nach Wahl",
      sauce_single: "Soße nach Wahl"
    },
    etudiant: {
      title: "Studentenmenü",
      happy: "Happy Student Hour : 12:00 - 14:00 Uhr",
      subtitle: "Das Studentenmenü",
      desc: "Gegen Vorlage Ihres Studentenausweises: 1 Pita oder Durum nach Wahl + Portion Pommes + 1 Getränk (33cl).",
      price_tag: "Festpreis",
      price: "9,50€"
    },
    routiers: {
      title: "Snacks",
      badge: "Bestseller",
      box_title: "Pita Box",
      box_desc: "Das praktische Format: Fleisch nach Wahl + knusprige Pommes + Soße in einer Box.",
      box_price: "4,50€",
      items: [
        { name: "Pita Routier (Mix)", price: "8,50€" },
        { name: "Mexicanos", price: "6,00€" },
        { name: "Spezial Fricandelle", price: "6,00€" },
        { name: "Hamburger Routier", price: "6,00€" },
        { name: "Poulycroc", price: "6,00€" },
        { name: "Viandelle", price: "6,00€" }
      ]
    },
    fritures: {
      title: "Pommes & Snacks",
      desc: "Belgisches Know-how: Unsere Pommes werden für die perfekte Knusprigkeit zweimal frittiert.",
      frites_title: "Pommes Tablett",
      frites_price: "2,50€ / 3,00€",
      vegan: "VEGAN",
      items: [
        { name: "Hausgemachter Cheeseburger", price: "5,00€" },
        { name: "Käse Hamburger", price: "4,00€" },
        { name: "Hamburger", price: "3,50€" },
        { name: "Chicken Fingers", price: "3,50€" },
        { name: "Chicken Nuggets", price: "3,50€" },
        { name: "Fricandelle", price: "1,90€" },
        { name: "Poulycroc", price: "2,00€" },
        { name: "Mexicanos", price: "2,00€" },
        { name: "Viandelle", price: "2,00€" }
      ]
    },
    boissons: {
      sauces_title: "Unsere Hausgemachten Soßen",
      sauces_desc: "Inklusive bei Ihren Pitas & Tellern. Geheime Familienrezepte.",
      sauces_list: ["Aïoli", "Tzatziki", "Harissa", "Samourai", "Hausgemacht Pikant", "Hannibal", "Hawaii", "Andalouse", "Algerisch", "Brasil", "Cocktail", "Tartar", "Curry Ketchup", "Mayo", "Ananas"],
      drinks_title: "Kaltgetränke",
      softs: "Dosen-Softdrinks (Cola, Fanta, Sprite)",
      water: "Stilles Wasser",
      ayran: "Traditioneller Ayran",
      ayran_desc: "Joghurtgetränk",
      bottles: "Flaschen",
      energy: "Energydrinks",
      price_soft: "2,00€",
      price_bottle: "2,50€",
      price_water: "1,50€",
      price_energy: "2,50€",
      price_ayran: "1,30€",
      price: "2,00€",
      taxes: "Nettopreise, Steuern und Service inbegriffen"
    },
    legend: {
      title: "Legende & Allergene",
      gluten: "Gluten",
      lactose: "Laktose",
      maison: "Hausgemacht",
      vegan: "Vegan"
    },
    histoire: {
      title: "Unsere Geschichte",
      desc: "Seit 1998 begrüßen Kadir und seine Familie Sie im Herzen von Malmedy. Mit über 25 Jahren Erfahrung ist Pita Calimero die Adresse für großzügige, authentische hausgemachte Gerichte. Unser Geheimnis? Leidenschaft für das Handwerk, sorgfältig ausgewähltes Fleisch und Brot, das jeden Morgen mit Liebe gebacken wird."
    },
    horaires: {
      title: "Unsere Öffnungszeiten",
      lun_jeu: "Montag - Donnerstag",
      ven: "Freitag",
      sam_dim: "Samstag - Sonntag"
    },
    footer: {
      since: "Seit 2020",
      takeaway: "Bestellen zum Mitnehmen:",
      rights: "© {year} Pita Calimero - von Cemil SERTTAS"
    }
  }
};
