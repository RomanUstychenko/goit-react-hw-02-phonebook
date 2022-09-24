import { Component } from "react";
import { nanoid } from "nanoid";


export default class ContactForm extends Component  {
    state = {
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
        this.props.onSubmit({name, number})
        this.setState ({
          name: '',
          number: '',
        })
// console.log(name, number)
      }

      render () {
        const {nameID, telID, handleSubmit, handleChange} = this;
        return ( 
                <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor={nameID}>Name</label>
                  <input 
                  id={nameID} 
                  type="text" 
                  name="name" 
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={this.state.name} 
                  onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor={telID}>Number</label>
                  <input 
                  id={telID} 
                  type="number" 
                  name="number" 
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  value={this.state.number} 
                  onChange={handleChange} 
                  required/>
                </div>
                <button type="submit">Add</button>
                </form>
                )
           
      }
    }