'use strict';

const drinks = [
  {
    id: 'drink-latte',
    type: 'drink',
    name: 'Velvet Latte',
    description:
      'Silken microfoam layered over slow-pulled espresso with a rounded cocoa finish.',
    price: 6.5,
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80',
    sizes: ['S', 'M', 'L'],
    recommendedBeanIds: ['bean-ethiopia-yirgacheffe', 'bean-colombia-huila'],
    featured: true,
  },
  {
    id: 'drink-cappuccino',
    type: 'drink',
    name: 'Crown Cappuccino',
    description:
      'Structured crema, dense milk foam, and bright espresso balance in every sip.',
    price: 6.0,
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80',
    sizes: ['S', 'M', 'L'],
    recommendedBeanIds: ['bean-ethiopia-sidamo', 'bean-guatemala-antigua'],
    featured: true,
  },
  {
    id: 'drink-espresso',
    type: 'drink',
    name: 'Reserve Espresso',
    description:
      'A concentrated shot with persistent crema, dark caramel body, and floral lift.',
    price: 4.4,
    image:
      'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1200&q=80',
    sizes: ['S', 'M', 'L'],
    recommendedBeanIds: ['bean-brazil-santos', 'bean-colombia-huila'],
    featured: true,
  },
  {
    id: 'drink-americano',
    type: 'drink',
    name: 'Heritage Americano',
    description:
      'Double espresso lengthened with filtered water for a clean, aromatic profile.',
    price: 4.9,
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    sizes: ['S', 'M', 'L'],
    recommendedBeanIds: ['bean-kenya-aa', 'bean-colombia-huila'],
    featured: false,
  },
  {
    id: 'drink-cold-brew',
    type: 'drink',
    name: 'Midnight Cold Brew',
    description:
      '18-hour steep for velvet body, low acidity, and notes of cacao and stone fruit.',
    price: 6.8,
    image:
      'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=1200&q=80',
    sizes: ['S', 'M', 'L'],
    recommendedBeanIds: ['bean-sumatra-gayo', 'bean-brazil-santos'],
    featured: true,
  },
];

const beans = [
  {
    id: 'bean-ethiopia-yirgacheffe',
    type: 'bean',
    name: 'Ethiopia Yirgacheffe Reserve',
    description:
      'High-altitude heirloom lots with a jasmine bouquet and sparkling citrus finish.',
    origin: 'Ethiopia',
    roastLevel: 'light',
    tastingNotes: ['Jasmine', 'Lemon Zest', 'Honey'],
    grindOptions: ['Whole Bean', 'Espresso', 'Pour Over', 'French Press'],
    prices: { '250': 24, '1000': 86 },
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    inventory: 128,
  },
  {
    id: 'bean-colombia-huila',
    type: 'bean',
    name: 'Colombia Huila Estate',
    description:
      'Washed lots with balanced sweetness, red fruit acidity, and creamy caramel body.',
    origin: 'Colombia',
    roastLevel: 'medium',
    tastingNotes: ['Red Apple', 'Caramel', 'Cocoa'],
    grindOptions: ['Whole Bean', 'Espresso', 'Drip', 'French Press'],
    prices: { '250': 21, '1000': 78 },
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    inventory: 164,
  },
  {
    id: 'bean-brazil-santos',
    type: 'bean',
    name: 'Brazil Santos Royale',
    description:
      'Natural process profile with chocolate density, nutty sweetness, and a long finish.',
    origin: 'Brazil',
    roastLevel: 'dark',
    tastingNotes: ['Dark Chocolate', 'Almond', 'Brown Sugar'],
    grindOptions: ['Whole Bean', 'Espresso', 'Moka Pot', 'French Press'],
    prices: { '250': 19, '1000': 70 },
    image:
      'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    inventory: 209,
  },
  {
    id: 'bean-kenya-aa',
    type: 'bean',
    name: 'Kenya AA Signature',
    description:
      'Crisp cup clarity with berry acidity and black tea elegance from volcanic soils.',
    origin: 'Kenya',
    roastLevel: 'medium',
    tastingNotes: ['Blackcurrant', 'Black Tea', 'Citrus'],
    grindOptions: ['Whole Bean', 'Pour Over', 'Drip', 'French Press'],
    prices: { '250': 26, '1000': 92 },
    image:
      'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    inventory: 94,
  },
  {
    id: 'bean-sumatra-gayo',
    type: 'bean',
    name: 'Sumatra Gayo Private Lot',
    description:
      'Deep, earthy profile with cedar spice and a syrupy mouthfeel for bold extractions.',
    origin: 'Indonesia',
    roastLevel: 'dark',
    tastingNotes: ['Cedar', 'Molasses', 'Spice'],
    grindOptions: ['Whole Bean', 'Espresso', 'French Press'],
    prices: { '250': 23, '1000': 84 },
    image:
      'https://images.unsplash.com/photo-1466304170907-81de3be6f3f6?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    inventory: 113,
  },
  {
    id: 'bean-guatemala-antigua',
    type: 'bean',
    name: 'Guatemala Antigua Grand',
    description:
      'Volcanic terroir expression with cocoa nib depth, orange zest brightness, and spice.',
    origin: 'Guatemala',
    roastLevel: 'medium',
    tastingNotes: ['Orange Zest', 'Cocoa Nib', 'Clove'],
    grindOptions: ['Whole Bean', 'Espresso', 'Drip', 'Pour Over'],
    prices: { '250': 22, '1000': 80 },
    image:
      'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    inventory: 101,
  },
  {
    id: 'bean-ethiopia-sidamo',
    type: 'bean',
    name: 'Ethiopia Sidamo Selection',
    description:
      'Floral aromatics with peach sweetness and tea-like body from heritage varietals.',
    origin: 'Ethiopia',
    roastLevel: 'light',
    tastingNotes: ['Peach', 'Bergamot', 'Floral'],
    grindOptions: ['Whole Bean', 'Pour Over', 'Drip'],
    prices: { '250': 25, '1000': 88 },
    image:
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    inventory: 76,
  },
];

const BRAND = {
  name: 'Night Drip Coffee',
  heroTitle: 'NIGHT DRIP COFFEE',
  tagline: 'Rare origins. Quiet luxury. Precision in every pour.',
};

const TAX_RATE = 0.0825;

const BEVERAGE_SIZE_ADJUSTMENT = {
  S: 0,
  M: 1.15,
  L: 2.1,
};

const BEAN_WEIGHT_OPTIONS = [250, 1000];

const SHIPPING_ZONES = ['Asia', 'Europe', 'North America', 'South America', 'Other'];

const COUNTRY_OPTIONS = [
  { code: 'US', label: 'United States', zone: 'North America' },
  { code: 'CA', label: 'Canada', zone: 'North America' },
  { code: 'MX', label: 'Mexico', zone: 'North America' },
  { code: 'BR', label: 'Brazil', zone: 'South America' },
  { code: 'AR', label: 'Argentina', zone: 'South America' },
  { code: 'CL', label: 'Chile', zone: 'South America' },
  { code: 'GB', label: 'United Kingdom', zone: 'Europe' },
  { code: 'DE', label: 'Germany', zone: 'Europe' },
  { code: 'FR', label: 'France', zone: 'Europe' },
  { code: 'IT', label: 'Italy', zone: 'Europe' },
  { code: 'JP', label: 'Japan', zone: 'Asia' },
  { code: 'SG', label: 'Singapore', zone: 'Asia' },
  { code: 'KR', label: 'South Korea', zone: 'Asia' },
  { code: 'AU', label: 'Australia', zone: 'Other' },
  { code: 'ZA', label: 'South Africa', zone: 'Other' },
  { code: 'AE', label: 'United Arab Emirates', zone: 'Other' },
];

const STORAGE_KEYS = {
  cart: 'noted-cart-v1',
  wishlist: 'noted-wishlist-v1',
  viewed: 'noted-recently-viewed-v1',
  luxuryMode: 'noted-luxury-mode-v1',
  adminCatalog: 'noted-admin-catalog-v1',
  orderHistory: 'noted-order-history-v1',
};

const SHIPPING_METHODS = {
  standard: {
    id: 'standard',
    name: 'Standard International',
    eta: '5-14 business days',
    multiplier: 1,
  },
  priority: {
    id: 'priority',
    name: 'Priority Air',
    eta: '3-7 business days',
    multiplier: 1.45,
  },
};

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(amount);
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_error) {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (_error) {
    return;
  }
}


const zoneBaseRates = {
  'North America': 8,
  Europe: 14,
  Asia: 16,
  'South America': 12,
  Other: 22,
};

