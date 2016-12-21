import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import t from '../lib/LocaleStrings'

import PasswordValidation from './Password/PasswordValidation/PasswordValidation.ui'

import { Actions } from 'react-native-router-flux'
import appTheme from '../../Themes/appTheme'
class NavigationBar extends Component {

  checkPasswordStateOption = () => {
    if (this.props.scene === 'password' && this.props.passwordState) {
      return (
        <PasswordValidation />
      )
    } else {
      return null
    }
  }

  checkPasswordStateStyle = () => {
    if (this.props.scene === 'password' && this.props.passwordState) {
      return {height: 120}
    } else {
      return {height: 60}
    }
  }

  checkBackText = () => {
    switch (this.props.scene) {
      case 'username':
        return t('string_capitalize_exit')

      case 'cameraNotification':
        return ''

      case 'contactNotification':
        return ''

      default:
        return t('string_capitalize_back')
    }
  }

  render () {
    return (
      <View style={[ style.container, this.checkPasswordStateStyle() ]}>
        <View style={style.navigationBarContainer}>
          <View style={style.navigationContainer}>
            <TouchableHighlight onPress={Actions.pop}>
              <Text style={style.text}>{ this.checkBackText() }</Text>
            </TouchableHighlight>
            <Text style={[ style.text, style.title ]} > { this.props.title || '' } </Text>
            <Text style={style.text} />
          </View>
          { this.checkPasswordStateOption() }
        </View>
      </View>
    )
  }

}

const style = StyleSheet.create({

  container: {
    backgroundColor: '#2291CF'
  },

  navigationBarContainer: {
    flex: 1
  },

  navigationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2291CF'
  },

  text: {
    marginLeft: 10,
    marginRight: 10,
    color: '#FFF',
    fontSize: 20,
    width: 50,
    fontFamily: appTheme.fontFamily
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    flex: 1,
    fontFamily: appTheme.fontFamily
  }
})

export default connect(state => ({

  route: state.route,
  passwordState: state.password.inputState,
  scene: state.routes.scene.sceneKey,
  title: state.routes.scene.title

}))(NavigationBar)
