import * as React from 'react';
import {Stack,Button,Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Buttoncolor() {
  return (
    <>
    <h1>Buttoncolor</h1>
    <Stack spacing={2} direction='row'>
      <Button color='secondary'>secondary comes under violet color</Button>
      <Button color='success'>sucess-color green</Button>
      <Button color='error'>error-red color</Button>
    </Stack>
    <h1>sizes</h1>
    <Box sx={{'&Button':{m:3}}}>
      <Button size='small' variant='outlined'>small</Button>
      <Button size='large'variant='outlined'>large</Button>
      <Button size='medium'variant='outlined'>medium</Button>
    </Box>
    <h1>Icons</h1>
    <Stack direction='row' spacing={3}>
      <Button startIcon={<DeleteIcon/>} variant='outlined'>before icon</Button>
      <Button endIcon={<SendIcon/>} variant='outlined'>end icon</Button>
    </Stack>
    <h1>Icon Button</h1>
    <Stack spacing={3} direction='row'>
      <Button arial-label='delete'><DeleteIcon/></Button>
      <Button arial-label='add an alarm'><AlarmIcon/></Button>
      <Button arial-label='add an shopping cart'><AddShoppingCartIcon/></Button>
    </Stack>
    </>
  )
}
