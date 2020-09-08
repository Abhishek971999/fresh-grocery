import React from 'react'
import StepStyles from './Step2.module.css'
import Step2Img from '../../../images/step2.svg'

function Step2() {
    return (
        <div className={StepStyles.StepSection}>
             <div className={StepStyles.textBox}>
                <div className={StepStyles.textContainer}>
                    <h1 className={StepStyles.MainText}>
                        <span className={StepStyles.numberBox}>2</span>
                        Schedule and pay
                    </h1>
                    <p className={StepStyles.SubText}>Schedule the delivery at your convenient timeand pay digitally</p>
                </div>
            </div>
            <div className={StepStyles.imageArea}>
                <img src={Step2Img} className={StepStyles.Step2Img} alt="Step 2"/>
            </div>
        </div>
    )
}

export default Step2
