import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DemoPage } from './demos/DemoPage'
import { TeravalLanding } from './demos/TeravalLanding'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoPage />} />
        {/* Compatibilidad: antiguas URLs de demos → Futuro científico */}
        <Route path="/demo/scientific" element={<Navigate to="/" replace />} />
        <Route path="/demo/planetary" element={<Navigate to="/" replace />} />
        <Route path="/demo/industrial" element={<Navigate to="/" replace />} />
        <Route path="/teraval" element={<TeravalLanding />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
