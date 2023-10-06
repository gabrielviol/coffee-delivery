import { coffees } from "../../../../data/coffees";
import { CoffeeType } from "../../../../coffees";
import { CoffeeItem } from '../CoffeeItem';

import { ContainerHeader, Loading } from './styles'

export function CoffeeList() {
  return (
    <ContainerHeader>
      <h2>Nossos cafés</h2>
      {coffees.length === 0 && <Loading>Carregando cafés disponíveis...</Loading>}

      <div>
        {
          coffees && coffees.map((coffee: CoffeeType) => {
            return (
              <CoffeeItem
                key={coffee.id}
                coffee={coffee}
              />
            )
          })
        }
      </div>
    </ContainerHeader>
  )
}