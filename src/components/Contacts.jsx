import { Component } from "react";
import  ContactForm  from "./ContactForm/ContactForm"
// import { nanoid } from "nanoid";


export default class Contacts extends Component  {
   

      render () {
        
        return (
            <div>
              <div>
              <h2>PhoneBook</h2>
                <ContactForm />
            
                
              </div>
              <div>
              <h2>Contacts</h2>
              </div>
            </div>
            )
}
}