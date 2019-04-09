import React from 'react';

const user = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <style jsx>{`
            div {
                border: 1px solid #eee;
                text-align: center;
                padding: 10px;
            }
        `}</style>
    </div>
);

export default user;
