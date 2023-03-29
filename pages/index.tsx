import { ProductList } from '@/components/products';
import { initialData } from '@/database/products';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts/ShopLayout';



export default function Home() {
  return (
   <ShopLayout title={'Teslo'} pageDescription={'productos de ropa'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2' sx={{mb:1}}>Todos los productos</Typography>
      
        <ProductList products={initialData.products as any}/>

   </ShopLayout>
  )
}
