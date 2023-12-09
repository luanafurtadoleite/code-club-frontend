import styles from 'styled-components'
import Background from './assets/background.svg'


export const Container = styles.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    
`;

export const Image = styles.img`
    margin-top: 30px;
    
`;

export const ContainerItens = styles.div`
    background: linear-gradient(157.44deg,
        rgba(255, 255, 255, 0.6) 0,84%,
        rgba(255, 255, 255, 0.6) 0,85%,
        rgba(255, 255, 255, 0.15) 100%
        );
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    

`;

export const H1 = styles.h1`
    color: #FFFFFF;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line height: 40px;
    text-align: Center;
    margin-bottom: 80px;

`;

export const InputLabel = styles.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line height: 22px;
    color: #FFFFFF;
    margin-left: 25px
    margin-bottom: 34px;
`;

export const Input = styles.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    Width: 342px;
    Height: 58px;
    padding-left: 25px;
    margin-bottom: 56px;

    border: none;
    outline: none;

    color:#FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line height: 28px;

`;

export const Button = styles.button`
    background-color: #000000;
    color: #FFFFFF;
     width: 342px;
    height: 74px;
    border-radius: 14px;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line height: 28px;
    margin-top: 132px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
  
`;

export const User = styles.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
   
    border: none;
    outline: none;

    Width: 342px;
    Height: 58px;

    p{
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line height: 28px;

        color:#FFFFFF;
    }

    button{
        background: none;
        border: none;
        cursor:pointer;
    }

`;


