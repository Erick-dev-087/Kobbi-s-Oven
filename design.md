# Kobbi's Oven — Website Design & Product Specification

> **Design direction:** Playful, warm, bold, appetizing, and confident.  
> **Core message:** _From the Oven, With Love._  
> **Emotional goal:** Make visitors feel like they have entered Kobbi's Oven and leave thinking, _"It's love at first bite."_

## 1. Project Overview

Kobbi's Oven is a bakery offering cakes, cupcakes, ice cream, pastries, and other desserts.

The website should not feel like a generic bakery template or an overly animated showcase. It should tell a visual story while keeping the information, products, and ordering process extremely clear.

The experience should communicate freshness, warmth, celebration, personality, craftsmanship, temptation, trust, and ease of ordering.

### Core principle

> **The food is the protagonist. The interface supports the food.**

Photography, product presentation, typography, motion, and layout should make visitors want the products without making the website difficult to use.

## 2. Website Structure

The public-facing experience is a **one-page marketing homepage** with a separate dedicated menu/order experience.

### Homepage

The homepage tells the Kobbi's Oven story through:

1. Navigation
2. Hero — the invitation
3. Introduction / About
4. Featured treats
5. Product/category discovery
6. Expanding bakery image transition
7. Story / "From the Oven, With Love"
8. Occasion-based cakes
9. Menu CTA
10. Ordering CTA
11. Footer

The homepage should not contain every product or every ordering option.

### Dedicated Menu / Ordering Experience

When a visitor clicks a CTA such as `Explore the Menu`, `See the Cakes`, `View Treats`, or `Order Now`, they move to a dedicated menu experience.

Recommended routes:

```text
/
 /menu
 /menu/cakes
 /menu/cupcakes
 /menu/pastries
 /menu/ice-cream
```

A simpler first implementation may use only `/menu` with category filters.

> **Homepage = storytelling and discovery.**  
> **Menu = selection and ordering.**

Do not overload the homepage with a complete product catalogue.

## 3. Brand Personality

Kobbi's Oven should feel:

- playful
- warm
- delicious
- bold
- welcoming
- handmade
- celebratory
- modern

Avoid making it:

- overly corporate
- overly luxurious
- childish/cartoonish
- excessively pink
- visually noisy
- animation-heavy
- dependent on decorative effects

The website should feel like a real bakery with personality, not a technology demo.

## 4. Color System

The logo is fundamentally black and white. These colors must remain the visual foundation of the brand.

| Token       | Color        |       Hex | Usage                                            |
| ----------- | ------------ | --------: | ------------------------------------------------ |
| `--black`   | Deep Black   | `#111111` | Primary brand, dark sections, footer, typography |
| `--cream`   | Warm Cream   | `#FFF8EE` | Main page background                             |
| `--vanilla` | Soft Vanilla | `#FFFDF8` | Cards, surfaces, alternate backgrounds           |
| `--cocoa`   | Cocoa Brown  | `#5A3825` | Secondary text, bakery accents                   |
| `--caramel` | Caramel      | `#D99A4A` | CTAs, highlights, interactive accents            |
| `--peach`   | Soft Peach   | `#F3B59B` | Small warmth/celebration accents                 |

### Color philosophy

Black should remain highly visible throughout the website.

However, do not make the entire website a conventional dark-mode website.

Use a **light/warm base with strategic black sections**.

Example rhythm:

```text
Hero                 → Warm Cream
About                → White / Vanilla
Featured Treats      → Black
Product Categories   → Warm Cream
Story                → Image / Cream
Occasion Cakes       → Vanilla
CTA                  → Black
Footer               → Black
```

Caramel and peach are accents, not dominant colors.

## 5. Theme Direction

### Primary theme: Light

The website should be primarily light because:

1. Food photography reads better.
2. Cakes and desserts become the focal point.
3. Cream creates a warm bakery atmosphere.
4. The black logo remains highly visible.
5. Light sections create breathing room.
6. Dark sections create dramatic contrast.

This is **not** a light/dark mode toggle requirement.

The site has one intentional visual system:

> **Warm light foundation + deliberate dark sections.**

## 6. Typography

Typography should create hierarchy without competing with the logo.

### Logo Script

The Kobbi's Oven logo uses expressive script lettering.

