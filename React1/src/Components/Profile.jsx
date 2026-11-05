
const Profile = () => {
  const name = "Rahul";
  const course = "MCA";

  return (
    <div className="profile-card">
      <h1>{name}</h1>
      <h2>Course: {course}</h2>
    </div>
  )
}

export default Profile
