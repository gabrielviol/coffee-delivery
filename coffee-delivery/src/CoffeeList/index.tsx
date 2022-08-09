import { Buy, Container, ContainerHeader, List } from './styles'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import coffeeTradicional from '../assets/coffeeTradicional.svg'
import { CoffeeCard } from './CoffeeCard'

const coffees = [
    {
      key: String,
      image: coffeeTradicional,
      nameCoffee: 'Espresso Tradicional',
      type: 'Tradicional',
      value: 9.90,
      description: 'O tradicional café feito com agua quente e grãos moidos'
    },
    {
      key: String,
      image: coffeeTradicional,
      nameCoffee: 'Espresso Tradicional 2',
      type: 'Tradicional',
      value: 9.90,
      description: 'O tradicional café feito com agua quente e grãos moidos'
    },
    {
      key: String,
      image: coffeeTradicional,
      nameCoffee: 'Espresso Tradicional 22',
      type: 'Tradicional',
      value: 9.90,
      description: 'O tradicional café feito com agua quente e grãos moidos'
    },
    {
      key: String,
      image: coffeeTradicional,
      nameCoffee: 'Espresso Tradicional 2222',
      type: 'Tradicional',
      value: 9.90,
      description: 'O tradicional café feito com agua quente e grãos moidos'
    },
    {
      key: String,
      image: coffeeTradicional,
      nameCoffee: 'Espresso Tradicional 233',
      type: 'Tradicional',
      value: 9.90,
      description: 'O tradicional café feito com agua quente e grãos moidos'
    }
  ]


export function CoffeeList () {
    return(
        <Container>
            <ContainerHeader>
                <h1>Nossos cafés</h1>
                <div>filtros</div>
            </ContainerHeader>
            <List>
            {coffees.map(coffees => {
          return(
            <CoffeeCard
              key={coffees.nameCoffee}
              image={coffees.image}
              nameCoffee={coffees.nameCoffee}
              type={coffees.type}
              value={coffees.value}
              description={coffees.description}

            />
          )
        })}
                
            </List>
        </Container>
    )
}