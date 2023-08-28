import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Contact = ()=>{
    const navigate = useNavigate();
    setTimeout(()=>{
        // window.location.href = '/About'    //to help the page reload in case of dynamic data
        navigate('/About')
        
    }, 2000)
    return(
        <div>
            <h1 className='center'>Contact</h1>
            <h4>Contact;jIKHjdkljwkdwokldjdioqliodidjewwqoedheudioejdoiedjioedjqodwdjwqioskw</h4>
        </div>
    )
}

export default Contact;