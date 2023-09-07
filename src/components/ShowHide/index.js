// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  changeFirstName = () => {
    const {isFirstName} = this.state

    this.setState({isFirstName: !isFirstName})
  }

  changeLastName = () => {
    const {isLastName} = this.state

    this.setState({isLastName: !isLastName})
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="bg-con">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-con">
          <div>
            <button
              type="button"
              className="button"
              onClick={this.changeFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && (
              <div className="white-con">
                <p className="name">joe</p>
              </div>
            )}
          </div>

          <div>
            <button
              type="button"
              className="button"
              onClick={this.changeLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastName && (
              <div className="white-con">
                <p className="name">jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
