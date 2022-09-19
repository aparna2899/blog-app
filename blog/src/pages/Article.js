import React from 'react';
import { useParams } from 'react-router-dom';

function Article(props) {
  const { slug } = useParams();
  console.log(slug);

  return (
    <div className="bg-green text-white text-center py-12 shadow-[inset_0_-5px_8px_4px_rgba(0,0,0,0.2)]">
      <h1 className="text-5xl font-bold font-Roboto mb-2 drop-shadow-lg">
        The Event Loop
      </h1>
      <p className="text-2xl font-light">A place to share your knowledge.</p>
    </div>
  );
}

export default Article;
