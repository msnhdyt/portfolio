import { createContext, useState } from 'react'

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [notes, setNotes] = useState()

  return (
    <>
      <UserContext.Provider
        value={{
          notes,
          setNotes
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  )
}
