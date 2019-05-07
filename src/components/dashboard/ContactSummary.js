import React from 'react'

const ContactSummary = ({ phone }) => {
    return (
        <div className="card contact-summary">
            <div className="card-content">
                <span className="card-title">{phone.lName} {phone.fName}</span>
                <p><a href={"tel:" + phone.phone}>{phone.phone}</a></p>
            </div>
        </div>
    )
}

export default ContactSummary