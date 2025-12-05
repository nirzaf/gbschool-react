import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import StructuredData from '../common/StructuredData';
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from '../../lib/schemas';

// Course data - in production, this would come from Supabase
const coursesData = {
    'acca': {
        id: 'acca',
        title: 'ACCA Professional Qualification',
        description: 'Become a chartered accountant with our comprehensive ACCA program. Get BSc degree from Oxford Brookes University, UK.',
        duration: '2.5 Years',
        level: 'Professional',
        rating: 4.8,
        students: 420,
        image: 'https://ik.imagekit.io/d36vkx7c33/img/acca.jpg?updatedAt=1732615647441',
        fee_lkr: 450000,
        curriculum: [
            {
                level: 'Knowledge Level (3 papers)',
                papers: [
                    'Business and Technology (BT)',
                    'Management Accounting (MA)',
                    'Financial Accounting (FA)'
                ]
            },
            {
                level: 'Skills Level (6 papers)',
                papers: [
                    'Corporate and Business Law (LW)',
                    'Performance Management (PM)',
                    'Taxation (TX)',
                    'Financial Reporting (FR)',
                    'Audit and Assurance (AA)',
                    'Financial Management (FM)'
                ]
            },
            {
                level: 'Professional Level (4 papers)',
                papers: [
                    'Strategic Business Leader (SBL)',
                    'Strategic Business Reporting (SBR)',
                    'Advanced Financial Management (AFM)',
                    'Advanced Performance Management (APM)'
                ]
            }
        ],
        features: [
            'Interactive live sessions with experienced ACCA tutors',
            'Comprehensive study materials and practice kits',
            'Regular mock exams and performance tracking',
            'Career guidance and placement support',
            'Oxford Brookes BSc (Hons) degree pathway',
            'Flexible batch timings (weekday and weekend)'
        ],
        faqs: [
            {
                question: 'What are the entry requirements for ACCA?',
                answer: 'You need 2 A-Levels and 3 GCSEs (or equivalent) in five separate subjects, including English and Mathematics. Alternatively, you can complete the ACCA Foundations in Accountancy qualifications.'
            },
            {
                question: 'How long does it take to complete ACCA?',
                answer: 'The ACCA qualification typically takes 2.5 to 3 years to complete, depending on your study pace and exam success rate. Our structured program is designed for completion in 2.5 years.'
            },
            {
                question: 'Can I get a degree through ACCA?',
                answer: 'Yes! After completing the first 9 ACCA papers and submitting a Research and Analysis Project, you can earn a BSc (Hons) in Applied Accounting from Oxford Brookes University, UK.'
            },
            {
                question: 'What is the fee structure?',
                answer: 'The total program fee is LKR 450,000, which can be paid in installments. This includes tuition, study materials, and mock exam fees. ACCA exam fees are separate and paid directly to ACCA.'
            },
            {
                question: 'What are the career prospects after ACCA?',
                answer: 'ACCA opens doors to careers in audit, taxation, financial management, consulting, and more. Our graduates work at Big 4 firms, multinational corporations, and government organizations with starting salaries ranging from LKR 60,000 to LKR 150,000.'
            }
        ],
        intakeDates: ['January 15, 2026', 'April 1, 2026', 'July 1, 2026']
    },
    'revit': {
        id: 'revit',
        title: 'Autodesk Revit Architecture',
        description: 'Master Building Information Modeling (BIM) with Revit Architecture. Learn from industry experts and work on real-world projects.',
        duration: '6 Months',
        level: 'Professional',
        rating: 4.7,
        students: 280,
        image: 'https://ik.imagekit.io/d36vkx7c33/img/revit.jpg?updatedAt=1732615653586',
        fee_lkr: 75000,
        curriculum: [
            {
                level: 'Foundation Module',
                papers: [
                    'Introduction to BIM and Revit Interface',
                    'Basic Modeling Techniques',
                    'Working with Families and Components'
                ]
            },
            {
                level: 'Intermediate Module',
                papers: [
                    'Advanced Modeling and Detailing',
                    'Structural and MEP Integration',
                    'Rendering and Visualization'
                ]
            },
            {
                level: 'Advanced Module',
                papers: [
                    'Project Collaboration and Worksharing',
                    'Construction Documentation',
                    'Real-World Project Implementation'
                ]
            }
        ],
        features: [
            'Hands-on training with Autodesk Revit 2024',
            'Real-world architectural project work',
            'Industry-standard BIM workflows',
            'Autodesk certification preparation',
            'Portfolio development support',
            'Job placement assistance'
        ],
        faqs: [
            {
                question: 'Do I need prior CAD experience?',
                answer: 'Basic computer skills are required, but prior CAD experience is not mandatory. We start from fundamentals and progress to advanced techniques.'
            },
            {
                question: 'Will I get Autodesk certification?',
                answer: 'Our course prepares you for the Autodesk Certified Professional exam. The certification exam fee is separate and optional.'
            },
            {
                question: 'What software is required?',
                answer: 'You will need Autodesk Revit 2024 (student version available free from Autodesk). We provide guidance on installation and setup.'
            }
        ],
        intakeDates: ['January 20, 2026', 'March 15, 2026', 'June 1, 2026']
    },
    'computerized-accounting': {
        id: 'computerized-accounting',
        title: 'Computerized Accounting',
        description: 'Learn modern accounting software including QuickBooks, Sage, and Excel for today\'s digital workplace.',
        duration: '3 Months',
        level: 'Intermediate',
        rating: 4.6,
        students: 350,
        image: 'https://ik.imagekit.io/d36vkx7c33/img/computerized%20accounting.jpg?updatedAt=1732615647665',
        fee_lkr: 35000,
        curriculum: [
            {
                level: 'Module 1: QuickBooks',
                papers: [
                    'Company Setup and Chart of Accounts',
                    'Invoicing and Receivables Management',
                    'Payables and Banking',
                    'Financial Reporting'
                ]
            },
            {
                level: 'Module 2: Excel for Accounting',
                papers: [
                    'Advanced Formulas and Functions',
                    'PivotTables and Data Analysis',
                    'Financial Modeling',
                    'Automation with Macros'
                ]
            },
            {
                level: 'Module 3: Sage Accounting',
                papers: [
                    'System Setup and Configuration',
                    'Transaction Processing',
                    'VAT and Tax Management',
                    'Month-End and Year-End Procedures'
                ]
            }
        ],
        features: [
            'Practical training on industry-standard software',
            'Real-world business scenarios',
            'Hands-on projects and assignments',
            'Job-ready skills development',
            'Certificate of completion',
            'Lifetime access to course materials'
        ],
        faqs: [
            {
                question: 'Do I need accounting knowledge?',
                answer: 'Basic accounting knowledge is recommended but not required. We cover essential accounting concepts as part of the course.'
            },
            {
                question: 'Which software will I learn?',
                answer: 'You will learn QuickBooks, Sage 50 Accounting, and advanced Excel for accounting applications.'
            },
            {
                question: 'Is this course suitable for business owners?',
                answer: 'Absolutely! This course is perfect for small business owners who want to manage their own accounts using modern software.'
            }
        ],
        intakeDates: ['Every month on the 1st and 15th']
    },
    'diploma-accounting': {
        id: 'diploma-accounting',
        title: 'Diploma in Professional Accounting',
        description: 'Comprehensive diploma program covering all aspects of professional accounting and finance.',
        duration: '1 Year',
        level: 'Intermediate',
        rating: 4.5,
        students: 290,
        image: 'https://ik.imagekit.io/d36vkx7c33/img/diploma%20in%20accounting.jpg?updatedAt=1732615651486',
        fee_lkr: 120000,
        curriculum: [
            {
                level: 'Semester 1',
                papers: [
                    'Principles of Accounting',
                    'Business Mathematics',
                    'Commercial Law',
                    'Business Communication'
                ]
            },
            {
                level: 'Semester 2',
                papers: [
                    'Financial Accounting',
                    'Cost and Management Accounting',
                    'Taxation',
                    'Auditing Fundamentals'
                ]
            }
        ],
        features: [
            'Foundation course for professional qualifications',
            'Industry exposure through internships',
            'Professional skills development',
            'Career counseling and support',
            'Pathway to ACCA and other qualifications',
            'Recognized diploma certificate'
        ],
        faqs: [
            {
                question: 'What can I do after this diploma?',
                answer: 'This diploma provides a strong foundation for pursuing professional qualifications like ACCA, CIMA, or CMA. It also qualifies you for entry-level accounting positions.'
            },
            {
                question: 'Are there any exemptions for ACCA?',
                answer: 'Depending on your performance, you may be eligible for exemptions in ACCA Knowledge Level papers. We provide guidance on the exemption process.'
            },
            {
                question: 'Is internship included?',
                answer: 'Yes, we arrange internship opportunities with accounting firms and corporate finance departments to provide practical experience.'
            }
        ],
        intakeDates: ['February 1, 2026', 'August 1, 2026']
    }
};

