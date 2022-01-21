import React from 'react';
import styled from 'styled-components';
import user from '../../data';


const  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    
});

function colors(status){
    switch(status){
        case 'en camino':
            return {primary:"#31AEDE", secondary: "#DAF5FE"}
        case 'programado':
            return {primary:"#FE4517", secondary: "#FFF2EC"}
        case 'entregado':
            return {primary:"#73D372", secondary: "#E7FFE5"}
        default:
            return {primary:"#73D372", secondary: "#E7FFE5"}
    }
}

function Order({order}) {

  return ((
    <Container>
        <Top bg={order.status} titles={order.status}>
            <div className='status'>{order.status}</div>
            <div className='order-id'>
                <p>n° de pedido </p>
                <p className='id'>{order.id}</p>
            </div>
        </Top>      
        <Bottom>
        
            <div className='img-div'>
                <img src={order.img} />
            </div>
            <div className='order-info'>
                <h3>{order.item}</h3>
                <p>{order.amount} productos</p>
                <h2 className='total'>{formatter.format(order.total)}</h2>
            </div>
        </Bottom>      
    </Container>));
}

export default Order;








//styles

const Container = styled.div`
    margin: 0 auto;
    height: 120px;
    width: 250px;
    border-radius:8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0px 2px 12px -2px #E5E4E2;
`
const Top = styled.div`
    background-color: #fff;
    display: flex;
    height:30%;
    text-transform: uppercase;
    background-color: ${props=>colors(props.bg).secondary};
    color: ${props=>colors(props.bg).primary};
    font-weight: bold;
    padding:5px;
    justify-content: space-between;

    .status{
        margin: auto 5px;
    }
    p{
        margin-bottom:0;
        line-height:0.75;
        align-items: center;
        padding-bottom:0;
    }
    .order-id{
        display:flex;
        flex-direction: column;
        justify-content: center;
        margin-right:5px;
        .id{
            font-weight:300;
            color:#000;
            margin: 0 auto;
        }
    }
`
const Bottom = styled.div`
    display: flex;
    height:70%;
    position: relative;
    .img-div{
        flex:1;
        height:100%;
        display: flex;
        align-items: center;
        img{
            width:80px;
            height:90%;
            object-fit: cover;
            margin-left:5px;
            border-radius:2px;
        }
    }
    .order-info{
        margin-left:5px;
        line-height:0.75;
        flex:3;
        padding-top:6px;
        h3 {
            font-size:20px;
        }
        h3, p {
            text-transform: capitalize;
            margin-bottom:0;
        }
        p{
            color: #C0C0C0;
            margin-left:5px;

        }
        .total{
            position: absolute;
            bottom: 10px;
            right: 8px;
            margin: -15px auto;
            font-weight:300;
            font-size:25px;
        }
    }
`
