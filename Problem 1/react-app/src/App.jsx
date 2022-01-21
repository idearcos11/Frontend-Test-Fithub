import React from "react";
import  Profile  from "./components/Profile";
import Orders from "./components/Orders/Orders";
import styled from "styled-components";
import Toggle from "./components/Toggle";

function App() {
  return <React.Fragment>
    <Container>
      <div>
        <Profile />
        <Orders/>
      </div>
      <div>
        <Profile />
        <Orders empty={true}/>
      </div>
    </Container>
  </React.Fragment>;
}

export default App;


const Container = styled.div`
  display: flex;
  width: 100wh;
  justify-content: center;
  gap:100px;
`
