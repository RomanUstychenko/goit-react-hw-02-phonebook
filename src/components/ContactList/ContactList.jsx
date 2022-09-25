import PropTypes from 'prop-types'
import css from "./ContactList.module.css"

 export const ContactList = ({items, delContacts}) => {
        const elements = items.map(({name, number, id}) => {
    return (
            <li className={css.contactList} key={id}> 
            <b>Name:</b>  {name} <br />
            <b className={css.tel}>Tel:</b> {number} 
            <span className={css.delContacts} onClick={() => delContacts(id)}>Delete</span></li>
    )
} )
    return (
        <ul>
            {elements}
        </ul>
    )
}

ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
        }),
  )}