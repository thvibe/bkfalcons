// ============================================
// STORE PAGE — Wix Velo Page Code
// ============================================
// Paste this into the Wix Editor page code panel for the Store page.
// This replaces the static "Add to Cart" fallback in store.html
// with real Wix Stores cart integration.
//
// Prerequisites:
//   - Wix Stores app installed on your site
//   - Products exist in your Wix Stores dashboard
//   - Product slugs in data-slug attributes match your Wix product slugs
// ============================================

import wixData from 'wix-data';
import { currentCart } from 'wix-ecom-backend';
import { cart } from 'wix-stores-frontend';

// Wix Stores app ID — same for all Wix Stores sites
const WIX_STORES_APP_ID = '215238eb-22a5-4c36-9e7b-e7c08025e04e';

// Cache product lookups so we don't re-query for the same slug
const productCache = {};

/**
 * Look up a product's _id by its slug from the Stores/Products collection.
 * @param {string} slug - The product URL slug
 * @returns {Promise<object|null>} The product object or null
 */
async function getProductBySlug(slug) {
  if (productCache[slug]) return productCache[slug];

  const results = await wixData.query('Stores/Products')
    .eq('slug', slug)
    .find();

  if (results.items.length > 0) {
    productCache[slug] = results.items[0];
    return results.items[0];
  }
  return null;
}

/**
 * Add a product to the current visitor's cart.
 * Uses the Wix eCommerce currentCart API.
 * @param {string} slug - The product URL slug
 * @param {number} quantity - Number of items to add (default 1)
 */
async function addToCart(slug, quantity = 1) {
  const product = await getProductBySlug(slug);

  if (!product) {
    console.error(`[Store] Product not found for slug: ${slug}`);
    return null;
  }

  const options = {
    lineItems: [{
      catalogReference: {
        appId: WIX_STORES_APP_ID,
        catalogItemId: product._id
        // If your products have variants (size, color), add:
        // options: { variantId: 'the-variant-id' }
      },
      quantity: quantity
    }]
  };

  try {
    const updatedCart = await currentCart.addToCurrentCart(options);
    console.log(`[Store] Added to cart: ${product.name}`);

    // Show the mini cart after adding
    cart.showMiniCart();

    return updatedCart;
  } catch (err) {
    console.error(`[Store] Add to cart failed:`, err);

    // Fallback: navigate to product page
    // wixLocation.to(`/product-page/${slug}`);
    return null;
  }
}

// ============================================
// PAGE READY — Wire up Add to Cart buttons
// ============================================

$w.onReady(function () {
  // Category filter buttons
  const filterBtns = $w('#storeFilters').children || [];

  // If using an HTML embed for the custom store grid,
  // communicate via postMessage from the iframe:
  $w('#storeEmbed').onMessage((event) => {
    const { action, slug } = event.data;

    if (action === 'add-to-cart' && slug) {
      addToCart(slug);
    }
  });
});


// ============================================
// HTML EMBED — postMessage bridge
// ============================================
// If you embed the store grid as custom HTML in Wix,
// add this inside the <script> tag in the HTML embed
// to send messages to the Velo page code:
//
//   document.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       e.preventDefault();
//       const card = btn.closest('.product-card');
//       const slug = card.dataset.slug;
//
//       // Visual feedback
//       btn.textContent = 'Adding...';
//       btn.classList.add('is-added');
//
//       // Send to Velo page code
//       window.parent.postMessage({ action: 'add-to-cart', slug: slug }, '*');
//
//       setTimeout(() => {
//         btn.textContent = 'Added!';
//         setTimeout(() => {
//           btn.textContent = 'Add to Cart';
//           btn.classList.remove('is-added');
//         }, 1200);
//       }, 500);
//     });
//   });
