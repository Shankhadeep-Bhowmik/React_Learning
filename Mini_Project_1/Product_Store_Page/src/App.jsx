import "./App.css"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
const App = () => {
  const products = [
    {id:1, img:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/ad22b92Nike-IB1873-001_1.jpg?rnd=20200526195200&tr=w-1536", name:"Nike Shoes", price:1999, alt:"Nike Shoe"},
    {id:2, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L9LrrugCsLtASfbWcuczppJahV3bQCvTeWDx7OEQMg&s=10", name:"Titan Watch", price:2999, alt:"Titan Watch"},
    {id:3, img:"https://safaribags.com/cdn/shop/files/2_3d6acc65-50a9-4d45-b83c-31bb315d7b05_1024x.jpg?v=1707731912", name:"Bag", price:1499, alt:"Bag"},

    {id:4, img:"https://tcgvault.in/cdn/shop/files/Pok_mon_TCG_Mega_Evolution_Pitch_Black_Booster_Bundle_6_Booster_Packs_a_large.webp?v=1785305241", name:"Pokemon Pack", price:5499, alt:"Card"},
    {id:5, img:"https://safaribags.com/cdn/shop/files/2_3d6acc65-50a9-4d45-b83c-31bb315d7b05_1024x.jpg?v=1707731912", name:"Bag", price:1499, alt:"Bag"},
    {id:6, img:"https://safaribags.com/cdn/shop/files/2_3d6acc65-50a9-4d45-b83c-31bb315d7b05_1024x.jpg?v=1707731912", name:"Bag", price:1499, alt:"Bag"},
    {id:7, img:"https://safaribags.com/cdn/shop/files/2_3d6acc65-50a9-4d45-b83c-31bb315d7b05_1024x.jpg?v=1707731912", name:"Bag", price:1499, alt:"Bag"},
    {id:8, img:"https://safaribags.com/cdn/shop/files/2_3d6acc65-50a9-4d45-b83c-31bb315d7b05_1024x.jpg?v=1707731912", name:"Bag", price:1499, alt:"Bag"},
    {id:9, img:"https://safaribags.com/cdn/shop/files/2_3d6acc65-50a9-4d45-b83c-31bb315d7b05_1024x.jpg?v=1707731912", name:"Bag", price:1499, alt:"Bag"},
  ];
  return (
    <>
    <div className='mainPage'>
      <Navbar/>
      <div className="cardContainer">
        {
          products.map((product) => (
            <Card key={product.id} img={product.img} name={product.name} price={product.price} alt={product.alt}/>
          ))
        }
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
