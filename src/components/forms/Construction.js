import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

let Construction = props => {

    console.log(props)

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className="white">
            <div className="container">
                <Field name="job_no" component="input" type="text" />
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {
        initialValues: {
            job_no: ''
        }
    }
}

export default connect(mapStateToProps)(reduxForm({ form: 'construction', enableReinitialize: true})(Construction))