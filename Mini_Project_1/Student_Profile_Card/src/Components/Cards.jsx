import "./Cards.css"
const Cards = ({img, name, course, experience, workedAt}) => {
  return (
    <div className="card">
      <img src={img} alt="Person image" className="personImg"/>
      <p id="tutorName" className="details">{name}</p>
      <p id="courseName" className="details">{course}</p>
      <p id="experience" className="details">{experience} years of experience</p>
      <p id="experience" className="details">{workedAt}</p>
    </div>
  )
}

export default Cards
