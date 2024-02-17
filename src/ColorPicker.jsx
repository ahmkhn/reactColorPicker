import {useState} from 'react';
function ColorPicker(){
    const [color,setColor]=useState("#FFFFFF");
    const handleColorChange=()=>setColor(event.target.value);
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <h2 className="color-heading-2">Selected Color: {color}</h2>
            <div className="color-display" style={{backgroundColor: color}}>
            </div>
            <label>Select a color: </label>
            <input onChange={handleColorChange} type="color"></input>
        </div>
    );
}
export default ColorPicker;