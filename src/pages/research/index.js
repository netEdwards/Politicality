import sy from './index.module.css'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Research() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('/api/gdelt').then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(err => console.error(err));
    }, []);
    

    return (
        <div className={sy.research}>
        <h1>Research</h1>
        <p>{data}</p>
        </div>
    )
}