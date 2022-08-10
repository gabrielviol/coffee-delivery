import { Counter, HeaderContainer, SideRight } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { Link, NavLink } from 'react-router-dom'

import logoCoffee  from '../../assets/logoCoffee.svg'

export function Header() {
    return(
        <HeaderContainer>
            <NavLink to='/'>
                <img src={logoCoffee} alt="" />
            </NavLink>

            <SideRight>
                <div >
                    <MapPin size={20} weight="fill"/>
                    <span>Valinhos, SP</span>
                </div>
                <Link to="/checkout">
                    <Counter>3</Counter>
                    <ShoppingCart size={20} weight='fill'/>
                </Link>

            </SideRight>
        </HeaderContainer>
    )
}