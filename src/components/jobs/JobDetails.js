import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Button, Modal } from 'react-materialize'
import { Link } from 'react-router-dom'

const trigger = <Button>Create Report</Button>;

const JobDetails = (props) => {


// destructuring state objects as props
const { job, auth } = props;

// checking for auth status to create route guard if not logged in
if (!auth.uid) return <Redirect to='/signin' />

if (job) {

    return (
        
        

        <div className="container section job-details">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        <strong>{job.project}</strong>
                    </span>
                    <div className="row">
                        <div className="col s12 m6">
                            <p className="grey-text">Address</p>
                            {job.address ? <p>{job.address}</p> : <p className="red-text text-darken-4">N/A, please update address</p>}
                        </div>
                        <div className="col s12 m6">
                            <p className="grey-text">Job Number</p>
                            {job.job_no ? <p>{job.job_no}</p> : <p className="red-text text-darken-4">N/A, please update job number</p>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m6">
                            <p className="grey-text">Permit Number</p>
                            {job.permit ? <p>{job.permit}</p> : <p className="red-text text-darken-4">N/A, please update permit number</p>}
                        </div>
                        <div className="col s12 m6">
                            <p className="grey-text">Contact Phone</p>
                            {job.phone ? <p>{job.phone}</p> : <p className="red-text text-darken-4">N/A, please update contact phone</p>} 
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m6">
                            <p className="grey-text">Contractor</p>
                            {job.contractor ? <p>{job.contractor}</p> : <p className="red-text text-darken-4">N/A, please update contractor</p>}
                        </div>
                        <div className="col s12 m6">
                            <p className="grey-text">Project Manager</p>
                            <p>{job.manager}</p>
                        </div>
                    </div>
                </div>
                <div className="card-action grey lighten-4">
                    <Modal header="Select Report Type" trigger={trigger}>
                        <Link to={'/concrete'} scrollBehavior="none">Concrete</Link>
                    </Modal>
                </div>
            </div>
        </div>
    )
    
} else {
    return (
        <div className="container center">Loading Job Details...</div>   
    )
}
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const jobs = state.firestore.data.jobs;

    // if the JobDetails id of its own props matches the
    // id of the state, store that job data as props
    const job = jobs ? jobs[id] : null
    return {
        job,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'jobs' }
    ])
)(JobDetails)