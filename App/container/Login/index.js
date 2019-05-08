import React from 'react'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import styles from './styles'
import { Avatar, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import useInput from './useInput'

const Login = () => {
  const {
    email,
    password,
    password_again,
    handlePassword,
    checkPassword,
    errorPass,
    handleRegister
  } = useInput()

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>注册</Text>
      <Text style={styles.toUs}>我是谁？</Text>
      <View horizontal={true} style={styles.avatar}>
        <Avatar
          rounded
          size="large"
          PlaceholderContent={<ActivityIndicator />}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
          }}
        />
        <Avatar
          rounded
          size="large"
          PlaceholderContent={<ActivityIndicator />}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
          }}
        />
        <Avatar
          rounded
          size="large"
          PlaceholderContent={<ActivityIndicator />}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
          }}
        />
        <Avatar
          rounded
          size="large"
          PlaceholderContent={<ActivityIndicator />}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
          }}
        />
      </View>

      <Input
        placeholder="输入您的邮箱"
        inputContainerStyle={styles.inputContainer}
        inputStyle={{
          color: '#fff'
        }}
        ref={email}
        leftIcon={<Icon style={styles.inputIcon} name="user" size={24} />}
      />
      <Input
        ref={password}
        onChangeText={handlePassword}
        placeholder="输入您的密码"
        inputContainerStyle={styles.inputContainer}
        // 密码框
        secureTextEntry={true}
        inputStyle={{
          color: '#fff'
        }}
        leftIcon={<Icon style={styles.inputIcon} name="key" size={24} />}
      />
      <Input
        ref={password_again}
        placeholder="再次输入您的密码"
        onChangeText={checkPassword}
        inputContainerStyle={styles.inputContainer}
        secureTextEntry={true}
        errorStyle={{ color: 'red' }}
        errorMessage={errorPass}
        inputStyle={{
          color: '#fff'
        }}
        leftIcon={<Icon style={styles.inputIcon} name="key" size={24} />}
      />
      <Button
        buttonStyle={{
          marginTop: 20,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 60,
          paddingRight: 60
        }}
        onPress={handleRegister}
        title="注册进入"
      />
    </View>
  )
}

Login.navigationOptions = {
  header: null
}

export default Login
