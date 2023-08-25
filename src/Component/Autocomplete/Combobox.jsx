import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Combobox() {
  return (
    <>
    <div>Combobox</div>
    <Autocomplete 
    disableportal 
    options={top10foods}
    id="combo-box-demo"
    sx={{width:200}}
    renderInput={(params) => <TextField {...params} label="foods"/>}
    />
    </>
  )
}
const top10foods = [
    {label:"chicken"},
{label:"mutton"},
{label:"fish"},
{label:"prawn"},
{label:"crab"},
{label:"vegrice"},
{label:"briyani"},
{label:"parotta"}
];
