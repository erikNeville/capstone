import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state);
    }

    render() {
        // destructuring authError property from props
        const { authError, auth } = this.props;

        // checking for auth status to create route guard if logged in
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">    
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn red darken-3 hoverable">Sign In</button>
                    </div>

                    <div className="red-text center">
                        { authError ? <p>{authError}</p> : null } 
                    </div>
                </form>
            </div>
        )
    }
}

// mapping state to props in order to generate an auth error,
// which is created in authReducer.js
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

// return the signIn method from authActions.js as a prop
// so that it can be used in the handleSubmit() method
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)