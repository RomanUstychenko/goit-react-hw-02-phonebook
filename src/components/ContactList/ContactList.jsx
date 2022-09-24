

 const ContactList = ({items}) => {
        const elements = items.map(({name, number}) => {
    return (
            <li>Name: {name} Tel: {number}</li>
    )
} )
    return (
        <ul>
            {elements}
        </ul>
    )
}
export default ContactList;