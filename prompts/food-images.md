# Food Image Prompts — Pita Calimero
**Version:** 1.0 — Generated 2026-05-01
**Owner:** Cemil Serttas / Pita Calimero, Malmedy BE

---

## How to use these prompts

1. **Paste each prompt** (the full text under "Prompt:") directly into the recommended tool.
   Use the aspect ratio flag in Midjourney with `--ar 16:9` or `--ar 4:3`. In ChatGPT Image, specify the ratio in the prompt sentence. In Imagen 4 / FLUX 1.1 Pro, select the output size before generating.
2. **Save the output** as the exact filename shown (e.g. `durum-overflow.avif`).
   Place all files in `/public/images/plats/` inside the Next.js project.
3. **Target dimensions:**
   - Hero image (`durum-overflow.avif`): **1920 x 1080 px minimum** (16:9)
   - All other images: **1600 x 1200 px minimum** (4:3)
   Most tools export PNG or JPG — convert to AVIF before placing in the project (see below).

## Recommended tools ranking

| Rank | Tool | Best for |
|---|---|---|
| 1 | **FLUX 1.1 Pro** (via fal.ai or Replicate) | Hyperrealistic food textures, accurate depth of field, best prompt adherence |
| 2 | **Midjourney v6** | Cinematic lighting, mood, color grading — use `--style raw` for photorealism |
| 3 | **Imagen 4** (Google AI Studio) | Clean food photography, very consistent white-balance control |
| 4 | **ChatGPT Image** (GPT-4o) | Good fallback, easy interface, weaker on precise DoF |

## Converting PNG / JPG to AVIF

**Option A — CLI with Squoosh (Node.js, recommended):**
```bash
npx @squoosh/cli --avif '{"cqLevel":28,"speed":4}' --resize '{"width":1920}' durum-overflow.png
npx @squoosh/cli --avif '{"cqLevel":28,"speed":4}' --resize '{"width":1600}' doner-assiette.png
# Repeat for each file — adjust --resize width per target
```

**Option B — CLI with Sharp:**
```bash
npm install sharp-cli -g
sharp -i durum-overflow.png -o durum-overflow.avif --format avif --quality 72
```

**Option C — Online converter (no install):**
Go to https://squoosh.app — drag your PNG, select AVIF codec, set Quality to 70–75, download.

---

## File: durum-overflow.avif
**Aspect:** 16:9
**Recommended tool:** FLUX 1.1 Pro — delivers the most convincing dough texture, glossy sauce sheen, and subtle steam rendering required for a hero shot at this resolution.

**Prompt:**
Hyperrealistic food photography, 50mm f/2.8 lens, shallow depth of field. A freshly pressed durum wrap sliced cleanly in half, the two halves angled open at 45 degrees revealing a generous interior of thinly shaved spiced döner meat, finely shredded purple cabbage, sliced pickles, and a cascade of white garlic-yogurt sauce and golden harissa dripping from the cut edge onto a dark reclaimed-wood surface. Thin wisps of visible steam rise from the warm meat. Warm amber 3200K backlight from the left, a secondary soft warm fill from below. The overflow of sauce and cabbage signals extreme generosity. Props: one small rustic ceramic bowl of red sauce partially visible in the blurred background. Color palette: deep umber, warm amber, cream. Cinematic, no text, no logos. --ar 16:9

**Negative prompt / things to avoid:**
Clinical white background, cold blue or neon lighting, plastic-looking shiny wrap, overexposed highlights, artificial orange saturation, more than two props, any text overlay, logos, watermarks, human faces, cartoon elements, studio flash look, flat lighting.

---

## File: doner-assiette.avif
**Aspect:** 4:3
**Recommended tool:** Midjourney v6 — excels at plated-dish composition and the warm cinematic color grading needed for this full-plate shot. Use `--style raw --ar 4:3`.

**Prompt:**
Hyperrealistic food photography, 50mm f/2.8, shallow depth of field, 45-degree angle slightly above. A generously loaded döner kebab plate: overlapping thin slices of vertical-spit-roasted meat with charred crispy edges fanned over a bed of fluffy steamed white rice, a mound of shredded green-and-purple salad with tomato and cucumber, and a thick pour of white garlic-yogurt sauce pooling to one side. Warm amber gloss on the meat surface suggests freshness and heat. Served on a matte dark ceramic plate atop warm reclaimed-wood table. Light source: warm 4500K indirect from upper left, soft shadow depth. One prop: small wedge of lemon at plate edge. No text, no logos. Color palette: warm amber, deep umber, cream white. --ar 4:3

