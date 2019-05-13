import React from 'react'
import { Button, Modal } from 'react-materialize'
import ReportLinks from './ReportLinks'

const trigger = <Button>Create Report</Button>;

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
                <span className="card-title">{job.project}</span>
                <p>{job.address}</p><br/>
            </div>

            {/* card buttons */}
            <div className="card-action">
                <div className="row dashboard-action">
                    <div className="col s6 m5">
                        <Button className="activator">More Info</Button> 
                    </div>
                    <div className="col s6 m7">
                        <Modal header={"Select Report Type"} trigger={trigger}>
                            <ReportLinks job={job} />
                        </Modal>
                    </div>
                 </div>
            </div>

            {/* on card reveal */}
            <div className="card-reveal" style={revealstyle}>
                <span className="card-title" style={spanstyle}>
                    {job.project}
                    <i className="material-icons right">close</i>
                    <div className="row">
                        <div className="col s12 m6">
                            <p className="grey-text" style={infostyle}>Address</p>
                            <p>{job.address}</p>
                            <p className="grey-text" style={infostyle}>Job Number</p>
                            <p>{job.job_no}</p>
                        </div>
                        <div className="col s12 m6">
                            <p className="grey-text" style={infostyle}>Permit</p>
                            <p>{job.permit}</p>
                            <p className="grey-text" style={infostyle}>Contact</p>
                            <p>{job.phone}</p>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default JobSummary