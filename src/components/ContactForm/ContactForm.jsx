import { Component } from "react";
import { nanoid } from "nanoid";


export default class ContactForm extends Component  {
    state = {
        contacts: [],
        name: '',
        number: '',
      }

      nameID = nanoid();
      telID = nanoid();

      handleChange = (e) => {
        const {name, value} = e.target;
        this.setState( 
          {[name]: value,
          }
       )
      }
      handleSubmit = (e) => {
        e.preventDefault()
        const {name, number} = this.state;
        this.setState ({
          name: '',
          number: '',
        })
console.log(name, number)
      }

      render () {
        const {nameID, telID, handleSubmit, handleChange} = this;
        return ( 
                <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor={nameID}>Name</label>
                  <input id={nameID} type="text" name="name" value={this.state.name} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor={telID}>Number</label>
                  <input id={telID} type="number" name="number" value={this.state.number} onChange={handleChange} />
                </div>
                <button>Add</button>
                </form>
                )
           
      }
    }