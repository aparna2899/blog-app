import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="w-2/3 py-8">
      <p className="mb-2 ml-4 text-green">Global Feed</p>
      <hr />
      <ul>
        {props.articles.map((article) => (
          <li key={article.slug} className="py-8 border-b">
            <div className="flex">
              <div className="w-14 h-14">
                <img
                  src={article.author.image}
                  alt=""
                  className="w-full rounded-full"
                />
              </div>
              <div className="ml-2">
                <strong className="block text-green">
                  {article.author.username}
                </strong>
                <span className="text-grey font-light text-sm">
                  {Date(article.createdAt).slice(0, 15)}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-4">{article.title}</h2>
            <p className="text-grey font-light mb-6 mt-1">
              {article.description}
            </p>
            <div className="flex justify-between">
              <Link
                to={`/articles/ ${article.slug}`}
                className="text-grey font-light text-sm"
              >
                Read more...
              </Link>
              <div>
                {article.tagList.map((tag) => (
                  <Link
                    key={tag}
                    className="mx-1 text-grey border rounded-xl py-1 px-3 text-sm"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
