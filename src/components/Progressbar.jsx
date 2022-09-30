import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/system";
const Progressbar = () => {
  return (
    <Stack width="100%" direction="row" justifyContent="center" alignItems="center" paddingY={1}>
        <CircularProgress color="success"/>
    </Stack>
  )
}

export default Progressbar