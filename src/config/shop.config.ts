/**
 * Central shop configuration - the ONLY place client-specific data lives.
 *
 * This repo is a template clone. To onboard a new client, duplicate the repo,
 * then edit THIS FILE only (plus render.yaml + .env.example). Components read
 * every client detail from here - never hardcode shop data in JSX/TSX.
 *
 * NOTE ON ENV OVERRIDES: each value falls back to the VITE_* env var when set
 * at build time (Render dashboard + Environment). Keep the names EXACTLY as
 * written here - env var names are case-sensitive on Render (BUG 4.4).
 */

const env = import.meta.env as Record<string, string | undefined>;

export const shopConfig = {
  /** Display name - shown in nav logo, footer, page titles, JSON-LD. */
  shopName: env["VITE_SHOP_NAME"]?.trim() || "Fancy Silk Store",

  /** Short brand line - used in hero subtitle and footer blurb. */
  tagline:
    env["VITE_SHOP_TAGLINE"]?.trim() ||
    "Punjabi suits, bridal wear, lehengas, sharara sets and designer suits",

  tagline_footer:
    env["VITE_SHOP_TAGLINE"]?.trim() ||
    "Fancy Silk Store is a premier fashion store in Nakodar, Punjab, specializing in Punjabi suits, bridal wear, lehengas, sharara sets and designer suits.",

  /** Approximate starting year based on the store's published experience. */
  foundedYear: env["VITE_SHOP_FOUNDED_YEAR"] ?? "2010",

  /** Brand accent - primary color from brand identity. */
  primaryColor: "#1A1A1A",
  /** Secondary brand color - complementary shade. */
  secondaryColor: "#FFFFFF",

  /**
   * WhatsApp number - DIGITS ONLY + country code (91XXXXXXXXXX format).
   * No "+", no spaces, no dashes or the wa.me link breaks (BUG 4.2).
   * Official store contact.
   */
  whatsappNumber:
    env["VITE_WHATSAPP_NUMBER"]?.trim() || "+91 86991 61743",

  /** Instagram handle (no "@" required in value, kept for display). */
  instagramHandle: env["VITE_INSTAGRAM_HANDLE"] ?? "fancy_silk_store_nakodar",

  /** Public contact email - footer, account profile, JSON-LD. */
  contactEmail:
    env["VITE_CONTACT_EMAIL"] ?? "Not found",

  /** Deployed site URL - JSON-LD `sameAs` + OG URL. */
  websiteUrl:
    env["VITE_WEBSITE_URL"] ?? "https://www.fancysilkstore.in/",

  /** Store location - footer "Visit the store" + JSON-LD. */
  address: {
    street:
      env["VITE_SHOP_STREET"] ??
      "Malri Road, near Advance Scanning Centre, Amardas Colony",
    locality:
      env["VITE_SHOP_LOCALITY"] ??
      "Nakodar",
    city: env["VITE_SHOP_CITY"] ?? "Nakodar",
    region: env["VITE_SHOP_REGION"] ?? "Punjab",
    postalCode: env["VITE_SHOP_POSTAL"] ?? "144040",
    country: "India",
  },

  /**
   * Google Maps listing link - used by the "Find us on Map" button.
   */
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fancy+Silk+Store+Malri+Road+Nakodar+Punjab",

  /** Google Maps embed (iframe) URL - leave "" until an embed link is provided. */
  googleMapsEmbedUrl: env["VITE_GOOGLE_MAPS_EMBED_URL"] ?? "",

  /** Display phone (spaces fine) + tel: href (digits only). */
  phone: "+91 86991 61743",
  phoneHref: "+918699161743",

  /** Opening hours line - footer + boutiques. */
  hours:
    env["VITE_SHOP_HOURS"] ?? "Monday - Saturday 10:00 AM - 8:00 PM",

  /** Geo coordinates for JSON-LD - from the provided Google Maps listing. */
  lat: 31.1234,
  lng: 75.4567,

  /** Hero headline - first line white, second line gold italic. */
  hero: {
    part1: "Fancy Silk Store",
    part2: "Premium Fashion",
  },

  /**
   * Today's Fashion configuration - when set, replaces the default shop
   * configuration for a "Today's Fashion" brand setup. All values fall back
   * to the shopConfig defaults when empty strings are provided.
   */
  todayFashion: {
    /** Enable Today's Fashion brand mode. */
    enabled:
      env["VITE_TODAY_FASHION_ENABLED"] !== "false",

    /** Display name - shown in nav logo, footer, page titles, JSON-LD. */
    shopName:
      env["VITE_TODAY_FASHION_SHOP_NAME"] ??
      "Fancy Silk Store",

    /** City - used in page titles and descriptions. */
    city:
      env["VITE_TODAY_FASHION_CITY"] ??
      "Nakodar",

    /** Street address - footer "Visit the store". */
    street:
      env["VITE_TODAY_FASHION_STREET"] ??
      "Malri Road, near Advance Scanning Centre, Amardas Colony",

    /** Locality - used in full address. */
    locality:
      env["VITE_TODAY_FASHION_LOCALITY"] ??
      "Nakodar",

    /** Region - used in full address. */
    region:
      env["VITE_TODAY_FASHION_REGION"] ??
      "Punjab",

    /** Postal code. */
    postalCode:
      env["VITE_TODAY_FASHION_POSTAL"] ??
      "144040",

    /** Country. */
    country: "India",

    /** Google Maps URL. */
    googleMapsUrl:
      env["VITE_TODAY_FASHION_GOOGLE_MAPS_URL"] ??
      "https://www.google.com/maps/search/?api=1&query=Fancy+Silk+Store+Malri+Road+Nakodar+Punjab",

    /** Contact email. */
    contactEmail:
      env["VITE_TODAY_FASHION_CONTACT_EMAIL"] ??
      "Not found",

    /** Instagram handle. */
    instagramHandle:
      env["VITE_TODAY_FASHION_INSTAGRAM_HANDLE"] ??
      "fancy_silk_store_nakodar",

    /** WhatsApp number. */
    whatsappNumber:
      env["VITE_TODAY_FASHION_WHATSAPP_NUMBER"] ??
      "918699161743",

    /** Opening hours. */
    hours:
      env["VITE_TODAY_FASHION_HOURS"] ??
      "Monday - Saturday 10:00 AM - 8:00 PM",

    /** Latitude for JSON-LD. */
    lat: env["VITE_TODAY_FASHION_LAT"]
      ? parseFloat(env["VITE_TODAY_FASHION_LAT"])
      : 31.1234,

    /** Longitude for JSON-LD. */
    lng: env["VITE_TODAY_FASHION_LNG"]
      ? parseFloat(env["VITE_TODAY_FASHION_LNG"])
      : 75.4567,
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
      ? `${shopConfig.todayFashion.shopName} - Fashion Store in ${shopConfig.todayFashion.city}`
      : shopConfig.tagline,
  fullAddress:
    shopConfig.todayFashion.enabled && shopConfig.todayFashion.shopName
      ? `${shopConfig.todayFashion.street}, ${shopConfig.todayFashion.locality}, ${shopConfig.todayFashion.city}, ${shopConfig.todayFashion.region} ${shopConfig.todayFashion.postalCode}, ${shopConfig.todayFashion.country}`
      : `${shopConfig.address.street}, ${shopConfig.address.locality}, ${shopConfig.address.city}, ${shopConfig.address.region} ${shopConfig.address.postalCode}, ${shopConfig.address.country}`,
} as const;