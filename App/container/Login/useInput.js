import React, { useEffect, useState, useRef } from 'react'

const useInput = () => {
  const email = useRef()
  const password = useRef()
  const password_again = useRef()
  // 密码
  const [_password, _setPassword] = useState()
  // 密码不一致错误信息
  const [errorPass, setErrorPass] = useState('')
  // 设置密码
  const handlePassword = e => _setPassword(e)
  // 检测密码是否正确
  const checkPassword = e =>
    setErrorPass(e !== _password ? '请检查两次密码是否一致' : '')
  // 注册
  const handleRegister = () => {
    if (errorPass !== '') return
  }
  return {
    email,
    password,
    password_again,
    handlePassword,
    checkPassword,
    errorPass,
    handleRegister
  }
}

export default useInput
