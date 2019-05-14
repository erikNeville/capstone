import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import M from 'materialize-css'

class Grout extends Component {

    componentDidMount() {
        M.updateTextFields();
    }

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
        rebar_manufacturer: '',
        supplier: '',
        mix_no: '',
        total_yards: '',
        cement: '',
        fine_agg: '',
        coarse_agg: '',
        water: '',
        admixtures: '',
        req_psi: '',
        sample_cnt: '',
        cubic_yards: '',
        flow: '',
        grout_temp: '',
        amb_temp: '',
        truck_no: '',
        ticket_no: '',
        weather: '',
        pickup_date: '',
        comments: '',
        conforms: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted: ", this.state)
    }

    render() {

        const { job } = this.props.location.state;

        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <h5 className="right otto-report-header">Otto Rosenau & Associates, Inc.</h5>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Grout Inspection Report</h5>

                    {/* job, report, permit */}
                    <div className="row">
                        <div className="input-field col s4 m4">
                            <label htmlFor="job_no">Job Number</label>
                            <input type="text" id="job_no" defaultValue={job.job_no} onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="report_no">Report Number</label>
                            <input type="text" id="report_no" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="permit">Permit Number</label>
                            <input type="text" id="permit" defaultValue={job.permit} onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* project, address, date, inspector */}
                    <div className="row">
                        <div className="input-field col s6 m6">
                            <label htmlFor="project">Project</label>
                            <input type="text" id="project" defaultValue={job.project} onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" defaultValue={job.address} onChange={this.handleChange} />
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

                    {/* resteel */}
                    <div className="row">
                        <p>Resteel Varified (yes/no)</p>
                        <div className="col s12 m3">
                            <label htmlFor="resteel_var">
                                <input name="resteel_var" id="resteel_var" type="radio"/>
                                <span>Yes</span>
                            </label>
                        </div>
                        <div className="col s12 m3">
                            <label>
                                <input name="resteel_var" id="resteel_var" type="radio"/>
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m8">
                            <label htmlFor="resteel_date">Date/Checked-By</label>
                            <input type="text" id="resteel_date" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m2">
                            <label htmlFor="resteel_grade">Grade</label>
                            <input type="text" id="resteel_grade" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m2">
                            <label htmlFor="resteel_manufact">Manufacturer</label>
                            <input type="text" id="resteel_manufact" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* description */}
                    <div className="row">
                        <div className="input-field">
                            <textarea id="description" style={{resize: 'none'}}></textarea>
                            <label htmlFor="description">Description/Location</label>
                        </div>
                    </div>

                    {/* Placement Data */}
                    <div className="row">
                        <p>Placement Data</p>
                        <div className="input-field col s12 m3">
                            <label htmlFor="suppllier">Supplier</label>
                            <input type="text" id="supplier" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m3">
                            <label htmlFor="mix_no">Mix Number</label>
                            <input type="text" id="mix_no" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m3">
                            <label htmlFor="total_yards">Total Yards</label>
                            <input type="text" id="total_yards" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* batch weights */}
                    <div className="row">
                        <p>Batch Weights</p>
                        <div className="input-field col s6 m6">
                            <label htmlFor="cement">Cement (lbs/type)</label>
                            <input type="text" id="cement" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="fine_agg">Fine Agg. (lbs)</label>
                            <input type="text" id="fine_agg" onChange={this.handleChange} />
                        </div>
                    
                        <div className="input-field col s6 m6">
                            <label htmlFor="water">Water (lbs/gals)</label>
                            <input type="text" id="water" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="admixtures">Admixtures (specify)</label>
                            <input type="text" id="admixtures" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* Sampling and Testing */}
                    <br/>
                    <div className="row">
                    <p>Sampling and Testing Data (ASTM C31, C109)</p>

                        <div className="input-field col s6 m3">
                            <label htmlFor="samples">Cast Samples</label>
                            <input type="text" id="samples" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m3">
                            <label htmlFor="cubic_yards">Cubic Yards</label>
                            <input type="text" id="cubic_yards" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m3">
                            <label htmlFor="flow">Flow</label>
                            <input type="text" id="flow" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m3">
                            <label htmlFor="grout_temp">Grout Temp</label>
                            <input type="text" id="grout_temp" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m3">
                            <label htmlFor="amb_temp">Amb. Temp</label>
                            <input type="text" id="amb_temp" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m3">
                            <label htmlFor="truck_no">Truck No.</label>
                            <input type="text" id="truck_no" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m3">
                            <label htmlFor="ticket_no">Ticket No.</label>
                            <input type="text" id="ticket_no" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m3">
                            <label htmlFor="weather">Weather</label>
                            <input type="text" id="weather" onChange={this.handleChange} />
                        </div>
                    </div>
                    
                    {/* comments */}
                    <div className="row">
                        <div className="input-field">
                            <textarea id="comments" style={{resize: 'none'}}></textarea>
                            <label htmlFor="comments">Comments</label>
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
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Grout)