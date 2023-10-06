import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, ContainerInfo } from './styles'

import image from '../../assets/image.svg'
import { useContext } from 'react';
import { AddressInfo, useCart } from '../../hooks/useCart';

export function Success() {
    const { address } = useContext(useCart);
    const ultimo = address.slice(-1)
    console.log(ultimo)


    return (
        <Container>
            <>
                {ultimo.map(info => {
                    return (
                        <ContainerInfo key={info.cep}>
                            <h1>Uhu! Pedido confirmado</h1>
                            <span>Agora é só aguardar que logo o café chegará até você</span>
                            <div className='border' key={info.cep}>
                                <div >
                                    <a className='Map'>
                                        <MapPin size={20} weight='fill' />
                                    </a>
                                    <p>Entrega em <span>{info.rua}, {info.numero}</span> <br /> {info.bairro} - {info.cidade}, {info.uf}</p>
                                    
                                </div>

                                <div >
                                    <a className='Timer'>
                                        <Timer size={20} />
                                    </a>
                                    <p>Previsão de entrega <br /><span>20 min - 30 min</span></p>
                                </div>

                                <div >
                                    <a className='Currency'>
                                        <CurrencyDollar size={20} />
                                    </a>
                                    <p>Pagamento na entrega <br />
                                    <span>
                                        {info.pagamento === 'credito' ? 'Cartão de crédito' : null}
                                        {info.pagamento === 'debito' ? 'Cartão de debito' : null}
                                        {info.pagamento === 'dinheiro' ? 'Dinheiro' : null}
                                    </span></p> 
                                    
                                </div>
                            </div>
                        </ContainerInfo>
                    )
                })}
            </>
            <img src={image} />
        </Container>
    )
}