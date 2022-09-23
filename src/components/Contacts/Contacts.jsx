import { Component} from "react";



export default class Contacts extends Component  {
    state = {
        contacts: [],
        name: ''
      }
      handleName = (e) => {
        this.setState( 
          {name: e.target.value,
          }
       )
      }

      render () {

        return (
            <div>
              <div>
                <h2>PhoneBook</h2>
                <div>
                  <label htmlFor="">Name</label>
                  <input type="text" value={this.state.name} onChange={this.handleName} />
                </div>
                <button>Add</button>
              </div>
              <div>
              <h2>Contacts</h2>
              </div>

            </div>
            )
}
}