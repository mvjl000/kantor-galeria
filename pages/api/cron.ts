import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { authorization } = req.headers;

      //   if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
      if (authorization === `Bearer qweqwe123`) {
        res.status(200).json({ success: true, token: authorization });
      } else {
        res.status(401).json({ success: false, token: authorization });
      }
    } catch (err) {
      //   res.status(500).json({ statusCode: 500, message: err.message });
      res.status(500).json({ statusCode: 500, message: 'something went wrong' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
