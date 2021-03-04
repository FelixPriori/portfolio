import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import {ReactComponent as BurgerMenu} from '../images/burger-menu.svg'

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  return (
    <NavbarWrapper>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="left">
        <CustomToggle>
          <BurgerMenu />
        </CustomToggle>
        <DropdownMenu>
          <CustomItem tag={Link} to="/">
            Home
          </CustomItem>

          <CustomItem tag={Link} to="/shoppies">
            Shoppies
          </CustomItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 1em;
  height: 4em;
`
const CustomToggle = styled(DropdownToggle)`
  background-color: #81a1c1;
  border: 1px solid #81a1c1;

  svg {
    height: 36px;
    width: 36px;
    fill: white;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: #81a1c1;
    border: 1px solid #81a1c1;
  }
`

const CustomItem = styled(DropdownItem)`
  &:hover {
    background-color: #81a1c1;
    color: white;
  }
`
