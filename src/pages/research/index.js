import sy from './index.module.css'
import React from 'react'
import axios from 'axios'
import Navbar from '../../components/nav/nav'
import HoverReveal from '../../components/mask/mask'
import senate from '../../media/senate.jpg' 
import bigun from '../../media/bigun.jpg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Research() {
    const [data, setData] = useState(null);
    const nav = useNavigate();
    const handleLink = (e) => {
        e.preventDefault();
        nav('/')
    }

    return (
        <div className={sy.main}>
            <img className={sy.bg} src={senate} alt='senate in storm'></img>
            <div>
                <Navbar/>
            </div>
            <div className={sy.page}>
                <div className={sy.head}>
                    <h1>THE <br/>RESEARCH</h1>
                    <p>Looking into popular media claims/questions on politics</p>
                </div>
            </div>
            <div className={sy.res}>
                <div className={sy.power}>
                    <div className={sy.midpower}>
                        {/* <button>Power</button> */}
                    </div>
                    <img className={sy.bigun} src={bigun} alt='Big Gun'></img>
                    <a onClick={handleLink}><h2>Looking into power accross the world</h2></a>
                    <p>
                    Power is a huge and broad topic within politics. I took one advanced government class in 
                    college and I had a somewhat controversial professor, however he was good at his job. 
                    He always said Power is money and money is influence. I believe that is true do you? Maybe you should 
                    stay and read to find out, exploring old documents and using college and higher education level techniques 
                    to find out the truth. We will answer this idea and many more related to power
                    </p>
                </div>
                <div className={sy.mouser}>
                    <div className={sy.mouserHead}>
                        <h2>DEMOCRACY</h2>
                        <HoverReveal/>
                    </div>
                    <div className={sy.demo}>
                        <p>
                            Democracy is a huge and very important topic. I want democracy to be the not only
                            the focus on democratic events, but also the people within the democracy. I want it 
                            to be a broad topic, involving the democratic state and its people. 
                        </p>
                    </div>
                </div>
                
                <div className={sy.human}>
                    <a href=''><h2>Human Rights</h2></a>
                    <p>
                        One of the main reason the United States was formed was to protect human rights.
                        Not just any human righs, but "God given rights". This is a very important topic, from 
                        legal abortion to the right to bear arms. Multiple topics related will be covered,
                        a timeline from post WWII to present is in the works.
                    </p>
                </div>
            </div>
        </div>
    )
}