import * as React from 'react';
import { Checkbox,FormGroup,FormControlLabel} from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkbx() {
  return (
    <>
    <h1>Checkbox</h1>
    <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
      <h1>Label Checkbox</h1>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultchecked/>}label = "Label"/>
        <FormControlLabel required control={<Checkbox/>} label="required"/>
        <FormControlLabel disabled control = {<Checkbox/>} label="default"/>
      </FormGroup>
    </>
  )
}