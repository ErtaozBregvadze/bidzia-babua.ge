import { useState } from "react";

export default () => {

    const [text, setText] = useState ('ერთაოზ');
    const onChange = (e) => {
        setText(e.target.value);
    }


    return (
       <>
        {text && <h1>გამარჯობა {text}</h1>}
            <input type="text" 
            value={text}
            onChange={onChange}
            placeholder="შენი სახელი"
            />
       </>
    )
}