import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Button, Chip, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid/models';
import NextLink from 'next/link';

const columns: GridColDef[]=[
    {field:'id', headerName:'ID', width:100},
    {field:'fullName', headerName:'Nombre Completo', width:300},

    {
        field: 'paid',
        headerName: 'Payed',
        description: 'Showed payed status',
        width: 200,
        renderCell: (params) => {
            return (
                params.value
                    ? <Chip color="success" label='Payed' variant='outlined' />
                    : <Chip color="error" label='Not payed' variant='outlined' />
            )
        }
    },

    {
        field: 'order',
        headerName: 'Show order',
        description: 'Show order page',
        width: 200,
        sortable: false,
        renderCell: (params) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Button variant='contained' color='primary'>
                        Show order
                    </Button>
                </NextLink>
            )
        }
    },
];

const rows =[
    { id:1,paid:true, fullName: 'Carlos Orellano' },
    { id:2,paid:false, fullName: 'Barlos Orellano' },
    { id:3,paid:true, fullName: 'Arlos Orellano' },
    { id:4,paid:false, fullName: 'Darlos Orellano' },
    { id:5,paid:false, fullName: 'Earlos Orellano' },
]

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Ordenes del cliente'}>
        <Typography variant='h1' component={'h1'}>Historial de Ordenes</Typography>

        <Grid container>
            <Grid item sx={{height:650, width:'100%'}}>
                <DataGrid columns={columns} rows={rows}  />
            </Grid>
            

        </Grid>

    </ShopLayout>
  )
}

export default HistoryPage
