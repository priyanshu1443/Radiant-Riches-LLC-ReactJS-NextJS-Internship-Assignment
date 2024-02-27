
import search from "../assets/icons/search.png"

function Navigation() {
  return (
    <nav className="nav">
      <div>
        <div>
          <img src={search} alt="searh" />
          <input type="text" />
        </div>
        <ul>
          <li>Categories </li>
          <li>Website Builder </li>
          <li>Today&apos;s deals</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
