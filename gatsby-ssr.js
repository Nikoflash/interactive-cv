const React = require("react")
const GlobalContextProvider = require("./src/context/globalContextProvider")
  .default

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
