import React, {useRef, useState} from 'react';
import {SketchField, Tools} from 'react-sketch'
import {Alert, Button} from 'react-bootstrap'
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
    const apiAddress = process.env.REACT_APP_API_TEST

    const [send, setSend] = useState(false)
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
        .catch(err=>console.log(err))
    }

    return ( 
        <>
            {send && <Alert variant="info">Successfully saved for classification </Alert>}
            {result && <h3>Result is {result}</h3>}
            <SketchField
                ref={sketch}
                width= '80%'
                height='80vh'
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
