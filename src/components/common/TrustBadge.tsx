import React from 'react';

interface TrustBadgeProps {
    name: string;
    logo?: string;
    description?: string;
}

/**
 * Trust badge component for displaying accreditations and partnerships
 * Used in navbar trust bar and footer
 */
const TrustBadge: React.FC<TrustBadgeProps> = ({ name, logo, description }) => {
    return (
        <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
            {logo && (
                <img
                    src={logo}
                    alt={`${name} logo`}
                    className="h-8 w-auto object-contain"
                />
            )}
            <div>
                <div className="text-sm font-semibold">{name}</div>
                {description && (
                    <div className="text-xs opacity-75">{description}</div>
                )}
            </div>
        </div>
    );
};

export default TrustBadge;
