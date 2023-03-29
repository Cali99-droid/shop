import { Typography } from '@mui/material';

import { initialData } from '../../database/products';

const productInCart =[
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
]
export const CartList = () => {
  return (<>
  
    {
      productInCart.map(product=>(
        <Typography key={product.slug}>{product.slug}</Typography>
      ))
    }
  
  
  </>
    
  )
}

