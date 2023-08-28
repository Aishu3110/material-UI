import { FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight, FormatItalic, FormatUnderlined , FormatBold, FormatColorFill} from '@mui/icons-material'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import * as React from 'react'

export default function Basictogglebtn1() {
    const[align,setalign] = React.useState("");

    const handlechange = (e,newalign)=>{
        setalign(newalign);
    }
  return (
    <>
    <h1>basictogglebtn</h1>
    <ToggleButtonGroup onChange={handlechange} value={align}>
        <ToggleButton value='left'><FormatAlignLeft/></ToggleButton>
        <ToggleButton value='right'><FormatAlignRight/></ToggleButton>
        <ToggleButton value='justify'><FormatAlignJustify/></ToggleButton>
        <ToggleButton value='center'><FormatAlignCenter/></ToggleButton>
        <ToggleButton value='bold'><FormatBold/></ToggleButton>
        <ToggleButton value='italic'><FormatItalic/> </ToggleButton>
        <ToggleButton value='underline'><FormatUnderlined/></ToggleButton>
        <ToggleButton value='color'><FormatColorFill/></ToggleButton>
    </ToggleButtonGroup>
    </>
  )
}
