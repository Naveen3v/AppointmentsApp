// Write your code here
import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {username: '', date: '', appointmentList: [], display: true}

  displayChanged = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (id === each.id) {
          return {...each, display: !each.display}
        }
        return each
      }),
    }))
  }

  addList = event => {
    event.preventDefault()
    const {username, date, appointmentList} = this.state
    const newItem = {
      id: uuidv4(),
      username,
      date,
      display: true,
    }
    this.setState(prevState => ({
      appointmentList: [...appointmentList, newItem],
      username: '',
      date: '',
    }))
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {username, date, appointmentList, display} = this.state
    return (
      <div className="container">
        <div className="inner">
          <div className="appointment">
            <form className="formcontainer" onSubmit={this.addList}>
              <h1 className="mainheading">Add Appointment</h1>
              <label htmlFor="title" className="inputtitle">
                TITLE
              </label>
              <input
                type="name"
                id="title"
                value={username}
                className="nameinput"
                placeholder="Title"
                onChange={this.changeUsername}
              />
              <label htmlFor="date" className="inputdate">
                DATE
              </label>
              <input
                type="date"
                id="date"
                value={date}
                className="nameinput"
                onChange={this.changeDate}
              />
              <button type="submit" className="formbtn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="mainimage"
            />
          </div>
          <hr className="line" />
          <div className="btcont">
            <h1 className="btheading">Appointments</h1>
            <button type="button" className="btbtn">
              Starred
            </button>
          </div>
          <ul className="listcontainer">
            {appointmentList.map(each => (
              <AppointmentItem
                details={each}
                key={each.id}
                displayChanged={this.displayChanged}
                display={display}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
