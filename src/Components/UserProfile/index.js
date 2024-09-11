import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, designation} = userDetails
  return (
    <li className="users-card-container">
      <img src={imageUrl} alt="logo" className="profile-img" />
      <div className="user-details-container">
        <h1 className="name">{name}</h1>
        <p className="designation">{designation}</p>
      </div>
    </li>
  )
}

export default UserProfile
