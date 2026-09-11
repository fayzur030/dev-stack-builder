import { Suspense } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import Banner from './components/home/Banner'
import { getTechnologies } from './services/getTechnologies'
import TechnologyList from './components/home/TechnologyList'
import Loading from './components/common/Loading'
import Footer from './components/common/Footer'

function App() {
  const technologies = getTechnologies()
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Suspense fallback={<Loading />}>
          <TechnologyList technologies={technologies} />
        </Suspense>
        <Footer />
      </main>
    </>
  )
}

export default App
