import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Article(props) {
  const { slug } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get(
        `https://mighty-oasis-08080.herokuapp.com/api/articles/${slug.trim()}`
      );
      setArticle(res.data.article);
    };
    getArticle();
  }, [slug]);

  return (
    <>
      <div className="bg-[#333333] text-white px-44  py-8 shadow-[inset_0_-5px_8px_4px_rgba(0,0,0,0.2)]">
        <h1 className="text-4xl  font-Roboto mb-2 drop-shadow-lg">
          {article.title}
        </h1>
        <div className="flex mt-8">
          <div className="w-10 h-10">
            <img
              src={article?.author?.image}
              alt=""
              className="w-full rounded-full"
            />
          </div>
          <div className="ml-3">
            <strong className="block text-white text-sm">
              {article?.author?.username}
            </strong>
            <span className="text-grey font-light text-sm">
              {Date(article.createdAt).slice(0, 15)}
            </span>
          </div>
        </div>
      </div>
      <p className="px-44 mt-10 mb-5 text-lg font-Roboto">{article.body}</p>
      <ul className="px-44">
        {article?.tagList?.map((tag) => (
          <li
            key={tag}
            className="border m-1 inline-block py-1 px-3 rounded-2xl text-sm text-grey"
          >
            <Link> {tag}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Article;
