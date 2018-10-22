import React, { Component } from 'react';

import { FormTitle } from '../formTitle';

class Signin extends Component {
    render() {
        return (
            <div className='sign-in'>
                <FormTitle className='sign-in_title' text='login'/>
            </div>
        )
    }
}

export default Signin;