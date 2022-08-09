import { Buy, CoffeeCards } from './styles'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'


interface PropsListCoffee {
    image: string;
    nameCoffee: string;
    type: string;
    description: string;
}


export function CoffeeCard({ image, nameCoffee, type, description }: PropsListCoffee){
    return(
        <CoffeeCards>
            <img src={image} alt="" />
            <title>{type}</title>
            <h2>{nameCoffee}</h2>
            <p>{description}</p>
            <Buy>
                <h2 className='value'>R$<p className='value2'>9,90</p></h2>
                <div>
                    <Minus size={20} weight='fill' className='BtMenos'/>
                        <p>1</p>
                    <Plus size={20} weight='fill' className='BtMais'/>
                    <div className='cart'>    
                        <ShoppingCart size={20} weight='fill'/>
                    </div>
                </div>
            </Buy>
        </CoffeeCards>
    )
}
