/**
 * Contact Page - Modern design with enhanced form and contact info
 */
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { ContactForm } from '../components/contact/ContactForm';
import { Card } from '../components/common/Card';
import { useSiteContext } from '../core/context/SiteContext';

const Contact = () => {
    const { socialLinks } = useSiteContext();

    const contactMethods = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email Us',
            value: 'gdg@cit.edu.in',
            href: 'mailto:gdg@cit.edu.in',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Visit Us',
            value: 'Chennai Institute of Technology, Chennai',
            href: 'https://maps.google.com',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Working Hours',
            value: 'Mon - Fri, 9:00 AM - 5:00 PM',
            color: 'from-yellow-500 to-yellow-600'
        }
    ];

    const socialPlatforms = [
        { name: 'GitHub', url: socialLinks?.github, icon: '🐙', color: 'hover:bg-gray-800' },
        { name: 'LinkedIn', url: socialLinks?.linkedin, icon: '💼', color: 'hover:bg-blue-600' },
        { name: 'Instagram', url: socialLinks?.instagram, icon: '📸', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' },
        { name: 'Discord', url: socialLinks?.discord, icon: '💬', color: 'hover:bg-indigo-600' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gdgBlue rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-gdgYellow rounded-full blur-3xl" />
                </div>

                <Container className="relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-block mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                            <span className="px-4 py-2 bg-gradient-to-r from-gdgBlue to-gdgYellow text-white rounded-full text-sm font-bold shadow-lg">
                                💬 Get In Touch
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Contact Us
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Have questions or want to collaborate? We'd love to hear from you!
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Contact Methods */}
            <section className="pb-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="text-center h-full group" hover={true}>
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                                        {method.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {method.title}
                                    </h3>
                                    {method.href ? (
                                        <a
                                            href={method.href}
                                            className="text-gray-600 hover:text-gdgBlue transition-colors text-sm"
                                        >
                                            {method.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600 text-sm">{method.value}</p>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-black text-gray-900 mb-6">
                                    Send us a Message
                                </h2>
                                <ContactForm />
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Card>
                                    <h3 className="text-xl font-black text-gray-900 mb-4">
                                        Follow Us
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6">
                                        Stay connected with our community on social media
                                    </p>
                                    <div className="space-y-3">
                                        {socialPlatforms.map((platform) => platform.url && (
                                            <motion.a
                                                key={platform.name}
                                                href={platform.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:text-white transition-all duration-300 group ${platform.color}`}
                                                whileHover={{ x: 5 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <span className="text-2xl">{platform.icon}</span>
                                                <span className="font-bold text-gray-700 group-hover:text-white transition-colors">
                                                    {platform.name}
                                                </span>
                                                <svg
                                                    className="w-5 h-5 ml-auto text-gray-400 group-hover:text-white transition-colors"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </motion.a>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Quick Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Card className="bg-gradient-to-br from-gdgBlue to-gdgGreen text-white">
                                    <h3 className="text-xl font-black mb-4">
                                        💡 Quick Tip
                                    </h3>
                                    <p className="text-white/90 text-sm leading-relaxed">
                                        Looking to join our community? Fill out the form and mention your areas of interest. We'll get back to you within 24 hours!
                                    </p>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
