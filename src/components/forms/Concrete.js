import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import M from 'materialize-css'



class Concrete extends Component {
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
        resteel_var: '',
        resteel_date: '',
        resteel_grade: '',
        resteel_manufact: '',
        supplier: '',
        mix_no: '',
        slump_spec: '',
        wc_spec: '',
        air_spec: '',
        total_yards: '',
        placed_via: '',
        consolidated: '',
        req_psi: '',
        batch_des_act: '',
        cement: '',
        fine_agg: '',
        coarse_1: '',
        coarse_2: '',
        slag: '',
        fly_ash: '',
        water: '',
        admix: '',
        sample_cnt: '',
        field_cure: '',
        curing_method: '',
        samples: '',
        special_breaks: '',
        size: '',
        time_made: '',
        cubic_yards: '',
        added_water: '',
        slump: '',
        air: '',
        conc_temp: '',
        amb_temp: '',
        truck_no: '',
        ticket_no: '',
        weather: '',
        slump_range: '',
        air_range: '',
        comments: '',
        other_astm: '',
        conforms: '',
        reinspection: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }


    render() {

        const { auth } = this.props;

        const { job } = this.props.location.state;
        console.log(job.job_no)

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <h5 className="right otto-report-header">Otto Rosenau & Associates, Inc.</h5>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Concrete Field Report</h5>
                    
                    {/* job, report, permit */}
                    <div className="row">
                        <div className="input-field col s4 m4">
                            <label htmlFor="job_no">Job Number</label>
                            <input type="text" id="job_no" onChange={this.handleChange} placeholder={job.job_no} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="report_no">Report Number</label>
                            <input type="text" id="report_no" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="permit">Permit Number</label>
                            <input type="text" id="permit" onChange={this.handleChange} placeholder={job.permit} />
                        </div>
                    </div>

                    {/* project, address, date, inspector */}
                    <div className="row">
                        <div className="input-field col s6 m6">
                            <label htmlFor="project">Project</label>
                            <input type="text" id="project" onChange={this.handleChange} placeholder={job.project} />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" onChange={this.handleChange} placeholder={job.address} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 m6">
                            <label htmlFor="inspector">Inspector</label>
                            <input type="text" id="inspector" onChange={this.handleChange} placeholder={auth.fName}/>
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="date">Date</label>
                            <input type="text" id="date" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* description */}
                    <div className="row">
                        <div className="input-field">
                            <textarea id="description" style={{resize: 'none'}}></textarea>
                            <label htmlFor="description">Description/Location</label>
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
                        <div className="input-field col s5 m5">
                            <label htmlFor="resteel_date">Date/Checked-By</label>
                            <input type="text" id="resteel_date" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="resteel_grade">Grade</label>
                            <input type="text" id="resteel_grade" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="resteel_manufact">Manufacturer</label>
                            <input type="text" id="resteel_manufact" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* Placement Data */}
                    <div className="row">
                        <p>Placement Data</p>
                        <div className="input-field col s3 m3">
                            <label htmlFor="suppllier">Supplier</label>
                            <input type="text" id="supplier" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="mix_no">Mix Number</label>
                            <input type="text" id="mix_no" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="slump_spec">Slump Spec</label>
                            <input type="text" id="slump_spec" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="wc_spec">W/C Ratio Spec</label>
                            <input type="text" id="wc_spec" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3 m3">
                            <label htmlFor="air_spec">Air Spec</label>
                            <input type="text" id="air_spec" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="total_yards">Total Yards</label>
                            <input type="text" id="total_yards" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="placed_via">Placed Via</label>
                            <input type="text" id="placed_via" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="req_psi">Required Strength (psi)</label>
                            <input type="text" id="req_psi" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <p className="grey-text text-darken-1">Consolided (yes/no)</p>
                        <div className="col s1 m1">
                            <label htmlFor="consolidated">
                                <input name="consolidated" id="consolidated" type="radio"/>
                                <span>Yes</span>
                            </label>
                        </div>
                        <div className="col s1 m1">
                            <label>
                                <input name="consolidated" id="consolidated" type="radio"/>
                                <span>No</span>
                            </label>
                        </div>
                    </div>

                    
                    {/* Batch Weights (design for now) */}
                    <br/>
                    <div className="row">
                        <p>Batch Weights</p>
                        <div className="input-field col s3 m3">
                            <label htmlFor="cement">Cement (lbs/type)</label>
                            <input type="text" id="cement" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="fine_agg">Fine Agg. (lbs)</label>
                            <input type="text" id="fine_agg" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="coarse_1">Coarse Agg. 1 (lbs/size)</label>
                            <input type="text" id="coarse_1" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="coarse_2">Coarse Agg. 2 (lbs/size)</label>
                            <input type="text" id="coarse_2" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3 m3">
                            <label htmlFor="slag">Slag Cement (lbs)</label>
                            <input type="text" id="slag" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="fly_ash">Fly Ash (lbs)</label>
                            <input type="text" id="fly_ash" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="water">Water (lbs or gal)</label>
                            <input type="text" id="water" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s3 m3">
                            <label htmlFor="admix">Admixtures (specify)</label>
                            <input type="text" id="admix" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* Sampling and Testing */}
                    <br/>
                    <div className="row">
                        <p>Sampling and Testing Data (ASTM C172, C31)</p>
                        <div className="input-field col s4 m4">
                            <label htmlFor="sample_cnt">Total # of Samples Cast</label>
                            <input type="text" id="sample_cnt" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="field_cure">Total # of Field Cures</label>
                            <input type="text" id="field_cure" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="curing_method">Curing Method/Location</label>
                            <input type="text" id="curing_method" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2 m2">
                            <label htmlFor="samples">Cast Samples</label>
                            <input type="text" id="samples" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="special_breaks">Special Breaks</label>
                            <input type="text" id="special_breaks" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="size">Size</label>
                            <input type="text" id="size" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="time_made">Time Made</label>
                            <input type="text" id="time_made" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="cubic_yards">Cubic Yards</label>
                            <input type="text" id="cubic_yards" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="added_water">Water Added</label>
                            <input type="text" id="added_water" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2 m2">
                            <label htmlFor="slump">Slump</label>
                            <input type="text" id="slump" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="air">Air %</label>
                            <input type="text" id="air" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="conc_temp">Conc. Temp</label>
                            <input type="text" id="conc_temp" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="amb_temp">Amb. Temp</label>
                            <input type="text" id="amb_temp" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="truck_no">Truck No.</label>
                            <input type="text" id="truck_no" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s2 m2">
                            <label htmlFor="ticket_no">Ticket No.</label>
                            <input type="text" id="ticket_no" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4 m4">
                            <label htmlFor="weather">Weather</label>
                            <input type="text" id="weather" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="slump_range">Slump Range</label>
                            <input type="text" id="slump_range" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="air_range">Air % Range</label>
                            <input type="text" id="air_range" onChange={this.handleChange} />
                        </div>
                    </div>
                
                    {/* comments */}
                    <div className="row">
                        <div className="input-field">
                            <textarea id="comments" style={{resize: 'none'}}></textarea>
                            <label htmlFor="comments">Comments</label>
                        </div>
                    </div>
                
                    {/* extras */}
                    <div className="row">
                        <div className="input-field">
                            <textarea id="other_astm" style={{resize: 'none'}}></textarea>
                            <label htmlFor="other_astm">Other ASTM Method(s) Used</label>
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
    console.log(state)
    return {
       auth: state.firebase.auth
        
    }
}

export default connect(mapStateToProps)(Concrete)