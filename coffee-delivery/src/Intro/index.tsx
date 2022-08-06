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
                    <tr>
                        <th>
                            <div>
                                <ShoppingCart size={20} weight="fill"/>
                                <p>Compra simples e segura</p>
                            </div>
                        </th>
                            
                        <th>
                            <div>
                                <Timer size={20} weight="fill"/>
                                <p>Entrega rápida e rastreada</p>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div>
                                <Package size={20} weight="fill"/>
                                <p>Embalagem mantém o café intacto</p>
                            </div>
                        </th>

                        <th>
                            <div>
                                <Coffee size={20} weight="fill"/>
                                <p>O café chega fresquinho até você</p>
                            </div>
                        </th>
                    </tr>
                </table>
            </ContainerIntro>
            <img src={coffee} alt="Imagem Copo Café" />
        </Container>
    )
}