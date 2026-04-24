const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { amount, currency = 'eur', shipping, items } = req.body;

    if (!amount || amount < 50) {
      return res.status(400).json({ error: 'Montant invalide' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        items: JSON.stringify(items || []),
        customer_name: shipping?.name || '',
        customer_email: shipping?.email || ''
      },
      shipping: shipping ? {
        name: shipping.name,
        phone: shipping.phone,
        address: {
          line1: shipping.address,
          city: shipping.city,
          postal_code: shipping.zip,
          country: shipping.country
        }
      } : undefined
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
};
