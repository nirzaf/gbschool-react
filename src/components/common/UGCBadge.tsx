import React from 'react';
import './UGCBadge.css';

/**
 * Animated UGC (University Grants Commission) badge
 * Uses CSS animations with colors from GBS logo (dark blue #001e60 and gold #d4af37)
 */
const UGCBadge: React.FC = () => {
    return (
        <div className="ugc-badge-container">
            <div className="ugc-badge">
                {/* Outer rotating ring */}
                <div className="ugc-ring"></div>

                {/* Inner shield shape */}
                <div className="ugc-shield">
                    {/* Top section with laurel */}
                    <div className="ugc-laurel">
                        <svg viewBox="0 0 60 60" className="laurel-svg">
                            {/* Left laurel branch */}
                            <path
                                d="M 15 30 Q 12 25, 10 20 Q 8 15, 10 10"
                                stroke="#d4af37"
                                strokeWidth="2"
                                fill="none"
                                className="laurel-left"
                            />
                            {/* Right laurel branch */}
                            <path
                                d="M 45 30 Q 48 25, 50 20 Q 52 15, 50 10"
                                stroke="#d4af37"
                                strokeWidth="2"
                                fill="none"
                                className="laurel-right"
                            />
                            {/* Center star */}
                            <polygon
                                points="30,12 32,18 38,18 33,22 35,28 30,24 25,28 27,22 22,18 28,18"
                                fill="#d4af37"
                                className="center-star"
                            />
                        </svg>
                    </div>

                    {/* UGC Text */}
                    <div className="ugc-text">
                        <span className="ugc-letters">UGC</span>
                        <span className="ugc-approved">APPROVED</span>
                    </div>
                </div>

                {/* Pulsing glow effect */}
                <div className="ugc-glow"></div>
            </div>
        </div>
    );
};

export default UGCBadge;
