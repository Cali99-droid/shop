import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useContext, useState } from 'react';
import { useRouter } from "next/router";
import { UiContext } from "@/context";



export const SideMenu = () => {
    const {isMenuOpen, toggleSideMenu} = useContext(UiContext)
    const router = useRouter();


    const [searchTerm, setSearchTerm] = useState('');
    const onSearchTerm = ()=>{
        if(searchTerm.trim().length === 0) return;
        navigateTo(`/search/${searchTerm}`)

    }



    const navigateTo = (url:string) =>{
        toggleSideMenu();
        router.push(url)
    }
    
  return (
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={toggleSideMenu}
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItemButton>
                    <Input
                    value={searchTerm}
                    onKeyUp={ (e) => e.key === 'Enter' && onSearchTerm() }

                    onChange={(e)=>setSearchTerm(e.target.value)}
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                onClick={onSearchTerm}
                                >
                                 <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Perfil'} />
                </ListItemButton>
              


                <ListItemButton>
                    <ListItemIcon>
                        <ConfirmationNumberOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mis Ordenes'} />
                </ListItemButton>


                <ListItemButton sx={{ display: { xs: '', sm: 'none' } }} onClick={()=>navigateTo('/category/men')}>
                    <ListItemIcon>
                        <MaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Hombres'} />
                </ListItemButton>

                <ListItemButton sx={{ display: { xs: '', sm: 'none' } }}
                onClick={()=>navigateTo('/category/women')}
                >
                    <ListItemIcon>
                        <FemaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mujeres'} />
                </ListItemButton>

                <ListItemButton sx={{ display: { xs: '', sm: 'none' } }}
                onClick={()=>navigateTo('/category/kid')}
                >
                    <ListItemIcon>
                        <EscalatorWarningOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Niños'} />
                </ListItemButton>


                <ListItemButton>
                    <ListItemIcon>
                        <VpnKeyOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Ingresar'} />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Salir'} />
                </ListItemButton>


                {/* Admin */}
                <Divider />
                <ListSubheader>Admin Panel</ListSubheader>

                <ListItemButton>
                    <ListItemIcon>
                        <CategoryOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Productos'} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ConfirmationNumberOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Ordenes'} />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <AdminPanelSettings/>
                    </ListItemIcon>
                    <ListItemText primary={'Usuarios'} />
                </ListItemButton>
            </List>
        </Box>
    </Drawer>
  )
}