import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createJob } from '../../store/actions/jobActions'
import { Redirect } from 'react-router-dom'

class CreateJob extends Component {

    state = {
        job_no: '',
        project: '',
        address: '',
        permit: '',
        contractor: '',
        phone: '',
        manager: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createJob(this.state);
        
        // redirect the user to the dashboard page
        this.props.history.push('/');
    }

    render() {
        // destructuring auth state of props
        const { auth } = this.props;

        // checking for auth status to create route guard if not logged in
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New Project</h5>

                    <div className="input-field">
                        <label htmlFor="job_no">Job Number</label>
                        <input type="text" id="job_no" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="project">Project</label>
                        <input type="text" id="project" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">    
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">    
                        <label htmlFor="permit">Permit Number</label>
                        <input type="text" id="permit" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">    
                        <label htmlFor="contractor">Contractor</label>
                        <input type="text" id="contractor" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">    
                        <label htmlFor="phone">Contact Phone</label>
                        <input type="text" id="phone" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">    
                        <label htmlFor="manager">Project Manager</label>
                        <input type="text" id="manager" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn red darken-3 hoverable">Create Job</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // attaching auth status to props
    return {
        auth: state.firebase.auth
    }
}


// returns a function to access createJob from jobActions.js on props
const mapDispatchToProps = (dispatch) => {
    return {
        createJob: (job) => dispatch(createJob(job))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob)