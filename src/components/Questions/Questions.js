import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCalculatorQuestions } from '../../features/calculatorQuestionsSlice'
import Question from '../Question/Question'

const questionDescriptions = {
    Q1: 'Presence of peritoneal, mesenteric or omental nodularity or irregular thickening, with or without ascites?', 
    Q2: 'Is the adnexal finding a follicle or corpus luteum or hemorrhagic cyst ≤ 3cm in a premenopausal woman?', 
    Q3: 'Is there fat associated with the lesion?', 
    Q3a: 'Is there a large amount of solid enhancing tissue?',
    Q4: 'Is there enhancing solid tissue associated with the adnexal lesion?',
    Q4a: 'What best describes the signal intensity of the solid tissue on T2 and high B-value diffusion weighted images?',
    Q4aa: 'What best describes the morphology of the solid tissue?',
    Q4ab: 'What best describes the enhancement of the solid tissue?',
    Q4b: 'Pick the cyst type:',
    Q4ba: 'Is there wall enhancement?',
    Q4baa: 'Is the fluid content simple or endometriotic?'
}

function Questions(props) {

    const [dropdown1, setDropdown1] = useState('select');
    const [dropdown2, setDropdown2] = useState('select');
    const [Q3a, setQ3a] = useState(false);
    const [Q4a, setQ4a] = useState(false);
    const [Q4aa, setQ4aa] = useState(false);
    const [Q4ab, setQ4ab] = useState(false);
    const [Q4b, setQ4b] = useState(false);
    const [Q4ba, setQ4ba] = useState(false);
    const [Q4baa, setQ4baa] = useState(false);
    
    const questions = useSelector(selectCalculatorQuestions);

    const resetDropdown = () => {
        setDropdown1('select');
        setDropdown2('select');
    }

    const changeDropdown1 = (e) => {
        setDropdown1(e.target.value);
    }

    useEffect(() => {
        if (props.resetting) {
            resetDropdown();
            props.setResetting(false);
        }
        if (questions.Q3 === true) {
            setQ3a(true)
        } else {
            setQ3a(false);
        }
        if (questions.Q4 === true) {
            setQ4a(true)
        } else {
            setQ4a(false);
        }
        if (questions.Q4 === false) {
            setQ4b(true);
        } else {
            setQ4b(false);
        }
        if (questions.Q4a === 'some') {
            setQ4aa(true);
            setQ4ab(true);
        } else {
            setQ4aa(false);
            setQ4ab(false);
        }
        if (questions.Q4b === true) {
            setQ4ba(true);
        } else {
            setQ4ba(false);
        }
        if (questions.Q4b === true) {
            setQ4ba(true);
        } else {
            setQ4ba(false);
        }
        if(questions.Q4ba === true) {
            setQ4baa(true);
        } else {
            setQ4baa(false);
        }
        if (questions.Q4 === false) {
            setQ4aa(false);
            setQ4ab(false);
        }
        if (questions.Q4 === true) {
            setQ4ba(false);
            setQ4baa(false);
        }
    }, [questions]);

    return (
        <div className='questions-wrapper'>
            <p className='questions-description'><i>Begin with Question 1 until an O-RADS MRI Risk Score is displayed. Press the reset button after each lesion to reset the calculator.</i></p>
            <Question number={'1'} description={questionDescriptions.Q1} shown={true}/>
            <Question number={'2'} description={questionDescriptions.Q2} shown={true}/>
            <Question number={'3'} description={questionDescriptions.Q3} shown={true}/>
            <Question number={'3a'} description={questionDescriptions.Q3a} shown={Q3a}/>
            <Question number={'4'} description={questionDescriptions.Q4} shown={true}/>
            <Question number={'4a'} description={questionDescriptions.Q4a} shown={Q4a} dropdown1={dropdown1} changeDropdown1={changeDropdown1}/>
            <p>*Solid Tissue: Enhancing papillary projection, nodule, irregular septation/wall, solid lesion. Note: Thin smooth septations are NOT solid tissue.</p>
            <Question number={'4ab'} description={questionDescriptions.Q4ab} shown={Q4ab} dropdown2={dropdown2} />
            <Question number={'4b'} description={questionDescriptions.Q4b} shown={Q4b}/>
            <Question number={'4ba'} description={questionDescriptions.Q4ba} shown={Q4ba}/>
            <Question number={'4baa'} description={questionDescriptions.Q4baa} shown={Q4baa}/>
            <div>{questions.Q1}</div>
        </div>
    )
}

export default Questions