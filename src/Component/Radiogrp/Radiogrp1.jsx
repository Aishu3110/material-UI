import * as React from 'react';
import { FormControl,FormControlLabel,FormLabel ,RadioGroup,Radio} from '@mui/material';


export default function Radiogrp1() {
  return (
    <>
    <h1>Radiogrp1</h1>
    <FormControl>
      <FormLabel >Gender</FormLabel>
      <RadioGroup aria-labelledby='radio-button-group' defaultValue='female'>
        <FormControlLabel value='female' control={<Radio/>} label='female'/>
        <FormControlLabel value='male' control={<Radio/>} label='male'/>
        <FormControlLabel value='other' control={<Radio/>} label='other'/>
      </RadioGroup>
    </FormControl>
    </>
  )
}
