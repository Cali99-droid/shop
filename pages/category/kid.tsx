import { ProductList } from '@/components/products';
import {Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts/ShopLayout';


import { useProducts } from '@/hooks';
import { FullScreenLoading } from '../../components/ui/FullScreenLoading';
export default function Home() {

 const{products, isLoading}= useProducts('/products?gender=kid');
 
  return (
   <ShopLayout title={'Ropa niños'} pageDescription={'productos de ropa niños'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2' sx={{mb:1}}>Niños</Typography>   

      {
        isLoading
        ? <FullScreenLoading/>
        :<ProductList products={products}/>
      }
        
   </ShopLayout>
  )
}
