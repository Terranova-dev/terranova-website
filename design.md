# Terranova Website Design Document

## 1. Site purpose and positioning

This site is a premium brand and lead-generation website for Terranova, a flooring and surface studio specialising in microconcrete, rock, hydroblock, and terrazzo finishes. The site is not a lifestyle brand or generic portfolio; it speaks as a specification-led flooring partner for residential, hospitality, commercial, and retail environments.

The site language repeatedly frames Terranova as:

- a single accountable team from specification through installation
- a materials specialist with European and Italian sourcing credentials
- a studio that finishes custom surfaces on site rather than selling off-the-shelf products
- a practical luxury brand that combines craft, durability, and design clarity

It is structured to convert visitors into enquiries while maintaining a premium, architectural tone.

## 2. Actual content structure in the current site

The live build is a multi-page Next.js app with these routes:

- Home: [src/app/page.tsx](/workspaces/terranova-website/src/app/page.tsx)
- About: [src/app/about/page.tsx](/workspaces/terranova-website/src/app/about/page.tsx)
- Products / Collections: [src/app/products/page.tsx](/workspaces/terranova-website/src/app/products/page.tsx)
- Contact: [src/app/contact/page.tsx](/workspaces/terranova-website/src/app/contact/page.tsx)

The homepage is built from these components:

- [src/components/Header.tsx](/workspaces/terranova-website/src/components/Header.tsx)
- [src/components/Hero.tsx](/workspaces/terranova-website/src/components/Hero.tsx)
- [src/components/LogoBar.tsx](/workspaces/terranova-website/src/components/LogoBar.tsx)
- [src/components/Studio.tsx](/workspaces/terranova-website/src/components/Studio.tsx)
- [src/components/Collections.tsx](/workspaces/terranova-website/src/components/Collections.tsx)
- [src/components/Solutions.tsx](/workspaces/terranova-website/src/components/Solutions.tsx)
- [src/components/Stats.tsx](/workspaces/terranova-website/src/components/Stats.tsx)
- [src/components/Craft.tsx](/workspaces/terranova-website/src/components/Craft.tsx)
- [src/components/WhyTerranova.tsx](/workspaces/terranova-website/src/components/WhyTerranova.tsx)
- [src/components/Process.tsx](/workspaces/terranova-website/src/components/Process.tsx)
- [src/components/CTA.tsx](/workspaces/terranova-website/src/components/CTA.tsx)
- [src/components/Footer.tsx](/workspaces/terranova-website/src/components/Footer.tsx)

This sequence follows a clear buyer journey: establish mood → prove capability → show product range → show use cases → show numbers → show process → close with enquiry.

## 3. Actual visual system

### 3.1 Color palette from the code

The palette is defined directly in [src/app/globals.css](/workspaces/terranova-website/src/app/globals.css):

- Background / paper tone: `#f7f3ec`
- Secondary warm paper: `#fbf9f4`
- Dark background: `#141109`
- Near-black depth: `#100c06`
- Dark brown text: `#211e17`
- Muted taupe: `#635a4c`
- Gold accent: `#a07d3e`
- Deep gold / bronze: `#7c5f2c`
- Beige border: `#ded4c3`
- Soft warm line color: `#e7dfd0`

This palette reads as warm stone, plaster, linen, and bronze rather than bright luxury-tech. It is intentionally restrained and material-based.

### 3.2 Typography

The site uses this actual pairing:

- Display serif: `Newsreader`, fallback Georgia / Times New Roman
- Sans: `Jost`, fallback Inter / system-ui

Actual usage patterns in code:

- headings use serif for a classic editorial quality
- UI text, labels, nav, buttons, and CTAs use uppercase sans styling with letter spacing
- the serif/sans contrast is used deliberately to feel premium, calm, and architectural

### 3.3 Layout dimensions and spacing

Core tokens from [src/app/globals.css](/workspaces/terranova-website/src/app/globals.css):

- `--maxw: 1320px`
- `--gutter: clamp(1.25rem, 5vw, 5rem)`
- `--section-y: clamp(4.5rem, 10vw, 9rem)`
- border radius: `2px`

