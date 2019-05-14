import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import M from 'materialize-css'



class Epoxy extends Component {
    
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
        use: '',
        building_codeyear: '',
        resteel: '',
        all_thread: '',
        size_quantity: '',
        manufacturer: '',
        grade: '',
        type: '',
        sdq: '',
        all_thread_type: '',
        length: '',
        hole_depth: '',
        req_embed: '',
        hole_diameter: '',
        concrete_thickness: '',
        concrete_strength: '',
        hole_orientation: '',
        base_material: '',
        hole_cleaning: '',
        air_psi: '',
        brushed: '',
        hole_condition: '',
        drill_bit: '',
        diamond_cored: '',
        adhesive_manufacturer_type: '',
        exp_date: '',
        icc_esr: '',
        weather: '',
        amb_temp: '',
        sub_temp: '',
        comments: '',
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
        console.log(e);
    }

    render() {
        const { job } = this.props.location.state

        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='signin' />

        return (
            <div className="container">
                <h5 className="right otto-report-header">Otto Rosenau & Associates, Inc.</h5>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Proprietary Anchor Adhesive Field Report</h5>
                
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

                    {/* description */}
                    <div className="row">
                        <div className="input-field">
                            <textarea id="description" style={{resize: 'none'}}></textarea>
                            <label htmlFor="description">Description/Location</label>
                        </div>
                    </div>

                    {/* intended use, building code/year */}
                    <div className="row">
                        <div className="input-field col s8 m8">
                            <label htmlFor="use">Inted Use</label>
                            <input type="text" id="use" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="building_codeyear">Building Code/Year</label>
                            <input type="text" id="building_codeyear" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* rebar vs. all thread section */}
                    <p>Dropdown menu to determine if using rebar or all thread</p>
                    <p>Other options will be determined by this selection</p>

                    {/* anchor depth, hole depth */}
                    <div className="row">
                        <div className="input-field col s4 m4">
                            <label htmlFor="length">Anchor Length</label>
                            <input type="text" id="length" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="hole_depth">Hole Depth</label>
                            <input type="text" id="hole_depth" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="req_embed">Required Embedment</label>
                            <input type="text" id="req_embed" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* hole diameter, concrete thickness/strength */}
                    <div className="row">
                        <div className="input-field col s4 m4">
                            <label htmlFor="hole_diameter">Hole Diameter</label>
                            <input type="text" id="hole_diameter" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="concrete_thickness">Concrete Thickness</label>
                            <input type="text" id="concrete_thickness" onChange={this.handleChange} />
                        </div>
                        <div className="input-field col s4 m4">
                            <label htmlFor="concrete_strength">Concrete Strength</label>
                            <input type="text" id="concrete_strength" onChange={this.handleChange} />
                        </div>
                    </div>

                    {/* hole orientation */}
                    <div className="row">
                        <p>Hole Orientation</p>
                        <div className="col s6 m3">
                            <label>
                                <input type="checkbox"/>
                                <span>Verticle Down</span>
                            </label>
                        </div>
                        <div className="col s6 m3">
                            <label>
                                <input type="checkbox"/>
                                <span>Verticle Up</span>
                            </label>
                        </div>
                        <div className="col s6 m3">
                            <label>
                                <input type="checkbox"/>
                                <span>Horizontal</span>
                            </label>
                        </div>
                        <div className="col s6 m3">
                            <label>
                                <input type="checkbox"/>
                                <span>Diagonal</span>
                            </label>
                        </div>
                    </div>

                    {/* base material */}
                    <div className="row">
                        <p>Base Material</p>
                        <div className="col s6 m3">
                            <label>
                                <input type="checkbox"/>
                                <span>Normal Weight Concrete</span>
                            </label>
                        </div>
                        <div className="col s6 m3">
                            <label>
                                <input type="checkbox"/>
                                <span>Light Weight Concrete</span>
                            </label>
                        </div>
                        <div className="col s6 m2">
                            <label>
                                <input type="checkbox"/>
                                <span>CMU</span>
                            </label>
                        </div>
                        <div className="col s6 m2">
                            <label>
                                <input type="checkbox"/>
                                <span>Brick</span>
                            </label>
                        </div>
                        <div className="col s6 m2">
                            <label>
                                <input type="checkbox"/>
                                <span>Composite Deck</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // attaching auth status to props
    // console.log(state)
    return {
        auth: state.firebase.auth,
        job: state.firestore.job
    }
}

export default connect(mapStateToProps)(Epoxy)