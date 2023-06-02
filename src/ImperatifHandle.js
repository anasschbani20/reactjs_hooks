import {forwardRef, useImperativeHandle, useRef, useState} from "react";


const Button = forwardRef(( props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
           setToggle(!toggle);
        }
    }));
    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Button from child</button>
            {toggle && <p>Toggle</p>}
        </>
    )
});


export const ImperatifHandle = () => {
    const buttonRef = useRef(null);
    return (
        <div>
            <h1>ImperatifHandle</h1>
            <button onClick={() => buttonRef.current.alterToggle()}>Button from parent</button>
            <Button ref={buttonRef} />
        </div>
    )
}
