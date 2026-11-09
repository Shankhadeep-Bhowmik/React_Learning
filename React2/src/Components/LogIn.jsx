import React, { useState } from 'react'

const LogIn = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [age, setAge] = useState(undefined);
  // const students = ["Rahul","Amit","Priya","Mukesh"];
  // const skills = ["HTML","CSS","JavaScript","React"];
  // const students = [
  //   {id:1, name:"Alice", age:21},
  //   {id:2, name:"Bob", age:23},
  //   {id:3, name:"Charlie", age:20}
  // ];
  const [student, setStudent] = useState({
    name:"Rahul",
    age:21,
    course:"MCA"
  })
  function increaseAge(){
    setStudent({
      ...student,
      course: "MBA"
    })
  }
  return (
    <div>
      {/* {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In!</h1>}
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"Log Out":"Sign In"}</button> */}
      {/* <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter age'/>
      <h1>{age >= 18 ? "You are Adult" : "You are Minor"}</h1> */}
      {/* {
        students.map((student, index) => (
          <h1 key={index}>{index+1}: {student}</h1>
        ))
      } */}
      {/* {
        skills.map((skill, index) => (
          <h2 key={index}>{index+1}. {skill}</h2>
        ))
      } */}
      {/* {
        students.map((student) => (
          <>
          <p key={student.id}>ID: {student.id}</p>
          <p key={student.id}>Name: {student.name}</p>
          <p key={student.id}>Age: {student.age}</p>
          </>
        ))
      } */}
      <h1>{student.name}</h1>
      <h1>{student.age}</h1>
      <h1>{student.course}</h1>
      <button onClick={increaseAge}>Set MBS</button>
    </div>
  )
}

export default LogIn
