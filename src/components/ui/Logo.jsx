import React from 'react';
import logoImage from '../../assets/logo.png';

let _uid = Math.random().toString(36).slice(2, 8);

export function Logo({
  variant = 'lockup',
  size = 32,
  tone = 'brand',
  showTagline = false,
  showFullName = false,
  className = '',
  style,
  ...rest
}) {
  const wordColor = tone === 'mono-light' ? '#FFFFFF' : '#14171C';
  const accentColor = tone === 'brand' ? '#CFA53C' : 'inherit';

  const Mark = (
    <img
      src={logoImage}
      alt="Sazuddin Solar System (Pvt) Ltd"
      width={size}
      height={size}
      style={{ display: 'block', flex: '0 0 auto', objectFit: 'contain' }}
    />
  );

  if (variant === 'mark') {
    return <span className={`inline-flex ${className}`} style={style} {...rest}>{Mark}</span>;
  }

  const Word = (
    <span style={{
      fontFamily: 'Archivo, ui-sans-serif, system-ui, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      fontSize: size * 0.62,
      lineHeight: 1,
      color: wordColor,
      whiteSpace: 'nowrap',
    }}>
      {showFullName ? 'Sazuddin Solar (Pvt) Ltd' : <><span style={{ color: accentColor }}>S</span><span style={{ color: accentColor }}>3</span><span style={{ fontWeight: 500, marginLeft: '0.12em', letterSpacing: '-0.01em' }}>Solar</span></>}
    </span>
  );

  if (variant === 'wordmark') {
    return <span className={`inline-flex items-center ${className}`} style={style} {...rest}>{Word}</span>;
  }

  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: size * 0.34, ...style }} {...rest}>
      {Mark}
      <span className="inline-flex flex-col" style={{ gap: 2 }}>
        {Word}
        {showTagline && (
          <span style={{
            fontFamily: 'JetBrains Mono, ui-monospace, monospace',
            fontSize: Math.max(9, size * 0.24),
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#8B94A1',
          }}>Clean Power · Pakistan</span>
        )}
      </span>
    </span>
  );
}