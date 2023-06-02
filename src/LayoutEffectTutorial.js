import {useEffect, useLayoutEffect, useRef} from "react";


export const LayoutEffectTutorial = () => {
    const inputRef = useRef(null);
    useLayoutEffect(() => {
        console.log('useLayoutEffect', inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = 'hello';
        console.log('useEffect', inputRef.current.value);
    }, [])

    return (
        <div>
            <h1>LayoutEffect Tutorial</h1>
            <input ref={inputRef} value="anass" style={ {width: 400, height: 50}} placeholder="ex.."/>
        </div>
    )
}