const CourseDetailPage: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();

    // If course doesn't exist, redirect to courses page
    if (!courseId || !coursesData[courseId as keyof typeof coursesData]) {
        return <Navigate to="/courses" replace />;
    }

    const course = coursesData[courseId as keyof typeof coursesData];

    const breadcrumbItems = [
        { name: 'Home', url: '/' },
        { name: 'Courses', url: '/courses' },
        { name: course.title, url: `/courses/${course.id}` }
    ];

    return (
        <div className="bg-neutral-light min-h-screen">
            <Helmet>
                <title>{course.title} | Global Business School Kandy</title>
                <meta name="description" content={`${course.description} Duration: ${course.duration}. Fee: LKR ${course.fee_lkr?.toLocaleString()}. Enroll now at Global Business School, Kandy.`} />
                <meta property="og:title" content={`${course.title} - GBS Kandy`} />
                <meta property="og:description" content={course.description} />
                <meta property="og:image" content={course.image} />
                <link rel="canonical" href={`https://gbschool.cc/courses/${course.id}`} />
            </Helmet>

            <StructuredData data={generateCourseSchema(course)} />
            <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
            <StructuredData data={generateFAQSchema(course.faqs)} />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary-dark to-primary-mythical text-white py-20">
                <div className="container mx-auto px-4">
                    <nav className="text-sm mb-6 opacity-90">
                        <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/courses" className="hover:text-accent-gold transition-colors">Courses</Link>
                        <span className="mx-2">/</span>
                        <span>{course.title}</span>
                    </nav>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                            <p className="text-xl mb-6 opacity-90">{course.description}</p>

                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <div className="text-sm opacity-75">Duration</div>
                                    <div className="font-semibold">{course.duration}</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <div className="text-sm opacity-75">Level</div>
                                    <div className="font-semibold">{course.level}</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <div className="text-sm opacity-75">Fee</div>
                                    <div className="font-semibold">LKR {course.fee_lkr?.toLocaleString()}</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                    <div className="text-sm opacity-75">Rating</div>
                                    <div className="font-semibold">⭐ {course.rating} ({course.students} students)</div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to={`/enroll/${course.id}`}
                                    className="bg-accent-gold text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-accent-gold/90 transition-colors"
                                >
                                    Apply Now
                                </Link>
                                <button className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                                    Download Brochure
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Curriculum */}
                        <section>
                            <h2 className="text-3xl font-bold text-primary-dark mb-6">Course Curriculum</h2>
                            <div className="space-y-4">
                                {course.curriculum.map((module, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                                        <h3 className="text-xl font-semibold text-primary mb-4">{module.level}</h3>
                                        <ul className="space-y-2">
                                            {module.papers.map((paper, pIndex) => (
                                                <li key={pIndex} className="flex items-start">
                                                    <svg className="w-5 h-5 text-accent-emerald mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-neutral-dark">{paper}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Features */}
                        <section>
                            <h2 className="text-3xl font-bold text-primary-dark mb-6">What You'll Get</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {course.features.map((feature, index) => (
                                    <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                                        <svg className="w-6 h-6 text-accent-purple mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-neutral-dark">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQs */}
                        <section>
                            <h2 className="text-3xl font-bold text-primary-dark mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {course.faqs.map((faq, index) => (
                                    <details key={index} className="bg-white rounded-xl p-6 shadow-md group">
                                        <summary className="font-semibold text-primary cursor-pointer list-none flex items-center justify-between">
                                            <span>{faq.question}</span>
                                            <svg className="w-5 h-5 text-accent-purple group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <p className="mt-4 text-neutral-dark leading-relaxed">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
                            <h3 className="text-2xl font-bold text-primary-dark mb-6">Enrollment Details</h3>

                            <div className="space-y-4 mb-6">
                                <div className="border-b border-neutral-light pb-4">
                                    <div className="text-sm text-neutral-medium mb-1">Course Fee</div>
                                    <div className="text-2xl font-bold text-primary">LKR {course.fee_lkr?.toLocaleString()}</div>
                                    <div className="text-sm text-accent-emerald mt-1">Installment plans available</div>
                                </div>

                                <div className="border-b border-neutral-light pb-4">
                                    <div className="text-sm text-neutral-medium mb-2">Next Intake Dates</div>
                                    {course.intakeDates.map((date, index) => (
                                        <div key={index} className="text-sm text-neutral-dark mb-1">📅 {date}</div>
                                    ))}
                                </div>

                                <div className="border-b border-neutral-light pb-4">
                                    <div className="text-sm text-neutral-medium mb-1">Duration</div>
                                    <div className="text-lg font-semibold text-primary-dark">{course.duration}</div>
                                </div>

                                <div>
                                    <div className="text-sm text-neutral-medium mb-1">Current Students</div>
                                    <div className="text-lg font-semibold text-primary-dark">{course.students}+ enrolled</div>
                                </div>
                            </div>

                            <Link
                                to={`/enroll/${course.id}`}
                                className="block w-full bg-gradient-to-r from-primary to-primary-light text-white text-center px-6 py-3 rounded-lg font-semibold hover:from-accent-purple hover:to-primary-light transition-all duration-300 shadow-md hover:shadow-lg mb-3"
                            >
                                Enroll Now
                            </Link>

                            <button className="block w-full bg-neutral-light text-primary border-2 border-primary text-center px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                                Contact Admissions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;
