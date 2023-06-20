import './index.css'

const UserProfile = props => {
  // this a reusable component
  const {userDetails, key} = props // we cant access this key it id for react to identify each unique object
  const {imageUrl, name, role} = userDetails // also get a warning in console and the above message
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
