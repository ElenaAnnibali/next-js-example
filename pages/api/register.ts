import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createUser, getUserByUsername } from '../../util/database';

export type RegisterResponseBody =
  | {
      errors: {
        message: string;
      }[];
    }
  | {
      user: { id: number };
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponseBody>,
) {
  // check the method to be post
  if (req.method === 'POST') {
    if (
      typeof req.body.username !== 'string' ||
      typeof req.body.password !== 'string' ||
      req.body.password === undefined
    ) {
      res
        .status(400)
        .json({ errors: [{ message: 'username or password not provided' }] });
      return;
    }

    if (await getUserByUsername(req.body.username)) {
      res.status(400).json({ errors: [{ message: 'username already taken' }] });
      return;
    }
    // hash the password
    const passwordHash = await bcrypt.hash(req.body.password, 12);

    console.log('plain', req.body.password);
    console.log('hash', passwordHash);

    const newUser = await createUser(req.body.username, passwordHash);

    console.log('newUSer:', newUser);

    return res.status(200).json({ user: { id: newUser.id } });
  } else {
    res.status(405).json({ errors: [{ message: 'method not allowed' }] });
  }
}
