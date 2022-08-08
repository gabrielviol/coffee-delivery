import { Buy, CoffeeCard, Container, ContainerHeader, List } from './styles'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import coffeeTradicional from '../assets/coffeeTradicional.svg'

export function CoffeeList () {
    return(
        <Container>
            <ContainerHeader>
                <h1>Nossos cafés</h1>
                <div>filtros</div>
            </ContainerHeader>
            <List>
                <CoffeeCard>
                    <img src={coffeeTradicional} alt="" />
                    <title>Tradicional</title>
                    <h2>Espresso Tradicional</h2>
                    <p>O tradicional café feito com agua quente e grãos moidos</p>
                    <Buy>
                        <p>R$<h2>9,90</h2></p>
                        <div>
                            <Minus size={20} weight='fill'/>
                                <p>1</p>
                            <Plus size={20} weight='fill'/>
                            <div className='cart'>    
                                <ShoppingCart size={20} weight='fill'/>
                            </div>
                        </div>
                    </Buy>
                </CoffeeCard>
                <CoffeeCard>
                    <img src={coffeeTradicional} alt="" />
                    <title>Tradicional</title>
                    <h2>Espresso Tradicional</h2>
                    <p>O tradicional café feito com agua quente e grãos moidos</p>
                    <Buy>
                        <p>R$<h2>9,90</h2></p>                        
                        <div>
                            <Minus size={20} weight='fill'/>
                                <p>1</p>
                            <Plus size={20} weight='fill'/>
                            <div className='cart'>    
                                <ShoppingCart size={20} weight='fill'/>
                            </div>
                        </div>
                    </Buy>
                </CoffeeCard>
                <CoffeeCard>
                    <img src={coffeeTradicional} alt="" />
                    <title>Tradicional</title>
                    <h2>Espresso Tradicional</h2>
                    <p>O tradicional café feito com agua quente e grãos moidos</p>
                    <Buy>
                        <p>R$<h2>9,90</h2></p>
                        <div>
                            <Minus size={20} weight='fill'/>
                                <p>1</p>
                            <Plus size={20} weight='fill'/>
                            <div className='cart'>    
                                <ShoppingCart size={20} weight='fill'/>
                            </div>
                        </div>
                    </Buy>
                </CoffeeCard>
                <CoffeeCard>
                    <img src={coffeeTradicional} alt="" />
                    <title>Tradicional</title>
                    <h2>Espresso Tradicional</h2>
                    <p>O tradicional café feito com agua quente e grãos moidos</p>
                    <Buy>
                        <p>R$<h2>9,90</h2></p>
                        <div>
                            <Minus size={20} weight='fill'/>
                                <p>1</p>
                            <Plus size={20} weight='fill'/>
                            <div className='cart'>    
                                <ShoppingCart size={20} weight='fill'/>
                            </div>
                        </div>
                    </Buy>
                </CoffeeCard>
                <CoffeeCard>
                    <img src={coffeeTradicional} alt="" />
                    <title>Tradicional</title>
                    <h2>Espresso Tradicional</h2>
                    <p>O tradicional café feito com agua quente e grãos moidos</p>
                    <Buy>
                        <p>R$<h2>9,90</h2></p>
                        <div>
                            <Minus size={20} weight='fill'/>
                                <p>1</p>
                            <Plus size={20} weight='fill'/>
                            <div className='cart'>    
                                <ShoppingCart size={20} weight='fill'/>
                            </div>
                        </div>
                    </Buy>
                </CoffeeCard>
                
            </List>
        </Container>
    )
}