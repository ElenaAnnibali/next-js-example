// simulate a Node.js server-side dependency to make
// the file fail if used in the frontend
import fs from 'node:fs';

console.log(fs);

export const mathematicsDatabase = [
  { id: 1, name: 'multiplication', type: 'algebra', fun: true },
  { id: 2, name: 'matrix', type: 'linear geometry', fun: true },
  {
    id: 3,
    name: 'differential equation',
    type: 'function analysis',
    fun: true,
  },
  { id: 4, name: 'integral', type: 'function analysis', fun: false },
  { id: 5, name: 'limits', type: 'function analysis', fun: false },
];
