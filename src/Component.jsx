import {useState} from 'react';
function Component(){
    const [choices,setChoices]=useState("");
    const choiceHandle=()=>setChoices(event.target.value);
    return(
        <div>
            <select onChange={choiceHandle}>
                <option >Credit Card</option>
                <option>Cash</option>
                <option>Giftcard</option>
                <option>Available Balance</option>
            </select>
            <p>{choices}</p>
        </div>
    );
}
export default Component