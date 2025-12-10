/**
 * Team Page - Modern design with hero section and enhanced cards
 */
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { TeamGrid } from '../components/team/TeamGrid';
import { SkeletonTeamCard } from '../components/common/Loading';
import { useContent } from '../core/hooks/useContent';

const Team = () => {
    const { data: team, loading } = useContent('team');

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                <Navbar />
                <main className="pt-24 pb-16">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <SkeletonTeamCard key={i} />
                            ))}
                        </div>
                    </Container>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gdgGreen rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-gdgBlue rounded-full blur-3xl" />
                </div>

                <Container className="relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
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
                            <span className="px-4 py-2 bg-gradient-to-r from-gdgGreen to-gdgBlue text-white rounded-full text-sm font-bold shadow-lg">
                                👥 Our Amazing Team
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Meet The Team
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            The passionate people building our vibrant developer community
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="text-4xl font-black text-gdgGreen mb-2">
                                    {team?.length || 0}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">Team Members</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="text-4xl font-black text-gdgBlue mb-2">
                                    24/7
                                </div>
                                <div className="text-sm text-gray-600 font-medium">Community Support</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="text-4xl font-black text-gdgYellow mb-2">
                                    100+
                                </div>
                                <div className="text-sm text-gray-600 font-medium">Events Organized</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Team Grid */}
            <main className="pb-20">
                <Container>
                    <TeamGrid members={team} />
                </Container>
            </main>

            <Footer />
        </div>
    );
};

export default Team;
