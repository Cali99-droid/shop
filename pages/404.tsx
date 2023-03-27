import { ShopLayout } from '@/components/layouts'
import React from 'react'
import { Box } from '@mui/material/';
import { Typography } from '@mui/material';

const Custom404 = () => {
  return (
    <div>
      <ShopLayout title={'Page not found '} pageDescription={'No hay nada que mostrar aqui'}>
        <Box sx={{flexDirection:{xs:'column',sm:'row'}}} display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
            <Typography variant='h1' component='h1' fontSize={100} fontWeight={200}>404 |</Typography>
            <Typography marginLeft={2}>No encontramos ninguna página aqui </Typography>

        </Box>

      </ShopLayout>
    </div>
  )
}

export default Custom404
