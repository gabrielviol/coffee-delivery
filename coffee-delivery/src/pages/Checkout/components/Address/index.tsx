import { 
    AddressContainer, 
    AddressContent, 
    AddressForm, 
    AddressFormGroup 
} from "./styles";
import {
  } from "../../styles";

export function Address(){
    return (
      <AddressContainer>
        <h1>Complete seu pedido</h1>
  
        <AddressContent>
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
  
          <AddressForm>
            <AddressFormGroup>
              <input type="text" placeholder="CEP" required />
            </AddressFormGroup>
            <input type="text" placeholder="Rua" required />
            <AddressFormGroup>
              <input type="text" placeholder="Número" required />
              <input type="text" placeholder="Complemento" />
              <span>Opcional</span>
            </AddressFormGroup>
            <AddressFormGroup>
              <input type="text" placeholder="Cidade" required />
              <input type="text" placeholder="UF" required />
            </AddressFormGroup>
          </AddressForm>
        </AddressContent>
      </AddressContainer>
    );
  }