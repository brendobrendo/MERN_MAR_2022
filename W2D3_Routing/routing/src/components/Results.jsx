import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Results = (props) => {

    // destructure the variable from the url / route
    const { unicorns, var2 } = useParams();
    console.log(unicorns, var2, useParams());
    // console.log(typeof unicorns);
    return (
        <>
            <div>Results 📈</div>
            <p>
                var from url : {unicorns}
            </p>
            <p>
                var from url : {var2}
            </p>
        </>
    )
}

export default Results