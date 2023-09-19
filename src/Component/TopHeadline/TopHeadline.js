import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const[articles, setArticles]= useState([]); 
    useEffect(()=> {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-08-19&sortBy=publishedAt&apiKey=5426eb00b02f4ad78e2f1229e32be997")
        .then(res=>res.json())
        .then(data=> setArticles(data.articles))
    },[]);
    return (
        <div>
            <h1>Top headline: {articles.length}</h1>
            {
                articles.map(article=><News key={articles.indexOf(article)} article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;