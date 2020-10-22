import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
    background-color: #3949ab;
    color: white;
`
function clickMe() {
    alert('hello')
}

const SignUp = () => {
    return (
        <div style={{
            display:'flex',
            justifyContent:'center', 
            alignItems:'center', 
            height:'90vh'}}
        >
            <Button onClick={clickMe}>
                Button1
            </Button>
            <Button onClick={clickMe}>
                Button2
            </Button>
            <Button onClick={clickMe}>
                Button3
            </Button>
            <Button onClick={clickMe}>
                Button4
            </Button>
        </div>
    );
}

export default SignUp
