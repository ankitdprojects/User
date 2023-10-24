import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BackIcon, MenuIcon } from '../../assets/SvgImage'
import { styles } from './styles'

const Header = () => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity>
      <View>
        <BackIcon />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View>
        <MenuIcon />
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default Header