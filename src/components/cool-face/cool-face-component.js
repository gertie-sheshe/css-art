import React from 'react';
import './cool-face.scss';

const CoolFace = () => (
    <div className="container-one">
        <div className="container">
            <div className="head">
                <div className="eye left">
                    <div className="cutout"></div>
                </div>
                <div className="eye right">
                    <div className="cutout"></div>
                </div>
                <div className="mouth"> </div>
            </div>

            <div className="body"></div>
            
        </div>
    </div>
);

export default CoolFace;
