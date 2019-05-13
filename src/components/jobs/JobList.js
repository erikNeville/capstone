import React from 'react'
import JobSummary from './JobSummary'
import { Link } from 'react-router-dom'

const JobList = ({jobs}) => {
    return (
        <div className="job-list section">
            { jobs && jobs.map(job => {
                return (
                    <JobSummary job={job} key={job.id} />
                )
            }) }
        </div>
    )
}

export default JobList