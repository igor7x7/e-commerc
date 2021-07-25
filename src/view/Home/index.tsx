import React, { useState, useEffect } from 'react'

import { Container } from './style'


import { Body } from './style'

import api from '../../services/api';

interface IProduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [ data, setData ] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data);
            }
        )
    }, []);

    const handleCart = ( index: number ) => {
        const productStore = JSON.stringify(data[index])
        localStorage.setItem(`@Produto-${index}`, productStore)
    }
    
    const sendForm = (index: any) => {
        const cadastroStore = JSON.stringify(data[index])
        localStorage.setItem(`@Cadastro-${index}`, cadastroStore)
    }


    return (
        <Body>
            <section>
                <div className="header-loja">NFT MARKETPLACE</div> 
            </section>
            <Container>
                <section>
                    { data.map( (prod, index) => (
                        <div className="product-content" key={prod.id}>
                        <img src={prod.photo} alt="Arte" width= "180" height="auto" />
                        <h4>{prod.name}</h4>
                        <span>{prod.description}</span>
                        <h6>$ {prod.price}</h6>
                        <button onClick={() => handleCart(index)}>Comprar</button>
                    </div>
                    ))}
                    <div className="cadastro">
                        
                        <div>Cadastre-se para receber todas nossas ofertas</div>
                        <div className="caixa">
                            
                            <div className="text-1">Cadastro</div>
                            { data.map( (form, index) => (
                                <div>
                                    <form>
                                        <input type="text" id="nome" placeholder="Seu nome" />                                
                                        <input type="text" id="email" placeholder="E-mail"/>                                
                                        <input type="text" id="fone" placeholder="Telefone" />
                                    </form>
                                    <form className="endereço">
                                        <p>Endereço:</p>
                                        <input className="rua" type="text" placeholder="Rua" />
                                        <input type="text" placeholder="Número" />
                                        <input type="text" placeholder="Complemento" />
                                        <input type="text" placeholder="Bairro" />
                                        <input type="text" placeholder="CEP" />
                                        <input onClick={() => sendForm(index)} id="form" className="button" type="submit" value="Cadastrar"/>
                                    </form>
                                </div>
                            )
                            )     
                            }
                        </div>  
                    </div>
                </section>       
            </Container>
        </Body>
       
    );

}

export default Home;