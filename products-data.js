const PRODUCTS = [
  {
    id: 'omni9-saumon',
    name: 'OMNI 9 SAUMON',
    brand: 'Saucony',
    price: 79.99,
    priceWas: 160,
    discount: 50,
    img: 'https://sneakerworld.fr/cdn/shop/files/saumon1.png?v=1765834464&width=533',
    imgHover: 'https://sneakerworld.fr/cdn/shop/files/saumon2.png?v=1765834466&width=533',
    gallery: [
      'https://sneakerworld.fr/cdn/shop/files/saumon1.png?v=1765834464&width=533',
      'https://sneakerworld.fr/cdn/shop/files/saumon2.png?v=1765834466&width=533'
    ],
    description: 'La Saucony ProGrid OMNI 9 est une chaussure de running intemporelle, revisitée avec une esthétique streetwear. Ce coloris saumon exclusif combine la technologie ProGrid pour un amorti optimal et un design rétro années 2000 qui séduit les sneakerheads du monde entier.',
    features: ['Semelle ProGrid ultra-confort', 'Tige mesh respirante', 'Renforts en cuir synthétique', 'Semelle extérieure durable'],
    category: 'saucony',
    tag: '-50%'
  },
  {
    id: 'omni9-tricolor',
    name: 'OMNI 9 TRICOLOR',
    brand: 'Saucony',
    price: 79.99,
    priceWas: 160,
    discount: 50,
    img: 'https://sneakerworld.fr/cdn/shop/files/IMG-0075.png?v=1765923654&width=533',
    imgHover: 'https://sneakerworld.fr/cdn/shop/files/IMG-0081.png?v=1765923804&width=533',
    gallery: [
      'https://sneakerworld.fr/cdn/shop/files/IMG-0075.png?v=1765923654&width=533',
      'https://sneakerworld.fr/cdn/shop/files/IMG-0081.png?v=1765923804&width=533'
    ],
    description: 'Coloris tricolore emblématique de la ProGrid OMNI 9. Un mix parfait de blanc, rouge et bleu pour une sneaker polyvalente qui s\'adapte à toutes les tenues.',
    features: ['Coloris tricolore exclusif', 'Semelle ProGrid ultra-confort', 'Tige mesh respirante', 'Design rétro 2000s'],
    category: 'saucony',
    tag: '-50%'
  },
  {
    id: 'sxm-vanilla-ice',
    name: 'S X M VANILLA ICE',
    brand: 'Salomon x Mizuno',
    price: 99.99,
    priceWas: 189.99,
    discount: 47,
    img: 'https://sneakerworld.fr/cdn/shop/files/IMG-0221.png?v=1768000279&width=533',
    imgHover: 'https://sneakerworld.fr/cdn/shop/files/IMG-0223.png?v=1768000279&width=533',
    gallery: [
      'https://sneakerworld.fr/cdn/shop/files/IMG-0221.png?v=1768000279&width=533',
      'https://sneakerworld.fr/cdn/shop/files/IMG-0223.png?v=1768000279&width=533'
    ],
    description: 'La collaboration exclusive Salomon x Mizuno. Le coloris Vanilla Ice combine élégance et performance pour une sneaker collector inégalée.',
    features: ['Collaboration Salomon x Mizuno', 'Semelle Contagrip', 'Technologie Wave Mizuno', 'Coloris Vanilla Ice exclusif'],
    category: 'salomon',
    tag: '-47%'
  },
  {
    id: 'omni9-black-grey',
    name: 'OMNI 9 BLACK AND GREY',
    brand: 'Saucony',
    price: 79.99,
    priceWas: 160,
    discount: 50,
    img: 'https://sneakerworld.fr/cdn/shop/files/silver.png?v=1765840089&width=533',
    imgHover: 'https://sneakerworld.fr/cdn/shop/files/silver_1.png?v=1765840097&width=533',
    gallery: [
      'https://sneakerworld.fr/cdn/shop/files/silver.png?v=1765840089&width=533',
      'https://sneakerworld.fr/cdn/shop/files/silver_1.png?v=1765840097&width=533'
    ],
    description: 'Le classique noir et gris revisité. Cette OMNI 9 s\'adapte à tous les styles, du casual au sportswear.',
    features: ['Coloris polyvalent noir/gris', 'Semelle ProGrid ultra-confort', 'Tige mesh respirante', 'Design intemporel'],
    category: 'saucony',
    tag: '-50%'
  },
  {
    id: 'gel-kayano-14',
    name: 'GEL KAYANO 14',
    brand: 'Asics',
    price: 79.99,
    priceWas: 160,
    discount: 50,
    img: 'https://sneakerworld.fr/cdn/shop/files/asics1.png?v=1765892475&width=533',
    imgHover: 'https://sneakerworld.fr/cdn/shop/files/asics2.png?v=1765892479&width=533',
    gallery: [
      'https://sneakerworld.fr/cdn/shop/files/asics1.png?v=1765892475&width=533',
      'https://sneakerworld.fr/cdn/shop/files/asics2.png?v=1765892479&width=533'
    ],
    description: 'La légendaire Asics Gel Kayano 14 dans son coloris classique. Design iconique des années 2000 avec une semelle GEL pour un confort optimal.',
    features: ['Technologie GEL Asics', 'Semelle intermédiaire SpEVA', 'Tige en mesh et cuir', 'Support pronation'],
    category: 'asics',
    tag: '-50%'
  },
  {
    id: 'omni9-miami',
    name: 'OMNI 9 MIAMI',
    brand: 'Saucony',
    price: 79.99,
    priceWas: 160,
    discount: 50,
    img: 'https://sneakerworld.fr/cdn/shop/files/miami.png?v=1765838866&width=533',
    imgHover: 'https://sneakerworld.fr/cdn/shop/files/miami_3.png?v=1765838866&width=533',
    gallery: [
      'https://sneakerworld.fr/cdn/shop/files/miami.png?v=1765838866&width=533',
      'https://sneakerworld.fr/cdn/shop/files/miami_3.png?v=1765838866&width=533'
    ],
    description: 'Inspirée de l\'énergie de Miami, cette OMNI 9 affiche des couleurs vives et contrastées. Parfaite pour les looks estivaux et les soirées en ville.',
    features: ['Coloris Miami exclusif', 'Semelle ProGrid ultra-confort', 'Tige mesh respirante', 'Édition limitée'],
    category: 'saucony',
    tag: '-50%'
  },
  {
    id: 'gel-kayano-14-blue-glow',
    name: 'GEL KAYANO 14 BLUE GLOW',
    brand: 'Asics',
    price: 79.99,
    priceWas: 160,
    discount: 50,
    img: 'https://sneakerworld.fr/cdn/shop/files/IMG-0158.png?v=1766433213&width=533',
    imgHover: 'https://sneakerworld.fr/cdn/shop/files/IMG-0162.png?v=1766433214&width=533',
    gallery: [
      'https://sneakerworld.fr/cdn/shop/files/IMG-0158.png?v=1766433213&width=533',
      'https://sneakerworld.fr/cdn/shop/files/IMG-0162.png?v=1766433214&width=533'
    ],
    description: 'Le coloris Blue Glow de la Gel Kayano 14 illumine chaque tenue. Un bleu électrique qui fait tourner les têtes.',
    features: ['Coloris Blue Glow exclusif', 'Technologie GEL Asics', 'Semelle intermédiaire SpEVA', 'Tige en mesh respirant'],
    category: 'asics',
    tag: '-50%'
  },
  {
    id: 'omni9-tropical-blue',
    name: 'OMNI 9 TROPICAL BLUE',
    brand: 'Saucony',
    price: 79.99,
    priceWas: 160,
    discount: 50,
    img: 'https://sneakerworld.fr/cdn/shop/files/green.png?v=1765842389&width=533',
    imgHover: 'https://sneakerworld.fr/cdn/shop/files/green_1.png?v=1765842400&width=533',
    gallery: [
      'https://sneakerworld.fr/cdn/shop/files/green.png?v=1765842389&width=533',
      'https://sneakerworld.fr/cdn/shop/files/green_1.png?v=1765842400&width=533'
    ],
    description: 'Un coloris tropical exclusif pour cette OMNI 9. Le bleu tropical apporte une touche de fraîcheur unique.',
    features: ['Coloris Tropical Blue exclusif', 'Semelle ProGrid ultra-confort', 'Tige mesh respirante', 'Stock limité'],
    category: 'saucony',
    tag: '-50%'
  }
];