The site uses generous whitespace, wide max widths, and slim proportional typography. It is not a dense SaaS-style page; it is a slow, gallery-like brand experience.

## 4. Actual homepage structure and copy

The homepage is designed as a premium landing page with a sequence that matches the brand message.

### 4.1 Hero

Text used in [src/components/Hero.tsx](/workspaces/terranova-website/src/components/Hero.tsx):

- Eyebrow: “High-End Flooring”
- Main headline:
  - “Floors that hold”
  - “a room together.”
- Supporting paragraph:
  - “Microconcrete, Hard, Hydroblock and Terrazzo surfaces — sourced and finished by hand for landmark residential, hospitality and commercial spaces.”

Primary CTAs:

- “View collections” → goes to `/products`
- “Request a consultation” → goes to `/contact`

The hero uses a large dark gradient background, warm veil overlay, and a subtle scroll indicator. The motion is faded and calm, reinforcing luxury rather than spectacle.

### 4.2 Studio intro

The first content block is the “The Studio” section using this wording:

- heading: “A single team to specify, supply and install the floors that define a space.”
- body text: “Terranova is a flooring house working with Microconcrete and Terrazzo, using raw materials sourced from Europe and aggregates from Italy. From the first drawing to the final seal, one accountable team delivers a surface made to measure and built to last.”

This is the clearest brand promise on the homepage: one accountable team, custom work, long life.

### 4.3 Collections section

The actual collection cards in [src/components/Collections.tsx](/workspaces/terranova-website/src/components/Collections.tsx) are:

1. Microconcrete — “Seamless floors & walls”
2. Rock — “Waterproof & breathable plaster”
3. Hydroblock — “Waterproof & breathable plaster”
4. Terrazzo — “Surfaces”

Actual section title:

- “Four surfaces, infinitely composed”

This is an editorial, product-gallery style layout. Each card is clickable and links to the product page rather than a detail route. The cards focus on material language and finish qualities.

### 4.4 Solutions by space

The actual solution categories in [src/components/Solutions.tsx](/workspaces/terranova-website/src/components/Solutions.tsx):

- Private Residences
- Hospitality
- Workplace & Commercial
- Retail & Galleries

The site uses an auto-advancing carousel with left/right controls and dots. This adds a dynamic, premium presentation without making the site feel like a tech product dashboard.

### 4.5 Stats band

The stats block in [src/components/Stats.tsx](/workspaces/terranova-website/src/components/Stats.tsx) is intentionally minimal in the current implementation:

- “12 Years laying floors”

It uses a count-up animation triggered on scroll. The design is intentionally sparse rather than overloaded with metrics, which reinforces quality over quantity.

### 4.6 Why Terranova

The features in [src/components/WhyTerranova.tsx](/workspaces/terranova-website/src/components/WhyTerranova.tsx) are actual product/service differentiators:

1. Specified, supplied & installed
2. Master installers in-house
3. Made to measure
4. Sourced at origin
5. Subfloor & acoustics
6. Lifetime aftercare

This is an important brand pillar: Terranova is not merely a supplier; it owns the full process.

### 4.7 Process

The process list in [src/components/Process.tsx](/workspaces/terranova-website/src/components/Process.tsx) is:

1. Consult & specify
2. Sample & approve
3. Survey & prepare
4. Precision Application
5. Seal, finish & care

This exact sequence clarifies the brand’s method and makes the service feel structured and reliable.

### 4.8 CTA and footer

The final CTA in [src/components/CTA.tsx](/workspaces/terranova-website/src/components/CTA.tsx):

- heading: “Let’s lay the floor your space deserves.”
- body: “Tell us about your project. We’ll prepare hand-made samples in your own light and walk you through specification, supply and install.”

The footer reinforces the brand, using the same brand mark and addressing the visitor with a premium studio identity.

## 5. Actual secondary page design patterns

### 5.1 About page

The About page in [src/components/AboutPage.tsx](/workspaces/terranova-website/src/components/AboutPage.tsx) contains:

