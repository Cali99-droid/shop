import { ProductSlideshow } from '@/components/products';

import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { ItemCounter } from '../../components/ui/ItemCounter';
import { SizeSelector } from '../../components/products/SizeSelector';
import { IProduct } from '../../interfaces/products';
import { FC } from 'react';
import { GetStaticPaths,GetServerSideProps, GetStaticProps } from 'next'
import { dbProducts } from '@/database';
import { Product } from '@/models';

interface Props{
  product:IProduct
}



const ProductPage:FC<Props> = ({product}) => {


  // const router = useRouter();
  // const {products:product, isLoading}=useProducts<IProduct>(`/products/${router.query.slug}`)
   
 
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images}/>

        </Grid>
        <Grid item xs={8} sm={5}>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>{product.title}</Typography>
            <Typography variant='subtitle1' component='h2'>${product.price}</Typography>

            {/**cantidad */}
            <Box sx={{my:2}}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItemCounter/>
              <SizeSelector selectedSize={product.sizes[2]} sizes={product.sizes}></SizeSelector>

            </Box>

            {/**agreegar carrit */}
            <Button color='secondary' className='circular-btn'>
              Agregar al carrito
            </Button>

            <Chip  label='no hay existencias' color='error' variant='outlined'/>

            <Box sx={{mt:3}}>
              <Typography variant='subtitle2'>Descripcion</Typography>
              <Typography variant='body2'>{product.description}</Typography>

            </Box>

          </Box>

        </Grid>
        
      </Grid>

    </ShopLayout>
  )
}

//getsever side props
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps: GetServerSideProps = async ({params}) => {
//  const {slug=''} = params as {slug:string}
//  const product = await dbProducts.getProductSlug(slug);

//  if(!product){
//   return{
//     redirect:{
//       destination:'/',
//       permanent:false
//     }
//   }
//  }
//   return {
//     props: {
//       product
//     }
//   }
// }

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
 const productSlugs = await dbProducts.getAllProductSlug();
 
  return {
    paths: productSlugs.map(({slug}) =>({
      params: {
          slug
        }
    })) 
    ,
    fallback: "blocking"
  }
}




// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug =''} = params as {slug:string}
  const product = await dbProducts.getProductSlug(slug);

  if(!product){
      return{
        redirect:{
          destination:'/',
          permanent:false
        }
      }
     }



  return {
    props: {
      product
    },
    revalidate : 60 * 60 *24
  }
}





export default ProductPage
