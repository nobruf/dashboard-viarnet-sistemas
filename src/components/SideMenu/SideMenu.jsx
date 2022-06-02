import React from 'react'
import { TiHome, TiMap ,TiDevicePhone,TiPhoneOutline} from 'react-icons/ti';
import {MdRouter} from 'react-icons/md'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import "./SideMenu.css"

const SideMenu = () => {
  return (
    <ProSidebar className='menu'>
  <SidebarHeader>
    <img src="https://www.viarnet.com.br/wp-content/uploads/2021/09/logo_horizontal_viarnet_branco.png" alt="LOGOMARCA" className='logo'/>
  </SidebarHeader>
  <SidebarContent>
  <Menu iconShape="square">
      <MenuItem icon={<TiHome/>}><Link to="dashboard">Dashboard</Link></MenuItem>
      <SubMenu title="Instalações" icon={<TiMap/>}>
        <MenuItem><Link to="realizadas">Realizadas</Link></MenuItem>
        <MenuItem><Link to="instaladores">Instaladores</Link></MenuItem>
      </SubMenu>
      <SubMenu title="Telefonia Fixa" icon={<TiPhoneOutline/>}>
        <MenuItem><Link to="realizadas">Realizadas</Link></MenuItem>
        <MenuItem><Link to="instaladores">Instaladores</Link></MenuItem>
      </SubMenu>
      <SubMenu title="Telefonia Movel" icon={<TiDevicePhone/>}>
        <MenuItem><Link to="realizadas">Realizadas</Link></MenuItem>
        <MenuItem><Link to="instaladores">Instaladores</Link></MenuItem>
      </SubMenu>
      <SubMenu title="Compatibilidade" icon={<MdRouter/>}>
        <MenuItem><Link to="realizadas">Realizadas</Link></MenuItem>
        <MenuItem><Link to="instaladores">Instaladores</Link></MenuItem>
      </SubMenu>
    </Menu>
  </SidebarContent>
  <SidebarFooter>
    
  </SidebarFooter>
</ProSidebar>
  )
}

export default SideMenu
