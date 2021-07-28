import React, { useState, useEffect } from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { htmlFontSize } from './styles/base'
import { color } from './styles/color'
import { textTheme } from './styles/textTheme'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Detail from './Pages/Detail/Detail'

function App() {
  const theme = extendTheme({
    ...textTheme,
    styles: {
      global: {
        'html,body': {
          fontSize: [htmlFontSize * 0.75, htmlFontSize, htmlFontSize * 1.25],
          backgroundColor: color.antique,
        },
      },
    },
  })

  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </>
  )
}

export default App
