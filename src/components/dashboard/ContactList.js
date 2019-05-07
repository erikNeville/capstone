import React from 'react'
import ContactSummary from './ContactSummary'

const ContactList = ({ phones }) => {
    return (
        <div className="phone-list section">
            { phones && phones.map(phone => {
                return (
                    <ContactSummary phone={phone} key={phone.id} />
                )
            })}
        </div>
    )
}

export default ContactList