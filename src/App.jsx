import { TechProvider } from "./components/providers/TechContext"
import { UserProvider } from "./components/providers/UserContext"
import { RoutesMain } from "./routes/RoutesMain"


function App() {

  return (
    <>
      <UserProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </UserProvider>

    </>
  )
}

export default App
