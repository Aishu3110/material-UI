import * as React from 'react';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function BasicFAB() {
  return (
    <>
    <h1>BasicFAB</h1>
    <Fab aria-label='add'><AddIcon/></Fab>
    <Fab aria-label='edit'><EditIcon/></Fab>
    <Fab variant='extended'><NavigationIcon/>Naviagate</Fab>
    <Fab aria-label='like'><FavoriteIcon/></Fab>
    </>
  )
}
