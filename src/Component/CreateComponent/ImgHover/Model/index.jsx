import React, { useEffect } from 'react';
import './model.scss';


export default function Model(props) {


    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'scroll';
        }

    }, []);


    return (
        <>
            <div className="modelWraper">
                <div className='modelContainer'>
                    <div className="modelImg">
                        <img src={props.img} alt="load" />
                    </div>
                    <button onClick={props.close}>✖️ </button>
                </div>
            </div>
        </>
    )
}
