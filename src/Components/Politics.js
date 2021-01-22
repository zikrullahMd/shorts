import React from 'react';
import {useState,useEffect} from 'react'

const Politics = () =>{
    useEffect(()=>{
        latest();
    },[])
    const[news,setNews] = useState([]);
    const apiid = 'f2a687e968244138a8abd874ab463e00';
    const cat = "politics";
    const latest = async() =>{
        const resp = await fetch(`http://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=${apiid}`);
        const data = await resp.json();
        setNews(data.articles);
        console.log(data);
    }
    return(
        <div>
    {
        news.map(news=>(
            <div className='container'>
                <img src={news.urlToImage} width="300px" height="300px"/>
                <div className="written">
                    <p className="tittle">{news.title}</p>
                    <p className="description">{news.content}....</p>
                    <a className="link" href={news.url} target="blank">Read full article</a>
                </div>
            </div>
        ))
    }
    </div>
    )
}
export default Politics;