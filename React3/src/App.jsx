import {useState, useEffect} from 'react'
import "./App.css"
const App = () => {
  const [userList, setUserList] = useState([]);
  const [selectUserId, setSelectUserId] = useState("1");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    str:"",
    suite:"",
    city:"",
    zip:""
  });
  const [phone, setPhone] = useState("");

  function handleChange(e){
    setSelectUserId(e.target.value);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((data) => setUserList(data))
    .catch(err => console.log("ERROR: ",err.message))
  },[]);

  useEffect(() => {
    // This will run when user will be selected from input side
    fetch(`https://jsonplaceholder.typicode.com/users/${selectUserId}`)
    .then((res) => {
      if(!res.ok){
        throw new Error("User Not Found or API limit reached!");
      }
      return res.json();
    })
    .then((data) => {
      setName(data.name);
      setUserName(data.username);
      setEmail(data.email);
      setAddress({
        ...address,
        str: data.address["street"],
        suite: data.address.suite,
        city: data.address.city,
        zip: data.address.zipcode,
      });
      setPhone(data.phone);
    })
    .catch((error) => {
      console.log("ERROR: ",error.message);
    })
  }, [selectUserId])

  return (
    <>
      <div className="container">

        <h1>User Details</h1>

        <div className="inputArea">
          <label htmlFor="user_select">
            Select User:
            <select name="user_select" id="user_select" value={selectUserId} onChange={handleChange}>
              {
                userList.map((user, index) => (
                  <option value={user.id} key={index} className='selectUser'>{user.name}</option>
                ))
              }
            </select>
          </label>
        </div>

        {/* results */}
        <div className="showProfile">
          <div className="topProfile">
            <label htmlFor="userID">
            ID:
            <input type="text" value={selectUserId} readOnly/>
          </label>
          <label htmlFor="name">
            Name:
            <input type="text" value={name || ""} readOnly/>
          </label>
          <label htmlFor="userName">
            Username:
            <input type="text" value={userName || ""} readOnly/>
          </label>
          <label htmlFor="email">
            Email:
            <input type="text" value={email.toLowerCase() || ""} readOnly/>
          </label>
          <label htmlFor="phone">
              Phone:
              <input type="text" value={phone || ""} readOnly/>
          </label>
          </div>
          <div className="address">
            <p>Address</p>
            <label htmlFor="street">
              Street:
              <input type="text" value={address.str} readOnly/>
            </label>
            <label htmlFor="suite">
              Suite:
              <input type="text" value={address.suite} readOnly/>
            </label>
            <label htmlFor="city">
              City:
              <input type="text" value={address.city} readOnly/>
            </label>
            <label htmlFor="zip">
              Zip:
              <input type="text" value={address.zip} readOnly/>
            </label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
