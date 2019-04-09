import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
    render() {
        return (
            <div>
                <h1>The main page</h1>
                <p>Go to <Link href="/auth">Auth</Link></p>
                <button onClick={()=> Router.push('/auth')}>go to auth</button>
            </div>
        );
    }
}

export default IndexPage;
