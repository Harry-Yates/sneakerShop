import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    color: white;
    background-color: #6638f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

export default function Announcement() {
    return (
        <Container>
            A Special Deal Announcement Would go here
        </Container>
    )
}