**Negative prompt / things to avoid:**
White clinical background, cold fluorescent lighting, flat top-down view, dry or pale-looking meat, overcooked gray tones, neon colors, more than two props, text, logos, watermarks, human faces, plastic texture on food.

---

## File: pita-classique.avif
**Aspect:** 4:3
**Recommended tool:** FLUX 1.1 Pro — the crisp pita surface texture and three-sauce detail require FLUX's superior micro-texture rendering at 4:3 resolution.

**Prompt:**
Hyperrealistic food photography, 50mm f/2.8, shallow depth of field, 45-degree angle. A large round pita bread opened wide like a book, showing a packed interior: thinly sliced spiced grilled meat, shredded crisp cabbage, thin tomato rounds, pickled vegetables, and three distinct sauce streaks — white garlic sauce, golden harissa, and a reddish samurai sauce — all visible as separate layers from the cross-section view. The pita exterior has a lightly charred toasted surface with small golden-brown blisters. Placed on kraft paper on a warm dark wood surface. Warm 4000K ambient light from the left, subtle moisture sheen on the sauces. Props: small shallow ceramic sauce bowl partially visible, fresh parsley sprig. Color palette: warm amber, cream, deep umber. --ar 4:3

**Negative prompt / things to avoid:**
Cold white background, blue-tinted lighting, stiff or dry bread appearance, sauce colors looking neon or artificial, overloaded garnishes beyond two props, text overlays, logos, watermarks, human faces, airbrushed or plastic food texture, studio strobe flash.

---

## File: lahmacun-platter.avif
**Aspect:** 4:3
**Recommended tool:** Midjourney v6 — the flat-lay composition of rolled lahmacun benefits from Midjourney's cinematic overhead lighting and dark slate surface rendering. Use `--style raw --ar 4:3`.

**Prompt:**
Hyperrealistic food photography, 50mm f/2.8, flat-lay top-down view. Two lahmacun Turkish flatbreads rolled into tight cylinders resting diagonally on a matte dark slate surface. The flatbread is ultra-thin with a lightly charred bottom crust, visible minced spiced lamb topping with fine red pepper and tomato flecks, still warm with a faint glossy sheen. One roll is cut halfway across revealing the parsley and salad filling inside. Props: one bright lemon wedge squeezed open with juice pooling onto the slate, a few scattered fresh flat-leaf parsley leaves, a small ramekin of red chili sauce. Warm 3500K side lighting from upper left, long soft shadow falling right. Deep umber surface, warm amber tones in the meat. --ar 4:3

**Negative prompt / things to avoid:**
White or bright background, cold lighting, pale or undercooked flatbread appearance, more than two props, neon red or saturated colors, text, logos, watermarks, human faces, wet or soggy-looking bread texture, glassy plastic food appearance.

---

## File: kofte-grill.avif
**Aspect:** 4:3
**Recommended tool:** FLUX 1.1 Pro — the char marks on köfte and fine bulgur texture are areas where FLUX's micro-detail superiority is decisive.

**Prompt:**
Hyperrealistic food photography, 50mm f/2.8, shallow depth of field, 45-degree slightly overhead angle. Five hand-shaped grilled köfte meatballs arranged on a rustic reclaimed-wood serving board. Each köfte has deep cross-hatch grill marks, charred edges with caramelized crust, and a juicy interior visible where one is slightly split open. Beside them: a neat mound of golden bulgur pilaf studded with toasted vermicelli, and a small pile of sumac-dressed thin-sliced red onion rings with parsley. Warm 4000K amber light from the left, glistening fat droplets visible on the köfte surface suggesting just-off-the-grill heat. Props: a wedge of lemon, one small ceramic sauce bowl partially in frame. Color palette: warm amber, deep umber, charcoal grill tones, cream. --ar 4:3

