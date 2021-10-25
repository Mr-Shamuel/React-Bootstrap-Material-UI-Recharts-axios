import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';

const TopHeading = () => {

    const [news,setNews] = useState([]);
    // useEffect(() => {
    //     const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9d5f0970308c4b5ca8d585f22dfc0ee6';
    //     fetch(url)
    //     .then(res=>res.json())
    //     // .then(data =>console.log(data.articles))
    //     .then(data=>setNews(data.articles))

    // },[])

    useEffect(()=>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9d5f0970308c4b5ca8d585f22dfc0ee6';
        axios(url)
        .then(data=> setNews(data.data.articles));

    },[])



    
    return (
        <div>

            <h1>Top Heading {news.length}</h1>
            {
                news.map(news=> <Heading news={news}></Heading> )
            }

        </div>
    );
};

export default TopHeading;