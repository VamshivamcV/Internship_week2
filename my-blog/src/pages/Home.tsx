import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const Home = () => {
  const { posts, currentUser } = useBlog();

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Welcome, {currentUser}
      </h1>

      <div className="bg-green-100 p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-4">
          Blog Posts
        </h2>
        
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                to={`/blog/${post.id}`}
                className="block text-green-600 text-base sm:text-lg bg-white p-4 rounded-lg shadow hover:bg-green-50 transition"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
