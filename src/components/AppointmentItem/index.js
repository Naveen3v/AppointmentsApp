// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {details, display, displayChanged} = props
  const {username, date, id} = details

  const changeDisplay = () => {
    displayChanged(id)
  }

  return (
    <li className="listitem">
      <div className="listinner">
        <p>{username}</p>
        {display ? (
          <button className="starbtn" id="star" onClick={changeDisplay}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              className="starimg"
              alt="star"
            />
          </button>
        ) : (
          <button className="starbtn" id="star" onClick={changeDisplay}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              className="starimg"
              alt="star"
            />
          </button>
        )}
      </div>
      <p>{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
    </li>
  )
}
export default AppointmentItem
