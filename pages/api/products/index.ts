import { db, SHOM_CONSTANS } from '@/database';
import type { NextApiRequest, NextApiResponse } from 'next'

import Product from '../../../models/Product';
import { IProduct } from '../../../interfaces/products';

type Data = 
|{ message: string}
| IProduct[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProducts(req,res)   
        default:
            return  res.status(400).json({ message: 'Bad request' })
    }

}

async function  getProducts(req: NextApiRequest, res: NextApiResponse<Data>) {

    const {gender = 'all'} =  req.query;



    let condition = {};
    if(gender !== 'all' && SHOM_CONSTANS.validGenders.includes(`${gender}`) ){
        condition = {gender};

    }
   await db.connect();
     const products = await Product.find(condition)
     .select('title images price inStock slug -_id')  
     .lean()
   await db.disconnect()

   return res.status(200).json(products)
}
