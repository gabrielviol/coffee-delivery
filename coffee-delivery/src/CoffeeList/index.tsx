import { Container, ContainerHeader, List } from './styles'

import coffeeTradicional from '../assets/coffeeTradicional.svg'
import coffeeAmericano from '../assets/coffeeAmericano.svg'
import coffeeCremoso from '../assets/coffeeCremoso.svg'
import coffeeGelado from '../assets/coffeeGelado.svg'
import coffeeLeite from '../assets/coffeeLeite.svg'
import coffeeLatte from '../assets/coffeeLatte.svg'
import coffeeCapuccino from '../assets/coffeeCapuccino.svg'
import coffeeMacchiato from '../assets/coffeeMacchiato.svg'
import coffeeMocaccino from '../assets/coffeeMocaccino.svg'
import coffeeChocolate from '../assets/coffeeChocolate.svg'
import coffeeCubano from '../assets/coffeeCubano.svg'
import coffeeHavaiano from '../assets/coffeeHavaiano.svg'
import coffeeArabe from '../assets/coffeeArabe.svg'
import coffeeIrlandes from '../assets/coffeeIrlandes.svg'

import { CoffeeCard } from './CoffeeCard'

const coffees = [
    {
      key: String,
      image: coffeeTradicional,
      nameCoffee: 'Expresso Tradicional',
      type: 'Tradicional',
      value: 9.90,
      description: 'O tradicional café feito com agua quente e grãos moidos'
    },
    {
      key: String,
      image: coffeeAmericano,
      nameCoffee: 'Expresso Americano',
      type: 'Tradicional',
      value: 9.90,
      description: 'Expresso diluído, menos intenso que o tradicional'
    },
    {
      key: String,
      image: coffeeCremoso,
      nameCoffee: 'Expresso Cremoso',
      type: 'Tradicional',
      value: 9.90,
      description: 'Café expresso tradicional com espuma cremosa'
    },
    {
      key: String,
      image: coffeeGelado,
      nameCoffee: 'Expresso Gelado',
      type: 'Tradicional',
      value: 9.90,
      description: 'Bebida preparada com café expresso e cubos de gelo'
    },
    {
      key: String,
      image: coffeeLeite,
      nameCoffee: 'Café com Leite',
      type: 'Tradicional',
      value: 9.90,
      description: 'Meio a meio de expresso tradicional com leite vaporizado'
    },
    {
      key: String,
      image: coffeeLatte,
      nameCoffee: 'Latte',
      type: 'Tradicional',
      value: 9.90,
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa'
    },
    {
      key: String,
      image: coffeeCapuccino,
      nameCoffee: 'Capuccino',
      type: 'Tradicional',
      value: 9.90,
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma'
    },
    {
      key: String,
      image: coffeeMacchiato,
      nameCoffee: 'Macchiato',
      type: 'Tradicional',
      value: 9.90,
      description: 'Café expresso misturado com um pouco de leite quente e espuma'
    },
    {
      key: String,
      image: coffeeMocaccino,
      nameCoffee: 'Mocaccino',
      type: 'Tradicional',
      value: 9.90,
      description: 'Café expresso com calda de chocolate, pouco leite e espuma'
    },
    {
      key: String,
      image: coffeeChocolate,
      nameCoffee: 'Chocolate Quente',
      type: 'Tradicional',
      value: 9.90,
      description: 'Bebida feita com chocolate dissolvido no leite quente e café'
    },
    {
      key: String,
      image: coffeeCubano,
      nameCoffee: 'Cubano',
      type: 'Tradicional',
      value: 9.90,
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã'
    },
    {
      key: String,
      image: coffeeHavaiano,
      nameCoffee: 'Havaiano',
      type: 'Tradicional',
      value: 9.90,
      description: 'Bebida adocicada preparada com café e leite de coco'
    },
    {
      key: String,
      image: coffeeArabe,
      nameCoffee: 'Arabe',
      type: 'Tradicional',
      value: 9.90,
      description: 'Bebida preparada com grãos de café árabe e especiarias'
    },
    {
      key: String,
      image: coffeeIrlandes,
      nameCoffee: 'Irlandês',
      type: 'Tradicional',
      value: 9.90,
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly'
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
              description={coffees.description}

            />
          )
        })}
                
            </List>
        </Container>
    )
}