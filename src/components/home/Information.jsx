import React from 'react';

const Information = () => {
    return (

        <div className="infomation">
            <div className="information__greet">
                <h2>Hi there, I'm</h2>
                <h1>Thinh Nguyen</h1>
            </div>

            <div className="wrapper">
                <div className="static-txt">
                    Software Developer
                </div>

                <ul className="dynamic-txts">
                    <li><span>Frontend Developer</span></li>
                    <li><span>Backend Developer</span></li>
                </ul>
            </div>
        </div>

    )
}

export default Information;
