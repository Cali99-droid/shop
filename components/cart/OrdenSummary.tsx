import { Grid, Typography } from '@mui/material';


export const OrdenSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. Products </Typography>

        </Grid>

        <Grid item xs={6} display='flex' justifyContent={'end'}>
            <Typography>3 items </Typography>

        </Grid>
        <Grid item xs={6} >
            <Typography>Subtotal </Typography>

        </Grid>
        <Grid item xs={6} display='flex' justifyContent={'end'}>
            <Typography>${155.32}</Typography>

        </Grid>
        <Grid item xs={6}>
            <Typography>Impuesto 15%</Typography>

        </Grid>
        <Grid item xs={6} display='flex' justifyContent={'end'}>
            <Typography>$35.23</Typography>

        </Grid>
        <Grid item xs={6}>
            <Typography variant='subtitle1'>Total</Typography>

        </Grid>
        <Grid item xs={6} display='flex' justifyContent={'end'} >
            <Typography>$35.23</Typography>

        </Grid>
        
    </Grid>
  )
}