The script treatment should be treated as a **brand display element**, not as the website's general font.

Use it selectively for:

- `Kobbi's`
- special hero moments
- short brand statements
- occasional section accents
- editorial/celebratory callouts

Do not use the script style for:

- body copy
- navigation
- product descriptions
- forms
- buttons
- long headings
- prices

The logo should feel special because it is used sparingly.

### Recommended Font System

**Display / Headings:** DM Serif Display

Alternative: **Fraunces**

**Body / UI:** Manrope

Alternative: **Inter**

Recommended stack:

```text
Display: DM Serif Display
Body/UI: Manrope
Brand script: Logo-specific treatment only
```

Use the display font for major statements such as:

> Something sweet is baking.

> It's love at first bite.

> From the Oven, With Love.

Use Manrope for navigation, descriptions, prices, buttons, forms, product metadata, and supporting copy.

Do not use too many font families.

## 7. Logo Usage

The original Kobbi's Oven logo must remain visually intact.

Do not:

- distort it
- stretch it
- recolor it arbitrarily
- add effects that reduce legibility
- place it over visually complicated photography without sufficient contrast

Use the logo in:

- navbar
- footer
- optional loading/entrance moment
- selected brand-story moments

The logo's curved smile/oven mark is also a reusable visual motif.

## 8. Signature Curve

The curve beneath the logo is a major visual asset and should become part of the website's visual language.

Possible uses:

### Section transitions

Use a subtle curve between sections.

### Decorative underline

Use the curve underneath important statements.

Example:

```text
It's love at first bite.
          ⌣
```

### Animated reveal

The curve can draw itself during a section transition.

### Shape language

The curve can inspire:

- section dividers
- image masks
- decorative shapes
- transition elements

Do not use the curve everywhere. It should remain recognizable because it is used selectively.

## 9. Hero Section

The hero is the first emotional impression.

It should immediately communicate:

> **This is a bakery, and you are about to see something delicious.**

Possible headline:

> **Something sweet is baking.**

Supporting message:

> **From Kobbi's Oven, with love.**

CTA:

```text
Explore the treats →
```

Secondary CTA:

```text
Our story
```

### Hero imagery

The hero should prioritize a high-quality cake or dessert image.

Use supplied media assets whenever possible.

If multiple assets exist, choose the one with:

- strongest food appeal
- clean composition
- room for text
- good lighting
- strong product detail
- colors compatible with the palette

Do not force an asset into a layout simply because it exists.

## 10. Food Is the Main Character

Product photography must be treated as a first-class design element.

Avoid generic product grids where every item is trapped inside identical boxes.

Instead:

- use varied image sizes
- allow images to overlap
- use strong crops
- use large hero product photography
- use subtle depth
- give featured products visual priority

The website should make visitors think:

> "I want that."

before they finish reading the copy.

## 11. Product Interaction Language

All interactions should follow a consistent language.

### Level 1 — Micro interactions

Used throughout:

- subtle hover
- arrow movement
- opacity changes
- small scale changes
- underline transitions
- button fill transitions

Typical duration:

```text
150ms – 300ms
```

### Level 2 — Component interactions

Used for product cards, category cards, featured products, and images.

Examples:

- image moves 4–8px
- image scales slightly
- shadow subtly changes
- product information becomes more prominent
- CTA arrow moves

Avoid dramatic rotations or bouncing.

### Level 3 — Storytelling interactions

Reserved for major sections:

- expanding image
- flour trail
- curve drawing
- large text reveals
- section transitions

Typical duration:

```text
500ms – 900ms
```

### Level 4 — Signature interactions

Only one or two moments should receive a truly memorable interaction.

The goal is:

> **"That was beautiful."**

Not:

> **"Why is everything moving?"**

## 12. Cursor Interaction

Desktop-only cursor interaction can be used selectively.

For example, a featured cake can respond subtly to cursor movement:

```text
Cursor moves →
Cake shifts 2–5px
Shadow responds
```

This should create a feeling of physical depth.

Use this only in selected featured-food sections.

### Mobile

Do not reproduce cursor behavior on touch devices.

Use tap, swipe, scroll, press, and simple reveal interactions instead.

## 13. Flour / Crumb Trail Transition

A short flour or crumb trail can visually connect sections.

The trail should not be permanently displayed.

