import  NextLink from 'next/link'
import {AppBar, Link, Toolbar, Box, Button,IconButton} from '@mui/material/'

import { Typography } from '@mui/material';
import { SearchOutlined,ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UiContext } from '@/context';



export const Navbar = () => {
    const {asPath} = useRouter();
    const {toggleSideMenu} = useContext(UiContext)
  return (
    <AppBar>
        <Toolbar>
            <NextLink href="/"  passHref legacyBehavior>
                <Link  display='flex' alignItems='center'>
                    <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ml:0.5}}>Shop</Typography>
                 </Link>
            </NextLink>

            <Box flex={1} />

            <Box sx={{display:{xs:'none', sm:'block'}}}>                
                <NextLink href={'/category/men'} passHref legacyBehavior>
                    <Link>
                        <Button color={asPath === '/category/men' ? 'info':'primary'}>
                            Hombres
                        </Button>
                    </Link>
                </NextLink>

                <NextLink href={'/category/women'} passHref legacyBehavior>
                    <Link>
                        <Button color={asPath === '/category/women' ? 'info':'primary'}>
                            Mujeres
                        </Button>
                    </Link>

                </NextLink>

                <NextLink href={'/category/kid'} passHref legacyBehavior>
                    <Link>
                        <Button color={asPath === '/category/kid' ? 'info':'primary'}>
                            Niños
                        </Button>
                    </Link>
                </NextLink>
            </Box>



            
            <Box flex={1} />
            <IconButton>
                <SearchOutlined/>
            </IconButton>

            <NextLink href={'/cart'} passHref legacyBehavior>
                <Link>
                 <IconButton>
                   <Badge badgeContent={2} color="secondary">
                     <ShoppingCartOutlined/>
                   </Badge>
                 </IconButton>
                </Link>

            </NextLink>

            <Button onClick={toggleSideMenu}>
                Menu
            </Button>


        </Toolbar>
    </AppBar>
  )
}

