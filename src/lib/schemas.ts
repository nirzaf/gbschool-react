/**
 * Schema generators for structured data (JSON-LD)
 * Used for SEO and rich snippets in search results
 */

interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    rating?: number;
    students?: number;
    image?: string;
    fee_lkr?: number;
}

/**
 * Generate Course schema for individual course pages
 */
export const generateCourseSchema = (course: Course) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: {
            '@type': 'EducationalOrganization',
            name: 'Global Business School',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kandy',
                addressCountry: 'LK',
            },
        },
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'blended',
            duration: course.duration,
        },
        ...(course.fee_lkr && {
            offers: {
                '@type': 'Offer',
                price: course.fee_lkr,
                priceCurrency: 'LKR',
            },
        }),
        ...(course.rating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: course.rating,
                ratingCount: course.students || 100,
            },
        }),
        ...(course.image && {
            image: course.image,
        }),
    };
};

/**
 * Generate Organization schema for homepage
 */
export const generateOrganizationSchema = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Global Business School',
        alternateName: 'GBS Kandy',
        url: 'https://gbschool.cc',
        logo: 'https://gbschool.cc/logo.png',
        description:
            'Global Business School offers professional courses in accounting, architecture, and business in Kandy, Sri Lanka.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kandy',
            addressRegion: 'Central Province',
            addressCountry: 'LK',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Admissions',
            telephone: '+94-81-2345678',
            email: 'info@gbschool.cc',
        },
        sameAs: [
            'https://www.facebook.com/gbschoolkandy',
            'https://www.linkedin.com/company/global-business-school',
        ],
    };
};

/**
 * Generate Breadcrumb schema for navigation
 */
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://gbschool.cc${item.url}`,
        })),
    };
};

/**
 * Generate FAQ schema for course pages
 */
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
};

/**
 * Generate Educational Program schema for courses
 */
export const generateEducationalProgramSchema = (course: Course) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'EducationalOccupationalProgram',
        name: course.title,
        description: course.description,
        provider: {
            '@type': 'EducationalOrganization',
            name: 'Global Business School',
        },
        timeToComplete: course.duration,
        occupationalCredentialAwarded: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Professional Qualification',
        },
    };
};
