// import { useState } from 'react'

// import Page from './Pages/Page'
// import Navbar from './Components/Navbar/Navbar'
// import Smoothscroll from './Components/SmoothScroll/SmoothFollower'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Smoothscroll/>
//      <Navbar/>
//      <Page/>
//     </>
//   )
// }

// export default App

// import { useState } from 'react'

// import Page from './Pages/Page'
// import Navbar from './Components/Navbar/Navbar'
// import Smoothscroll from './Components/SmoothScroll/SmoothFollower'
// import Particles from './Components/Particles/Particles' // 👈 Make sure the path is correct

// import Loader from "./Components/Loader /Loader";

// function App() {
//   const [count, setCount] = useState(0)

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000); // 3 sec loader

//     return () => clearTimeout(timer); // cleanup timer
//   }, []);


//   return (
      
//     <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      
//       {/* 🔵 Background Particles */}
//       <div
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           zIndex: -1,
//         }}
//       >
//         <Particles
//           particleColors={['#4385ff', '#000000']}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>

//       {/* 🔘 Foreground Content */}
//       <div style={{ position: 'relative', zIndex: 1 }}>
//       <Loader/>
//         <Smoothscroll />
//         <Navbar />
//         <Page />
//       </div>

//     </div>
//   )
// }

// export default App

import { useState, useEffect } from 'react'

import Page from './Pages/Page'
import Navbar from './Components/Navbar/Navbar'
import Smoothscroll from './Components/SmoothScroll/SmoothFollower'
import Particles from './Components/Particles/Particles' // Check path
import Loader from './Components/Loader /Loader'           // Check path, no extra space

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000) // 3 seconds loader

    return () => clearTimeout(timer) // cleanup timer on unmount
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* 🔵 Background Particles */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      >
        <Particles
          particleColors={['#4385ff', '#000000']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* 🔘 Foreground Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Smoothscroll />
            <Navbar />
            <Page />
          </>
        )}
      </div>
    </div>
  )
}

export default App
