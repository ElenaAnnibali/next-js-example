// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // check if we are using a method that is allowed
  if (req.method !== 'GET' || req.method !== 'POST') {
    return res.status(405);
  }
  // if method get
  if (req.method === 'GET') {
    return res.stauts();
  } // if method post
  if (true) {
  }
  res
    .status(200)
    .json({ mathematics: 'http://localhost:3000/api/mathematics' });
}
