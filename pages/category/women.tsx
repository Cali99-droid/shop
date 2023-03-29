import { ProductList } from '@/components/products';
import {Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts/ShopLayout';


import { useProducts } from '@/hooks';
import { FullScreenLoading } from '../../components/ui/FullScreenLoading';
export default function Home() {

 const{products, isLoading}= useProducts('/products?gender=women');
 
  return (
   <ShopLayout title={'Ropa Mujeres'} pageDescription={'productos de ropa Mujeres'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2' sx={{mb:1}}>Mujeres</Typography>   

      {
        isLoading
        ? <FullScreenLoading/>
        :<ProductList products={products}/>
      }
        
   </ShopLayout>
  )
}