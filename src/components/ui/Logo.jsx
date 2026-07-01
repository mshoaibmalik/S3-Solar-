import React from 'react';

let _uid = Math.random().toString(36).slice(2, 8);

export function Logo({
  variant = 'lockup',
  size = 32,
  tone = 'brand',
  showTagline = false,
  className = '',
  style,
  ...rest
}) {
  const markFill = tone === 'mono-light' ? '#FFFFFF' : tone === 'mono-dark' ? '#14171C' : '#8B1E2D';
  const rayFill = tone === 'brand' ? `url(#s3gold_${_uid})` : (tone === 'mono-light' ? '#8B1E2D' : '#FFFFFF');
  const wordColor = tone === 'mono-light' ? '#FFFFFF' : '#14171C';
  const accentColor = tone === 'brand' ? '#CFA53C' : 'inherit';

  const Mark = (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" style={{ display: 'block', flex: '0 0 auto' }}>
      <defs>
        <linearGradient id={`s3gold_${_uid}`} x1="8" y1="40" x2="40" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E9D191" />
          <stop offset="0.55" stopColor="#CFA53C" />
          <stop offset="1" stopColor="#A67C1E" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="48" height="48" rx="11" fill={markFill} />
      <g transform="rotate(-38 24 24)">
        <rect x="7" y="27" width="15" height="5" rx="2.5" fill={rayFill} />
        <rect x="7" y="19" width="23" height="5" rx="2.5" fill={rayFill} />
        <rect x="7" y="11" width="31" height="5" rx="2.5" fill={rayFill} />
        <circle cx="40.5" cy="13.5" r="3.4" fill={tone === 'brand' ? '#F3E4BE' : rayFill} />
      </g>
    </svg>
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
      S<span style={{ color: accentColor }}>3</span>
      <span style={{ fontWeight: 500, marginLeft: '0.12em', letterSpacing: '-0.01em' }}>Solar</span>
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