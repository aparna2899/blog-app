import { Link } from 'react-router-dom';

function Tag(props) {
  let { tags } = props;
  return (
    <aside className="w-3/12 mt-8 bg-gray-100 p-2  h-fit">
      <p className="my-2">Popular Tags</p>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag}
            className="bg-gray-400 m-1 inline-block py-1 px-3 rounded-2xl text-xs uppercase text-white"
          >
            <Link> {tag}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Tag;
