import {useState} from "react";
import {useDispatch} from "react-redux";

import {addText} from "./3_todoActions";
import store from "./2_store";



export const InputField = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleToAddText = (text) => {
        dispatch(addText(text))
        setText("")
        console.log(store.getState().todos)

    }

    return (
        <div>
            <input type="text" value={text}
                   onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => handleToAddText(text)}>Add
            </button>
        </div>
    )
}