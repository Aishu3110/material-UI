import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { Slider ,Stack} from '@mui/material'
import * as React from 'react'

export default function Continousslider() {
    const[value,setvalue]=React.useState("");
    const handlechange = (e,newvalue)=>{
        setvalue(newvalue);
    }
  return (
    <>
    <h1>Continousslider</h1>
    <Stack spacing={2} align-item='center'>
        <VolumeDown/>
        <Slider aria-label='volume' value={value} onChange={handlechange}/>
        <VolumeUp/>
    </Stack>
    </>
  )
}
