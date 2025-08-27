import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is blog post number {id}.</p>
    </div>
  );
}

export default BlogPost;
