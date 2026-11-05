import Header_File from "./Components/Header_File"
import Cards from "./Components/Cards"
import "./App.css"
const App = () => {
  return (
    <>
      <div className="mainContainer">
        <Header_File/>
        <div className="cardContainer">
          <Cards img="https://media.istockphoto.com/id/2196264474/photo/headshot-of-friendly-businessman.jpg?s=612x612&w=0&k=20&c=Md4g17J1AjhhSNLDYtqMEPSIeKav3QBcFYK-9eGBfLw=" name="David Julas" course="Full Stack Developer (MERN)" experience={18} workedAt="Google, Microsoft"/>

          <Cards img="https://media.istockphoto.com/id/1708046305/photo/business-man-mature-and-portrait-outdoor-with-arms-crossed-for-professional-career-and.jpg?s=612x612&w=0&k=20&c=aUsA9zgugqMc6u9Pc-NfZ66G70N9m7_RjA9gdcaPxZE=" name="Alice Deo" course="DEVOPS & Cloud" experience={25} workedAt="Google, Amazon, Lenevo"/>
          
          <Cards img="https://www.shutterstock.com/image-photo/smiling-man-formal-attire-poses-260nw-2604415501.jpg" name="Alex Dexer" course="Cyber Security" experience={20} workedAt="SpaceX, Meta"/>
          
          <Cards img="https://thumbs.dreamstime.com/b/woman-smiling-closeup-portrait-business-girl-looking-you-camera-smile-face-black-suit-formal-wear-eye-glasses-outside-woman-171597002.jpg" name="Malisa T" course="Data Analyst" experience={7} workedAt="Meta, Uber"/>
          
        </div>
      </div>
    </>
  )
}

export default App
