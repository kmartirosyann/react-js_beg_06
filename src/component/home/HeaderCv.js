import React from 'react';
import classes from './about.module.css';

export default function HeaderCv() {
    return (
        <div className={classes.contact}>
        <ul>
            <li className={classes.labelContainer}>
                <span className={classes.brakWorld}>Phone :</span>  <span className={classes.brakWorld}>+374 93 92 70 30</span>
            </li>
            
       
            <li className={classes.labelContainer}>
                <span className={classes.brakWorld}>Address :</span> <span className={classes.brakWorld}>Yerevan norq-marash 17str 32 </span>
            </li>
           
            <li className={classes.labelContainer}>
                <span className={classes.brakWorld}>Email :</span> <span className={classes.brakWorld}>km.martirosyankaren@gmail.com</span>
            </li>
          
        </ul>


    </div>
    )
}
