import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    nic: string;
    address: string;
}

interface EducationInfo {
    highestQualification: string;
    institution: string;
    yearCompleted: string;
    hasWorkExperience: boolean;
    workExperience?: string;
}

const EnrollmentForm: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<{
        personal?: PersonalInfo;
        education?: EducationInfo;
    }>({});

    const {
        register: registerPersonal,
        handleSubmit: handleSubmitPersonal,
        formState: { errors: errorsPersonal },
    } = useForm<PersonalInfo>();

    const {
        register: registerEducation,
        handleSubmit: handleSubmitEducation,
        formState: { errors: errorsEducation },
        watch,
    } = useForm<EducationInfo>();

    const hasWorkExperience = watch('hasWorkExperience');

    const onSubmitPersonal = (data: PersonalInfo) => {
        setFormData((prev) => ({ ...prev, personal: data }));
        setCurrentStep(2);
    };

    const onSubmitEducation = (data: EducationInfo) => {
        setFormData((prev) => ({ ...prev, education: data }));
        setCurrentStep(3);
    };

    const finalSubmit = async () => {
        // In production, this would submit to Supabase
        console.log('Final enrollment data:', { ...formData, courseId });

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Redirect to success page or payment
        alert('Enrollment submitted successfully! Our admissions team will contact you within 24 hours.');
        navigate('/courses');
    };

    const courseNames: { [key: string]: string } = {
        'acca': 'ACCA Professional Qualification',
        'revit': 'Autodesk Revit Architecture',
        'computerized-accounting': 'Computerized Accounting',
        'diploma-accounting': 'Diploma in Professional Accounting',
    };

    const courseName = courseId ? courseNames[courseId] || 'Course' : 'Course';

    return (
        <div className="min-h-screen bg-neutral-light py-12">
            <Helmet>
                <title>Enroll in {courseName} | Global Business School</title>
                <meta name="description" content={`Complete your enrollment for ${courseName} at Global Business School, Kandy.`} />
            </Helmet>

            <div className="container mx-auto px-4 max-w-3xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
                        Enroll in {courseName}
                    </h1>
                    <p className="text-neutral-medium">Complete the form below to begin your journey</p>
                </div>

                {/* Progress Indicator */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center flex-1">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep >= step
                                            ? 'bg-primary text-white'
                                            : 'bg-neutral-light text-neutral-medium border-2 border-neutral-medium'
                                        }`}
                                >
                                    {step}
                                </div>
                                {step < 3 && (
                                    <div
                                        className={`flex-1 h-1 mx-2 ${currentStep > step ? 'bg-primary' : 'bg-neutral-light'
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                        <span className={currentStep >= 1 ? 'text-primary font-semibold' : 'text-neutral-medium'}>
                            Personal Info
                        </span>
                        <span className={currentStep >= 2 ? 'text-primary font-semibold' : 'text-neutral-medium'}>
                            Education
                        </span>
                        <span className={currentStep >= 3 ? 'text-primary font-semibold' : 'text-neutral-medium'}>
                            Review
                        </span>
                    </div>
                </div>

                {/* Form Steps */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                        <form onSubmit={handleSubmitPersonal(onSubmitPersonal)} className="space-y-6">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Personal Information</h2>

                            <div>
                                <label className="block text-sm font-medium text-neutral-dark mb-2">
                                    Full Name *
                                </label>
                                <input
                                    {...registerPersonal('fullName', { required: 'Full name is required' })}
                                    className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder="Enter your full name"
                                />
                                {errorsPersonal.fullName && (
                                    <p className="text-semantic-error text-sm mt-1">{errorsPersonal.fullName.message}</p>
                                )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        {...registerPersonal('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="your.email@example.com"
                                    />
                                    {errorsPersonal.email && (
                                        <p className="text-semantic-error text-sm mt-1">{errorsPersonal.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        {...registerPersonal('phone', {
                                            required: 'Phone number is required',
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: 'Please enter a valid 10-digit phone number',
                                            },
                                        })}
                                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="0771234567"
                                    />
                                    {errorsPersonal.phone && (
                                        <p className="text-semantic-error text-sm mt-1">{errorsPersonal.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                                        Date of Birth *
                                    </label>
                                    <input
                                        type="date"
                                        {...registerPersonal('dateOfBirth', { required: 'Date of birth is required' })}
                                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    />
                                    {errorsPersonal.dateOfBirth && (
                                        <p className="text-semantic-error text-sm mt-1">{errorsPersonal.dateOfBirth.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                                        NIC Number *
                                    </label>
                                    <input
                                        {...registerPersonal('nic', { required: 'NIC number is required' })}
                                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="123456789V or 123456789012"
                                    />
                                    {errorsPersonal.nic && (
                                        <p className="text-semantic-error text-sm mt-1">{errorsPersonal.nic.message}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-dark mb-2">
                                    Address *
                                </label>
                                <textarea
                                    {...registerPersonal('address', { required: 'Address is required' })}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder="Enter your full address"
                                />
                                {errorsPersonal.address && (
                                    <p className="text-semantic-error text-sm mt-1">{errorsPersonal.address.message}</p>
                                )}
                            </div>

                            <div className="flex justify-between pt-6">
                                <Link
                                    to={`/courses/${courseId}`}
                                    className="px-6 py-3 border-2 border-neutral-light text-neutral-dark rounded-lg hover:bg-neutral-light transition-colors"
                                >
                                    Back to Course
                                </Link>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold hover:from-accent-purple hover:to-primary-light transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Next Step
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Step 2: Educational Background */}
                    {currentStep === 2 && (
                        <form onSubmit={handleSubmitEducation(onSubmitEducation)} className="space-y-6">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Educational Background</h2>

                            <div>
                                <label className="block text-sm font-medium text-neutral-dark mb-2">
                                    Highest Qualification *
                                </label>
                                <select
                                    {...registerEducation('highestQualification', { required: 'Please select your qualification' })}
                                    className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                >
                                    <option value="">Select qualification</option>
                                    <option value="ol">O/L</option>
                                    <option value="al">A/L</option>
                                    <option value="diploma">Diploma</option>
                                    <option value="degree">Bachelor's Degree</option>
                                    <option value="masters">Master's Degree</option>
                                    <option value="other">Other</option>
                                </select>
                                {errorsEducation.highestQualification && (
                                    <p className="text-semantic-error text-sm mt-1">{errorsEducation.highestQualification.message}</p>
                                )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                                        Institution/School *
                                    </label>
                                    <input
                                        {...registerEducation('institution', { required: 'Institution name is required' })}
                                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="Name of institution"
                                    />
                                    {errorsEducation.institution && (
                                        <p className="text-semantic-error text-sm mt-1">{errorsEducation.institution.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                                        Year Completed *
                                    </label>
                                    <input
                                        type="number"
                                        {...registerEducation('yearCompleted', {
                                            required: 'Year is required',
                                            min: { value: 1950, message: 'Please enter a valid year' },
                                            max: { value: new Date().getFullYear(), message: 'Year cannot be in the future' },
                                        })}
                                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="2020"
                                    />
                                    {errorsEducation.yearCompleted && (
                                        <p className="text-semantic-error text-sm mt-1">{errorsEducation.yearCompleted.message}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        {...registerEducation('hasWorkExperience')}
                                        className="w-5 h-5 text-primary border-neutral-light rounded focus:ring-primary"
                                    />
                                    <span className="text-sm font-medium text-neutral-dark">I have work experience</span>
                                </label>
                            </div>

                            {hasWorkExperience && (
                                <div>
                                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                                        Work Experience Details
                                    </label>
                                    <textarea
                                        {...registerEducation('workExperience')}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="Describe your work experience (company, position, duration)"
                                    />
                                </div>
                            )}

                            <div className="flex justify-between pt-6">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(1)}
                                    className="px-6 py-3 border-2 border-neutral-light text-neutral-dark rounded-lg hover:bg-neutral-light transition-colors"
                                >
                                    Previous
                                </button>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg font-semibold hover:from-accent-purple hover:to-primary-light transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Next Step
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Step 3: Review and Submit */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Review Your Information</h2>

                            <div className="space-y-6">
                                <div className="bg-neutral-light rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-primary mb-4">Personal Information</h3>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-neutral-medium">Full Name:</span>
                                            <p className="font-semibold text-neutral-dark">{formData.personal?.fullName}</p>
                                        </div>
                                        <div>
                                            <span className="text-neutral-medium">Email:</span>
                                            <p className="font-semibold text-neutral-dark">{formData.personal?.email}</p>
                                        </div>
                                        <div>
                                            <span className="text-neutral-medium">Phone:</span>
                                            <p className="font-semibold text-neutral-dark">{formData.personal?.phone}</p>
                                        </div>
                                        <div>
                                            <span className="text-neutral-medium">NIC:</span>
                                            <p className="font-semibold text-neutral-dark">{formData.personal?.nic}</p>
                                        </div>
                                        <div className="md:col-span-2">
                                            <span className="text-neutral-medium">Address:</span>
                                            <p className="font-semibold text-neutral-dark">{formData.personal?.address}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-neutral-light rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-primary mb-4">Educational Background</h3>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-neutral-medium">Highest Qualification:</span>
                                            <p className="font-semibold text-neutral-dark">{formData.education?.highestQualification}</p>
                                        </div>
                                        <div>
                                            <span className="text-neutral-medium">Institution:</span>
                                            <p className="font-semibold text-neutral-dark">{formData.education?.institution}</p>
                                        </div>
                                        <div>
                                            <span className="text-neutral-medium">Year Completed:</span>
                                            <p className="font-semibold text-neutral-dark">{formData.education?.yearCompleted}</p>
                                        </div>
                                        {formData.education?.hasWorkExperience && formData.education?.workExperience && (
                                            <div className="md:col-span-2">
                                                <span className="text-neutral-medium">Work Experience:</span>
                                                <p className="font-semibold text-neutral-dark">{formData.education.workExperience}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="bg-accent-gold/10 border-2 border-accent-gold rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-primary mb-2">Next Steps</h3>
                                    <ul className="text-sm text-neutral-dark space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2">✓</span>
                                            Our admissions team will review your application within 24 hours
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2">✓</span>
                                            You will receive an email with payment instructions and enrollment details
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2">✓</span>
                                            Complete the payment to confirm your enrollment
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-between pt-6">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                    className="px-6 py-3 border-2 border-neutral-light text-neutral-dark rounded-lg hover:bg-neutral-light transition-colors"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={finalSubmit}
                                    className="px-8 py-3 bg-gradient-to-r from-accent-emerald to-accent-emerald/80 text-white rounded-lg font-semibold hover:from-accent-emerald/90 hover:to-accent-emerald/70 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Submit Enrollment
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnrollmentForm;
