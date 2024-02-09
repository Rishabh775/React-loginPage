export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-12 bg-black">
      <h1 className="text-2xl font-bold text-white">Hexcode</h1>
      <div className="flex items-center font-bold space-x-4 ">
        <a href="/" className="text-white">
          Home
        </a>
        <a href="/products" className="text-white">
          Products
        </a>
        <a href="/about" className="text-white">
          About
        </a>
        <a href="/contact" className="text-white">
          Contact
        </a>
      </div>
      <div className="flex items-center font-bold space-x-4">
        <a href="/" className="text-white">
          Login
        </a>
        <a href="/register" className="text-white">
          Register
        </a>
      </div>
    </nav>
  );
}
