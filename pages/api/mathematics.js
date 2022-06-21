import { getMathematics } from '../../util/database';

export default async function handler(req, res) {
  // get the mathematics from my database
  const mathematics = await getMathematics();
  res.status(200).json(mathematics);
}
