import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IcoMenu } from './Icons'

type Props = {
  variante?: 'orbita' | 'clara'
  marca: ReactNode
  inicio: string
  inicioLabel: string
  enlaces: ReactNode
  accion: ReactNode
}

export function SiteHeader({ variante = 'orbita', marca, inicio, inicioLabel, enlaces, accion }: Props) {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className={variante === 'clara' ? 'sitio-cabecera clara' : 'sitio-cabecera'} id="inicio">
      <div className="contenedor barra">
        <Link className="marca-enlace" to={inicio} aria-label={inicioLabel}>
          {marca}
        </Link>
        <nav
          className="nav"
          id="menu"
          data-abierto={abierto ? 'true' : 'false'}
          aria-label="Principal"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('a')) setAbierto(false)
          }}
        >
          {enlaces}
        </nav>
        <div className="acciones-cabecera">
          {accion}
          <button
            className="menu-boton"
            type="button"
            aria-controls="menu"
            aria-expanded={abierto}
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setAbierto((v) => !v)}
          >
            <IcoMenu />
          </button>
        </div>
      </div>
    </header>
  )
}
