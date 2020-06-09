import React, {useContext} from "react"
import styles from './index.module.scss'
import themes from '../layouts/themes.module.scss'
import { Breakpoint, BreakpointProvider } from 'react-socks'
import IndexDesktop from '../containers/desktop/index'
import IndexMobile from '../containers/mobile/index'
import {GlobalStateContext} from '../context/globalContextProvider'
import Header from '../layouts/header'
import ContactModal from '../components/contact/indexDesktop'

export default () => {
  const theme = useContext(GlobalStateContext).theme

  return (
    <BreakpointProvider>
      <Breakpoint className={`${styles.breakpoint} ${theme ? themes.themeDesktopLight : themes.themeDesktopDark}`} customQuery="(min-width: 992px)">
        <Header />
        <ContactModal />
        <IndexDesktop />
      </Breakpoint>
      <Breakpoint className={styles.breakpoint} customQuery="(max-width: 991px)">
        <IndexMobile />
      </Breakpoint>
    </BreakpointProvider>
  )
}
