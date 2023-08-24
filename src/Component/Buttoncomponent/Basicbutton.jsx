import * as React from 'react';
import{Stack,Button} from '@mui/material';

export default function Basicbutton() {
  return (
    <>
    <h1>Basic button</h1>
    <Stack  spacing={3} direction="row">
        <Button variant='Text'>Text</Button>
        <Button variant='contained'>Contained text</Button>
        <Button variant='outlined'>only outline no color</Button>
    </Stack>
    <h1>Text button</h1>
    <Stack spacing={5} direction="row">
        <Button disabled>button disabled</Button>
        <Button >simple text</Button>
        <Button href='https://mui.com/material-ui/react-button/'>href to button</Button>
    </Stack>
    <h1>Contained button</h1>
    <Stack spacing={3} direction="row">
      <Button variant='contained'>contained box</Button>
      <Button variant='contained' disabled>contained box disabled</Button>
      <Button variant='contained' href="https://mui.com/material-ui/react-button/">contained box with href</Button>
    </Stack>
    <h1>difference of disabled and disabled elevation</h1>
    <Stack spacing={3} direction="row">
    <Button variant="contained" disable>Disable </Button>
    <Button variant="contained" disableElevation>Disable elevation</Button>
    </Stack>
    <h1>Handling clicks</h1>
    <Button
  onClick={() => {
    alert('clicked');
  }}>Click me
</Button>
    </>
  )
}
