import { useParams } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const Blog = () => {
  const { id } = useParams();
  const { posts } = useBlog();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="px-4 py-10 text-center text-red-500 text-lg">
        Post not found.
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-10 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        {post.title}
      </h1>
      <p className="text-base sm:text-lg leading-relaxed text-justify text-gray-700">
        {post.content}
      </p>
    </div>
  );
};

export default Blog;
