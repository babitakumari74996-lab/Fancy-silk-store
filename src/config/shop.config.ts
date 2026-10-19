/**
 * Central shop configuration — the ONLY place client-specific data lives.
 *
 * This repo is a template clone. To onboard a new client, duplicate the repo,
 * then edit THIS FILE only (plus render.yaml + .env.example). Components read
 * every client detail from here — never hardcode shop data in JSX/TSX.
 *
 * NOTE ON ENV OVERRIDES: each value falls back to the VITE_* env var when set
 * at build time (Render dashboard → Environment). Keep the names EXACTLY as
 * written here — env var names are case-sensitive on Render (BUG 4.4).
 */

const env = import.meta.env as Record<string, string | undefined>;

export const shopConfig = {
  /** Display name — shown in nav logo, footer, page titles, JSON-LD. */
  shopName: env["VITE_SHOP_NAME"]?.trim() || "K2 Ladies Designer",

  /** Short brand line — used in hero subtitle and footer blurb. */
  tagline:
    env["VITE_SHOP_TAGLINE"]?.trim() ||
    "Bridal blouses, Aari & Maggam work, and made-to-measure occasion wear",

  tagline_footer:
    env["VITE_SHOP_TAGLINE"]?.trim() ||
    "K2 Ladies Designer is a founder-led bridal designer studio in New Siddhapudur, Coimbatore, specialising in bridal blouses, Aari and Maggam hand embroidery, designer blouses, wedding lehengas, reception gowns, custom tailoring and made-to-measure occasion wear.",

  /** Approximate starting year based on the studio's published 16+ years of design experience. */
  foundedYear: env["VITE_SHOP_FOUNDED_YEAR"] ?? "2010",

  /** Brand accent — primary color from brand identity. */
  primaryColor: "#1A1A1A",
  /** Secondary brand color — complementary shade. */
  secondaryColor: "#FFFFFF",

  /**
   * WhatsApp number — DIGITS ONLY + country code (91XXXXXXXXXX format).
   * No "+", no spaces, no dashes or the wa.me link breaks (BUG 4.2).
   * Official studio contact.
   */
  whatsappNumber:
    env["VITE_WHATSAPP_NUMBER"]?.trim() || "+91 97900 94017",

  /** Instagram handle (no "@" required in value, kept for display). */
  instagramHandle: env["VITE_INSTAGRAM_HANDLE"] ?? "",

  /** Public contact email — footer, account profile, JSON-LD. */
  contactEmail:
    env["VITE_CONTACT_EMAIL"] ?? "support@k2ladiesdesigner.com",

  /** Deployed site URL — JSON-LD `sameAs` + OG URL. */
  websiteUrl:
    env["VITE_WEBSITE_URL"] ?? "https://k2ladiesdesigner.com",

  /**
   * Products: this template ships a STATIC catalog in `src/lib/products.ts`
   * (no backend — static frontend only). Products live in that file because
   * they need bundled image imports; components consume them via the
   * `products` export. Swap the file contents to change the catalog.
   */
  productsSource: "static", // "static" (no backend in this repo)

  /** Store location — footer "Visit the store" + JSON-LD. */
  address: {
    street:
      env["VITE_SHOP_STREET"] ??
      "86-2/476A, Venkatasamy Road",
    locality:
      env["VITE_SHOP_LOCALITY"] ??
      "Annapoorna Layout, New Siddhapudur",
    city: env["VITE_SHOP_CITY"] ?? "Coimbatore",
    region: env["VITE_SHOP_REGION"] ?? "Tamil Nadu",
    postalCode: env["VITE_SHOP_POSTAL"] ?? "641044",
    country: "India",
  },

  /**
   * Google Maps listing link — used by the "Find us on Map" button.
   */
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=K2+Ladies+Designer+86-2%2F476A+Venkatasamy+Road+Annapoorna+Layout+New+Siddhapudur+Coimbatorehttps://github.com/babitakumari74996-lab/lumina-commerce",

  /** Google Maps embed (iframe) URL — leave "" until an embed link is provided. */
  googleMapsEmbedUrl: env["VITE_GOOGLE_MAPS_EMBED_URL"] ?? "",

  /** Display phone (spaces fine) + tel: href (digits only). */
  phone: "+91 97900 94017",
  phoneHref: "+919790094017",

  /** Opening hours line — footer + boutiques. */
  hours:
    env["VITE_SHOP_HOURS"] ?? "Monday – Saturday · 10 AM - 8 PM",

  /** Geo coordinates for JSON-LD — from the provided Google Maps listing. */
  lat: 11.0204471,
  lng: 76.9738379,

  /** Hero headline — first line white, second line gold italic. */
  hero: {
    part1: "K2 Ladies",
    part2: "Bridal Craft",
  },

  /**
   * Today's Fashion configuration — when set, replaces the default shop
   * configuration for a "Today's Fashion" brand setup. All values fall back
   * to the shopConfig defaults when empty strings are provided.
   */
  todayFashion: {
    /** Enable Today's Fashion brand mode. */
    enabled:
      env["VITE_TODAY_FASHION_ENABLED"] !== "false",

    /** Display name — shown in nav logo, footer, page titles, JSON-LD. */
    shopName:
      env["VITE_TODAY_FASHION_SHOP_NAME"] ??
      "K2 Ladies Designer",

    /** City — used in page titles and descriptions. */
    city:
      env["VITE_TODAY_FASHION_CITY"] ??
      "Coimbatore",

    /** Street address — footer "Visit the store". */
    street:
      env["VITE_TODAY_FASHION_STREET"] ??
      "86-2/476A, Venkatasamy Road",

    /** Locality — used in full address. */
    locality:
      env["VITE_TODAY_FASHION_LOCALITY"] ??
      "Annapoorna Layout, New Siddhapudur",

    /** Region — used in full address. */
    region:
      env["VITE_TODAY_FASHION_REGION"] ??
      "Tamil Nadu",

    /** Postal code. */
    postalCode:
      env["VITE_TODAY_FASHION_POSTAL"] ??
      "641044",

    /** Country. */
    country: "India",

    /** Google Maps URL. */
    googleMapsUrl:
      env["VITE_TODAY_FASHION_GOOGLE_MAPS_URL"] ??
      "https://www.google.com/maps/place/K2+Ladies+Designer/@11.0204524,76.971263,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba859c4e4461e37:0xa8c2e099247a148e!8m2!3d11.0204471!4d76.9738379!16s%2Fg%2F11vrvcs8s6?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D",

    /** Contact email. */
    contactEmail:
      env["VITE_TODAY_FASHION_CONTACT_EMAIL"] ??
      "support@k2ladiesdesigner.com",

    /** Instagram handle. */
    instagramHandle:
      env["VITE_TODAY_FASHION_INSTAGRAM_HANDLE"] ?? "",

    /** WhatsApp number. */
    whatsappNumber:
      env["VITE_TODAY_FASHION_WHATSAPP_NUMBER"] ??
      "919790094017",

    /** Opening hours. */
    hours:
      env["VITE_TODAY_FASHION_HOURS"] ??
      "Monday – Saturday · 10:00 – 20:00",

    /** Latitude for JSON-LD. */
    lat: env["VITE_TODAY_FASHION_LAT"]
      ? parseFloat(env["VITE_TODAY_FASHION_LAT"])
      : 11.0204471,

    /** Longitude for JSON-LD. */
    lng: env["VITE_TODAY_FASHION_LNG"]
      ? parseFloat(env["VITE_TODAY_FASHION_LNG"])
      : 76.9738379,
  } as const,
} as const;

/** Short hand for components: shopName + city for descriptions. */
export const shop = {
  name:
    shopConfig.todayFashion.enabled && shopConfig.todayFashion.shopName
      ? shopConfig.todayFashion.shopName
      : shopConfig.shopName,
  city:
    shopConfig.todayFashion.enabled && shopConfig.todayFashion.city
      ? shopConfig.todayFashion.city
      : shopConfig.address.city,
  tagline:
    shopConfig.todayFashion.enabled && shopConfig.todayFashion.shopName
      ? `${shopConfig.todayFashion.shopName} — Fashion Store in ${shopConfig.todayFashion.city}`
      : shopConfig.tagline,
  fullAddress:
    shopConfig.todayFashion.enabled && shopConfig.todayFashion.shopName
      ? `${shopConfig.todayFashion.street}, ${shopConfig.todayFashion.locality}, ${shopConfig.todayFashion.city}, ${shopConfig.todayFashion.region} ${shopConfig.todayFashion.postalCode}, ${shopConfig.todayFashion.country}`
      : `${shopConfig.address.street}, ${shopConfig.address.locality}, ${shopConfig.address.city}, ${shopConfig.address.region} ${shopConfig.address.postalCode}, ${shopConfig.address.country}`,
} as const;
