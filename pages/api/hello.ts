// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const email = req.body.email;
  // Then save email to your database, etc...
  res.status(200).json({ name: 'John Doe' })
}
