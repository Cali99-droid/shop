import { ShopLayout } from '@/components/layouts'
import React from 'react'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const address = () => {
  return (
    <ShopLayout title={'Direccion'} pageDescription={'Confirmar direccion del destino'}>
        <Typography variant="h1" component={'h1'}>Dirección</Typography>

        <Grid container spacing={2} sx={{mt:3}}>
            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant='filled' fullWidth></TextField>
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Apellido' variant='filled' fullWidth></TextField>
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Direccion' variant='filled' fullWidth></TextField>
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Direccion 2' variant='filled' fullWidth></TextField>
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Codigo postal' variant='filled' fullWidth></TextField>
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Ciudad' variant='filled' fullWidth></TextField>
                
            </Grid>
            <Grid item xs={12} sm={6}>
               <FormControl fullWidth>
               
                <Select 
                variant='filled'
                label='Pais'
                value={1}
                >

                    <MenuItem value={1}>Perú</MenuItem>
                    <MenuItem value={2}>Bolivia</MenuItem>
                    <MenuItem value={3}>Cosat Rica</MenuItem>
               

                </Select>
                
               </FormControl>
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='telefono' variant='filled' fullWidth></TextField>
                
            </Grid>

        </Grid>

            <Box sx={{mt:5}} display='flex' justifyContent='center'>
                <Button color={'secondary'} className="circular-btn" size='large'>
                    Revisar pedido
                </Button>
            </Box>
    </ShopLayout>
  )
}

export default address
