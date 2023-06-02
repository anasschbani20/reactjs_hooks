import {useReducer} from "react";

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT': {
            return {counter: state.counter+1, showText: state.showText}
        }
        case 'TOGGLE_TEXT': {
            return { counter: state.counter, showText: !state.showText}
        }
        default: return state;
    }
}
export const UseReducer = () => {
    // const [counter, setCounter] = useState(0);
    // const [showText, setShowText] = useState(true);
    const [state, dispatch] = useReducer(reducer, {counter: 0, showText: false})
    return (
        <div>
            <h1>{state.counter}</h1>
            <button onClick={ () => {
                dispatch({type: 'INCREMENT'})
                dispatch({type: 'TOGGLE_TEXT'});
            }}>Click here</button>

            {state.showText && <p>This is a text</p>}
        </div>
    )
}
