// pages/api/getlist.ts
//import { NextApiRequest, NextApiResponse } from 'next';

export default (req, res) => {
  const collection = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  res.status(200).json(collection);
};
