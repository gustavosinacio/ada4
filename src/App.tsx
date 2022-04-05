import { ThemeProvider } from 'styled-components'

import { Button } from './atoms/Button'
import { theme } from './theme/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>This is Ada4</h1>
        <Button>my button</Button>
      </div>
    </ThemeProvider>
  )
}
