import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import M from 'materialize-css'

class MechanicalAnchor extends Component {

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
        type: '',
        size: '',
        quantity: '',
        esr: '',
        manufacturer: '',
        hole_diameter: '',
        hole_depth: '',
        req_embed: '',
        anchor_length: '',
        concrete_thickness: '',
        concrete_strength: '',
        base_material: '',
        hole_cleaning: '',
        drill_bit: '',
        wrench_id: '',
        torque: '',
        weather: '',
        amb_temp: '',
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
        console.log(e);
    }

    render() {

        const { job } = this.props.location.state;
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        job: state.firestore.job
    }
}

export default connect(mapStateToProps)(MechanicalAnchor)