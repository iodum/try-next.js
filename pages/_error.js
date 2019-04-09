import React, { Component } from 'react';
import Link from 'next/link';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <h1>Oops, something went wrong.</h1>
                <p>Try <Link href="/">going back</Link></p>
            </div>
        );
    }
}

export default ErrorPage;
