import React, {useRef, useState} from 'react';
import {SketchField, Tools} from 'react-sketch'
import {Alert, Button, Spinner} from 'react-bootstrap'
//import { saveAs } from 'file-saver'
import axios from 'axios';
import './Mnist.css'

const styles={
    draw: {
        margin : '0 auto',
        marginTop:'50px'
    }
}

export default function Mnist() {
    const apiAddress = process.env.REACT_APP_API

    const [send, setSend] = useState(false)
    const [error, setError] = useState(false)
    const [result, setResult] = useState()
    const sketch = useRef()

    const handleSubmit = () => {
        const canvas = sketch.current.toDataURL()
        console.log('e')
        console.log(sketch.current)
        console.log('e')
        //saveAs(canvas, 'digit.jpg') // save canvas as digit.jpg to the local computer
        sendData(canvas)
    }

    const handleReset = () => {
        sketch.current.clear()
        sketch.current._backgroundColor('black')
        setSend(false)
        setError(false)
        setResult(null)
    }

    const sendData = (c) => {
        console.log(c) // c is base64 data of the image

        const headers = {
            'Content-Type': 'application/json'
        }

        const fd = {
            image:c
        }
        
        axios.post(apiAddress+'/api/mnist', fd, {headers:headers})
        .then(res=>{
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
            {error && <Alert variant="danger">An Error Occured </Alert>}
            {send ? <Alert variant="info">Successfully saved for classification </Alert> : <Spinner animation="border" />}
            {result && <h3>Result is {result}</h3>}
            <SketchField
                ref={sketch}
                width= '80%'
                height='100vh'
                style={styles.draw}
                tool={Tools.Pencil}
                backgroundColor='black'
                lineColor='white'
                imageFormat='jpg'
                lineWidth={60}
            />
            <div className="mt-3">
                
                <Button onClick={handleSubmit} variant='primary'>Send</Button>
                <Button onClick={handleReset} variant='secondary'>Reset</Button>
            </div>
        </>
    );
}