Instead, it should be **revealed as the user scrolls**.

Concept:

```text
Section A

     ·
      ·
       ·
        ·

Section B
```

The trail should be:

- short
- subtle
- brand-consistent
- scroll-driven
- lightweight

Do not allow it to become a major animation.

The effect should communicate:

> "We're moving from one part of the story to another."

## 14. Expanding Bakery Image Section

This is one of the signature moments of the website.

Start with a normal page section. A photograph of Kobbi's Oven, bakery, or workspace appears inside the page rather than immediately filling the screen.

As the visitor scrolls:

1. The image becomes larger.
2. Its container gradually expands.
3. The surrounding page becomes less dominant.
4. The image reaches the edges of the viewport.
5. The image becomes the background of the section.
6. Text appears over the image.

Concept:

```text
Initial

┌─────────────────────────────┐
│                             │
│       BAKERY IMAGE          │
│                             │
└─────────────────────────────┘


During scroll

┌───────────────────────────────────┐
│                                   │
│          BAKERY IMAGE             │
│                                   │
└───────────────────────────────────┘


Final

┌───────────────────────────────────┐
│                                   │
│       FULL-BLEED IMAGE            │
│                                   │
│     FROM THE OVEN, WITH LOVE      │
│                                   │
└───────────────────────────────────┘
```

### Technical direction

Use Motion for React / Framer Motion with scroll progress.

Prefer:

- transform
- scale
- clip-path where appropriate
- opacity

Avoid animating expensive layout properties unnecessarily.

The effect must remain smooth on mobile and lower-powered devices.

## 15. Storytelling Copy

The website should use short, emotionally memorable copy.

Primary phrases:

> **From the Oven, With Love.**

> **It's Love at First Bite.**

> **Something Sweet Is Baking.**

These should be supported by product-specific copy rather than repeated everywhere.

## 16. Featured Treats Section

This section should create desire.

Possible heading:

> **What are you craving?**

or:

> **A little something sweet?**

Categories:

- Cakes
- Cupcakes
- Pastries
- Ice Cream
- Other Desserts

Each category should have:

- strong image
- short description
- subtle interaction
- clear CTA

Example:

```text
CAKES

Made for birthdays,
milestones, celebrations,
and cravings.

See the cakes →
```

## 17. Occasion-Based Cake Experience

Cake presentation should change depending on the occasion.

Do not use one generic "Cakes" description for every product.

### Birthday Cakes

> **Make the candles worth lighting.**

Supporting copy:

> Cakes made for the birthdays that deserve a little more sweetness.

CTA:

```text
Find a birthday cake →
```

### Graduation Cakes

> **You did it. Now cut the cake.**

Supporting copy:

> Celebrate the late nights, hard work, and one very sweet milestone.

CTA:

```text
Celebrate the win →
```

### Valentine's Cakes

> **Say it with cake.**

Supporting copy:

> Something sweet for someone special.

CTA:

```text
Find something romantic →
```

### Wedding / Custom Celebration Cakes

For weddings, marriage ceremonies, ruracio/dowry ceremonies, and other major celebrations:

> **For a day worth remembering.**

Supporting copy:

> Cakes created to sit at the center of the celebration.

CTA:

```text
Explore celebration cakes →
```

Do not assume every wedding cake follows the same style.

## 18. Product-Specific Menu Copy

Each menu category should have its own personality.

### Cakes

Tone: celebratory, personal, premium but approachable.

> **Big moments deserve big slices.**

### Cupcakes

Tone: playful, shareable, casual.

> **Small enough to share. Good enough to keep.**

### Pastries

Include cinnamon buns, cinnamon rolls, pies, and other pastries.

Tone: warm, comforting, fresh from the oven.

> **Warm, buttery, and dangerously easy to finish.**

### Ice Cream

Tone: fun, refreshing, indulgent.

> **Cold, creamy, and worth the extra scoop.**

## 19. Dedicated Menu Experience

The menu should prioritize usability over visual effects.

Recommended structure:

```text
MENU

[ All ]
[ Cakes ]
[ Cupcakes ]
[ Pastries ]
[ Ice Cream ]

--------------------------------

PRODUCT GRID

Image
Product name
Short description
Price / starting price
[ View / Order ]
```

The menu can use category filters.

