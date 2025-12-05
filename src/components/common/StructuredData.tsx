import React from 'react';

interface StructuredDataProps {
    data: object;
}

/**
 * Component for rendering JSON-LD structured data for SEO
 * Used for Course, Organization, Breadcrumb, and FAQ schemas
 */
const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

export default StructuredData;
