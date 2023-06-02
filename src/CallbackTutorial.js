import {useCallback, useEffect, useState} from "react";

const Child = ({returnComment}) => {
    useEffect(() => {
        console.log('Child component was rendered');
    }, [returnComment]);
    return (
        <div>
            <h3>Child component {returnComment('yooooo')}</h3>
        </div>)
}

export const CallbackTutorial = () => {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState('hello anass');

    const returnComment = useCallback((name) => {
        return data+' '+name;
    }, data)

    return (
        <div>
            <h1>CallbackTutorial</h1>
            <Child returnComment={returnComment} />

            <button
                onClick={() => setToggle(!toggle)}
            >
                {''}
                Toggle
            </button>
            {toggle && <p>Toggle</p>}
        </div>
    )
}
