import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
