import styled from  'styled-components';

export const Body = styled.body`

.header-loja{
    display: flex;
    height: 60px;
    width: 100%;
    background: #0F1926;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    padding-left: 150px;
    padding-top: 15px;

}`

export const Container = styled.div`
    width: 80%;
    margin: auto;
   
    
    section {
        height: 100%;
        width: 100%;
        background: #D2D9D6;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        

        .product-content{
            display: grid;
            font-family: 'Montserrat', sans-serif; 
            text-align: center;
            height: 360px;
            background: #0F1926;
            border-radius: 6px;
            padding: 10px;
            margin: 12px;
            color: white;
            
            span{
                font-size: 12px;
            }

            button{
                height: 25px;
                width: 100px;
                margin: auto;
                background: #D2D9D6;
                color: #0F1926;
                border: 1px solid #eee;
                border-radius: 20px;
                box-shadow: 1px 1px 1px #eee;
                text-shadow:none;
                transition: 0.2s;
            }

            button:hover{
                background: #404040;
                color: #fff;
                border: 1px solid #404040;
                border-radius: 20px;
                box-shadow: 1px 1px 1px #404040;
                text-shadow:none;
                cursor: pointer;
            }

        }
    }

    .cadastro{
        color: white;
        width: 100%;
        height: 100%;
        background: #404040;
        display: grid;
        text-align: center;
        padding: 40px;
        font-size: 48px;
        font-family: 'Bebas Neue', cursive;
    }
    .caixa{
        display: grid;
        width: 50%;
        height: auto;
        padding-bottom: 10px;
        background: #8C7961;
        margin: 20px auto;
        border-radius: 20px;       
    }
    .text-1{
        font-size: 36px;
        font-family: 'Bebas Neue', cursive;
        margin-top: 20px;
    }
    p{
        font-size: 28px;
        margin-top: 20px;
        padding: 0;
    }
    .button{
        height: 28px;
        width: 100px;
        margin: 10px auto;
        background: #D2D9D6;
        color: #0F1926;
        border: 1px solid #eee;
        border-radius: 20px;
        box-shadow: 1px 1px 1px #eee;
        text-shadow:none;
        transition: 0.2s;
    }

    .button:hover{
        background: #404040;
        color: #fff;
        border: 1px solid #404040;
        border-radius: 20px;
        box-shadow: 1px 1px 1px #404040;
        text-shadow:none;
        cursor: pointer;
    }

    input{
        width: 90%;
        height: 30px;
        border-radius: 12px;
        border: none;
        padding-left: 5px;
        outline: none;
    }
    .rua{
        width: 90%;
    }


`