import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import M from 'materialize-css'
import { connect } from 'react-redux'



class Whatever extends Component {

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

    render() {
        // console.log(this.props);
        // console.log(this.state);
        const { job } = this.props.location.state;
        return (
            <div className="container">
                <h5 className="left otto-report-header">Otto Rosenau & Associates, Inc.</h5>
                <Formik
                    initialValues={{ job_no: job.job_no, inspector: '', description: '' }}
                    validate={values => {
                        let errors = {};
                        if (!values.job_no) {
                            errors.job_no = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        this.setState({
                            job_no: values.job_no,
                            inspector: values.inspector,
                            description: values.description
                        });
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                   {({ isSubmitting }) => (
                       <Form>
                           <Field type="text" name="job_no" />
                           <ErrorMessage name="job_no" component="div" />
                           <Field type="text" name="inspector" />
                           <ErrorMessage name="inspector" component="div" />
                           <Field type="text" name="description" />
                           <ErrorMessage name="description" component="div" />
                           <button type="submit" disabled={isSubmitting}>
                               Submit
                           </button>
                       </Form>
                   )}
                </Formik>
            </div>
        )
    }
}

export default Whatever