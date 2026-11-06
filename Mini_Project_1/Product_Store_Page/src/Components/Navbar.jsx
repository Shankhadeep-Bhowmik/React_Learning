import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="storeName">My Store</div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Profile</a>
        <a href="#">Order</a>
        <a href="#">My Cart</a>
      </div>
    </div>
  )
}

export default Navbar
