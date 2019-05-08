import React, { useState } from 'react'
import { ThemeProvider } from 'react-native-elements'
import AppContainer from './router'

export default function App() {
  const [theme, setTheme] = useState({
    colors: {
      // primary: 'rgb(41,48,70)'
      // secondary;
      // grey0;
      // grey1;
      // grey2;
      // grey3;
      // grey4;
      // grey5;
      // greyOutline;
      // searchBg;
      // success;
      // error;
      // warning;
      // divider;
      // platform: {
      //   ios: {
      //     primary;
      //     secondary;
      //     success;
      //     error;
      //     warning;
      //   };
      //   android: {
      //     // Same as ios
      //   };
      // };
    }
  })

  return (
    <ThemeProvider style={{ flex: 1 }} theme={theme}>
      <AppContainer />
    </ThemeProvider>
  )
}
