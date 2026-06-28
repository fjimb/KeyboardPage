import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          KeyboardPage
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link to="/Products" className="btn btn-ghost">Productos</Link>
        <Link to="/Cart" className="btn btn-ghost">Carrito</Link>
      </div>
    </div>
  )
}

export default Navbar
