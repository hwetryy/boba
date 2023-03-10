import React from "react";
import styled from 'styled-components'

const Container = styled('div')`
    background-color: white;
    width: 100%;
    height: 70px;
    border-bottom: 0.5px solid lightgrey;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Text = styled('div')`
    margin-left: 25px;
    background: white;
`
const Logo = styled('h3')`
    font-family: sans-serif;
    background: transparent;
    
`

function Navbar(){
    return(
        <Container>
            <Text>Home</Text>
            <Text>University</Text>
            <Text>Courses</Text>
            <Logo>ZEUS UI</Logo>
            <Text>Use cases</Text>
            <Text>Planes ↓</Text>
            <Text>Resources</Text>
        </Container>
    )
}

export default Navbar