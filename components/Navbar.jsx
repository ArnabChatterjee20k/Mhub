import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import  Typography  from '@mui/material/Typography';
import Tab from "@mui/material/Tab";
import { useState } from "react";
export const Navbar = ({links}) => {
    const [tab,setTab] = useState(0)
  return (
    <Stack direction={"row"} alignItems="center" gap={5}>
      <Typography variant="h5">Hellow</Typography>
      <Tabs onChange={(e,newValue)=>setTab(newValue)} value={tab} aria-label="basic tabs example">
        {links?.map((link,id)=>(
            <Tab key={id} value={id} label={link} onClick={()=>alert("link changed")}/>
        ))}
      </Tabs>
    </Stack>
  );
};
