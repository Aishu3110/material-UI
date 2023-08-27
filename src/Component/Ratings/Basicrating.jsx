import * as React from 'react'
import { Typography,Rating, Stack} from '@mui/material';

export default function Basicrating() {
    const[value,setvalue]=React.useState("");
  return (
    <>
    <h1>Basicrating</h1>
    <Typography component='legend'>Controlled</Typography>
    <Rating value={value} onChange={(event,newvalue)=>{
        setvalue(newvalue);
    }}/>
    <Typography component='legend'>read only</Typography>
    <Rating name='read-only' value={value} readOnly/>
    <Typography component='legend'>no ratings</Typography>
    <Rating name='no-value' value={null}/>
    <h1>Rating precision</h1>
    <Stack spacing={3}>
        <Rating precision={0.5}/>
    </Stack>
    </>
  )
}
