import React from 'react';

const Try = ({ tryInfo }) => {
    return (
        <li key={tryInfo.try}>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
}

export default Try;