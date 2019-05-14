import React, { Component } from 'react'
import Search from './Search'
import JobList from '../jobs/JobList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    
    state = {
        filterText: ''
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }

    render() {
        //console.log(this.props)
        // destructuring state objects as props
        const { jobs, auth } = this.props;

        // checking for auth status to create route guard if not logged in
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s1 m1"></div>
                    <div className="col s10 m10">
                        <h4><strong>Dashboard</strong></h4>
                        <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} />
                        <JobList jobs={jobs} filterText={this.state.filterText} />
                    </div>
                    <div className="col s1 m1"></div>
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
        { collection: 'jobs', orderBy: ['project', 'asc'] }
    ])
)(Dashboard)