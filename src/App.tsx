import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-slate-800 text-slate-200">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="h-32 w-32" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="h-32 w-32" alt="React logo" />
            </a>
          </div>
          <h1 className="text-5xl">Vite + React</h1>
          <h2 className="text-2xl">Another starter kit</h2>
        </div>
      </div>
    </>
  )
}

export default App
