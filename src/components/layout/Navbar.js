import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {

    // destructuring the auth property from props
    const { auth, profile } = props;
    // logic for checking if a uid exists in the auth prop
    const links = auth.uid ? <SignedInLinks profile={ profile } /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">Otto Jobs</Link>
                {/* displays which links are visible based on auth status */}
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    // attach an auth property to state
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)