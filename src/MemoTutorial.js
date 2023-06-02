import axios from "axios";
import {useEffect, useMemo, useState} from "react";


export const MemoTutorial = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setData(response.data);
                console.log('API WAS CALLED');
            });
    }, []);

    const findLongestWord = (comments) => {
        if(!comments) return [];
        let longestName = '';
        for(let i = 0; i < comments.length; i++) {
            if(comments[i].name.length > longestName.length) {
                longestName = comments[i].name;
            }
        }

        console.log('THIS WAS CALLED');
        return longestName;
    }

    const longestWord = useMemo(() => findLongestWord(data), [data]);

    return (
        <div>
            <h1>Memo Tutorial</h1>
            <button onClick={() => setToggle(!toggle)}>toggle</button>
            {toggle && <p>Longest name: {longestWord}</p>}
        </div>
    )
};