Filtering should be animated subtly.

Do not make visitors wait for elaborate animations before seeing products.

## 20. Cake Ordering Experience

When a visitor chooses a cake, the order flow should collect the information needed to fulfill the order.

### Cake selection

- selected cake
- size
- quantity
- preferred date if supported
- occasion

### Custom text

Field:

> **What would you like written on the cake?**

Placeholder:

> e.g. Happy Birthday Sarah!

Allow no text where appropriate.

### Dietary / preparation preference

Field:

> **Any preparation preferences?**

Options may include:

```text
With eggs
Eggless
Other preference
```

Do not present "eggless" as guaranteed allergen-free. If the bakery cannot guarantee allergen-free preparation, make that distinction clear.

### Alcohol / booze preference (overlook this for now,I will confirm if there is any alcohol cakes or treats first before we ask)

Field:

> **Would you like the cake with or without alcohol?**

Options:

```text
With alcohol
Without alcohol
No preference
```

Use friendly, non-judgmental wording.

### Additional notes

Optional field:

> **Anything else we should know?**

Example:

> Colors, theme, serving style, pickup notes, or other preferences.

## 21. Cupcake Ordering Experience

Cupcakes should have a dedicated ordering flow.

Potential fields:

- cupcake flavor
- quantity
- size where applicable
- flavor combinations
- custom text where applicable
- egg/eggless preference where supported
- alcohol preference where relevant
- additional notes

Do not show cake-specific fields when they do not apply.

The form should be **context-aware**.

## 22. Pastry Ordering Experience

Pastries such as cinnamon buns, cinnamon rolls, pies, and other pastries should have their own simple ordering flow.

Potential fields:

- pastry selection
- quantity
- flavor/type where applicable
- pickup/delivery information where supported
- additional notes

Avoid asking irrelevant customization questions.

## 23. Context-Aware Ordering

The ordering system must adapt to the selected product.

### Cake

```text
Cake
↓
Size
↓
Occasion
↓
Custom text
↓
Egg / eggless preference
↓
Alcohol preference
↓
Additional notes
```

### Cupcakes

```text
Cupcakes
↓
Flavor
↓
Quantity
↓
Custom options
↓
Additional notes
```

### Pastries

```text
Pastry
↓
Type
↓
Quantity
↓
Additional notes
```

Keep forms short and prevent irrelevant questions.

## 24. Ordering CTA

The primary CTA should be obvious but not aggressive.

Examples:

```text
Order Now →
```

```text
Make It Yours →
```

```text
Start Your Order →
```

If WhatsApp is the final ordering channel, the website should prepare the order information into a structured message before opening WhatsApp.

Example:

```text
Hello Kobbi's Oven,

I'd like to order:

Product: Birthday Cake
Size: 1kg
Custom text: Happy Birthday Sarah!
Egg preference: Eggless
Alcohol: Without alcohol
Additional notes: Pink and white theme
```

The exact WhatsApp integration should be implemented only after confirming the bakery's preferred ordering process.

## 25. Responsive Design

### Desktop

Can use:

- larger imagery
- hover interactions
- overlapping layouts
- cursor movement
- more dramatic scroll storytelling

### Tablet

Reduce complexity:

- fewer overlapping elements
- simplified cursor-dependent effects
- comfortable touch targets

### Mobile

Prioritize:

```text
Discover
↓
Browse
↓
Choose
↓
Order
```

Mobile should not be a compressed desktop layout.

Remove or simplify:

- cursor effects
- excessive parallax
- complex overlapping elements
- long animations

Maintain:

- clear CTAs
- readable typography
- fast image loading
- simple menu filtering
- easy ordering

## 26. Accessibility

Interactive design must never compromise accessibility.

Requirements:

- sufficient color contrast
- keyboard-accessible navigation
- visible focus states
- semantic HTML
- accessible form labels
- descriptive alt text
- reduced-motion support
- buttons must behave like buttons
- links must behave like links

Respect:

```css
prefers-reduced-motion
```

When reduced motion is enabled, replace scroll-heavy animation with simple fades or no animation.

## 27. Performance

The website will contain significant food photography, so performance is critical.

Use:

- Next.js Image
- responsive image sizes
- modern image formats where supported
- lazy loading below the fold
- appropriately compressed assets
- minimal animation dependencies
- GPU-friendly transforms

