import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Container, ContainerInfo } from './styles'

import image from '../../assets/image.svg'

export function Success() {
    return (
        <Container>
            <ContainerInfo>
                <h1>Uhu! Pedido confirmado</h1>
                <span>Agora é só aguardar que logo o café chegará até você</span>
                <div className='border'>
                    <div >
                        <a className='Map'>
                            <MapPin size={20} weight='fill' />
                        </a>
                        <p>Entrega em {}</p>
                    </div>

                    <div >
                        <a className='Timer'>
                            <Timer size={20} />
                        </a>
                        <p>Previsão de entrega <br/><span>20 min - 30 min</span></p>
                    </div>

                    <div >
                        <a className='Currency'>
                            <CurrencyDollar size={20} />
                        </a>
                        <p>Pagamento na entrega <br/><span>Cartão de crédito</span></p>
                    </div>
                </div>
            </ContainerInfo>
            <img src={image}/>
        </Container>
    )
}