- hero heading: “A house devoted to floors”
- manifesto paragraph: “Terranova began with a simple conviction — that the floor is the most important surface in any room, and deserves to be specified, supplied and laid by a single team that owns the result.”
- story section: “Fine materials, laid the slow way”
- values section: “Principles, not products”
- marquee of product names: Microconcrete, Terrazzo, Rock, Hydroblock

This page is intentionally story-led and does not get overly corporate. It introduces the brand as a practice built around materials and craftsmanship.

### 5.2 Products page

The product page in [src/components/ProductsPage.tsx](/workspaces/terranova-website/src/components/ProductsPage.tsx) contains actual product entries with highly specific product copy.

Product details include:

- Microconcrete Floors & Walls
  - “Italian aggregates. European materials. Seamless finishes.”
  - emphasises custom colour, texture, layering, grooves, and level of perfection
  - notes it can be applied over almost any substrate without demolition
  - suitable for floors, walls, bathrooms, and commercial spaces

- Rock
  - “Waterproof & breathable plaster”
  - emphasises waterproofing under load and breathable performance
  - used for cellars, underground structures, bathrooms, and insulation-sensitive areas

- Hydroblock
  - “Waterproof & breathable plaster”
  - natural, non-toxic, non-synthetic site-mixed plaster technology
  - suitable for protective waterproofing with breathability

- Terrazzo
  - “Italian aggregate surfaces”
  - site-finished with custom texture and seamless results

The product page is not just a gallery; it includes technical explanatory blocks and uses panels to describe uses and advantages.

### 5.3 Contact page

The contact page in [src/components/ContactPage.tsx](/workspaces/terranova-website/src/components/ContactPage.tsx) includes:

- main invitation: “Start a project”
- introductory message: “Tell us about your space and what you imagine. We reply within two working days and can arrange hand-made samples in your own light.”
- actual address:
  - 491 7th Street Extension
  - Gandhipuram
  - Coimbatore 641012, India
- email: `create@terranovafinishes.com`
- phone: `+91 91596 40239`
- office hours: “Mon – Sat · 10:00 – 18:00”

It is a practical conversion page, but even here the tone remains premium and tactile rather than transactional.

## 6. Interaction and motion design

The actual motion system in the code includes:

- fixed-header with scroll state changes
- dark hero / light scrolled transition
- fade and translate reveal animations using the `Reveal` component
- on-scroll fade in the hero and sections
- auto-rotating solutions carousel with pause on focus
- count-up stat animation on intersecting viewport
- subtle underline hover effects on links and nav

These are not loud animations. They are measured, polished, and aligned with a luxury interior aesthetic.

## 7. Design language and brand feel

The design is best described as:

- editorial and quiet
- warm and material-rich
- architectural and precise
- premium but not ostentatious
- intentionally slow and tactile

This is a classic premium-finish brand identity where the “premium” feeling is created through restraint, material palette, and careful spacing—not through neon colors, aggressive gradients, or over-complicated UI.

## 8. Actual reusable design patterns in the code

The CSS system in [src/app/globals.css](/workspaces/terranova-website/src/app/globals.css) defines several reusable patterns that are central to the brand:

- `.eyebrow` with gold divider line and uppercase tracking
- `.btn` and `.btn--solid` for premium calls to action
- `.link-underline` for understated navigation and text links
- `.hero` for the immersive, full-height opening experience
- `.nav` and `.nav--over-dark` for premium fixed-header behaviour
- `.reveal` for scroll-based animation system

This means the site is built from a coherent, consistent visual vocabulary instead of isolated one-off sections.

## 9. What this site is really trying to say

The actual brand message is simple and consistent:

- floors are foundational to a space
- materials matter
- the finish should be custom, not generic
- one team should own the specification, supply, and install
- the result should be durable, beautiful, and lived with for years

This matters because the website is not really selling “a product list”; it is selling trust, precision, and a crafted finish for important interiors.

## 10. Summary

The actual Terranova website is a calm, premium flooring-brand experience built around warm mineral tones, editorial serif headlines, and a restrained design system. It uses a strong “single team / custom finish / durable surfaces” story, and that story is reflected in the actual copy, structure, components, and interactions across the site.

The site is most successful when it feels like a premium interior material catalogue and design studio combined: tactile, credible, and highly intentional.