Do not load huge images simply because they look good locally.

Image quality must be balanced with performance.

## 28. Media Asset Matching

The implementation agent must **match supplied media assets to the design system and the story**, rather than placing images randomly.

For every supplied image, evaluate:

1. What product is shown?
2. What occasion/category does it represent?
3. Is it suitable for hero, featured content, product card, or background?
4. Does it have enough negative space for text?
5. Does its lighting work with the surrounding section?
6. Does its aspect ratio fit the intended component?
7. Does its visual quality justify prominent placement?

### Asset hierarchy

```text
Hero-quality image
↓
Featured product image
↓
Category image
↓
Supporting/story image
↓
Background/decorative image
```

Do not crop an important product detail simply to satisfy a fixed card shape.

Use `object-position` intentionally.

If supplied assets do not fit a proposed section, redesign the section around the asset rather than forcing the asset into the design.

## 29. Image Treatment

Photography should generally feel:

- warm
- appetizing
- tactile
- authentic
- high quality

Avoid excessive:

- filters
- color overlays
- blur
- artificial glow
- heavy gradients

When text sits over photography, use a subtle readability treatment only where necessary.

The food must remain visually recognizable.

## 30. Motion Design Principles

Motion should communicate one of three things:

### Feedback

"Your interaction worked."

Example: button hover.

### Direction

"Look here / continue this way."

Example: flour trail.

### Story

"We are entering a new part of Kobbi's Oven."

Example: expanding bakery image.

If an animation does not perform one of these jobs, question whether it belongs.

## 31. Animation Timing

Suggested baseline:

```text
Micro interaction:       150–300ms
Component interaction:   250–500ms
Section transition:      500–900ms
Signature transition:    700–1200ms
```

Use easing that feels natural and physical.

Avoid excessive bounce.

Avoid animations that block interaction.

## 32. Technology Stack

### Framework

**Next.js**

Use the current stable Next.js App Router architecture.

Benefits:

- React integration
- image optimization
- routing
- SEO support
- performance
- scalable architecture

### Language

**TypeScript**

Use strict typing wherever practical.

Types should exist for:

- products
- categories
- occasions
- order configuration
- form state
- navigation
- media assets

Avoid unnecessary `any`.

### Styling

**Tailwind CSS**

Use Tailwind for:

- layout
- spacing
- responsive behavior
- typography
- colors
- component states

Create reusable design tokens rather than scattering arbitrary color values throughout components.

### Animation

**Motion for React / Framer Motion**

Use it for:

- scroll progress
- section reveals
- image scaling
- product interactions
- curve drawing
- page transitions where useful

Do not use an animation library for simple CSS hover effects that CSS/Tailwind can handle.

### Forms

Use:

- **React Hook Form**
- **Zod**

This is especially useful for context-aware cake/cupcake/pastry order flows.

## 33. Suggested Architecture

Conceptual structure:

```text
app/
├── page.tsx
├── menu/
│   ├── page.tsx
│   ├── cakes/
│   │   └── page.tsx
│   ├── cupcakes/
│   │   └── page.tsx
│   ├── pastries/
│   │   └── page.tsx
│   └── ice-cream/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   ├── products/
│   ├── menu/
│   ├── ordering/
│   └── motion/
│
├── data/
│   ├── products.ts
│   ├── categories.ts
│   └── occasions.ts
│
├── lib/
│   ├── validation.ts
│   └── whatsapp.ts
│
└── public/
    └── media/
```

The exact structure can change as implementation progresses, but content, UI components, and ordering logic should remain separated.

## 34. Data-Driven Products

Products should not be hardcoded repeatedly inside UI components.

Use structured data.

Conceptually:

```ts
type ProductCategory = "cakes" | "cupcakes" | "pastries" | "ice-cream";

type Occasion =
  | "birthday"
  | "graduation"
  | "valentines"
  | "wedding"
  | "ruracio"
  | "custom";

interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  price?: number;
  occasions?: Occasion[];
  options?: {
    customText?: boolean;
    eggPreference?: boolean;
    alcoholPreference?: boolean;
  };
}
```

This makes it easier for the bakery catalogue to grow without rebuilding the interface.

## 35. SEO

Use:

