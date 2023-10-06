import { useContext, useState } from 'react';
import { AddressInfo, useCart } from '../../../../hooks/useCart';
import { useForm, useFormState } from 'react-hook-form'
import { formatPrice } from "../../../../util/format";
import { useNavigate } from 'react-router-dom';

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

type PaymentType = 'credito' | 'debito' | 'dinheiro'


export function Address() {
  const { items, addAddress, resetCart } = useContext(useCart);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      cep: '',
      rua: '',
      cidade: '',
      numero: '',
      uf: '',
      complemento: '',
      bairro: '',
      pagamento: 'credito' || 'debito' || 'dinheiro',
    }
  })

  const totalItens =
    items.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount
    }, 0)

  const frete = 3.5

  const total = frete + totalItens

  const navigate = useNavigate()


  function handleCreateAddress(address: any) {
    addAddress(
      address
    )
    navigate('/success')
    resetCart()
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

            <AddressForm id='form'>
              <AddressFormGroup >
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
              <AddressFormGroup >
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
                  placeholder="Bairro"
                  {...register('bairro')}
                />
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


              <PaymentContainer>
                <p>Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>

                <PaymentOptions  >
                  <label htmlFor='credito' {...register('pagamento')}>
                    <input type="radio" id="credito" name="pagamento" value='credito' />
                    <CreditCard />
                    Cartão de Crédito
                  </label>

                  <label htmlFor="debito" {...register('pagamento')}>
                    <input type="radio" id="debito" name="pagamento" value='debito' />
                    <Bank />
                    Cartão de Débito
                  </label>

                  <label htmlFor="dinheiro" {...register('pagamento')}>
                    <input type="radio" id="dinheiro" name="pagamento" value='dinheiro' />
                    <Money />
                    Dinheiro
                  </label>


                </PaymentOptions>
              </PaymentContainer>

            </AddressForm>

          </AddressContent>
        </AddressContainer>

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