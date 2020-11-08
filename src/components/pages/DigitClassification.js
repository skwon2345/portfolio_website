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
                    This digit classification model uses keras digit datasets, which is composed of 60,000 data for training, and 10,000 data for testing, that are all hand-written digits.
                    <br/> In terms of the model algorithm, I compared several classification algorithm such as Logistic Regression, Decision Tree, Support Vector Machine(SVM), and Random Forest and chose SVM as my algorithm for this project.
                    <br/>
                    <br/> Comparison among these algorithms were executed by using K-Fold Cross Evaluation, and SVM got the highest accuracy score.
                    <br/> Hand written digits given by keras digit datasets are all 28 by 28 pixels data, so I need to shrink the size of image from users to 28 by 28 to predict what the digits are.
                    <br/> The data type of input from the sketch below is base64, so I need to resize the image to 28 by 28 2d image array then flatten them to 1d array, size of 784 (which is 28^2) for prediction.
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
                width= '20vh'
                height='20vh'
                style={styles.draw}
                tool={Tools.Pencil}
                backgroundColor='black'
                lineColor='white'
                imageFormat='jpg'
                lineWidth={5}
            />
            <div className="mt-3">
                <button onClick={handleSubmit}>Send</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className='_title'>
                Facts
            </div>
            <div className='_body'>
                <img className='img-39' src='/images/digit_classification_heatmap.png' alt='heatmap'/>
                <p>
                    The ratio between test data and train data is 2:8 and achieved 96% of predicting test data using this model. The heatmap above actually indicate how my model predict the test digits dataset.
                </p>
            </div>
        </>
    );
}
