
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function NewsPaper() {
  const[news, setNews]= useState([])
const[term, setTerm] = useState("")
  useEffect(()=>{
    const loadNews = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=663ffabad2714f8a954868707da0b830`)
      setNews(response.data.articles)
    }
    loadNews();
  },[])
  console.log(news)
  return (
<div>
  <div className='header'>
    <div className='logo'>

      <h2>NEWSPAPER</h2>


    </div>
    <div className='serach'>
      <label>Search News : </label>
    <input className='input' type="text" 
   value={term}
   placeholder="serach...."
    onChange={(event)=>{
    event.preventDefault()
    setTerm(event.target.value)
}} 
/>
</div> 
</div>
<div className='cards'>
     {news.filter(item=> item.title.toLowerCase().includes(term)).map((item, index)=>{
return(
  <div key={index}>
    <div className='grid-container'>
    <div className='newspaper'>
      <div className='title'>
        <h1>{item.title}</h1>
        </div>
        <div className='image'>
          <img src={item.urlToImage} alt="image" />
        </div>
         <div className='date'>
          <p>{item.publishedAt}</p>
          </div>
          <div className='content'>
            <p>{item.content}</p>
            </div>
            <div className='description'>
              <p>{item.description}</p>
              </div>
              <div className='link-author'>
                <a href={item.url} className="button" target="_blank">show More</a>
                <p>{item.author}</p>
                </div>
    </div>
    </div>
  </div>
)
     })}
</div>
</div>
  );
}

export default NewsPaper;
