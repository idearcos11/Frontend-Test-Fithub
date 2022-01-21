import { Add } from '@material-ui/icons';
import styled from 'styled-components';


function Card({title, text}) {
  return(
      <Container>
          <h3>{title}</h3>
          <div className='add'>
              {text}
              <Add className='icon'/>
          </div>
      </Container>
  );
}

export default Card;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0 auto;
    gap:5px;
    width:260px;
    padding:5px;
    border-radius:5px;
    box-shadow: 0px 2px 12px -2px #E5E4E2;
    h3{
        font-size:20px;
        margin-left:5px;
        margin-bottom:-7px;
        text-transform: uppercase;
    }
    .add{
        height:50px;
        width:95%;
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:5px;
        border: dashed 1px #FE4517;
        color: #FE4517;
        cursor: pointer;
        font-size:20px;
        .icon{
            position: absolute;
            right:10px;
            font-size:16px;
        }
    }
`