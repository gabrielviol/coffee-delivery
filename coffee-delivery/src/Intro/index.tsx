import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { Container, ContainerIntro } from "./styles";
import coffee from '../assets/coffee.svg'

export function Intro() {
    return(
        <Container>
            <ContainerIntro>
                <section>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </section>
                <table>
                    <tbody>
                            <tr>
                                <th>
                                    <div>
                                        <a className='Cart'>
                                            <ShoppingCart size={20} weight="fill"/>
                                        </a>
                                        <p>Compra simples e segura</p>
                                    </div>
                                </th>
                                    
                                <th>
                                    <div>
                                        <a className='Timer'>
                                            <Timer size={20} weight="fill"/>
                                        </a>
                                        <p>Entrega rápida e rastreada</p>
                                    </div>
                                </th>
                            </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>
                                <div>
                                    <a className='Package'>
                                        <Package size={20} weight="fill"/>
                                    </a>
                                    <p>Embalagem mantém o café intacto</p>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <a className='Coffee'>
                                        <Coffee size={20} weight="fill"/>
                                    </a>
                                    <p>O café chega fresquinho até você</p>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </ContainerIntro>
            <img src={coffee} alt="Imagem Copo Café" />
        </Container>
    )
}