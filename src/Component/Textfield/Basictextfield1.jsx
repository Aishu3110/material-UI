import { TextField } from '@mui/material'
import * as React from 'react'

export default function Basictextfield1() {
  return (
    <>
    <h1>basictextfield</h1>
    <TextField label='outlined' variant='outlined'/>
    <TextField label='Filled' variant='Filled'/>
    <TextField label='standard' variant='standard'/>
    </>
  )
}