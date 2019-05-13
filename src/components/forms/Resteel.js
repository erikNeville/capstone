import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Resteel extends Component {

    state = {
        job_no: '',
        report_no: '',
        permit: '',
        project: '',
        address: '',
        date: '',
        inspector: '',
        description: '',
        grade: '',
        manufacturer: '',
        type: '',
        sdq: '',
        conforms: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", this.state)
    }

    render() {

        console.log(this.props)

        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <h5 className="right otto-report-header">Otto Rosenau & Associates, Inc.</h5>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Reinforcing Steel Inspection Report</h5>

                    {/* job, report, permit */}
                    <div className="row">
                        <div className="input-field col s4 m4">
                            <label htmlFor="job_no">Job Number</label>
                            <input type="text" id="job_no" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="report_no">Report Number</label>
                            <input type="text" id="report_no" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="permit">Permit Number</label>
                            <input type="text" id="permit" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* project, address, date, inspector */}
                    <div className="row">
                        <div className="input-field col s6 m6">
                            <label htmlFor="project">Project</label>
                            <input type="text" id="project" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 m6">
                            <label htmlFor="inspector">Inspector</label>
                            <input type="text" id="inspector" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="date">Date</label>
                            <input type="text" id="date" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* grade, manufacturer */}
                    <div className="row">
                        <p>Resteel Information</p>
                        <div className="input-field col s5 m5">
                            <label htmlFor="grade">Grade</label>
                            <input type="text" id="grade" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s7 m7">
                            <label htmlFor="manufacturer">Manufacturer</label>
                            <input type="text" id="manufacturer" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <p>Type of Bar</p>
                        <div className="col s3 m3">
                            <label>
                                <input type="checkbox"/>
                                <span>A-615</span>
                            </label>
                        </div>
                        <div className="col s3 m3">
                            <label>
                                <input type="checkbox"/>
                                <span>A-706</span>
                            </label>
                        </div>
                        <div className="col s3 m3">
                            <label>
                                <input type="checkbox"/>
                                <span>N/A</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                    <p>SDQ Steel</p>
                        <div className="col s2 m3">
                            <label>
                                <input name="sdq" id="sdq" type="radio"/>
                                <span>Yes</span>
                            </label>
                        </div>
                        <div className="col s2 m3">
                            <label>
                                <input name="sdq" id="sdq" type="radio"/>
                                <span>No</span>
                            </label>
                        </div>
                    </div>

                    {/* description */}
                    <div className="row">
                        <div className="input-field">
                            <textarea id="description" style={{resize: 'none'}}></textarea>
                            <label htmlFor="description">Description/Location</label>
                        </div>
                    </div>

                    {/* conformance */}
                    <div className="row">
                        <p>Conforms (yes/no)</p>
                        <div className="col s2 m3">
                            <label htmlFor="conforms">
                                <input name="conforms" id="conforms" type="radio"/>
                                <span>Yes</span>
                            </label>
                        </div>
                        <div className="col s2 m3">
                            <label>
                                <input name="conforms" id="conforms" type="radio"/>
                                <span>No</span>
                            </label>
                        </div>
                    </div>

                    {/* submit */}
                    <div className="input-field">
                        <button className="btn red darken-3 hoverable">Submit Form</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // attaching auth status to props
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(Resteel)