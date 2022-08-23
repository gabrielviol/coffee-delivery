import { useContext, useState } from 'react';
import { AddressInfo, useCart } from '../../../../hooks/useCart';
import { useForm } from 'react-hook-form'
import { formatPrice } from "../../../../util/format";

import { CoffeeSummaryItem } from '../CoffeSummaryItem';
import { Bank, CreditCard, Money } from 'phosphor-react';

import {
  AddressContainer,
  AddressContent,
  AddressForm,
  AddressFormGroup,
  Container,
  Link,
  PaymentContainer,
  PaymentOptions,
  SummaryContainer,
  SummaryContent,
  SummaryTotal
} from "./styles";

export function Address() {
  const { items } = useContext(useCart);

  const { register, handleSubmit, watch } = useForm()

  const { addAddress, address } = useContext(useCart);

  const [upAddress, setUpAddress] = useState<AddressInfo[]>([]);



  const totalItens =
    items.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount
    }, 0)

  const frete = 3.5

  const total = frete + totalItens

  function handleChangeAddress(address: any){
    
    const attAddress = [...upAddress, address];
    setUpAddress(attAddress);
    console.log(attAddress)
  }

  function handleCreateAddress(address: any) {
    addAddress(
      address
    )
      console.log(address)
  }


  const cep = watch('cep')
  const rua = watch('rua')
  const city = watch('cidade')
  const number = watch('numero')
  const uf = watch('uf')
  const isSubmitDisabled = (!cep || !number || !rua || !city || !uf)

  return (
    <Container>
      <div>
      <AddressContainer>
        <h1>Complete seu pedido</h1>
        <AddressContent>
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
          <AddressForm onChange={handleSubmit(handleChangeAddress)}>
            <AddressFormGroup>
              <input
                type="text"
                placeholder="CEP"
                {...register('cep', { valueAsNumber: true })}
                required
              />
            </AddressFormGroup>
            <input
              type="text"
              placeholder="Rua"
              {...register('rua')}
              required
            />
            <AddressFormGroup>
              <input
                type="text"
                placeholder="Número"
                {...register('numero', { valueAsNumber: true })}
                required
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register('complemento')}
              />
              <span>Opcional</span>
            </AddressFormGroup>
            <AddressFormGroup>
              <input
                type="text"
                placeholder="Cidade"
                {...register('cidade')}
                required
              />
              <input
                type="text"
                placeholder="UF"
                {...register('uf')}
                required
              />
            </AddressFormGroup>
          </AddressForm>
        </AddressContent>
      </AddressContainer>
      <PaymentContainer>
        <p>Pagamento</p>
        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>

        <PaymentOptions >
          <button type="button">
            <CreditCard />
            Cartão de Crédito
          </button>

          <button type="button">
            <Bank />
            Cartão de Débito
          </button>

          <button type="button">
            <Money />
            Dinheiro
          </button>
        </PaymentOptions>
      </PaymentContainer>
      </div>
      <SummaryContainer>
        <h1>Cafés selecionados</h1>

        <SummaryContent>

          <CoffeeSummaryItem />

          <SummaryTotal >
            <div>
              <p>Total de Itens</p>
              <span>{formatPrice(totalItens)}</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>{formatPrice(frete)}</span>
            </div>

            <div>
              <h2>Total</h2>
              <h2>{formatPrice(total)}</h2>
            </div>

            <Link to="/success" aria-disabled={isSubmitDisabled} onClick={handleSubmit(handleCreateAddress)}>
              <p>
                Confirmar Pedido
              </p>
            </Link>
          </SummaryTotal>
        </SummaryContent>
      </SummaryContainer>
    </Container>
  );
}