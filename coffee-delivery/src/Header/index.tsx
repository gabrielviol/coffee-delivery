import { HeaderContainer, SideRight } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logoCoffee  from '../assets/logoCoffee.svg'

export function Header() {
    return(
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <SideRight>
                <div >
                    <MapPin size={20} weight="fill"/>
                    Porto Alegre, RS
                </div>
                <a href="/">
                    <ShoppingCart size={20} weight='fill'/>
                </a>
            </SideRight>
        </HeaderContainer>
    )
}