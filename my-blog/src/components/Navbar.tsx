import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4 mb-6 flex gap-10 rounded">
        <p className="text-xl font-black">React Blog</p>
      <div className="flex gap-4 text-green-800">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
};


export default Navbar;