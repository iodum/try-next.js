import React, { Component } from 'react';

import User from '../../components/User';

class AuthIndexPage extends Component {
    render() {
        return (
            <div>
                <h1>The auth index page</h1>
                <User name="Max" age={28} />
            </div>
        );
    }
}

export default AuthIndexPage;
