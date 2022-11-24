import React, { useState } from 'react'
import { Theme, useTheme } from '../utils/theme-provider'

export default function Example() {
  const [theme, setTheme] = useTheme()
  const [enabled, setEnabled] = useState(theme !== 'light' ? true : false)

  const toggleTheme = () => {
    setEnabled(!enabled)
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    )
    console.log('TOGGLE')
  }

  return <button onClick={toggleTheme}>Darkmode</button>
}
