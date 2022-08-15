import { NavLink } from 'react-router-dom'

import { ShoppingCart, MapPin } from 'phosphor-react'

import logoCoffee  from '../../assets/logoCoffee.svg'

import { Counter, HeaderContainer, Link, SideRight } from './styles'

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