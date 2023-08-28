import React, { useSelector, useDispatch } from 'react';
import Rainbow from '../HOC/Rainbow';

const About = ()=>{
    
    const comments = useSelector(state => state.comments.comments);
    const dispatch = useDispatch();
    console.log(comments);
    return(
        <div>
            <h1 className='center'>About</h1>
            <h4>About;jIKHjdkljwkdwokldjdioqliodidjewwqoedheudioejdoiedjioedjqodwdjwqioskw</h4>
        </div>
    )
}

export default Rainbow(About);