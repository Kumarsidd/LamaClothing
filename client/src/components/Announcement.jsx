import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 3px;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal! Free shipping on orders over $50
    </Container>
  )
}

export default Announcement