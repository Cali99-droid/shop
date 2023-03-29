import { db, seedDatabase } from '@/database'
import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../models/Product';

type Data = {
    message: string
}

export default async function handles(req: NextApiRequest, res: NextApiResponse<Data>) {

    if(process.env.NODE_ENV === 'production'){
        return res.status(401).json({ message: 'sin acceso a la appi' })
    }

    await db.connect()
    await Product.deleteMany();
    await Product.insertMany(seedDatabase.initialData.products)
    await db.disconnect()
    res.status(200).json({ message: 'proceso ok' })
}