function resolveShippingZone(countryCode) {
  const match = COUNTRY_OPTIONS.find((country) => country.code === countryCode);
  return match?.zone ?? 'Other';
}

function estimateBeanShipping(weightGrams, zone, methodId = 'standard') {
  if (!weightGrams || weightGrams <= 0) {
    return 0;
  }

  const base = zoneBaseRates[zone] ?? zoneBaseRates.Other;
  const increments = Math.max(0, Math.ceil(weightGrams / 250) - 1);
  const weightSurcharge = increments * 2.4;
  const method = SHIPPING_METHODS[methodId] ?? SHIPPING_METHODS.standard;

  return Number(((base + weightSurcharge) * method.multiplier).toFixed(2));
}

function shippingDisclaimer() {
  return 'International delivery: 5-14 business days';
}


function drinkPriceBySize(basePrice, size = 'M') {
  const adjustment = BEVERAGE_SIZE_ADJUSTMENT[size] ?? BEVERAGE_SIZE_ADJUSTMENT.M;
  return Number((basePrice + adjustment).toFixed(2));
}

function beanPriceByWeight(bean, weightGrams = 250) {
  const selected = bean?.prices?.[String(weightGrams)] ?? bean?.prices?.['250'] ?? 0;
  return Number(selected);
}

function productDisplayPrice(product) {
  if (product.type === 'drink') {
    return drinkPriceBySize(product.price, 'M');
  }
  return beanPriceByWeight(product, 250);
}

function filterProducts(products, filters) {
  const {
    query = '',
    type = 'all',
    roastLevel = 'all',
    origin = 'all',
    maxPrice = 200,
  } = filters;

  const normalizedQuery = query.trim().toLowerCase();

  return products.filter((product) => {
    if (type !== 'all' && product.type !== type) {
      return false;
    }

    if (product.type === 'bean') {
      if (roastLevel !== 'all' && product.roastLevel !== roastLevel) {
        return false;
      }
      if (origin !== 'all' && product.origin !== origin) {
        return false;
      }
    }

    const price = productDisplayPrice(product);
    if (price > maxPrice) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return (
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery)
    );
  });
}

function mapBeansById(beans) {
  return beans.reduce((acc, bean) => {
    acc[bean.id] = bean;
    return acc;
  }, {});
}

const baseBeans = beans;
const baseDrinks = drinks;


const latency = (value, wait = 280) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(value), wait);
  });

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function toId(prefix, rawName) {
  return `${prefix}-${rawName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')}-${Math.floor(Math.random() * 9999)}`;
}

function defaultCatalog() {
  return {
    drinks: deepClone(baseDrinks),
    beans: deepClone(baseBeans),
  };
}

function ensureCatalog() {
  const existing = readJSON(STORAGE_KEYS.adminCatalog, null);
  if (existing?.drinks && existing?.beans) {
    return existing;
  }
  const seeded = defaultCatalog();
  writeJSON(STORAGE_KEYS.adminCatalog, seeded);
  return seeded;
}

function persistCatalog(catalog) {
  writeJSON(STORAGE_KEYS.adminCatalog, catalog);
  return catalog;
}

async function getCatalog() {
  return latency(ensureCatalog());
}

async function addDrink(payload) {
  const catalog = ensureCatalog();
  const drink = {
    id: payload.id ?? toId('drink', payload.name),
    type: 'drink',
    name: payload.name,
    description: payload.description,
    price: Number(payload.price),
    image: payload.image,
    sizes: payload.sizes?.length ? payload.sizes : ['S', 'M', 'L'],
    recommendedBeanIds: payload.recommendedBeanIds ?? [],
    featured: Boolean(payload.featured),
    inventory: Number(payload.inventory ?? 40),
  };

  catalog.drinks.unshift(drink);
  persistCatalog(catalog);
  return latency(drink);
}

async function updateDrink(drinkId, partial) {
  const catalog = ensureCatalog();
  catalog.drinks = catalog.drinks.map((drink) =>
    drink.id === drinkId
      ? {
          ...drink,
          ...partial,
          price: partial.price ? Number(partial.price) : drink.price,
          inventory: partial.inventory !== undefined ? Number(partial.inventory) : drink.inventory,
        }
      : drink,
  );
  persistCatalog(catalog);
  return latency(catalog.drinks.find((drink) => drink.id === drinkId));
}

async function addBean(payload) {
  const catalog = ensureCatalog();
  const bean = {
    id: payload.id ?? toId('bean', payload.name),
    type: 'bean',
    name: payload.name,
    description: payload.description,
    origin: payload.origin,
    roastLevel: payload.roastLevel,
    tastingNotes: payload.tastingNotes ?? [],
    grindOptions: payload.grindOptions ?? ['Whole Bean'],
    prices: {
      '250': Number(payload.prices?.['250'] ?? payload.price250 ?? 20),
      '1000': Number(payload.prices?.['1000'] ?? payload.price1000 ?? 74),
    },
    image: payload.image,
    featured: Boolean(payload.featured),
    inventory: Number(payload.inventory ?? 60),
  };

  catalog.beans.unshift(bean);
  persistCatalog(catalog);
  return latency(bean);
}

async function updateBean(beanId, partial) {
  const catalog = ensureCatalog();
  catalog.beans = catalog.beans.map((bean) => {
    if (bean.id !== beanId) {
      return bean;
    }

    return {
      ...bean,
      ...partial,
      inventory: partial.inventory !== undefined ? Number(partial.inventory) : bean.inventory,
      prices: {
        ...bean.prices,
        ...(partial.prices ?? {}),
      },
    };
  });

  persistCatalog(catalog);
  return latency(catalog.beans.find((bean) => bean.id === beanId));
}

async function updateInventory(itemId, inventory) {
  const catalog = ensureCatalog();
  catalog.drinks = catalog.drinks.map((drink) =>
    drink.id === itemId ? { ...drink, inventory: Number(inventory) } : drink,
  );
  catalog.beans = catalog.beans.map((bean) =>
    bean.id === itemId ? { ...bean, inventory: Number(inventory) } : bean,
  );

  persistCatalog(catalog);
  return latency({ itemId, inventory: Number(inventory) });
}

async function resetCatalog() {
  const seeded = defaultCatalog();
  persistCatalog(seeded);
  return latency(seeded);
}


const productLatency = (value, wait = 450) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(value), wait);
  });

async function fetchCatalog() {
  const catalog = await getCatalog();
  return productLatency(catalog, 380);
}

async function fetchAllProducts() {
  const catalog = await fetchCatalog();
  return [...catalog.drinks, ...catalog.beans];
}

async function fetchFeaturedProducts() {
  const products = await fetchAllProducts();
  return products.filter((product) => product.featured).slice(0, 8);
}

async function fetchBeanById(beanId) {
  const catalog = await fetchCatalog();
  return productLatency(catalog.beans.find((bean) => bean.id === beanId) ?? null, 260);
}


const initialCart = {
  version: 1,
  lastSyncedAt: null,
  items: [],
};

function loadCart() {
  const existing = readJSON(STORAGE_KEYS.cart, initialCart);
  return {
    ...initialCart,
    ...existing,
    items: Array.isArray(existing?.items) ? existing.items : [],
  };
}

function persistCart(cart) {
  writeJSON(STORAGE_KEYS.cart, cart);
}

function buildSyncPayload(cart) {
  return {
    schemaVersion: 1,
    syncedFrom: 'web-client',
    clientUpdatedAt: new Date().toISOString(),
    cart,
  };
}

async function syncCartWithServer(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        syncedAt: new Date().toISOString(),
        acceptedVersion: payload?.schemaVersion ?? 1,
      });
    }, 520);
  });
}


function computeSubtotal(items) {
  return Number(
    items
      .reduce((sum, item) => sum + Number(item.unitPrice) * Number(item.quantity), 0)
      .toFixed(2),
  );
}

function computeBeanWeight(items) {
  return items.reduce((sum, item) => {
    if (item.type !== 'bean') {
      return sum;
    }
    const lineWeight = Number(item.weightGrams ?? 250) * Number(item.quantity);
    return sum + lineWeight;
  }, 0);
}

function computeShippingEstimate(items, countryCode, methodId) {
  const zone = resolveShippingZone(countryCode);
  const beanWeight = computeBeanWeight(items);
  const beanShipping = estimateBeanShipping(beanWeight, zone, methodId);
  const drinkHandling = items.some((item) => item.type === 'drink') ? 4.2 : 0;

  return Number((beanShipping + drinkHandling).toFixed(2));
}

