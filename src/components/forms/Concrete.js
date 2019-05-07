import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { auth } from 'firebase';

class Concrete extends Component {

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
        corse_1: '',
        corse_2: '',
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
        amp_temp: '',
        truck_no: '',
        ticket_no: '',
        weather: '',
        slump_range: '',
        air_range: '',
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

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <h5 className="right">Otto Rosenau & Associates, Inc.</h5>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Concrete Field Report</h5>
                    
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
                        <div className="input-field col s6 m6">
                            <label htmlFor="inspector">Inspector</label>
                            <input type="text" id="inspector" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s6 m6">
                            <label htmlFor="date">Date</label>
                            <input type="text" id="date" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* description */}
                    <div className="row">
                        <div className="input-field">
                            <textarea id="desc" style={{resize: 'none'}}></textarea>
                            <label htmlFor="desc">Description/Location</label>
                        </div>
                    </div>

                    {/* resteel */}
                    <div className="row">
                        <div className="col s1 m1">
                            <label htmlFor="resteel_var">
                                <input name="resteel_var" id="resteel_var" type="radio"/>
                                <span>Yes</span>
                            </label>
                        </div>
                        <div className="col s1 m1">
                            <label>
                                <input name="resteel_var" id="resteel_var" type="radio"/>
                                <span>No</span>
                            </label>
                        </div>
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

                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // attaching auth status to props
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Concrete)