import React from 'react'

const UserContext = React.createContext('Codevolution' /* default value */)

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }