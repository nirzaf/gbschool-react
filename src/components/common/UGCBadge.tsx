import React from 'react';

type CSSVar = React.CSSProperties & { [key: string]: string | number };

interface UGCBadgeProps {
  size?: string; // e.g. '12px', '16px'
  title?: string;
  subtitle?: string;
}

const UGCBadge: React.FC<UGCBadgeProps> = ({ size = '12px', title = 'GBS', subtitle = 'UGC APPROVED' }) => {
  const styleVars: CSSVar = { ['--badge-size']: size } as CSSVar;

  return (
    <div className="ugc-badge-wrapper" style={styleVars} aria-label="UGC approved badge">
      <div className="ugc-orbit-ring" aria-hidden="true" />

      <div className="ugc-shield-container">
        <div className="ugc-shield-border">
          <div className="ugc-shield-body">
            <div className="ugc-sheen" aria-hidden="true" />

            <svg className="ugc-laurels" viewBox="0 0 200 80" role="img" aria-label="Laurel wreath">
              <g>
                <path d="M30 60 C20 50, 18 40, 22 30 C24 25, 28 20, 34 18 C32 24, 30 30, 32 36 C34 42, 38 48, 44 52 C40 54, 36 57, 30 60" />
                <path d="M170 60 C160 50, 158 40, 162 30 C164 25, 168 20, 174 18 C172 24, 170 30, 172 36 C174 42, 178 48, 184 52 C180 54, 176 57, 170 60" />
              </g>
            </svg>

            <div className="ugc-content">
              <div className="ugc-title">{title}</div>
              <div className="ugc-subtitle">{subtitle}</div>
              <div className="ugc-star">★ ★ ★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGCBadge;

