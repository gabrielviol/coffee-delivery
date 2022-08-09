import { Buy, CoffeeCards, Container, ContainerHeader, List } from './styles'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import coffeeTradicional from '../assets/coffeeTradicional.svg'

interface PropsListCoffee {
    image: string;
    nameCoffee: string;
    type: string;
    value: number;
    description: string;
}

export function CoffeeCard({ image, nameCoffee, type, value, description }: PropsListCoffee){
    return(
        <CoffeeCards>
            <img src={image} alt="" />
            <title>Tradicional</title>
            <h2>{nameCoffee}</h2>
            <p>O tradicional café feito com agua quente e grãos moidos</p>
            <Buy>
                <h2 className='value'>R$<p className='value2'>9,90</p></h2>
                <div>
                    <Minus size={20} weight='fill'/>
                        <p>1</p>
                    <Plus size={20} weight='fill'/>
                    <div className='cart'>    
                        <ShoppingCart size={20} weight='fill'/>
                    </div>
                </div>
            </Buy>
        </CoffeeCards>
    )
}