function computeCheckoutSummary({ items, countryCode, shippingMethod }) {
  const subtotal = computeSubtotal(items);
  const shipping = computeShippingEstimate(items, countryCode, shippingMethod);
  const tax = Number((subtotal * TAX_RATE).toFixed(2));
  const total = Number((subtotal + tax + shipping).toFixed(2));

  return {
    subtotal,
    tax,
    shipping,
    total,
  };
}


function loadOrderHistory() {
  return readJSON(STORAGE_KEYS.orderHistory, []);
}

function saveOrderHistory(orders) {
  writeJSON(STORAGE_KEYS.orderHistory, orders);
}

function recordOrder(order) {
  const history = loadOrderHistory();
  const nextOrder = {
    id: `order-${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...order,
  };

  history.unshift(nextOrder);
  saveOrderHistory(history.slice(0, 100));
  return nextOrder;
}

function getDashboardMetrics() {
  const orders = loadOrderHistory();

  if (!orders.length) {
    return {
      totalOrders: 184,
      monthlyRevenue: 21840,
      avgOrderValue: 76.2,
      activeCountries: 22,
      conversionRate: 4.3,
      topOrigins: [
        { origin: 'Ethiopia', share: 31 },
        { origin: 'Colombia', share: 24 },
        { origin: 'Brazil', share: 18 },
      ],
    };
  }

  const totalOrders = orders.length;
  const monthlyRevenue = orders.reduce((sum, order) => sum + Number(order.total ?? 0), 0);
  const avgOrderValue = totalOrders ? monthlyRevenue / totalOrders : 0;

  const countries = new Set(orders.map((order) => order.shippingInfo?.country).filter(Boolean));

  return {
    totalOrders,
    monthlyRevenue: Number(monthlyRevenue.toFixed(2)),
    avgOrderValue: Number(avgOrderValue.toFixed(2)),
    activeCountries: countries.size,
    conversionRate: Number((3.2 + Math.min(totalOrders / 60, 2.1)).toFixed(1)),
    topOrigins: [
      { origin: 'Ethiopia', share: 29 },
      { origin: 'Colombia', share: 23 },
      { origin: 'Guatemala', share: 17 },
    ],
  };
}

const CHECKOUT_STORAGE_KEY = 'noted-checkout-info-v1';

const defaultFilters = {
  query: '',
  type: 'all',
  roastLevel: 'all',
  origin: 'all',
  maxPrice: 200,
};

const defaultShippingInfo = {
  fullName: '',
  email: '',
  address: '',
  country: 'US',
};

const app = document.getElementById('app');
let cartSyncTimer = null;

const state = {
  catalogLoading: true,
  drinks: [],
  beans: [],
  filters: { ...defaultFilters },
  selectedBeansByDrink: {},
  productOptions: {},
  cart: loadCart(),
  isCartOpen: false,
  wishlist: Array.isArray(readJSON(STORAGE_KEYS.wishlist, []))
    ? readJSON(STORAGE_KEYS.wishlist, [])
    : [],
  recentlyViewed: Array.isArray(readJSON(STORAGE_KEYS.viewed, []))
    ? readJSON(STORAGE_KEYS.viewed, [])
    : [],
  luxuryMode: Boolean(readJSON(STORAGE_KEYS.luxuryMode, false)),
  checkout: {
    shippingInfo: {
      ...defaultShippingInfo,
      ...(readJSON(CHECKOUT_STORAGE_KEY, defaultShippingInfo) ?? {}),
    },
    shippingMethod: 'standard',
  },
  checkoutStep: 1,
  placedOrder: null,
  adminTab: 'drinks',
  adminBusy: false,
};

function escapeHtml(text) {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getHashPath() {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) {
    return '/';
  }
  return hash.startsWith('/') ? hash : `/${hash}`;
}

function getRoute() {
  const path = getHashPath();
  if (path === '/' || path === '') {
    return { name: 'home', path: '/' };
  }
  if (path === '/shop') {
    return { name: 'shop', path };
  }
  if (path === '/checkout') {
    return { name: 'checkout', path };
  }
  if (path === '/admin') {
    return { name: 'admin', path };
  }
  if (path.startsWith('/beans/')) {
    return {
      name: 'bean-detail',
      path,
      beanId: decodeURIComponent(path.replace('/beans/', '')),
    };
  }
  return { name: 'not-found', path };
}

function currentProducts() {
  return [...state.drinks, ...state.beans];
}

function cartCount() {
  return state.cart.items.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
}

function openCart() {
  state.isCartOpen = true;
  render();
}

function closeCart() {
  state.isCartOpen = false;
  render();
}

function updateBodyMode() {
  document.body.classList.toggle('luxury-mode', state.luxuryMode);
}

function persistUIState() {
  writeJSON(STORAGE_KEYS.wishlist, state.wishlist);
  writeJSON(STORAGE_KEYS.viewed, state.recentlyViewed);
  writeJSON(STORAGE_KEYS.luxuryMode, state.luxuryMode);
  writeJSON(CHECKOUT_STORAGE_KEY, state.checkout.shippingInfo);
}

function scheduleCartSync() {
  persistCart(state.cart);
  if (cartSyncTimer) {
    clearTimeout(cartSyncTimer);
  }

  cartSyncTimer = setTimeout(async () => {
    const result = await syncCartWithServer(buildSyncPayload(state.cart));
    if (result?.ok) {
      state.cart.lastSyncedAt = result.syncedAt;
      persistCart(state.cart);
      render();
    }
  }, 320);
}

function mergeCartItem(incoming) {
  const existingIndex = state.cart.items.findIndex((item) => item.id === incoming.id);
  if (existingIndex === -1) {
    state.cart.items.push(incoming);
    return;
  }

  const existing = state.cart.items[existingIndex];
  state.cart.items[existingIndex] = {
    ...existing,
    quantity: Number(existing.quantity) + Number(incoming.quantity),
  };
}

function ensureSelections(product) {
  if (!state.productOptions[product.id]) {
    if (product.type === 'drink') {
      state.productOptions[product.id] = { size: 'M' };
    } else {
      state.productOptions[product.id] = {
        weightGrams: 250,
        grind: product.grindOptions?.[0] ?? 'Whole Bean',
      };
    }
  }

  if (product.type === 'drink') {
    const defaultBeanId = product.recommendedBeanIds?.[0] ?? state.beans[0]?.id;
    if (!state.selectedBeansByDrink[product.id] && defaultBeanId) {
      state.selectedBeansByDrink[product.id] = defaultBeanId;
    }
  }
}

function trackViewed(product) {
  if (!product) {
    return;
  }

  const payload = {
    id: product.id,
    type: product.type,
    name: product.name,
    image: product.image,
    origin: product.origin,
  };

  state.recentlyViewed = [payload, ...state.recentlyViewed.filter((item) => item.id !== product.id)].slice(
    0,
    8,
  );
  persistUIState();
}

function setHash(path) {
  if (window.location.hash !== `#${path}`) {
    window.location.hash = `#${path}`;
  }
}

function renderNavLink(path, label, route) {
  const isActive = route.path === path || (path === '/' && route.path === '/');
  return `<a class="nav-link ${isActive ? 'active' : ''}" href="#${path}">${label}</a>`;
}

