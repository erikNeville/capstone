import React, { Component } from 'react'
import Options from './Options'
import JobList from '../jobs/JobList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {

        // destructuring state objects as props
        const { jobs, auth } = this.props;

        // checking for auth status to create route guard if not logged in
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <h4>Dashboard</h4>
                <div className="row">
                    <div className="col s12 m8 jobs">
                        <JobList jobs={jobs} />
                    </div>
                    <div className="col s12 m3 offset-m1">
                        <Options />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        jobs: state.firestore.ordered.jobs,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'jobs' }
    ])
)(Dashboard)