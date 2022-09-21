function CreateArticle() {
  return (
    <form className="my-6 w-2/6 mx-auto">
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
      />
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
      />
      <textarea
        placeholder="Write your article"
        id="body"
        name="body"
        className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
      />
      <input
        type="text"
        id="tagList"
        name="tagList"
        placeholder="Enter Tags"
        className="text-lg border block mx-auto px-5 py-2 mb-4 w-full rounded"
      />
      <button className=" bg-green hover:bg-green-dark text-white text-lg px-6 py-2 rounded block mx-auto">
        Publish Article
      </button>
    </form>
  );
}

export default CreateArticle;