function renderHeader(route) {
  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="#/" class="brand-lockup">
          <span class="brand-title">${escapeHtml(BRAND.heroTitle)}</span>
          <span class="brand-caption">Luxury Coffee Marketplace</span>
        </a>

        <nav class="main-nav" aria-label="Primary navigation">
          ${renderNavLink('/', 'Home', route)}
          ${renderNavLink('/shop', 'Shop', route)}
          ${renderNavLink('/checkout', 'Checkout', route)}
          ${renderNavLink('/admin', 'Admin', route)}
        </nav>

        <div class="header-actions">
          <button class="btn btn-ghost btn-sm" data-action="toggle-luxury" type="button">
            ${state.luxuryMode ? 'Standard View' : 'Luxury Mode'}
          </button>
          <button class="btn btn-outline btn-sm" data-action="toggle-cart" type="button">
            Cart (${cartCount()})
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderPairing(drink) {
  const beansById = mapBeansById(state.beans);
  const pairings = (drink.recommendedBeanIds ?? [])
    .map((beanId) => beansById[beanId])
    .filter(Boolean)
    .slice(0, 2);

  if (!pairings.length) {
    return '';
  }

  return `
    <div class="pairing-wrap">
      <span class="pairing-label">Recommended pairing</span>
      <div class="pairing-chips">
        ${pairings
          .map(
            (bean) =>
              `<span class="chip">${escapeHtml(bean.origin)} - ${escapeHtml(bean.name)}</span>`,
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderProductCard(product) {
  ensureSelections(product);

  if (product.type === 'drink') {
    const size = state.productOptions[product.id].size ?? 'M';
    const selectedBeanId = state.selectedBeansByDrink[product.id] ?? '';
    const selectedBean = state.beans.find((bean) => bean.id === selectedBeanId) ?? null;
    const price = drinkPriceBySize(product.price, size);

    return `
      <article class="card product-card">
        <div class="product-media-wrap" data-action="track-view" data-product-id="${escapeHtml(product.id)}">
          <img
            src="${escapeHtml(product.image)}"
            alt="${escapeHtml(product.name)}"
            class="product-media"
            loading="lazy"
            decoding="async"
          />
          <button
            class="wishlist-btn ${state.wishlist.includes(product.id) ? 'active' : ''}"
            data-action="wishlist-toggle"
            data-product-id="${escapeHtml(product.id)}"
            aria-label="Toggle wishlist"
            type="button"
          >
            ${state.wishlist.includes(product.id) ? '♥' : '♡'}
          </button>
        </div>

        <div class="product-content">
          <div class="product-topline">
            <span class="pill">Drink</span>
          </div>

          <h3>${escapeHtml(product.name)}</h3>
          <p>${escapeHtml(product.description)}</p>

          <label>
            Size
            <select data-action="set-product-option" data-option="size" data-product-id="${escapeHtml(
              product.id,
            )}">
              ${['S', 'M', 'L']
                .map(
                  (option) =>
                    `<option value="${option}" ${option === size ? 'selected' : ''}>${option}</option>`,
                )
                .join('')}
            </select>
          </label>

          <label>
            Bean Selection
            <select data-action="set-drink-bean" data-product-id="${escapeHtml(product.id)}">
              ${state.beans
                .map(
                  (bean) =>
                    `<option value="${escapeHtml(bean.id)}" ${
                      bean.id === selectedBeanId ? 'selected' : ''
                    }>${escapeHtml(bean.origin)} - ${escapeHtml(bean.name)}</option>`,
                )
                .join('')}
            </select>
          </label>

          <p class="pair-note">
            Brew profile: ${escapeHtml(
              selectedBean ? selectedBean.tastingNotes?.slice(0, 2).join(' / ') : 'Balanced cup',
            )}
          </p>

          ${renderPairing(product)}

          <div class="product-actions">
            <strong>${formatCurrency(price)}</strong>
            <button
              class="btn btn-primary btn-sm"
              data-action="add-product"
              data-product-id="${escapeHtml(product.id)}"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    `;
  }

  const weightGrams = state.productOptions[product.id].weightGrams ?? 250;
  const grind = state.productOptions[product.id].grind ?? product.grindOptions?.[0] ?? 'Whole Bean';
  const price = beanPriceByWeight(product, weightGrams);

  return `
    <article class="card product-card">
      <div class="product-media-wrap" data-action="track-view" data-product-id="${escapeHtml(product.id)}">
        <img
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(product.name)}"
          class="product-media"
          loading="lazy"
          decoding="async"
        />
        <button
          class="wishlist-btn ${state.wishlist.includes(product.id) ? 'active' : ''}"
          data-action="wishlist-toggle"
          data-product-id="${escapeHtml(product.id)}"
          aria-label="Toggle wishlist"
          type="button"
        >
          ${state.wishlist.includes(product.id) ? '♥' : '♡'}
        </button>
      </div>

      <div class="product-content">
        <div class="product-topline">
          <span class="pill">Bean</span>
          <span class="pill alt">${escapeHtml(product.roastLevel)}</span>
        </div>

        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description)}</p>

        <div class="meta-grid">
          <span>
            Origin <strong>${escapeHtml(product.origin)}</strong>
          </span>
          <span>
            Roast <strong>${escapeHtml(product.roastLevel)}</strong>
          </span>
        </div>

        <label>
          Weight
          <select data-action="set-product-option" data-option="weightGrams" data-product-id="${escapeHtml(
            product.id,
          )}">
            <option value="250" ${weightGrams === 250 ? 'selected' : ''}>250g</option>
            <option value="1000" ${weightGrams === 1000 ? 'selected' : ''}>1kg</option>
          </select>
        </label>

        <label>
          Grind
          <select data-action="set-product-option" data-option="grind" data-product-id="${escapeHtml(
            product.id,
          )}">
            ${(product.grindOptions ?? [])
              .map(
                (option) =>
                  `<option value="${escapeHtml(option)}" ${
                    option === grind ? 'selected' : ''
                  }>${escapeHtml(option)}</option>`,
              )
              .join('')}
          </select>
        </label>

        <div class="bean-links">
          <a href="#/beans/${escapeHtml(product.id)}" data-action="track-view" data-product-id="${escapeHtml(
            product.id,
          )}">
            View bean profile
          </a>
        </div>

        <div class="product-actions">
          <strong>${formatCurrency(price)}</strong>
          <button
            class="btn btn-primary btn-sm"
            data-action="add-product"
            data-product-id="${escapeHtml(product.id)}"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderSkeletonCard() {
  return `
    <article class="card skeleton-card">
      <div class="skeleton-media shimmer"></div>
      <div class="skeleton-line shimmer"></div>
      <div class="skeleton-line short shimmer"></div>
      <div class="skeleton-actions shimmer"></div>
    </article>
  `;
}

function renderProductGrid(products, loading = false) {
  if (loading) {
    return `<section class="product-grid">${Array.from({ length: 6 })
      .map(() => renderSkeletonCard())
      .join('')}</section>`;
  }

  if (!products.length) {
    return `
      <section class="empty-state card">
        <h3>No products found</h3>
        <p>Try broadening your filters or clearing your search query.</p>
      </section>
    `;
  }

  return `<section class="product-grid">${products.map((product) => renderProductCard(product)).join('')}</section>`;
}

function renderHomePage() {
  const featuredDrinks = state.drinks.filter((drink) => drink.featured).slice(0, 3);
  const featuredBeans = state.beans.filter((bean) => bean.featured).slice(0, 3);

  return `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-inner">
        <p class="hero-kicker">Crafted, Roasted, Perfected</p>
        <h1 class="hero-title">${escapeHtml(BRAND.heroTitle)}</h1>
        <p class="hero-tagline">
          A luxury coffee marketplace for precision-crafted drinks and rare global bean lots.
        </p>
        <div class="hero-cta">
          <a class="hero-cta-btn hero-cta-explore" href="#/shop">
            <span class="hero-cta-label">Explore Coffee</span>
            <span class="hero-cta-meta">Signature drinks and pairings</span>
          </a>
          <a class="hero-cta-btn hero-cta-beans" href="#/shop">
            <span class="hero-cta-label">Shop Beans</span>
            <span class="hero-cta-meta">Global reserves and single origins</span>
          </a>
        </div>
      </div>
    </section>

    <section class="container section-block">
      <div class="section-head">
        <h2>Featured Coffee Drinks</h2>
        <p>Signature drinks enhanced by your chosen bean profile.</p>
      </div>
      ${renderProductGrid(featuredDrinks, state.catalogLoading)}
    </section>

    <section class="container section-block">
      <div class="section-head">
        <h2>Featured Bean Lots</h2>
        <p>Internationally sourced reserves with roast and grind precision.</p>
      </div>
      ${renderProductGrid(featuredBeans, state.catalogLoading)}
    </section>

    <section class="container story-panel">
      <div>
        <h2>Crafted, Roasted, Perfected</h2>
        <p>
          Night Drip Coffee is built around deliberate extraction, lot transparency, and sensory
          precision. Choose a drink, pair it with a bean origin, and experience coffee as a curated
          design decision.
        </p>
      </div>
      <a class="btn btn-ghost" href="#/shop">Build Your Pairing</a>
    </section>

    ${
      state.recentlyViewed.length
        ? `
      <section class="container section-block">
        <div class="section-head">
          <h2>Recently Viewed</h2>
          <p>Quickly return to products you explored.</p>
        </div>
        <div class="recent-grid">
          ${state.recentlyViewed
            .map(
              (item) => `
            <article class="recent-card card">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" />
              <div>
                <strong>${escapeHtml(item.name)}</strong>
                <p>${escapeHtml(
                  item.type === 'bean' ? `${item.origin} bean profile` : 'Signature drink',
                )}</p>
                <a href="#${item.type === 'bean' ? `/beans/${item.id}` : '/shop'}">View</a>
              </div>
            </article>
          `,
            )
            .join('')}
        </div>
      </section>
    `
        : ''
    }
  `;
}

