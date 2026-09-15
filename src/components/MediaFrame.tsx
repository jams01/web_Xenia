type Props = {
  src: string
  alt: string
  className?: string
  soft?: boolean
  /** Menos overlay: ideal para capturas de producto / dashboards Canva. */
  clear?: boolean
  loading?: 'eager' | 'lazy'
}

/** Foto con tratamiento DeepTech (brillo alto + overlay ligero). */
export function MediaFrame({
  src,
  alt,
  className = '',
  soft = false,
  clear = false,
  loading = 'lazy',
}: Props) {
  const tone = clear ? ' media-frame--clear' : soft ? ' media-frame--soft' : ''
  return (
    <div className={`media-frame${tone} ${className}`.trim()}>
      <img src={src} alt={alt} loading={loading} decoding="async" />
    </div>
  )
}
