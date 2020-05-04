const React = require("react")
const Layout = require("./src/components/layout/layout")
const GlobalContextProvider = require("./src/context/globalContextProvider")
  .default


exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}