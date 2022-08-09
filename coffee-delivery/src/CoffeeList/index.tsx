import { Container, ContainerHeader, List } from './styles'
import { Buy, CoffeeCards } from './styles'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react';

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
import { UseCart } from '../hooks/UseCart';

const data = [
  {
    id: 1,
    image: coffeeTradicional,
    nameCoffee: 'Expresso Tradicional',
    type: 'Tradicional',
    value: 9.90,
    description: 'O tradicional café feito com agua quente e grãos moidos'
  },
  {
    id: 2,
    image: coffeeAmericano,
    nameCoffee: 'Expresso Americano',
    type: 'Tradicional',
    value: 9.90,
    description: 'Expresso diluído, menos intenso que o tradicional'
  },
  {
    id: 3,
    image: coffeeCremoso,
    nameCoffee: 'Expresso Cremoso',
    type: 'Tradicional',
    value: 9.90,
    description: 'Café expresso tradicional com espuma cremosa'
  },
  {
    id: 4,
    image: coffeeGelado,
    nameCoffee: 'Expresso Gelado',
    type: 'Tradicional',
    value: 9.90,
    description: 'Bebida preparada com café expresso e cubos de gelo'
  },
  {
    id: 5,
    image: coffeeLeite,
    nameCoffee: 'Café com Leite',
    type: 'Tradicional',
    value: 9.90,
    description: 'Meio a meio de expresso tradicional com leite vaporizado'
  },
  {
    id: 6,
    image: coffeeLatte,
    nameCoffee: 'Latte',
    type: 'Tradicional',
    value: 9.90,
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa'
  },
  {
    id: 7,
    image: coffeeCapuccino,
    nameCoffee: 'Capuccino',
    type: 'Tradicional',
    value: 9.90,
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma'
  },
  {
    id: 8,
    image: coffeeMacchiato,
    nameCoffee: 'Macchiato',
    type: 'Tradicional',
    value: 9.90,
    description: 'Café expresso misturado com um pouco de leite quente e espuma'
  },
  {
    id: 9,
    image: coffeeMocaccino,
    nameCoffee: 'Mocaccino',
    type: 'Tradicional',
    value: 9.90,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma'
  },
  {
    id: 10,
    image: coffeeChocolate,
    nameCoffee: 'Chocolate Quente',
    type: 'Tradicional',
    value: 9.90,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café'
  },
  {
    id: 11,
    image: coffeeCubano,
    nameCoffee: 'Cubano',
    type: 'Tradicional',
    value: 9.90,
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã'
  },
  {
    id: 12,
    image: coffeeHavaiano,
    nameCoffee: 'Havaiano',
    type: 'Tradicional',
    value: 9.90,
    description: 'Bebida adocicada preparada com café e leite de coco'
  },
  {
    id: 13,
    image: coffeeArabe,
    nameCoffee: 'Arabe',
    type: 'Tradicional',
    value: 9.90,
    description: 'Bebida preparada com grãos de café árabe e especiarias'
  },
  {
    id: 14,
    image: coffeeIrlandes,
    nameCoffee: 'Irlandês',
    type: 'Tradicional',
    value: 9.90,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly'
  }
]

interface PropsListCoffee {
  id: string;
  image: string;
  nameCoffee: string;
  type: string;
  value: number;
  description: string;
}


export function CoffeeList() {
  const [listCoffee, setListCoffees] = useState<PropsListCoffee[]>([]);
  const { addCoffee, cart } = UseCart();

  useEffect(() => {
    async function loadProducts() {

      data.map(product => ({
        ...product
      }))

      setListCoffees(data);
    }

    loadProducts();
  }, []);

  console.log(addCofee)

  function handleAddCoffee(id: number) {
    addCoffee(id);
  }

  return (
    <Container>
      <ContainerHeader>
        <h1>Nossos cafés</h1>
        <div>filtros</div>
      </ContainerHeader>
      <List>
        {data.map(coffees => (
          <CoffeeCards key={coffees.id}>
            <img src={coffees.image} alt="" />
            <title >{coffees.type}</title>
            <h2>{coffees.nameCoffee}</h2>
            <p>{coffees.description}</p>
            <Buy>
              <h2 className='value'>R$<p className='value2'>9,90</p></h2>
              <div>
                <Minus size={20} weight='fill' className='BtMenos' />
                <p>1</p>
                <Plus size={20} weight='fill' className='BtMais' />
                <div className='cart' >
                  <ShoppingCart size={20} weight='fill' />
                </div>
              </div>
            </Buy>
          </CoffeeCards>
        )
        )}

      </List>
    </Container>
  )
}