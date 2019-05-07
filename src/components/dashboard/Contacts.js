import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import ContactList from './ContactList'

class Contacts extends Component {
    render () {

        // deconstructing state objects as props
        const { phones, auth } = this.props;

        // checking for auth status for route guarding
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container contacts">
                <h4>Contact List</h4>
                <div className="row">
                    <div className="col s12 m12">
                        <ContactList phones={phones} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        phones: state.firestore.ordered.phones,
        auth: state.firebase.auth
    }
}

// connecting to my phones collection inside of firestore, sorting by last name
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'phones', orderBy: ['lName', 'asc'] }
    ])
)(Contacts)