- descriptive page titles
- meta descriptions
- semantic headings
- structured product information where appropriate
- meaningful image alt text
- Open Graph metadata
- proper canonical URLs
- LocalBusiness/Bakery structured data where accurate

Do not keyword-stuff copy.

The website should still sound like Kobbi's Oven.

## 36. Navigation

Desktop:

```text
Kobbi's Oven

Home
Our Story
Treats
Menu
Contact

[ Order Now ]
```

Keep navigation simple.

The navbar can become slightly more compact or change appearance after scrolling.

Mobile:

```text
Logo                         ☰
```

The mobile menu should be fast and easy to close.

## 37. CTA Hierarchy

There should be one primary action:

> **Order / Explore Menu**

Secondary actions:

- Our Story
- Explore Cakes
- Explore Treats
- Contact

Do not make every button visually identical.

The primary CTA should receive the strongest visual treatment.

## 38. Footer

The footer should return to the brand's black foundation.

Include:

- Kobbi's Oven logo
- short brand statement
- menu links
- contact information
- social links
- location information if supplied
- ordering CTA
- copyright

Possible closing statement:

> **From the Oven, With Love.**

The footer should feel like the end of the journey.

## 39. Recommended Homepage Story

### Act I — The Invitation

**Hero**

> **Something sweet is baking.**

Introduce the brand and immediately show the food.

CTA:

`Explore the treats →`

### Act II — The Introduction

**About**

Introduce Kobbi's Oven briefly.

The visitor should understand who they are without reading a wall of text.

### Act III — The Temptation

**Featured Treats**

Show the strongest cakes, cupcakes, pastries, and desserts.

Potential heading:

> **It's love at first bite.**

### Act IV — The Oven

**Expanding Image**

Show the actual bakery/workspace/oven.

The image expands as the user scrolls until it becomes full-screen.

Overlay:

> **From the Oven, With Love.**

### Act V — The Celebrations

**Occasion Cakes**

Birthday.

Graduation.

Valentine's.

Wedding.

Ruracio.

Other custom celebrations.

Each receives its own relevant copy and imagery.

### Act VI — The Menu

Give visitors a clear path to the complete catalogue.

CTA:

> **See everything we're baking →**

### Act VII — The Order

Make the next action obvious.

> **Ready for your slice?**

`Order Now →`

## 40. The Experience in One Sentence

If the website is successful, a visitor should experience:

> **See it → crave it → discover it → imagine it → choose it → order it.**

The interface should make this journey feel natural.

## 41. What NOT to Do

Do not:

- animate every element
- use the script logo font everywhere
- make every section black
- use too many accent colors
- create enormous text that hides product information
- make users hunt for the menu
- force users through long forms
- show irrelevant order fields
- use generic stock photography when authentic Kobbi's Oven assets are available
- sacrifice readability for visual effects
- create animations that block scrolling
- make the mobile experience an afterthought
- use excessive parallax
- use unnecessary 3D effects
- add decorative elements without purpose

## 42. Definition of Done

The website is successful when:

- Kobbi's Oven is recognizable within seconds.
- The black/cream visual identity feels consistent.
- The logo remains special.
- The curve is recognizable as a brand motif.
- Food photography is the visual star.
- The website tells a coherent story.
- Motion feels intentional rather than distracting.
- The flour/crumb transition is subtle.
- The expanding bakery image creates a memorable moment.
- The homepage is easy to navigate.
- The menu is easy to browse.
- Cakes have occasion-specific presentation.
- Cake ordering supports relevant customization.
- Cupcakes and pastries have their own appropriate ordering flows.
- The user is never asked irrelevant questions.
- The website works beautifully on mobile.
- Reduced-motion users receive a usable experience.
- Supplied media assets are matched intelligently to sections.
- Performance remains strong despite rich imagery.
- The primary path from discovery to ordering is obvious.

## 43. Final Creative Direction

Kobbi's Oven should not try to win through the number of animations it contains.

It should win through **tasteful interaction, strong photography, memorable copy, and a clear visual story.**

The website should feel like opening the door to a bakery:

**warm → inviting → exciting → tempting → personal.**

The visitor should move through the website feeling as though they are discovering what comes out of Kobbi's Oven.

And at the end:

> **From the Oven, With Love.**
>
> **It's Love at First Bite.**
