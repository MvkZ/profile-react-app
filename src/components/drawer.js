import { Drawer,
    ListItem,
    ListItemIcon,
    ListItemText, Button
} from "@material-ui/core";

import Grid from "@mui/material/Grid";

import React, { Component } from "react";

import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined,
    SettingsOutlined,
} from "@material-ui/icons";
import Typography from '@mui/material/Typography';
import { LogoutOutlined } from "@mui/icons-material";
  
const data = [
{
    name: "Home",
    icon: <HomeOutlined />,
},
{ name: "Projects", icon: <InboxOutlined /> },
{ name: "Dashboard", icon: <CheckBoxOutlineBlankOutlined /> },
{ name: "Messages", icon: <MailOutline /> },
{ name: "Documents", icon: <DraftsOutlined /> },
{ name: "Organisations", icon: <ReceiptOutlined /> },
{ name: "Settings", icon: <SettingsOutlined /> },
];


class DrawerPanel extends Component {
    render() {
        this.state = { open: false };

        const getList = () => (
        <div style={{ width: 250 }} onClick={() => this.setState({open: false})}>
            {data.map((item, index) => (
            <ListItem button key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItem>
            ))}
        </div>
    );
    return (
            <Drawer
            variant="permanent"
            open={this.state.open}
            anchor={"left"}
            onClose={() => this.setState({open: false})}
            >
            <center>
                <a href="/" className="navbar-brand">
                <Typography variant="h2" gutterBottom> Kyro </Typography>
                </a>
            </center>
            {getList()}
            <ListItem button style={{ display: 'flex', justifyContent: 'flex-end' }} >
            <ListItemIcon>{<LogoutOutlined />}</ListItemIcon>
            <ListItemText primary={"Logout"} />
            </ListItem>
            </Drawer>
            );
  }
}

export default DrawerPanel;
