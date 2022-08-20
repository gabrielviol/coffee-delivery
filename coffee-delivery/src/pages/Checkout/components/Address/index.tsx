import { useForm } from 'react-hook-form'

import {
  AddressContainer,
  AddressContent,
  AddressForm,
  AddressFormGroup
} from "./styles";

export function Address() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateAdress(data: any){
    console.log(data)
  }
  
  const cep = watch('cep')
  const rua = watch('rua')
  const city = watch('cidade')
  const number = watch('numero')
  const uf = watch('uf')
  const isSubmitDisabled = (!cep || !number || !rua || !city || !uf)

  return (
    <AddressContainer>
      <h1>Complete seu pedido</h1>

      <AddressContent>
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>

        <AddressForm onChange={handleSubmit(handleCreateAdress)}>
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
  );
}