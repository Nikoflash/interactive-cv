import React from "react"
import GlobalContextProvider from "./src/context/globalContextProvider"
import Layout from './src/components/layout/layout'

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}