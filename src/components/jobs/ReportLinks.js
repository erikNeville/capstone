import React from 'react'
import { Link } from 'react-router-dom'

const ReportLinks = ({job}) => {
    return (
        <div>
            <Link to={{pathname: 'concrete', state:{job}}}>Concrete</Link><br/>
            <a href={'/epoxy'} key={job.id}>Epoxy</a><br/>
            <a href={'/resteel'}>Resteel</a><br/>
            <a href={'/grout'}>Grout</a><br/>
            <Link to={{ pathname: '/const', state: {job} }}>Construction</Link>
        </div>
    )
}

export default ReportLinks