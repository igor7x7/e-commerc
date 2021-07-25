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

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');

    function addNome(e: any) {
        setNome(e.target.value)
    }
    function addEmail(e: any) {
        setEmail(e.target.value)
    }
    function addFone(e: any) {
        setFone(e.target.value)
    }
    function addRua(e: any) {
        setRua(e.target.value)
    }
    function addNumero(e: any) {
        setNumero(e.target.value)
    }
    function addComplemento(e: any) {
        setComplemento(e.target.value)
    }
    function addBairro(e: any) {
        setBairro(e.target.value)
    }
    function addCep(e: any) {
        setCep(e.target.value)
    }
    
    const cliente ={
        nome: nome,
        email: email,
        fone: fone,
        rua: rua,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cep: cep,
    }
    function chamada(){
        const chamadaCliente = JSON.stringify(cliente)
        localStorage.setItem("cliente", chamadaCliente)
        
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
                                
                                    <form id="form">
                                        <input type="text" onChange={ e => addNome(e) } id="nome" placeholder="Seu nome" />                                
                                        <input type="text" onChange={ e => addEmail(e) } id="email" placeholder="E-mail"/>                                
                                        <input type="text" onChange={ e => addFone(e) } id="fone" placeholder="Telefone" />
                                        <p>Endereço:</p>
                                        <input className="rua" onChange={ e => addRua(e) } type="text" placeholder="Rua" />
                                        <input type="text" onChange={ e => addNumero(e) } id="numero" placeholder="Número" />
                                        <input type="text" onChange={ e => addComplemento(e) } id="complemento" placeholder="Complemento" />
                                        <input type="text" onChange={ e => addBairro(e) }id="bairro" placeholder="Bairro" />
                                        <input type="text" onChange={ e => addCep(e) } id="cep" placeholder="CEP" />
                                        <input className="button" onClick={ () => chamada()}  type="submit" value="Cadastrar"/>
                                    </form>
                            
                            </div>  
                        </div>
                    </section>       
                </Container>
       
            </Body>

            
    );

}

export default Home;