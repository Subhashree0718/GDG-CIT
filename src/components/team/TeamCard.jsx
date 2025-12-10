/**
 * TeamCard Component - Modern design with image support
 */
import { motion } from 'framer-motion';
import { Card } from '../common/Card';

export const TeamCard = ({ member, isLead = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card className={`text-center relative overflow-hidden group h-full ${isLead ? 'ring-2 ring-gdgBlue shadow-2xl' : ''}`} hover={true}>
                {/* Lead Badge */}
                {isLead && (
                    <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-gdgBlue to-gdgGreen text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                    >
                        ⭐ Lead
                    </motion.div>
                )}

                {/* Profile Image */}
                <div className="relative mb-6">
                    <motion.div
                        className="relative w-40 h-40 mx-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Gradient ring */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${isLead
                                ? 'from-gdgBlue via-gdgGreen to-gdgYellow'
                                : 'from-gray-300 to-gray-400'
                            } opacity-75 blur-md group-hover:blur-lg transition-all duration-300`} />

                        {/* Image container */}
                        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gdgBlue to-gdgGreen p-1">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                {member.photo ? (
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback to initials if image fails to load
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                {/* Fallback initials */}
                                <div className={`w-full h-full bg-gradient-to-br from-gdgBlue to-gdgGreen flex items-center justify-center text-white text-4xl font-black ${member.photo ? 'hidden' : 'flex'}`}>
                                    {member.name.split(' ').map(n => n.charAt(0)).join('').slice(0, 2)}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-gdgBlue transition-colors duration-300">
                    {member.name}
                </h3>

                {/* Role */}
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${isLead
                        ? 'bg-gradient-to-r from-gdgBlue to-gdgGreen text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                    {member.role}
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed px-2">
                    {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                    {member.socials?.github && (
                        <motion.a
                            href={member.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gdgBlue text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </motion.a>
                    )}
                    {member.socials?.linkedin && (
                        <motion.a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gdgBlue text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </motion.a>
                    )}
                    {member.socials?.instagram && (
                        <motion.a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300"
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                            </svg>
                        </motion.a>
                    )}
                </div>

                {/* Bottom gradient line for lead */}
                {isLead && (
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gdgBlue via-gdgGreen to-gdgYellow"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    />
                )}
            </Card>
        </motion.div>
    );
};
