import React from 'react'
import StepStyles from './Step2.module.css'
import AboutImage from '../../../images/About.svg'

function Step2() {
    return (
        <div className={StepStyles.StepSection}>
             <div className={StepStyles.textBox}>
                <div className={StepStyles.textContainer}>
                    <h1 className={StepStyles.MainText}>Schedule and pay</h1>
                    <p className={StepStyles.SubText}>Schedule the delivery at your convenient timeand pay digitally</p>
                </div>
            </div>
            <div className={StepStyles.imageArea}>
                {/* <img src={AboutImage} className={StepStyles.AboutImage} alt="Delivery Guy"/> */}
            </div>
        </div>
    )
}

export default Step2
