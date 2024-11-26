import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { CardGiftcard, GifBox, Home, Money, QuestionAnswer, Stars } from "@mui/icons-material";
import { TiThMenu } from "react-icons/ti";
import { IconButton, Typography } from "@mui/material";
import { FaMoneyBillWave } from "react-icons/fa";

export default function MenuDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{background:"black",height:"5rem",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src="/foxbith_white.png" alt="Foxbith" width={150} />
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/questionaire">
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary={"Questionaire"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/lotto">
            <ListItemIcon>
              <Stars/>
            </ListItemIcon>
            <ListItemText primary={"Lottery"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <TiThMenu color="#535455" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
