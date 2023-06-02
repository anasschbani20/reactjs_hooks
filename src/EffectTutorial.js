import {useEffect, useState} from "react";
import axios from "axios";


export const EffectTutorial = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setData(response.data);
                console.log('API WAS CALLED');
            });
    }, []);
    return (
        <div>
            <h1>Effect Tutorial</h1>
            {
                data && data.map(comment => (
                    <div key={comment.id}>
                        <p><b>{comment.email}</b>: {comment.body}</p>
                    </div>
                ))
            }
        </div>
    )
}
