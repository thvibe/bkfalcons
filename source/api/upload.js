import { put } from '@vercel/blob';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const filename = req.headers['x-filename'];
  if (!filename) {
    return res.status(400).json({ error: 'Missing x-filename header' });
  }

  try {
    const blob = await put(`products/${filename}`, req, {
      access: 'private',
      contentType: req.headers['content-type'] || 'image/jpeg',
    });

    return res.status(200).json({ url: blob.url });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