**Negative prompt / things to avoid:**
Clinical white background, cold blue fluorescent light, pale grey unseasoned-looking meatballs, flat lighting with no shadows, more than two props, neon tones, text, logos, watermarks, human faces, airbrushed or uniformly smooth meat surface.

---

## File: mixed-grill.avif
**Aspect:** 4:3
**Recommended tool:** Midjourney v6 — a multi-component platter at this complexity benefits from Midjourney v6's compositional intelligence and warm color grading across varied textures. Use `--style raw --ar 4:3`.

**Prompt:**
Hyperrealistic food photography, 50mm f/2.8, shallow depth of field, 45-degree angle slightly overhead. A generous mixed grill platter on a large dark matte ceramic plate: a fan of thin crispy-edged döner shavings, two köfte meatballs with visible grill marks, and three slices of golden grilled chicken thigh. Accompanied by steamed white rice on one side and a medley of grilled vegetables — charred peppers, halved grilled tomato — on the other. White garlic sauce drizzled across the meats. The overall composition reads as abundant and overflowing slightly at the edges of the plate. Warm 4200K indirect amber light from upper left. One prop: small ceramic bowl of red harissa sauce at frame edge. Color palette: warm amber, charred umber, cream, muted green. --ar 4:3

**Negative prompt / things to avoid:**
Clinical white plating surface, cold or blue lighting, dry pale meats without grill coloring, neon sauce colors, more than two props, text overlays, logos, watermarks, human faces, plastic-looking shiny food, overly symmetrical staged appearance.

---

## File: kadir-action-grill.avif
**Aspect:** 4:3
**Recommended tool:** Imagen 4 — Imagen 4 handles hand and forearm skin-tone realism and motion-blur subtlety better than Midjourney for this specific action shot; FLUX 1.1 Pro is a strong second choice.

**Prompt:**
Hyperrealistic action food photography, 50mm f/2.8, shallow depth of field. Close-up view from chest height downward, framing only the hands, wrists, and forearms of a male cook — no face visible, cut above the elbows. He is carving thin slices from a large rotating vertical döner spit with a long curved carving knife. Sleeves of a dark shirt rolled up to the forearm, white apron edge visible at the left border. The döner spit is a tower of layered golden-brown roasted meat with glistening fat and caramelized crust, lit from within by the warm orange glow of the grill heating element behind it. Subtle motion blur on the knife hand conveys speed and skill. Warm 3200K amber interior restaurant light from the right. Background softly blurred to a deep umber kitchen warmth. No face, no logos, no text. --ar 4:3

**Negative prompt / things to avoid:**
Any human face or eyes visible, cold blue or white fluorescent lighting, frozen static pose with no energy, sharp background detail, studio backdrop, neon lighting, food appearing raw or pale, text overlays, logos, watermarks, more than two props, gloves that look clinical or medical.

---

## File: kadir-decoupe-broche.avif
**Aspect:** 4:3
**Recommended tool:** FLUX 1.1 Pro — the critical subject here is the crispy caramelized meat edge falling from the spit; FLUX renders individual falling shards of crisped meat with unmatched photorealism.

**Prompt:**
Hyperrealistic close-up food photography, 50mm f/2.8, razor-sharp depth of field locked precisely on the outer crust of the rotating döner spit. The frame is filled by the spit: a thick cylinder of layered, densely packed roasted meat with an outer crust that is deep amber-brown, lacquered with rendered fat, with caramelized crispy flakes and curled edges. A wide stainless carving knife enters from the right side of the frame, its blade glinting from the warm orange grill heat behind. Three or four thin crispy meat shards are caught mid-fall between the spit and the carving surface below, backlit by the orange glow of the heating element creating a halo of warm amber light around the falling pieces. The background is the soft blur of the warm interior: dark wood and amber kitchen glow. Color palette: deep amber, caramelized umber, glinting steel, ember orange. No text, no logos, no face. --ar 4:3

**Negative prompt / things to avoid:**
Any face or body visible beyond a partial forearm, cold grey lighting, pale or undercooked meat color, flat uninteresting crust texture, neon or oversaturated colors, crispy pieces looking plastic or CGI, busy sharp background, text, logos, watermarks, studio white backdrop, clinical gloves, motion blur on the meat crust (keep the crust pin-sharp).
