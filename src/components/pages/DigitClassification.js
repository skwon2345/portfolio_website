import React, {useRef, useState} from 'react';
import {SketchField, Tools} from 'react-sketch'
import {Alert, Button, Spinner} from 'react-bootstrap'
//import { saveAs } from 'file-saver'
import axios from 'axios';
import './DigitClassification.css'

const styles={
    draw: {
        margin : '0 auto',
        marginTop:'50px'
    }
}

const spanStyles={
    backgroundColor:'white'
}


export default function DigitClassification() {
    const apiAddress = process.env.REACT_APP_API

    const [send, setSend] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [error, setError] = useState(false)
    const [result, setResult] = useState()
    const sketch = useRef()

    const handleSubmit = () => {
        const canvas = sketch.current.toDataURL()
        setClicked(true)
        //saveAs(canvas, 'digit.jpg') // save canvas as digit.jpg to the local computer
        sendData(canvas)
    }

    const handleReset = () => {
        sketch.current.clear()
        sketch.current._backgroundColor('black')
        setSend(false)
        setError(false)
        setClicked(false)
        setResult(null)
    }

    const sendData = (c) => {
        // c is base64 data of the image
        setSend(false)
        setError(false)
        setResult(null)

        const headers = {
            'Content-Type': 'application/json'
        }

        const fd = {
            image:c
        }
        
        axios.post(apiAddress+'/api/digit-classification', fd, {headers:headers})
        .then(res=>{
            setClicked(false)
            setSend(true)
            setResult(res.data['success'])
        })
        .catch(err=>{
            setError(true)
            console.log(err)
        })
    }

    return ( 
        <>
            <div className='prj_title_mnist'><span style={spanStyles}>Digit Classification</span></div>
            <div className='_title'>Intro</div>
            <div className='_body'>
                <p>
                    Based on sklearn.datasets, I trained my machine learning model by using logistic regression. Digits dataset given by sklearn is composed of 1797 hand-written digits, and they are all 8 by 8 pixels data.
                    <br/>So using 'Digit Classification Model' below, I need to get input from user, and convert base64 file from the sketch by user, flatten them to 8 by 8 pixels data to predict the digit with my model. 
                </p>
            </div>
            <div className='_title'>
                Digit classification Model
            </div>
            <div className='_body'>
                <p>
                    Sketch any digit on the canvas below.
                </p>
            </div>
            {error && <Alert variant="danger">An Error Occured. Please try again. </Alert>}
            {!send && clicked &&  <h3>Loading...</h3>}
            {send && <Alert variant="info">Successfully saved for classification </Alert>}
            {result && <h3>Result is {result}</h3>}
            <SketchField
                ref={sketch}
                width= '35vh'
                height='35vh'
                style={styles.draw}
                tool={Tools.Pencil}
                backgroundColor='black'
                lineColor='white'
                imageFormat='jpg'
                lineWidth={20}
            />
            <div className="mt-3">
                <button onClick={handleSubmit}>Send</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className='_title'>
                Facts
            </div>
            <div className='_body'>
                <img src='/images/digit_classification_heatmap.png' width= '500px' height='350px' alt='heatmap'/>
                <p>
                    The ratio between test data and train data is 2:8 and achieved 96% of predicting test data using this model. The heatmap above actually indicate how my model predict the test digits dataset.
                </p>
            </div>
        </>
    );
}
