import Search  from "@mui/icons-material/Search"
import InputBase  from "@mui/material/InputBase"
import Paper  from "@mui/material/Paper"
import IconButton  from "@mui/material/IconButton"
const SearchBar = () => {
  return (
    <Paper elevation={2} sx={{paddingInline:"1em",paddingBlock:"0.5em",display:"flex",marginBlock:"1em",alignItems:"center"}}>
        <InputBase placeholder="search...."/>
        <IconButton><Search/></IconButton>
    </Paper>
  )
}

export default SearchBar