function renderShopPage() {
  const products = filterProducts(currentProducts(), state.filters);
  const origins = ['all', ...Array.from(new Set(state.beans.map((bean) => bean.origin))).sort()];

  return `
    <section class="container shop-page">
      <div class="section-head compact">
        <h1>Marketplace</h1>
        <p>Search drinks and beans by taste profile, origin, roast, and price.</p>
      </div>

      <section class="filters card">
        <div class="filters-header">
          <h2>Search & Filter</h2>
          <p>Find drinks and beans by profile, origin, and price.</p>
        </div>

        <div class="filters-grid">
          <label>
            Search
            <input
              type="text"
              name="filter-query"
              value="${escapeHtml(state.filters.query)}"
              placeholder="Try: Ethiopia, Latte, Dark roast"
            />
          </label>

          <label>
            Type
            <select name="filter-type">
              <option value="all" ${state.filters.type === 'all' ? 'selected' : ''}>All</option>
              <option value="drink" ${state.filters.type === 'drink' ? 'selected' : ''}>Drinks</option>
              <option value="bean" ${state.filters.type === 'bean' ? 'selected' : ''}>Beans</option>
            </select>
          </label>

          <label>
            Roast Level
            <select name="filter-roast">
              <option value="all" ${state.filters.roastLevel === 'all' ? 'selected' : ''}>All</option>
              <option value="light" ${state.filters.roastLevel === 'light' ? 'selected' : ''}>Light</option>
              <option value="medium" ${state.filters.roastLevel === 'medium' ? 'selected' : ''}>Medium</option>
              <option value="dark" ${state.filters.roastLevel === 'dark' ? 'selected' : ''}>Dark</option>
            </select>
          </label>

          <label>
            Origin
            <select name="filter-origin">
              ${origins
                .map(
                  (origin) =>
                    `<option value="${escapeHtml(origin)}" ${
                      state.filters.origin === origin ? 'selected' : ''
                    }>${escapeHtml(origin === 'all' ? 'All origins' : origin)}</option>`,
                )
                .join('')}
            </select>
          </label>

          <label class="range-field">
            Max Price (${state.filters.maxPrice})
            <input
              type="range"
              name="filter-maxPrice"
              min="5"
              max="200"
              step="1"
              value="${Number(state.filters.maxPrice)}"
            />
          </label>
        </div>
      </section>

      <div class="results-head">
        <p>
          Showing <strong>${products.length}</strong> products
        </p>
      </div>

      ${renderProductGrid(products, state.catalogLoading)}
    </section>
  `;
}

function renderBeanDetailPage(beanId) {
  const bean = state.beans.find((item) => item.id === beanId);
  if (!bean) {
    return `
      <section class="container section-block">
        <div class="card not-found">
          <h2>Bean profile not found</h2>
          <a href="#/shop">Return to marketplace</a>
        </div>
      </section>
    `;
  }

  ensureSelections(bean);
  trackViewed(bean);

  const weightGrams = state.productOptions[bean.id].weightGrams ?? 250;
  const grind = state.productOptions[bean.id].grind ?? bean.grindOptions?.[0] ?? 'Whole Bean';
  const price = beanPriceByWeight(bean, weightGrams);
  const pairDrinks = state.drinks
    .filter((drink) => (drink.recommendedBeanIds ?? []).includes(bean.id))
    .slice(0, 3);

  return `
    <section class="container bean-detail">
      <article class="bean-hero card">
        <img src="${escapeHtml(bean.image)}" alt="${escapeHtml(bean.name)}" loading="lazy" />

        <div class="bean-hero-content">
          <span class="pill">${escapeHtml(bean.origin)}</span>
          <h1>${escapeHtml(bean.name)}</h1>
          <p>${escapeHtml(bean.description)}</p>

          <div class="bean-note-row">
            ${(bean.tastingNotes ?? []).map((note) => `<span class="chip">${escapeHtml(note)}</span>`).join('')}
          </div>

          <div class="bean-config-grid">
            <label>
              Weight
              <select data-action="set-product-option" data-option="weightGrams" data-product-id="${escapeHtml(
                bean.id,
              )}">
                <option value="250" ${weightGrams === 250 ? 'selected' : ''}>250g</option>
                <option value="1000" ${weightGrams === 1000 ? 'selected' : ''}>1kg</option>
              </select>
            </label>

            <label>
              Grind
              <select data-action="set-product-option" data-option="grind" data-product-id="${escapeHtml(
                bean.id,
              )}">
                ${(bean.grindOptions ?? [])
                  .map(
                    (option) =>
                      `<option value="${escapeHtml(option)}" ${
                        option === grind ? 'selected' : ''
                      }>${escapeHtml(option)}</option>`,
                  )
                  .join('')}
              </select>
            </label>
          </div>

          <div class="bean-action-row">
            <strong>${formatCurrency(price)}</strong>
            <button
              class="btn btn-primary"
              data-action="add-product"
              data-product-id="${escapeHtml(bean.id)}"
              type="button"
            >
              Add Bean to Cart
            </button>
          </div>

          <p class="muted">${escapeHtml(shippingDisclaimer())}</p>
        </div>
      </article>

      <article class="card pairings-card">
        <h2>Pairs exceptionally with</h2>
        <div class="pair-drink-grid">
          ${pairDrinks
            .map(
              (drink) => `
            <div class="pair-drink-item">
              <strong>${escapeHtml(drink.name)}</strong>
              <p>${escapeHtml(drink.description)}</p>
            </div>
          `,
            )
            .join('')}
        </div>
      </article>
    </section>
  `;
}

function shippingInfoIsValid() {
  const info = state.checkout.shippingInfo;
  return info.fullName.trim() && info.email.trim() && info.address.trim() && info.country;
}

function renderCheckoutPage() {
  const items = state.cart.items;
  const shippingInfo = state.checkout.shippingInfo;
  const shippingMethod = state.checkout.shippingMethod;
  const summary = computeCheckoutSummary({
    items,
    countryCode: shippingInfo.country,
    shippingMethod,
  });
  const zone = resolveShippingZone(shippingInfo.country);
  const beanWeight = computeBeanWeight(items);

  if (!items.length && !state.placedOrder) {
    return `
      <section class="container checkout-page">
        <div class="section-head compact">
          <h1>Checkout</h1>
          <p>Secure ordering flow for domestic and international fulfillment.</p>
        </div>
        <section class="checkout-empty card">
          <h2>Checkout</h2>
          <p>Your cart is empty. Add products to continue.</p>
        </section>
      </section>
    `;
  }

  let content = '';

  if (state.placedOrder) {
    content = `
      <div class="order-success">
        <h2>Order Confirmed</h2>
        <p>Reference: ${escapeHtml(state.placedOrder.id)}</p>
        <p>
          Thank you, ${escapeHtml(state.placedOrder.shippingInfo.fullName)}. Your curated order is now in processing.
        </p>
        <p class="muted">${escapeHtml(shippingDisclaimer())}</p>
        <button class="btn btn-outline" data-action="checkout-reset-order" type="button">Start New Order</button>
      </div>
    `;
  } else if (state.checkoutStep === 1) {
    content = `
      <div class="checkout-step-content">
        <h2>Shipping Information</h2>
        <div class="form-grid">
          <label>
            Full Name
            <input type="text" name="shipping-fullName" value="${escapeHtml(shippingInfo.fullName)}" />
          </label>
          <label>
            Email
            <input type="email" name="shipping-email" value="${escapeHtml(shippingInfo.email)}" />
          </label>
          <label class="full-span">
            Address
            <input type="text" name="shipping-address" value="${escapeHtml(shippingInfo.address)}" />
          </label>
          <label>
            Country
            <select name="shipping-country">
              ${COUNTRY_OPTIONS.map(
                (country) =>
                  `<option value="${country.code}" ${
                    country.code === shippingInfo.country ? 'selected' : ''
                  }>${escapeHtml(country.label)}</option>`,
              ).join('')}
            </select>
          </label>
        </div>

        <div class="checkout-nav">
          <button
            class="btn btn-primary"
            data-action="checkout-next"
            type="button"
            ${shippingInfoIsValid() ? '' : 'disabled'}
          >
            Continue to Shipping Method
          </button>
        </div>
      </div>
    `;
  } else if (state.checkoutStep === 2) {
    content = `
      <div class="checkout-step-content">
        <h2>Shipping Method</h2>
        <p>
          Zone: <strong>${escapeHtml(zone)}</strong> · Bean weight: <strong>${beanWeight}g</strong>
        </p>

        <div class="shipping-methods">
          ${Object.values(SHIPPING_METHODS)
            .map(
              (method) => `
            <button
              class="shipping-option ${shippingMethod === method.id ? 'active' : ''}"
              data-action="set-shipping-method"
              data-method-id="${escapeHtml(method.id)}"
              type="button"
            >
              <strong>${escapeHtml(method.name)}</strong>
              <p>${escapeHtml(method.eta)}</p>
            </button>
          `,
            )
            .join('')}
        </div>

        <p class="muted">${escapeHtml(shippingDisclaimer())}</p>

        <div class="checkout-nav">
          <button class="btn btn-ghost" data-action="checkout-prev" type="button">Back</button>
          <button class="btn btn-primary" data-action="checkout-next" type="button">Continue to Review</button>
        </div>
      </div>
    `;
  } else {
    content = `
      <div class="checkout-step-content">
        <h2>Review Order</h2>
        <ul class="review-lines">
          ${items
            .map(
              (item) => `
            <li>
              <span>${item.quantity}x ${escapeHtml(item.name)}</span>
              <strong>${formatCurrency(Number(item.unitPrice) * Number(item.quantity))}</strong>
            </li>
          `,
            )
            .join('')}
        </ul>

        <div class="review-summary">
          <div>
            <span>Subtotal</span>
            <strong>${formatCurrency(summary.subtotal)}</strong>
          </div>
          <div>
            <span>Estimated Tax</span>
            <strong>${formatCurrency(summary.tax)}</strong>
          </div>
          <div>
            <span>Shipping</span>
            <strong>${formatCurrency(summary.shipping)}</strong>
          </div>
          <div class="total-row">
            <span>Total</span>
            <strong>${formatCurrency(summary.total)}</strong>
          </div>
        </div>

        <div class="checkout-nav">
          <button class="btn btn-ghost" data-action="checkout-prev" type="button">Back</button>
          <button class="btn btn-primary" data-action="checkout-place-order" type="button">Place Order</button>
        </div>
      </div>
    `;
  }

  return `
    <section class="container checkout-page">
      <div class="section-head compact">
        <h1>Checkout</h1>
        <p>Secure ordering flow for domestic and international fulfillment.</p>
      </div>

      <section class="checkout-layout">
        <aside class="checkout-steps card">
          <div class="step-pill ${state.checkoutStep === 1 ? 'active' : ''}">
            <span>1</span>
            <p>Shipping Info</p>
          </div>
          <div class="step-pill ${state.checkoutStep === 2 ? 'active' : ''}">
            <span>2</span>
            <p>Shipping Method</p>
          </div>
          <div class="step-pill ${state.checkoutStep === 3 ? 'active' : ''}">
            <span>3</span>
            <p>Review Order</p>
          </div>
        </aside>

        <div class="checkout-main card">
          ${content}
        </div>
      </section>
    </section>
  `;
}

