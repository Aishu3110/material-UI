import { Switch } from '@mui/material'
import * as React from 'react'

export default function Basicswitche() {
    const label= {inputprops :{ 'aria-label': 'Switch demo' }}
  return (
    <>
    <h1>Basic switch</h1>
    <Switch {...label} defaultChecked/>
    <Switch {...label} />
    </>
  )
}
