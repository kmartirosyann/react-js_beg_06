import React from 'react';
import classes from './about.module.css';

export default function HeaderCv() {
    return (
        <tfoot className={classes.contact}>
        <tr>
            <td className={classes.labelContainer}>
                <span className={classes.brakWorld}>Phone :</span>
            </td>
            <td>
                <span className={classes.brakWorld}>+374 93 92 70 30</span>
            </td>
        </tr>
        <tr>
            <td className={classes.labelContainer}>
                <span className={classes.brakWorld}>Address : </span>
            </td>
            <td>
                <span className={classes.brakWorld}>Yerevan norq-marash 17str 32 </span>
            </td>
        </tr>
        <tr>
            <td className={classes.labelContainer}>
                <span className={classes.brakWorld}>Email :</span>
            </td>
            <td>
                <span className={classes.brakWorld}>km.martirosyankaren@gmail.com</span>
            </td>
        </tr>


    </tfoot>
    )
}
