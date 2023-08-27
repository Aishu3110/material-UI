import * as React from 'react';
import {ButtonGroup,Button} from '@mui/material';

export default function Buttongroup() {
  return (
    <>
    <div>Buttongroup</div>
    <h1>Basic button group</h1>
    <ButtonGroup variant='contained' spacing={3} aria-label='contained button'>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
    </ButtonGroup>
    <h1>Button variants</h1>
    
    </>
  )
}
