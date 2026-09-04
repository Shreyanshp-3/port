import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import AI from './pages/AI.jsx'
import Contact from './pages/Contact.jsx'
import Design from './pages/Design.jsx'
import Development from './pages/Development.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import ProjectDetail from './projects/ProjectDetail.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="design" element={<Design />} />
        <Route path="development" element={<Development />} />
        <Route path="ai" element={<AI />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="design/projects/:slug" element={<ProjectDetail category="design" />} />
        <Route path="development/projects/:slug" element={<ProjectDetail category="development" />} />
        <Route path="ai/projects/:slug" element={<ProjectDetail category="ai" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
