import { Link } from 'react-router-dom'
import { UBICACION, WHATSAPP_LABEL, WHATSAPP_URL } from '../content/site'

export function SiteFooter() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie-grid">
          <div>
            <img className="logo-pie" src="/img/marca/xenia-group-lockup-senal.svg" alt="Xenia Group" width="174" height="30" />
            <p className="lema">Ciencia con los pies en la tierra.</p>
            <p style={{ marginTop: 8, fontSize: 15, maxWidth: '40ch' }}>
              Modelamiento e IA para agricultura, medio ambiente e hidrocarburos.
            </p>
          </div>
          <div>
            <h4>Xenia</h4>
            <ul>
              <li><Link to="/#tab-datos">Data y estadísticas</Link></li>
              <li><Link to="/#tab-traza">Trazabilidad y EUDR</Link></li>
              <li><Link to="/#tab-alertas">Alertas tempranas</Link></li>
              <li><Link to="/#tab-pred">Predicción</Link></li>
              <li><Link to="/#tab-geo">Agrogeofísica</Link></li>
            </ul>
          </div>
          <div>
            <h4>Teraval</h4>
            <ul>
              <li><Link to="/teraval#servicios">Servicios</Link></li>
              <li><Link to="/teraval#productos">Productos</Link></li>
              <li><Link to="/teraval#biofabrica">Biofábrica</Link></li>
              <li><Link to="/teraval#nosotros">Misión y valores</Link></li>
              <li><Link to="/teraval#historia">Trayectoria</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener">WhatsApp {WHATSAPP_LABEL}</a></li>
              <li><span style={{ fontSize: 15 }}>{UBICACION}</span></li>
            </ul>
          </div>
        </div>
        <div className="pie-base">
          <span className="firma">El territorio está hablando. Xenia ayuda a entenderlo.</span>
          <span>© {new Date().getFullYear()} Xenia Group · xeniagroup.co</span>
        </div>
      </div>
    </footer>
  )
}
