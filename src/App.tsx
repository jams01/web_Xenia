import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { TeravalPage } from './pages/TeravalPage'

// Al cambiar de página: ir al ancla (#servicios…) o al inicio.
// Los anclas de pestañas (#tab-…) las resuelve PlatformTabs.
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash.startsWith('#tab-')) return
    const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (el) el.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teraval" element={<TeravalPage />} />
        {/* Compatibilidad con URLs del sitio estático y antiguas demos */}
        <Route path="/teraval.html" element={<Navigate to="/teraval" replace />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
