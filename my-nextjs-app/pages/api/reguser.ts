import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        //TODO: handle post
        res.status(200).json({ message: 'POST request received' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
