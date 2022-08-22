import { Bank, CreditCard, Money } from 'phosphor-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { AddressInfo, useCart } from '../../../../hooks/useCart';

import {
  AddressContainer,
  AddressContent,
  AddressForm,
  AddressFormGroup,
  PaymentContainer,
  PaymentOptions
} from "./styles";

export function Address() {
  const { register, handleSubmit, watch } = useForm()

  const { addAddress, address } = useContext(useCart);

  function handleCreateAddress(address: any) {
    addAddress({
      cep: address.cep,
      rua: address.rua,
      numero: address.numero,
      cidade: address.cidade,
      complemento: address.complemento,
      pagamento: address.pagamento,
      uf: address.uf
    })

  }

  console.log(address)

  const cep = watch('cep')
  const rua = watch('rua')
  const city = watch('cidade')
  const number = watch('numero')
  const uf = watch('uf')
  const isSubmitDisabled = (!cep || !number || !rua || !city || !uf)

  return (
    <>
      <AddressContainer>
        <h1>Complete seu pedido</h1>

        <AddressContent>
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>

          <AddressForm onChange={handleSubmit(handleCreateAddress)}>
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
    </>
  );
}