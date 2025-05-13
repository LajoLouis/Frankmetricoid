import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-zinc-900 text-white ">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-700">Franklin</h1>
        <nav className="space-x-4">
          <Link to={`/`}>Home</Link>
          <Link to={`/about`}>About me</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
