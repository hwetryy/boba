import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

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
    cursor: pointer;
`
const Logo = styled('h3')`
    font-family: sans-serif;        
    background: transparent;
`

const ManiLinkim=styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: black;
    background-color: white;
`

function Navbar(){

    return(
        <Container>
            <ManiLinkim to={'/'}>Home</ManiLinkim>
            <Logo>ZEUS UI</Logo>
            <ManiLinkim to={"/profile"}>Profile</ManiLinkim>
        </Container>
    )
}

export default Navbar