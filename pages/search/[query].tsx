import { ProductList } from '@/components/products';
import { initialData } from '@/database/products';
import { Card, CardActionArea, CardMedia, Grid, Typography, Box } from '@mui/material';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { GetServerSideProps } from 'next'

import { useProducts } from '@/hooks';
import { FullScreenLoading } from '../../components/ui/FullScreenLoading';
import { dbProducts } from '@/database';
import { IProduct } from '../../interfaces/products';
import { FC } from 'react';
import { getAllProducts } from '../../database/dbProducts';

interface Props{
    products: IProduct[];
    foundProducts: boolean;
    query:string;
}

const SearchPage:FC<Props> =({products,query, foundProducts})=>{

//  const{products, isLoading}= useProducts('/search/cybertruck');
 
  return (
   <ShopLayout title={'Teslo'} pageDescription={'productos de ropa'}>
      <Typography variant='h1' component='h1'>Buscar Producto</Typography>


      

      {
        foundProducts
        ? <Typography variant='h2' component='h2' sx={{mb:1}}>Relacionados: {query} </Typography>   
        :(
            <Box display={'flex'}>
                 <Typography variant='h2' component='h2' sx={{mb:1}}>No encontramos nungun producto</Typography> 
                 <Typography variant='h2' component='h2' sx={{ml:1}} color='secondary'> {query}</Typography> 
            </Box>
       
        
        
        )
       
      }
         <ProductList products={products}/>
   </ShopLayout>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const {query= ''}=params as {query: string};

    if(query.length === 0){
        return{
            redirect:{
                destination:'/',
                permanent: true
            }
        }

    }

    let products = await dbProducts.getProductByTerm(query)
     //TODO retornar otros prodss

     const foundProducts = products.length > 0;

     if(!foundProducts){
     products = await dbProducts.getAllProducts();
     }

    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
}
export default SearchPage