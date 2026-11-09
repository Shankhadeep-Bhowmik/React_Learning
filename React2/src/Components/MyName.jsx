import {useState} from 'react'

const MyName = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input type="text"
      onChange={(e)=>setName(e.target.value)}
      placeholder='Enter your name'
      />
      <input type="text" value={name} readOnly/>
      <h2>Hello, {name}!</h2>
    </div> 
  )
}

export default MyName
