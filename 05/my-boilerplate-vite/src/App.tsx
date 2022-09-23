import { useState } from 'react'

import Credential from './components/Credential'

// O retorno fica implicito...
function App(): JSX.Element {

  // Você pode definir o tipo que o useState irá receber...
  const [count, setCount] = useState<number>(0)

  return (
    <>

      {count}

      <button
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>

      <Credential
        firstname="Willian"
        lastname='Sant Anna'
      />
    </>
  )
}

export default App
