
import { InputLabel,FormControl, MenuItem,Select,Box } from '@mui/material';
import * as React from 'react'

export default function Basicselect() {
    const[age,setage] =React.useState("");
    const handlechange = (e)=>{
        setage(e.target.value);
    }
  return (
    <>
    <h1>Basicselect</h1>
    <Box sx={{minWidth:400}}>
    <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select value={age} label='age' onChange={handlechange}>
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={20}>2</MenuItem>
        <MenuItem value={30}>3</MenuItem>
        </Select>
    </FormControl>
    </Box>
    </>
  )
}
