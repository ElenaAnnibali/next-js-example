import { NextApiRequest, NextApiResponse } from 'next';
import { getMathematics, insertMathematic } from '../../../util/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // if method get
  if (req.method === 'GET') {
    const mathematics = await getMathematics();

    console.log(mathematics);
    return res.status(200).json(mathematics);
  } // if method post
  if (req.method === 'POST') {
    console.log(req.body);
    const newMathematic = await insertMathematic(
      req.body.firstName,
      req.body.type,
      req.body.fun,
    );
    return res.status(200).json(newMathematic);
  }
  // check if we are using a method that is allowed
  res.status(405).json({ error: 'method not allowed' });
}
