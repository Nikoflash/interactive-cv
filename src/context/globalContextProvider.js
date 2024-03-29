import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: false,
  contactModal: false,
  emailSent: false
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: !state.theme,
      }
    }
    case "TOGGLE_CONTACT_MODAL": {
      return {
        ...state,
        contactModal: !state.contactModal
      }
    }
    case "TOGGLE_EMAIL_SENT": {
      return {
        ...state,
        emailSent: !state.emailSent
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider