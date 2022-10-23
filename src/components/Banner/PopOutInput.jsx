import React, {useState} from 'react';
import { RequestForm } from '../Request/Request';
import "./Banner.scss";

const PopOutInput = (props) => {
    const handlerStylesPopupMenu = props.change ? `popupWindowActive` : `popupWindow`;
    
    const handleClickAway = (event) => {
        if (event.target === event.currentTarget) {
            props.onClick(event)
        }
    }

    return (
            <div className={handlerStylesPopupMenu} onClick={handleClickAway}>
                <div className='popupWindowWrapper'>
                    <div className="popupWindowActiveCont">
                        <svg 
                        className='popupWindowSvg'
                        onClick={props.onClick}
                            width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.39324 25.6077L25.6064 4.39453" stroke="#FCD54C" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M4.39324 4.39226L25.6064 25.6055" stroke="#FCD54C" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                        <RequestForm/>
                    </div>
                </div>
            </div>
    );
};

export default PopOutInput;