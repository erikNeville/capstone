import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

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
                        <span className="card-title">{job.project}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex fugiat dicta, atque expedita, repudiandae asperiores exercitationem reprehenderit, quas soluta optio velit. Natus optio dolore voluptas ex consectetur corporis fugiat.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Project Manager:</div>
                        <div>Created At:</div>
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