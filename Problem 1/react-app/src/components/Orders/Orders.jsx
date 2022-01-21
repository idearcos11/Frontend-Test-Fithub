import React from 'react';
import styled from 'styled-components';
import user from '../../data';
import Order from './Order';
import Card from '../Card';
const {orders} = user;
const {full, none} = orders;

const NoOrders = () => {
    return(
        <NoOrdersContainer>
            <img src="https://www.gosst.io/sstweb/imagenes/logoEspera.png" />
            <div>
                <h3>No tienes ordernes</h3>
                <p>Al parecer no has hecho ninguna orden. Puedes buscar productos y hacer tu orden ahora.</p>
            </div>
        </NoOrdersContainer>
    )
}


function Orders({empty}) {
    let ordersToMap;

    if(!empty){
        ordersToMap = full;
    } else{
        ordersToMap = none;
    }

  return(
        <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
            <Container>
                <h3>ultimas ordernes</h3>
                {ordersToMap.length>0 && ordersToMap.map(order=><Order order={order} />)}
                {ordersToMap.length === 0 && <NoOrders />}  
            </Container>
            {ordersToMap.length === 0 && (
            <>
                <Card title="direcciones" text="Agregar una nueva direccion"/>
                <Card title="metodos de pago" text="Agregar pago"/>
            </>
            )}
        </div>

  );
}

export default Orders;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0 auto;
    gap:5px;
    width:260px;
    padding:5px;
    box-shadow: 0px 2px 12px -2px #E5E4E2;
    text-transform: uppercase;
    border-radius:5px;
    h3{
        font-size:20px;
        margin-left:5px;
        margin-bottom:-7px;
    }
`
const NoOrdersContainer = styled.div`
    display: flex;
    align-items: center;
    height:80px;
    div{
        margin: auto;
    }
    img{
        height:90%;
        margin: auto;
    }
    p{
        text-align: justify;
        line-height:0.75;
        padding:6px 3px;
        margin: auto;
        font-weight:300;
        text-transform: none;
    }
    h3{
        margin-left: 3px;
        text-transform: none;
    }
    
`