import { nanoid } from "nanoid";
import { Component } from "react";
import  ContactForm  from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
// import { nanoid } from "nanoid";


export default class Contacts extends Component  {
  state = {
    contacts: [],
    filter: ''
  }
  addContacts = (data) => {
    
    this.setState ((prev) => {
      const newName = {
        id: nanoid(),
        ...data
      }
      return {
        contacts: [...prev.contacts, newName]
      }
    })
  }
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState( 
      {[name]: value,
      }
   )
  }
  getFilteredContact () {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContact = contacts.filter(({name}) => {
        const nornalizedName = name.toLocaleLowerCase();
        const result = nornalizedName.includes(normalizedFilter);
        return result;
      })
      return filteredContact;
    }


      render () {
        const { addContacts,  handleChange} = this;
        const { filter } = this.state;
        const contacts = this.getFilteredContact;
        return (
            <div>
              <div>
              <h2>PhoneBook</h2>
                <ContactForm onSubmit={addContacts} />
              </div>
              <div>
              <h2>Contacts</h2>
              <input 
              type="text" 
              name="filter" 
              value={filter}
              onChange={handleChange}
              />
                <ContactList items={contacts} />
              </div>
            </div>
            )
}
}