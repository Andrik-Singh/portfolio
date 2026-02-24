
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import Skill from './components/Skill'

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Skill></Skill>
        <Project></Project>
      </main>
    </>
  )
}

export default App