import { ProductList } from '@/components/products';
import { initialData } from '@/database/products';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts/ShopLayout';


import { useProducts } from '@/hooks';
import { FullScreenLoading } from '../components/ui/FullScreenLoading';
export default function Home() {

 const{products, isLoading}= useProducts('/products');
 
  return (
   <ShopLayout title={'Teslo'} pageDescription={'productos de ropa'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2' sx={{mb:1}}>Todos los productos</Typography>   

      {
        isLoading
        ? <FullScreenLoading/>
        :<ProductList products={products}/>
      }
        
   </ShopLayout>
  )
}
