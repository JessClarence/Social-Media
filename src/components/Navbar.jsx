
import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, InputBase, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { Adjust, Mail, Notifications} from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const Search = styled('div')(({theme})=>({
  backgroundColor: "white",
  padding: "0px 10px",
  width: '40%',
  borderRadius: theme.shape.borderRadius 
}))
const Icons = styled(Box)(({theme})=>({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))
const UserBox = styled(Box)(({theme})=>({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false);

  

  return (
      <AppBar position='sticky'>
        <StyledToolBar>
          <Typography variant="h5" sx={{display: {xs:"none", sm:"block"}}}>PesBok</Typography>
          <Adjust sx={{display:{xs:"block", sm:"none"}}}/>
          <Search><InputBase placeholder='search...'/></Search>
          <Icons>
            <Badge color="error" badgeContent={4}>
              <Mail />
            </Badge>
            <Badge color="error" badgeContent={2}>
              <Notifications />
            </Badge>
            <Avatar sx={{height:30,width:30}} 
                    src="https://images.pexels.com/photos/11990061/pexels-photo-11990061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    onClick={e=>setOpen(true)}
            />       
          </Icons>
          <UserBox onClick={e=>setOpen(true)}>
            <Avatar sx={{height:30,width:30}} 
                    src="https://images.pexels.com/photos/11990061/pexels-photo-11990061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            <Typography variant="span">Bob</Typography>
          </UserBox>
        </StyledToolBar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
  )
}

export default Navbar;