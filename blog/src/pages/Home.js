import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from '../components/Main';
import Tag from '../components/Tag';

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mighty-oasis-08080.herokuapp.com/api/articles`)
      .then((res) => setArticles(res.data.articles));
  }, []);

  if (!articles) {
    return <p>Loading</p>;
  }
  articles.splice(16, 1);
  let tags = [];
  for (let i = 0; i < articles.length; i++) {
    if (!tags.includes(...articles[i].tagList))
      tags.push(...articles[i].tagList);
  }

  return (
    <>
      <div className="bg-green text-white text-center py-12 shadow-[inset_0_-5px_8px_4px_rgba(0,0,0,0.2)]">
        <h1 className="text-5xl font-bold font-Roboto mb-2 drop-shadow-lg">
          conduit
        </h1>
        <p className="text-2xl font-light">A place to share your knowledge.</p>
      </div>
      <div className="container mx-auto px-24 flex justify-between">
        <Main articles={articles} />
        <Tag tags={tags} />
      </div>
    </>
  );
}

export default Home;
