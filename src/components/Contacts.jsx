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
      return {
        contacts: [...prev.contacts, data]
      }
    })
  }

      render () {
        const { addContacts } = this;
        const { contacts } = this.state;
        return (
            <div>
              <div>
              <h2>PhoneBook</h2>
                <ContactForm onSubmit={addContacts} />
              </div>
              <div>
              <h2>Contacts</h2>
                <ContactList items={contacts} />
              </div>
            </div>
            )
}
}