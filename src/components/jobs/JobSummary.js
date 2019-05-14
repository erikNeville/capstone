import React from 'react'
import { Button, Modal, Dropdown } from 'react-materialize'
import ReportLinks from './ReportLinks'
import { Link } from 'react-router-dom'

const trigger = <Button>Create Report</Button>

const JobSummary = ({job}) => {

    var spanstyle = {
        fontSize: '18px',
        paddingTop: '-5px'
    }

    var infostyle = {
        lineHeight: '0px',
        fontSize: '12px'
    }

    var revealstyle = {
        overflowY: 'scroll'
    }

    return (
        <div className="card sticky-action job-summary">
            <div className="card-content">
                <span className="card-title"><strong>{job.project}</strong></span>
                {job.address ? <p>{job.address}</p> : <p className="red-text text-darken-4">N/A, please update address</p>}<br/>
            </div>

            {/* card buttons */}
            <div className="card-action">
                <div className="row dashboard-action">
                    <div className="col s6 m7">
                        <Dropdown trigger={trigger}>
                            <ReportLinks job={job} />
                        </Dropdown>
                    </div>
                    <div className="col s6 m5">
                        <Button className="activator waves-effect waves-light">More Info</Button> 
                    </div>
                 </div>
            </div>

            {/* on card reveal */}
            <div className="card-reveal" style={revealstyle}>
                <span className="card-title" style={spanstyle}>
                    <strong>{job.project}</strong>
                    <i className="material-icons right">close</i>
                    <div className="row">
                        <div className="col s12 m6">
                            <p className="grey-text" style={infostyle}>Address</p>
                            {job.address ? <p>{job.address}</p> : <p className="red-text text-darken-4">N/A, please update address</p>}
                            <p className="grey-text" style={infostyle}>Job Number</p>
                            {job.job_no ? <p>{job.job_no}</p> : <p className="red-text text-darken-4">N/A, please update job number</p>}
                        </div>
                        <div className="col s12 m6">
                            <p className="grey-text" style={infostyle}>Permit</p>
                            {job.permit ? <p>{job.permit}</p> : <p className="red-text text-darken-4">N/A, please update permit number</p>}
                            <p className="grey-text" style={infostyle}>Contact</p>
                            {job.phone ? <p>{job.phone}</p> : <p className="red-text text-darken-4">N/A, please update contact phone</p>} 
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default JobSummary