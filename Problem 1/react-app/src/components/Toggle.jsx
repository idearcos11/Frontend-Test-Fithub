import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Toggle() {

    const [value, setValue] = useState(false);
    const handleClick = () => {
        setValue(!value);
    };
 
    

    return(
        <Container onClick={handleClick} value={value}>
            <Circle value={value}/>
        </Container>
    )
}

export default Toggle;


const Container = styled.div`
  box-sizing: border-box;
  margin: 0 5px;
  width: 30px;
  height: 14px;
  border-radius: 12px;
  background-color: ${props => props.value ? "#31AEDE" : "#D3D3D3"};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 2px;
  transform: ${({ value }) => (value ? "translateX(14px)" : "translateX(0px)")};
  transition: all 0.2s ease-in-out;
`;