function renderAnalyticsPanel() {
  const metrics = getDashboardMetrics();

  const cards = [
    { label: 'Total Orders', value: metrics.totalOrders },
    { label: 'Monthly Revenue', value: formatCurrency(metrics.monthlyRevenue) },
    { label: 'Avg Order Value', value: formatCurrency(metrics.avgOrderValue) },
    { label: 'Active Countries', value: metrics.activeCountries },
    { label: 'Conversion Rate', value: `${metrics.conversionRate}%` },
  ];

  return `
    <section class="analytics-wrap card">
      <header>
        <h3>Commerce Analytics</h3>
        <p>Mock dashboard structure ready to map to live order events.</p>
      </header>

      <div class="analytics-grid">
        ${cards
          .map(
            (card) => `
          <article class="analytics-card">
            <p>${escapeHtml(card.label)}</p>
            <strong>${escapeHtml(card.value)}</strong>
          </article>
        `,
          )
          .join('')}
      </div>

      <div class="origin-share">
        <h4>Top Bean Origins</h4>
        ${metrics.topOrigins
          .map(
            (origin) => `
          <div class="origin-line">
            <span>${escapeHtml(origin.origin)}</span>
            <div class="bar-track">
              <div class="bar-fill" style="width:${origin.share}%"></div>
            </div>
            <strong>${origin.share}%</strong>
          </div>
        `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderAdminPage() {
  const inventoryItems = [...state.drinks, ...state.beans];

  const tabs = [
    { id: 'drinks', label: 'Drinks' },
    { id: 'beans', label: 'Beans' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'analytics', label: 'Analytics' },
  ];

  const tabButtons = tabs
    .map(
      (tab) => `
    <button
      class="tab-btn ${state.adminTab === tab.id ? 'active' : ''}"
      data-action="set-admin-tab"
      data-tab-id="${tab.id}"
      type="button"
    >
      ${tab.label}
    </button>
  `,
    )
    .join('');

  let content = '';

  if (state.adminTab === 'drinks') {
    content = `
      <div class="admin-tab-body card">
        <h3>Add Drink</h3>
        <form class="form-grid" data-form="add-drink">
          <label>
            Name
            <input name="name" required />
          </label>
          <label>
            Price
            <input name="price" type="number" min="1" step="0.1" value="6" required />
          </label>
          <label class="full-span">
            Description
            <input name="description" required />
          </label>
          <label class="full-span">
            Image URL
            <input name="image" />
          </label>
          <label>
            Inventory
            <input name="inventory" type="number" min="0" value="40" />
          </label>
          <label class="checkbox-label">
            <input name="featured" type="checkbox" />
            Featured
          </label>
          <button class="btn btn-primary" type="submit" ${state.adminBusy ? 'disabled' : ''}>Add Drink</button>
        </form>

        <h3>Manage Drinks</h3>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Inventory</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${state.drinks
                .map(
                  (drink) => `
                <tr data-drink-id="${escapeHtml(drink.id)}">
                  <td>${escapeHtml(drink.name)}</td>
                  <td><input data-field="price" type="number" step="0.1" value="${drink.price}" /></td>
                  <td><input data-field="inventory" type="number" value="${drink.inventory ?? 0}" /></td>
                  <td>
                    <button
                      class="btn btn-ghost btn-sm"
                      data-action="save-drink-row"
                      data-drink-id="${escapeHtml(drink.id)}"
                      type="button"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              `,
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (state.adminTab === 'beans') {
    content = `
      <div class="admin-tab-body card">
        <h3>Add Bean</h3>
        <form class="form-grid" data-form="add-bean">
          <label>
            Name
            <input name="name" required />
          </label>
          <label>
            Origin
            <input name="origin" value="Ethiopia" required />
          </label>
          <label>
            Roast
            <select name="roastLevel">
              <option value="light">Light</option>
              <option value="medium" selected>Medium</option>
              <option value="dark">Dark</option>
            </select>
          </label>
          <label>
            Price (250g)
            <input name="price250" type="number" step="0.1" value="22" />
          </label>
          <label>
            Price (1kg)
            <input name="price1000" type="number" step="0.1" value="80" />
          </label>
          <label>
            Inventory
            <input name="inventory" type="number" value="60" />
          </label>
          <label class="full-span">
            Description
            <input name="description" required />
          </label>
          <label class="full-span">
            Tasting Notes (comma separated)
            <input name="tastingNotes" value="Chocolate, Citrus" />
          </label>
          <label class="full-span">
            Grind Options (comma separated)
            <input name="grindOptions" value="Whole Bean, Espresso, Pour Over" />
          </label>
          <label class="full-span">
            Image URL
            <input name="image" />
          </label>
          <label class="checkbox-label">
            <input name="featured" type="checkbox" />
            Featured
          </label>
          <button class="btn btn-primary" type="submit" ${state.adminBusy ? 'disabled' : ''}>Add Bean</button>
        </form>

        <h3>Manage Beans</h3>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>250g</th>
                <th>1kg</th>
                <th>Inventory</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${state.beans
                .map(
                  (bean) => `
                <tr data-bean-id="${escapeHtml(bean.id)}">
                  <td>${escapeHtml(bean.name)}</td>
                  <td><input data-field="price250" type="number" step="0.1" value="${bean.prices?.['250'] ?? 0}" /></td>
                  <td><input data-field="price1000" type="number" step="0.1" value="${bean.prices?.['1000'] ?? 0}" /></td>
                  <td><input data-field="inventory" type="number" value="${bean.inventory ?? 0}" /></td>
                  <td>
                    <button
                      class="btn btn-ghost btn-sm"
                      data-action="save-bean-row"
                      data-bean-id="${escapeHtml(bean.id)}"
                      type="button"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              `,
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (state.adminTab === 'inventory') {
    content = `
      <div class="admin-tab-body card">
        <h3>Inventory Matrix</h3>
        <div class="inventory-grid">
          ${inventoryItems
            .map(
              (item) => `
            <article class="inventory-card" data-item-id="${escapeHtml(item.id)}">
              <div>
                <strong>${escapeHtml(item.name)}</strong>
                <p>${escapeHtml(item.type === 'drink' ? 'Drink' : `${item.origin} Bean`)}</p>
              </div>
              <div class="inventory-actions">
                <input data-field="inventory" type="number" value="${item.inventory ?? 0}" />
                <button
                  class="btn btn-outline btn-sm"
                  data-action="save-inventory"
                  data-item-id="${escapeHtml(item.id)}"
                  type="button"
                >
                  Save
                </button>
              </div>
            </article>
          `,
            )
            .join('')}
        </div>
      </div>
    `;
  } else {
    content = renderAnalyticsPanel();
  }

  return `
    <section class="container admin-page">
      <section class="admin-layout">
        <header class="admin-head card">
          <div>
            <h2>Admin Control Room</h2>
            <p>Mock service contracts ready to map into backend endpoints.</p>
          </div>
          <button class="btn btn-outline" data-action="admin-reset-catalog" type="button" ${
            state.adminBusy ? 'disabled' : ''
          }>
            Reset Catalog to Seed
          </button>
        </header>

        <div class="admin-tabs">${tabButtons}</div>

        ${content}
      </section>
    </section>
  `;
}

function renderNotFoundPage() {
  return `
    <section class="container section-block">
      <article class="card not-found">
        <h1>Page Not Found</h1>
        <p>The page you requested is unavailable.</p>
        <a href="#/">Return to Home</a>
      </article>
    </section>
  `;
}

function renderCartDrawer() {
  if (!state.isCartOpen) {
    return '';
  }

  const items = state.cart.items;
  const subtotal = computeSubtotal(items);
  const tax = Number((subtotal * TAX_RATE).toFixed(2));
  const shipping = computeShippingEstimate(
    items,
    state.checkout.shippingInfo.country,
    state.checkout.shippingMethod,
  );
  const total = Number((subtotal + tax + shipping).toFixed(2));

  const emptyMarkup = `
    <div class="empty-cart">
      <p>Your cart is currently empty.</p>
      <p class="muted">Add a drink or bean selection to begin your order.</p>
      <button class="btn btn-outline" data-action="close-cart" type="button">Continue Shopping</button>
    </div>
  `;

  const filledMarkup = `
    <ul class="cart-lines">
      ${items
        .map(
          (item) => `
        <li class="cart-line" data-item-id="${escapeHtml(item.id)}">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" />
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <p>${escapeHtml(
              item.type === 'drink'
                ? `${item.size} • ${item.beanName}`
                : `${item.weightGrams}g • ${item.grind}`,
            )}</p>
            <p>${formatCurrency(item.unitPrice)}</p>
          </div>

          <div class="qty-stepper">
            <button data-action="cart-qty-minus" data-item-id="${escapeHtml(item.id)}" type="button">-</button>
            <span>${item.quantity}</span>
            <button data-action="cart-qty-plus" data-item-id="${escapeHtml(item.id)}" type="button">+</button>
            <button class="remove-line" data-action="cart-remove" data-item-id="${escapeHtml(item.id)}" type="button">
              Remove
            </button>
          </div>
        </li>
      `,
        )
        .join('')}
    </ul>

    <div class="cart-summary">
      <div>
        <span>Subtotal</span>
        <strong>${formatCurrency(subtotal)}</strong>
      </div>
      <div>
        <span>Estimated Tax</span>
        <strong>${formatCurrency(tax)}</strong>
      </div>
      <div>
        <span>Shipping Estimate</span>
        <strong>${formatCurrency(shipping)}</strong>
      </div>
      <div class="total-row">
        <span>Total</span>
        <strong>${formatCurrency(total)}</strong>
      </div>
      <p class="muted">${escapeHtml(shippingDisclaimer())}</p>
      ${
        state.cart.lastSyncedAt
          ? `<p class="muted small">Cart synced at ${new Date(state.cart.lastSyncedAt).toLocaleTimeString()}</p>`
          : ''
      }

      <a href="#/checkout" class="btn btn-primary full-width" data-action="close-cart">Proceed to Checkout</a>
    </div>
  `;

  return `
    <div class="drawer-backdrop" data-action="close-cart"></div>
    <aside class="drawer-panel">
      <div class="drawer-head">
        <h3>Your Cart</h3>
        <button class="icon-btn" data-action="close-cart" type="button" aria-label="Close cart drawer">x</button>
      </div>
      <div class="drawer-content">
        ${items.length ? filledMarkup : emptyMarkup}
      </div>
    </aside>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h4>Night Drip Coffee</h4>
          <p>Crafted, Roasted, Perfected. Brewed moments and rare origins, delivered globally.</p>
        </div>
        <div>
          <h5>International Shipping</h5>
          <p>Bean orders ship worldwide with region and weight-based pricing.</p>
          <p class="muted">International delivery: 5-14 business days</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p>hello@nightdrip.web.id</p>
          <p>Mon-Sat, 8AM-9PM PST</p>
        </div>
      </div>
    </footer>
  `;
}

function renderPage(route) {
  if (route.name === 'home') {
    return renderHomePage();
  }
  if (route.name === 'shop') {
    return renderShopPage();
  }
  if (route.name === 'bean-detail') {
    return renderBeanDetailPage(route.beanId);
  }
  if (route.name === 'checkout') {
    return renderCheckoutPage();
  }
  if (route.name === 'admin') {
    return renderAdminPage();
  }
  return renderNotFoundPage();
}

function render() {
  const route = getRoute();
  updateBodyMode();

  app.innerHTML = `
    <div class="app-shell">
      ${renderHeader(route)}
      <main>
        ${renderPage(route)}
      </main>
      ${renderCartDrawer()}
      ${renderFooter()}
    </div>
  `;
}

async function reloadCatalog() {
  state.catalogLoading = true;
  render();
  const catalog = await fetchCatalog();
  state.drinks = catalog.drinks;
  state.beans = catalog.beans;
  state.catalogLoading = false;
  render();
}

function addProductToCart(productId) {
  const product = currentProducts().find((item) => item.id === productId);
  if (!product) {
    return;
  }

  ensureSelections(product);

  if (product.type === 'drink') {
    const size = state.productOptions[product.id].size ?? 'M';
    const beanId = state.selectedBeansByDrink[product.id] ?? state.beans[0]?.id;
    const bean = state.beans.find((item) => item.id === beanId);
    const unitPrice = drinkPriceBySize(product.price, size);

    mergeCartItem({
      id: `${product.id}-${size}-${beanId}`,
      productId: product.id,
      type: 'drink',
      name: product.name,
      image: product.image,
      quantity: 1,
      unitPrice,
      size,
      beanId,
      beanName: bean?.name ?? 'House Blend',
    });
  } else {
    const weightGrams = Number(state.productOptions[product.id].weightGrams ?? 250);
    const grind = state.productOptions[product.id].grind ?? product.grindOptions?.[0] ?? 'Whole Bean';
    const unitPrice = beanPriceByWeight(product, weightGrams);

    mergeCartItem({
      id: `${product.id}-${weightGrams}-${grind}`,
      productId: product.id,
      type: 'bean',
      name: product.name,
      image: product.image,
      quantity: 1,
      unitPrice,
      weightGrams,
      grind,
      origin: product.origin,
    });
  }

  trackViewed(product);
  state.isCartOpen = true;
  scheduleCartSync();
  persistUIState();
  render();
}

function updateCartQuantity(itemId, nextQty) {
  state.cart.items = state.cart.items
    .map((item) => (item.id === itemId ? { ...item, quantity: Math.max(1, Number(nextQty)) } : item))
    .filter((item) => item.quantity > 0);

  scheduleCartSync();
  render();
}

function removeCartItem(itemId) {
  state.cart.items = state.cart.items.filter((item) => item.id !== itemId);
  scheduleCartSync();
  render();
}

function clearCart() {
  state.cart.items = [];
  scheduleCartSync();
}

async function placeOrder() {
  const summary = computeCheckoutSummary({
    items: state.cart.items,
    countryCode: state.checkout.shippingInfo.country,
    shippingMethod: state.checkout.shippingMethod,
  });

  const order = recordOrder({
    shippingInfo: state.checkout.shippingInfo,
    shippingMethod: state.checkout.shippingMethod,
    items: state.cart.items,
    subtotal: summary.subtotal,
    tax: summary.tax,
    shipping: summary.shipping,
    total: summary.total,
  });

  state.placedOrder = order;
  clearCart();
  render();
}

function handleInput(event) {
  const target = event.target;

  if (target.name === 'filter-query') {
    state.filters.query = target.value;
    render();
    return;
  }

  if (target.name === 'filter-maxPrice') {
    state.filters.maxPrice = Number(target.value);
    render();
    return;
  }

  if (target.name === 'shipping-fullName') {
    state.checkout.shippingInfo.fullName = target.value;
    persistUIState();
    render();
    return;
  }

  if (target.name === 'shipping-email') {
    state.checkout.shippingInfo.email = target.value;
    persistUIState();
    render();
    return;
  }

  if (target.name === 'shipping-address') {
    state.checkout.shippingInfo.address = target.value;
    persistUIState();
    render();
  }
}

function handleChange(event) {
  const target = event.target;

  if (target.name === 'filter-type') {
    state.filters.type = target.value;
    render();
    return;
  }

  if (target.name === 'filter-roast') {
    state.filters.roastLevel = target.value;
    render();
    return;
  }

  if (target.name === 'filter-origin') {
    state.filters.origin = target.value;
    render();
    return;
  }

  if (target.name === 'shipping-country') {
    state.checkout.shippingInfo.country = target.value;
    persistUIState();
    render();
    return;
  }

  const action = target.dataset.action;
  if (action === 'set-product-option') {
    const productId = target.dataset.productId;
    const option = target.dataset.option;
    if (!productId || !option) {
      return;
    }

    if (!state.productOptions[productId]) {
      state.productOptions[productId] = {};
    }

    state.productOptions[productId][option] =
      option === 'weightGrams' ? Number(target.value) : target.value;
    render();
    return;
  }

  if (action === 'set-drink-bean') {
    const productId = target.dataset.productId;
    if (productId) {
      state.selectedBeansByDrink[productId] = target.value;
      render();
    }
  }
}

async function handleClick(event) {
  const trigger = event.target.closest('[data-action]');
  if (!trigger) {
    return;
  }

  const action = trigger.dataset.action;

  if (action === 'toggle-luxury') {
    state.luxuryMode = !state.luxuryMode;
    persistUIState();
    render();
    return;
  }

  if (action === 'toggle-cart') {
    state.isCartOpen = !state.isCartOpen;
    render();
    return;
  }

  if (action === 'close-cart') {
    closeCart();
    return;
  }

  if (action === 'add-product') {
    addProductToCart(trigger.dataset.productId);
    return;
  }

  if (action === 'wishlist-toggle') {
    const productId = trigger.dataset.productId;
    if (!productId) {
      return;
    }

    const exists = state.wishlist.includes(productId);
    state.wishlist = exists
      ? state.wishlist.filter((id) => id !== productId)
      : [productId, ...state.wishlist];
    persistUIState();
    render();
    return;
  }

  if (action === 'track-view') {
    const product = currentProducts().find((item) => item.id === trigger.dataset.productId);
    trackViewed(product);
    persistUIState();
    return;
  }

  if (action === 'cart-qty-minus') {
    const line = state.cart.items.find((item) => item.id === trigger.dataset.itemId);
    if (!line) {
      return;
    }
    updateCartQuantity(line.id, Number(line.quantity) - 1);
    return;
  }

  if (action === 'cart-qty-plus') {
    const line = state.cart.items.find((item) => item.id === trigger.dataset.itemId);
    if (!line) {
      return;
    }
    updateCartQuantity(line.id, Number(line.quantity) + 1);
    return;
  }

  if (action === 'cart-remove') {
    removeCartItem(trigger.dataset.itemId);
    return;
  }

  if (action === 'checkout-next') {
    if (state.checkoutStep === 1 && !shippingInfoIsValid()) {
      return;
    }
    state.checkoutStep = Math.min(3, state.checkoutStep + 1);
    render();
    return;
  }

  if (action === 'checkout-prev') {
    state.checkoutStep = Math.max(1, state.checkoutStep - 1);
    render();
    return;
  }

  if (action === 'set-shipping-method') {
    const methodId = trigger.dataset.methodId;
    if (methodId && SHIPPING_METHODS[methodId]) {
      state.checkout.shippingMethod = methodId;
      render();
    }
    return;
  }

  if (action === 'checkout-place-order') {
    await placeOrder();
    return;
  }

  if (action === 'checkout-reset-order') {
    state.placedOrder = null;
    state.checkoutStep = 1;
    render();
    return;
  }

  if (action === 'set-admin-tab') {
    state.adminTab = trigger.dataset.tabId;
    render();
    return;
  }

  if (action === 'admin-reset-catalog') {
    state.adminBusy = true;
    render();
    await resetCatalog();
    await reloadCatalog();
    state.adminBusy = false;
    render();
    return;
  }

  if (action === 'save-drink-row') {
    const row = trigger.closest('tr');
    if (!row) {
      return;
    }

    const drinkId = trigger.dataset.drinkId;
    const priceInput = row.querySelector('input[data-field="price"]');
    const inventoryInput = row.querySelector('input[data-field="inventory"]');

    state.adminBusy = true;
    render();
    await updateDrink(drinkId, {
      price: Number(priceInput?.value ?? 0),
      inventory: Number(inventoryInput?.value ?? 0),
    });
    await reloadCatalog();
    state.adminBusy = false;
    render();
    return;
  }

  if (action === 'save-bean-row') {
    const row = trigger.closest('tr');
    if (!row) {
      return;
    }

    const beanId = trigger.dataset.beanId;
    const price250Input = row.querySelector('input[data-field="price250"]');
    const price1000Input = row.querySelector('input[data-field="price1000"]');
    const inventoryInput = row.querySelector('input[data-field="inventory"]');

    state.adminBusy = true;
    render();
    await updateBean(beanId, {
      inventory: Number(inventoryInput?.value ?? 0),
      prices: {
        '250': Number(price250Input?.value ?? 0),
        '1000': Number(price1000Input?.value ?? 0),
      },
    });
    await reloadCatalog();
    state.adminBusy = false;
    render();
    return;
  }

  if (action === 'save-inventory') {
    const card = trigger.closest('.inventory-card');
    if (!card) {
      return;
    }

    const itemId = trigger.dataset.itemId;
    const inventoryInput = card.querySelector('input[data-field="inventory"]');

    state.adminBusy = true;
    render();
    await updateInventory(itemId, Number(inventoryInput?.value ?? 0));
    await reloadCatalog();
    state.adminBusy = false;
    render();
  }
}

async function handleSubmit(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const formType = form.dataset.form;
  if (!formType) {
    return;
  }

  event.preventDefault();

  const formData = new FormData(form);

  if (formType === 'add-drink') {
    state.adminBusy = true;
    render();
    await addDrink({
      name: String(formData.get('name') ?? ''),
      description: String(formData.get('description') ?? ''),
      price: Number(formData.get('price') ?? 0),
      image: String(formData.get('image') ?? ''),
      inventory: Number(formData.get('inventory') ?? 0),
      featured: formData.get('featured') === 'on',
    });
    form.reset();
    await reloadCatalog();
    state.adminBusy = false;
    render();
    return;
  }

  if (formType === 'add-bean') {
    state.adminBusy = true;
    render();
    await addBean({
      name: String(formData.get('name') ?? ''),
      description: String(formData.get('description') ?? ''),
      origin: String(formData.get('origin') ?? ''),
      roastLevel: String(formData.get('roastLevel') ?? 'medium'),
      price250: Number(formData.get('price250') ?? 0),
      price1000: Number(formData.get('price1000') ?? 0),
      image: String(formData.get('image') ?? ''),
      inventory: Number(formData.get('inventory') ?? 0),
      featured: formData.get('featured') === 'on',
      tastingNotes: String(formData.get('tastingNotes') ?? '')
        .split(',')
        .map((note) => note.trim())
        .filter(Boolean),
      grindOptions: String(formData.get('grindOptions') ?? '')
        .split(',')
        .map((option) => option.trim())
        .filter(Boolean),
    });
    form.reset();
    await reloadCatalog();
    state.adminBusy = false;
    render();
  }
}

async function bootstrap() {
  persistUIState();
  updateBodyMode();
  render();
  await reloadCatalog();
}

function attachEvents() {
  app.addEventListener('input', handleInput);
  app.addEventListener('change', handleChange);
  app.addEventListener('click', (event) => {
    handleClick(event).catch((error) => {
      console.error('Click handler failed', error);
    });
  });
  app.addEventListener('submit', (event) => {
    handleSubmit(event).catch((error) => {
      console.error('Submit handler failed', error);
    });
  });

  window.addEventListener('hashchange', () => {
    if (getHashPath() === '/checkout' && !state.cart.items.length && !state.placedOrder) {
      state.checkoutStep = 1;
    }
    render();
  });
}

function init() {
  if (!window.location.hash) {
    setHash('/');
  }

  attachEvents();
  bootstrap().catch((error) => {
    console.error('Bootstrap failed', error);
  });
}

init();
