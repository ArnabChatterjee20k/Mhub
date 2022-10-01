import Chip  from "@mui/material/Chip"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Paper  from "@mui/material/Paper";
import Stack  from "@mui/system/Stack";
const FilterComponent = ({setLanguage,setDub}) => {
    const language = {
        "all":"",
        "english":"en",
        "hindi":"hi",
        "bengali":"bn",
        "chinese":"zh"
    }
  return (
        <Paper sx={{display:"flex",alignItems:"center",padding:3}}>
            <Chip sx={{fontSize:"1rem",padding:2,flexDirection:"row-reverse"}} label="Filter" onClick={()=>console.log("he")} icon={<FilterAltIcon/>}/>
        </Paper>
  )
}

export default FilterComponent