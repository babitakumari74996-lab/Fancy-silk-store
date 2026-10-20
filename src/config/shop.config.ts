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
  shopName: env["VITE_SHOP_NAME"]?.trim() || "Dayal's Silks & Sarees",

  /** Short brand line - used in hero subtitle and footer blurb. */
  tagline:
    env["VITE_SHOP_TAGLINE"]?.trim() ||
    "Sarees, suits, ethnic wear and fabrics",

  tagline_footer:
    env["VITE_SHOP_TAGLINE"]?.trim() ||
    "Dayal's Silks & Sarees is a premier ethnic wear store in Abids, Hyderabad, Telangana, specializing in sarees, suits, ethnic wear and fabrics.",

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
    env["VITE_WHATSAPP_NUMBER"]?.trim() || "+91 91000 14211",

  /** Instagram handle (no "@" required in value, kept for display). */
  instagramHandle: env["VITE_INSTAGRAM_HANDLE"] ?? "dayals_fashion",

  /** Public contact email - footer, account profile, JSON-LD. */
  contactEmail:
    env["VITE_CONTACT_EMAIL"] ?? "hello@dayals.com",

  /** Deployed site URL - JSON-LD `sameAs` + OG URL. */
  websiteUrl:
    env["VITE_WEBSITE_URL"] ?? "https://www.dayalsilks.com/",

  /** Store location - footer "Visit the store" + JSON-LD. */
  address: {
    street:
      env["VITE_SHOP_STREET"] ??
      "4/1/865, Moosa Building, Tilak Road",
    locality:
      env["VITE_SHOP_LOCALITY"] ??
      "Abids",
    city: env["VITE_SHOP_CITY"] ?? "Hyderabad",
    region: env["VITE_SHOP_REGION"] ?? "Telangana",
    postalCode: env["VITE_SHOP_POSTAL"] ?? "500001",
    country: "India",
  },

  /**
   * Google Maps listing link - used by the "Find us on Map" button.
   */
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dayals+Silks+and+Sarees+Abids+Hyderabad",

  /** Google Maps embed (iframe) URL - leave "" until an embed link is provided. */
  googleMapsEmbedUrl: env["VITE_GOOGLE_MAPS_EMBED_URL"] ?? "",

  /** Display phone (spaces fine) + tel: href (digits only). */
  phone: "+91 91000 14211",
  phoneHref: "+919100014211",

  /** Opening hours line - footer + boutiques. */
  hours:
    env["VITE_SHOP_HOURS"] ?? "Monday - Saturday 10:00 AM - 8:00 PM",

  /** Geo coordinates for JSON-LD - from the provided Google Maps listing. */
  lat: 17.3850,
  lng: 78.4867,

  /** Hero headline - first line white, second line gold italic. */
  hero: {
    part1: "Dayal's Silks & Sarees",
    part2: "Premium Ethnic Wear",
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
      "Dayal's Silks & Sarees",

    /** City - used in page titles and descriptions. */
    city:
      env["VITE_TODAY_FASHION_CITY"] ??
      "Hyderabad",

    /** Street address - footer "Visit the store". */
    street:
      env["VITE_TODAY_FASHION_STREET"] ??
      "4/1/865, Moosa Building, Tilak Road",

    /** Locality - used in full address. */
    locality:
      env["VITE_TODAY_FASHION_LOCALITY"] ??
      "Abids",

    /** Region - used in full address. */
    region:
      env["VITE_TODAY_FASHION_REGION"] ??
      "Telangana",

    /** Postal code. */
    postalCode:
      env["VITE_TODAY_FASHION_POSTAL"] ??
      "500001",

    /** Country. */
    country: "India",

    /** Google Maps URL. */
    googleMapsUrl:
      env["VITE_TODAY_FASHION_GOOGLE_MAPS_URL"] ??
      "https://www.google.com/maps/search/?api=1&query=Dayals+Silks+and+Sarees+Abids+Hyderabad",

    /** Contact email. */
    contactEmail:
      env["VITE_TODAY_FASHION_CONTACT_EMAIL"] ??
      "hello@dayals.com",

    /** Instagram handle. */
    instagramHandle:
      env["VITE_TODAY_FASHION_INSTAGRAM_HANDLE"] ??
      "dayals_fashion",

    /** WhatsApp number. */
    whatsappNumber:
      env["VITE_TODAY_FASHION_WHATSAPP_NUMBER"] ??
      "919100014211",

    /** Opening hours. */
    hours:
      env["VITE_TODAY_FASHION_HOURS"] ??
      "Monday - Saturday 10:00 AM - 8:00 PM",

    /** Latitude for JSON-LD. */
    lat: env["VITE_TODAY_FASHION_LAT"]
      ? parseFloat(env["VITE_TODAY_FASHION_LAT"])
      : 17.3850,

    /** Longitude for JSON-LD. */
    lng: env["VITE_TODAY_FASHION_LNG"]
      ? parseFloat(env["VITE_TODAY_FASHION_LNG"])
      : 78.4867,
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