import "./Card.css"
const Card = ({img, alt, name, price}) => {
  return (
    <div className='card'>
      <img src={img} alt={alt} className="image"/>
      <div className="productDetail">
        <p id="productName">{name}</p>
        <p id="productPrice">₹{price}</p>
      </div>
    </div>
  )
}

export default Card
