import React from 'react';
import Main from './Main';
import Tag from './Tag';

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
    data.splice(16, 1);
    let tags = [];
    for (let i = 0; i < data.length; i++) {
      if (!tags.includes(...data[i].tagList)) tags.push(...data[i].tagList);
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
        <div className="container mx-auto px-24 flex justify-between">
          <Main data={data} />
          <Tag tags={tags} />
        </div>
      </>
    );
  }
}

export default Hero;
