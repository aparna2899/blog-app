import React from 'react';
import { Link } from 'react-router-dom';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch(`https://mighty-oasis-08080.herokuapp.com/api/articles`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.articles }));
  }

  render() {
    let { data } = this.state;
    if (!data) {
      return <p>Loading</p>;
    }
    return (
      <>
        <div className="bg-green text-white text-center py-12 shadow-[inset_0_-5px_8px_4px_rgba(0,0,0,0.2)]">
          <h1 className="text-5xl font-bold font-Roboto mb-2 drop-shadow-lg">
            conduit
          </h1>
          <p className="text-2xl font-light">
            A place to share your knowledge.
          </p>
        </div>
        <main className="container mx-auto my-12 px-24">
          <p className="text-grey mb-2">Global Feed</p>
          <hr />
          <ul>
            {data.map((article) => (
              <li key={article.slug} className="py-4 border-b">
                <div className="flex mb-5">
                  <div className="w-14 h-14 mr-3">
                    <img
                      src={article.author.image}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <strong className="block text-green font-medium">
                      {article.author.username}
                    </strong>
                    <span className="text-sm text-grey font-light">
                      {Date(article.createdAt).slice(0, 15)}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold font-Roboto mb-2">
                  {article.title}
                </h2>
                <p className="text-grey font-light mb-6">
                  {article.description}
                </p>
                <Link
                  to="/articles/:slug"
                  className="text-sm text-grey font-light"
                >
                  Read more...
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  }
}

export default Hero;
