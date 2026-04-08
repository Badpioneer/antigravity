import { useState } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center mesh-gradient animate-mesh">
      <Navbar />
      
      {/* Glow effect in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="relative z-10 max-w-4xl w-full px-6 text-center space-y-8 animate-in fade-in zoom-in duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 backdrop-blur-sm mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next Generation Platform
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white">
          Build faster with <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
            Intelligent design
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
          The ultimate framework for creating high-performance web applications. 
          Combine the power of React with the elegance of Tailwind CSS v4.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => setCount((c) => c + 1)}
            className="w-full sm:w-auto min-w-[200px]"
          >
            Start Building Free
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            Watch Demo
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setCount(0)}
            className="w-full sm:w-auto min-w-[120px] !bg-red-500/10 !border-red-500/20 !text-red-400 hover:!bg-red-500/20"
          >
            Reset
          </Button>
        </div>

        <div className="pt-12 flex items-center justify-center gap-8 text-gray-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <span>4.9/5 Rating</span>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div>Trusted by 10k+ users</div>
        </div>
      </main>

      {/* Counter indicator */}
      <div className="fixed bottom-8 right-8 z-50 animate-bounce">
        <div className="px-4 py-2 bg-indigo-500/20 backdrop-blur-xl border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-mono whitespace-nowrap">
          Click Count: {count}
        </div>
      </div>
    </div>
  )
}

export default App
