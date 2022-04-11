import React, { useSelector } from 'react';

import './LoginRegister.css';

const InspoCard = (props) => {


    return (
    <>
        <div className="quoteAPI">
            <h2>{props.quote}</h2>
            <h3>-{props.author}</h3>
        </div>
    </>
    )
};
export default InspoCard;