import React from "react"
import containerStyles from "./container.module.scss"
import Layout from './layout'

export default ({ children }) => (
  <Layout>
    <div className={containerStyles.container}>{children}</div>
  </Layout>
)