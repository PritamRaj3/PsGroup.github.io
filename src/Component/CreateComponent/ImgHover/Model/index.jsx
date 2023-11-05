import React, { useEffect, useState } from 'react';
import './model.scss';


export default function Model(props) {

    const [data, setData] = useState(true);

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'scroll';
        }

    }, []);


    function videoHandle() {
        setData(!data);
    }

    return (
        <>
            <div className="modelWraper">
                <div className='modelContainer'>
                    <div className="modelImg">
                        <img src={props.img} alt="" />
                    </div>
                    <button onClick={props.close}>✖️ </button>
                    {
                        
                        <button id='pause' onClick={videoHandle} > {data ? "⏯️" : "⏸️"} </button>
                    }
                </div>
            </div>
        </>
    )
}
