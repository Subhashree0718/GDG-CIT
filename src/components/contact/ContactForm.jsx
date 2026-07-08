import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log('Form submitted:', formData);
            setSubmitted(true);

            setTimeout(() => {
                setFormData({ name: '', email: '', message: '' });
                setSubmitted(false);
            }, 3000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <Card>
            {/* Added Official GDG Brand Vector Logo Header */}
            <div className="flex flex-col items-center justify-center pt-2 pb-6 border-b border-gray-100 mb-6">
                <div className="relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-sm border border-gray-100 overflow-hidden mb-2">
                    <svg 
                        viewBox="0 0 24 24" 
                        className="w-9 h-9"
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Blue Bracket (Left) */}
                        <path 
                            d="M9.5 4.5L3.5 10.5L9.5 16.5" 
                            stroke="#4285F4" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                        {/* Red Bar (Top Right) */}
                        <path 
                            d="M14.5 4.5H20.5" 
                            stroke="#EA4335" 
                            strokeWidth="2.5" 
                            strokeLinecap="round"
                        />
                        {/* Yellow Box (Middle Right) */}
                        <path 
                            d="M17.5 10.5H20.5" 
                            stroke="#FBBC04" 
                            strokeWidth="2.5" 
                            strokeLinecap="round"
                        />
                        {/* Green Bracket (Bottom Right) */}
                        <path 
                            d="M14.5 16.5H20.5" 
                            stroke="#34A853" 
                            strokeWidth="2.5" 
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">GDG CIT Chennai</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gdgBlue ${errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                        <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                </div>

                {/* Email field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gdgBlue ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Message field */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gdgBlue resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                            }`}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                        <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                </div>

                <Button type="submit" variant="primary" className="w-full">
                    Send Message
                </Button>
            </form>

            {/* Success toast */}
            <AnimatePresence>
                {submitted && (
                    <motion.div
                        className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Message sent successfully!</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    );
};