const Cart = {
  get() { return JSON.parse(localStorage.getItem('sw_cart') || '[]'); },
  save(cart) { localStorage.setItem('sw_cart', JSON.stringify(cart)); Cart.updateCount(); },
  add(productId, size, qty = 1) {
    const cart = Cart.get();
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return false;
    const key = `${productId}-${size}`;
    const existing = cart.find(i => i.key === key);
    if (existing) { existing.qty += qty; }
    else { cart.push({ key, productId, size, qty, name: product.name, brand: product.brand, price: product.price, img: product.img }); }
    Cart.save(cart);
    return true;
  },
  remove(key) { Cart.save(Cart.get().filter(i => i.key !== key)); },
  updateQty(key, qty) {
    if (qty <= 0) { Cart.remove(key); return; }
    const cart = Cart.get();
    const item = cart.find(i => i.key === key);
    if (item) { item.qty = qty; Cart.save(cart); }
  },
  count() { return Cart.get().reduce((s, i) => s + i.qty, 0); },
  total() { return Cart.get().reduce((s, i) => s + i.price * i.qty, 0); },
  clear() { localStorage.removeItem('sw_cart'); Cart.updateCount(); },
  updateCount() {
    const c = Cart.count();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = c;
      el.style.display = c > 0 ? 'flex' : 'none';
    });
  }
};

const PROMO_CODE = 'BIENVENU10';
const PROMO_RATE = 0.10;
