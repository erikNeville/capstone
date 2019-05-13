import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Dashboard</NavLink></li>
            <li><NavLink to='/create'>New Job</NavLink></li>
            <li><NavLink to='/contact'>Contacts</NavLink></li>
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to='/' className="btn btn-floating red darken-3">
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )
}

// enables dispatching the action creater from signOut
const mapDispatchToProps = (dispatch) => {
    return {
        // returns a signOut function from authActions.js on props
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)