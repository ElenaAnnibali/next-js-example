import { NextApiRequest, NextApiResponse } from 'next';
import {
  deletemathemaicById,
  getMathematicById,
  updateMathematicById,
} from '../../../util/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const mathematicId = Number(req.query.mathemaicId);

  if (!mathematicId) {
    return res
      .status(400)
      .json({ error: 'mathematicId must be a valid number id' });
  }

  // if method get
  if (req.method === 'GET') {
    const mathematic = await getMathematicById(mathematicId);

    res.status(200).json(mathematic);
  }
  // if method PUT
  if (req.method === 'PUT') {
    if (!mathematicId || !req.body.firstName || !req.body.fun) {
      return res.status(400).json({
        error: 'insert a mathematic needs both a valid id, first name and fun',
      });
    }

    const updatedMathematic = await updateMathematicById(
      mathematicId,
      req.body.firstName,
      req.body.fun,
    );

    res.status(200).json(updatedMathematic);
  }
  // if method DELETE
  if (req.method === 'DELETE') {
    const deletedMathematic = await deletemathemaicById(mathematicId);
    return res.status(200).json(deletedMathematic);
  }

  // check if we are using a method that is allowed
  res.status(405).end();
}
