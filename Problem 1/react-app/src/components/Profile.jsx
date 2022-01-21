import React from 'react';
import styled from 'styled-components';
import user from '../data';
import {ChevronLeft, EditOutlined, EmailOutlined, PhoneOutlined, CakeOutlined, PersonOutline } from '@material-ui/icons'  
import Toggle from './Toggle';


let formatPhoneNumber = (str) => {
    let cleaned = ('' + str).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
    return null
};


function Profile() {
  return (
  <Container>
    <TopIcons>
        <ChevronLeft className='icon'/>
        <EditOutlined className='icon'/>
    </TopIcons>
    
    <div className='user-info'>
        <h2 className='full-name'>{user.name} {user.lastName}</h2>
        <div><EmailOutlined className='icon'/>{user.email}</div>
        <div><PhoneOutlined className='icon'/>{user.countryCode} {formatPhoneNumber(user.phoneNumber)}</div>
        <div className='last-info'>
            <div><CakeOutlined className='icon'/>{user.dateOfBirth}</div>
            <div><PersonOutline className='icon'/>{user.gender}</div>
        </div>
        <div className="toggle">
            <div><Toggle className="top"/><h3>Recibir mensajes promocionales</h3></div>
            <div><Toggle className="bottom"/><h3>Recibir actualizaciones de pedidos por WhatsApp</h3></div>            
        </div>
    </div>
    <img className='profile-picture' src={user.profilePicture} />
    <Fitpoints>
        <span>fitpoints</span>
        <span>{user.fitpoints}</span>
    </Fitpoints>

  </Container>
  );
}

export default Profile;









// styles

const Container = styled.div`
    margin:30px auto 35px;
    height: 320px;
    width: 280px;
    background-color: #FE4517;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    .profile-picture{
        position: absolute;
        border-radius: 50%;
        object-fit:cover;
        height: 85px;
        width: 85px;
        top:20px;
        right: 0;
        left: 0;
        margin: 0 auto;
    }

    .user-info{
        color: #FFF;
        margin-top: 70px;
        width:100%;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        gap:2px;
        font-weight: 300;
        font-size:17px;

        div{
            align-items: center;
        }
        h2{
            margin: 0 auto;
            text-transform: capitalize;
        }
        
        .last-info{
            display:flex;
            div{
                flex:1
            }
        }
        .icon{
            margin-right:5px;
        }
        .toggle{
            position: relative;
            height:40px;
            width:100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap:5px;
            div{
                display: flex;
                align-items: center;
                h3{
                    margin-bottom: 0;
                    line-height: 0.75;
                    font-weight:300;
                    font-size:15px;
                }
            }
        }
    }
`
const Fitpoints = styled.div`
    position: absolute;
    background-color: #31AEDE;
    height: 60px;
    width:95%;
    bottom:-30px;
    right: 0;
    left: 0;
    margin: 0 auto;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:15px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    font-size:30px;
    span{
        margin-top:5px;
    }

`

const TopIcons = styled.div`
    display: flex;
    margin-top:15px;
    justify-content: space-between;
    padding: 0 15px;
    width:100%;
    color: #FFF;
    .icon{
        cursor: pointer;
    }   
`
