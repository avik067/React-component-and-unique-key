import UserProfile from './Components/UserProfile/index' // look we are not using index.mjs it only index that special on React

import './App.css'

const userDetailsL = [
  {
    uniqueId: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Avik',
    role: 'Mern Stack',
  },
  {
    uniqueId: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Avi',
    role: 'Mern Stack',
  },
  {
    uniqueId: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Animesh',
    role: 'Mern Stack',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="tittle">User Lists</h1>
    <ul>
      {userDetailsL.map(each => (
        <UserProfile
          className="list-container"
          userDetails={each}
          key={each.uniqueId}
        />
      ))}
    </ul>
  </div>
)

export default App
