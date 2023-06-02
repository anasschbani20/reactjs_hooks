import {useRef} from "react";


export const RefTutorial = () => {
    const inputRef = useRef(null);
    const focus = () => {
        // inputRef.current.focus();
        inputRef.current.value = '';
        console.log(inputRef.current);
    }
    return (
        <div>
            <h1>Ref Tutorial</h1>
            <input ref={inputRef} type='text' placeholder='Ex..'/>
            <button onClick={focus}>Change name</button>
        </div>
    )
}
