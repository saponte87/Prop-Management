import React, { Component } from 'react';
import { reduxForm, Field } from 'react-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';

class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in-form'>
                <FormTitle className='sign-in_form__title' text='Login'/>
                <Field conponent='sign-in-form__email' name='email' type='email'/>            
            </form>
        )
    }

    SigninForm = reduxForm({
        form: 'signin'
    })(SigninForm);
}

export default SigninForm