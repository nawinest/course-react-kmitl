import React from 'react'
import PropTypes from 'prop-types'
import ListMenuItem from './ListMenuItem'

const MenuList = (props) => {
  const { items } = props
  const menuItems = items.map(item => <ListMenuItem key={item.title} title={item.title} link={item.link} />)
  return (
    <ul>
      {menuItems}
    </ul>
  )
}

MenuList.propTypes = {
  items: PropTypes.arrayOf(Object).isRequired,
}

export default MenuList
