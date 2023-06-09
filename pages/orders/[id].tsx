import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Box, Chip, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import  {CartList}  from '../../components/cart/CartList';
import { OrdenSummary } from '../../components/cart/OrdenSummary';
import NextLink from 'next/link'
import { CreditCardOffOutlined, CreditCardOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title={'Resumen de la orden 12532'} pageDescription={'Resumen de orden'}>
    <Typography variant='h1' component={'h1'}>Orden: afasg33</Typography>
{/* <Chip 

sx={{mt:2}}
label="Pendiente de pago"
variant='outlined'
color='error'
icon={<CreditCardOffOutlined/>}
/> */}

<Chip 

sx={{mt:2}}
label="Pagada"
variant='outlined'
color='success'
icon={<CreditScoreOutlined/>}
/>

   <Grid container>
    <Grid item xs={12} sm={7}>
        <CartList editable={false} />

    </Grid>
    <Grid item xs={12} sm={5}>
        <Card className='summary-card'>
            <CardContent>
                <Typography variant='h2'>Resumen(3 productos)</Typography>
                <Divider sx={{my:1}}/>

                <Box display={'flex'} justifyContent='space-between'>
                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                    <NextLink href={'/checkout/address'} passHref legacyBehavior>
                        <Link underline='always'>
                            Editar
                        </Link>
                        
                    </NextLink>
                </Box>
               
                <Typography>Nombre para llenar</Typography>
                <Typography>Nombre para llenar</Typography>
                <Typography>Nombre para llenar</Typography>
                <Divider sx={{my:1}}/>

                <Box display={'flex'} justifyContent='end'>
                    <NextLink href={'/cart'} passHref>
                        <Link underline='always'>
                            Editar
                        </Link>
                        
                    </NextLink>
                </Box>
                <OrdenSummary/> 
                <Box sx={{mt:3}}>
                   <h1>Pagar</h1>
                   <Chip 
                    sx={{mt:2}}
                    label="Pagada"
                    variant='outlined'
                    color='success'
                    icon={<CreditScoreOutlined/>}
                    />
                    
                </Box>
            </CardContent>
        </Card>

    </Grid>

   </Grid>

</ShopLayout>
  )
}

export default OrderPage
