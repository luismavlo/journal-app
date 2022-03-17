import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './Routers/AppRouter'
import { store } from './redux/store/store'

const JournalApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}

export default JournalApp