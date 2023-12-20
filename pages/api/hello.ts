// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const email = req.body.email;
  // Then save email to your database, etc...
  const data = { header: req.headers, url: req.url, name: 'Macondo' };
  res.status(200).json(data);
}
