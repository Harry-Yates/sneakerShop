import styled from "styled-components"
import { mobile } from "../responsive.js"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.unsplash.com/photo-1575939238474-c8ada13b2724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h2`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Aggreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='name'></Input>
                    <Input placeholder='last name'></Input>
                    <Input placeholder='username'></Input>
                    <Input placeholder='email'></Input>
                    <Input placeholder='password'></Input>
                    <Input placeholder='confirm password'></Input>
                    <Aggreement>
                        By creating an account, I consent to the
                        processing of my personal data in accordacne
                        with teh <b>PRIVACY POLICY</b>
                    </Aggreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
