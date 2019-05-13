import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import M from 'materialize-css'

class Navbar extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        // destructuring the auth property from props
        const { auth, profile } = this.props;
        // logic for checking if a uid exists in the auth prop
        const links = auth.uid ? <SignedInLinks profile={ profile } /> : <SignedOutLinks />;
        return (
            <div>
                <nav className="nav-wrapper blue darken-4">
                    <div className="container">
                    <Link to='/' className="brand-logo">Otto Jobs</Link>

                    <a href="#" data-target="navmenu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>{links}</li>
                    </ul>
                        {/* displays which links are visible based on auth status */}
                    </div>
                </nav>

                <ul className="sidenav" id="navmenu">
                    <li>{links}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // attach an auth property to state
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)