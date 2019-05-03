import React from 'react'

const JobSummary = ({job}) => {
    return (
        <div className="card job-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{job.project}</span>
                <p>Managed By: {job.manager}</p>
                <p className="grey-text">Address: {job.address}</p>
            </div>
        </div>
    )
}

export default JobSummary