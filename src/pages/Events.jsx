/**
 * Events Page - Modern, professional design with hero section and pagination
 */
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { EventFilter } from '../components/events/EventFilter';
import { EventList } from '../components/events/EventList';
import { Pagination } from '../components/common/Pagination';
import { SkeletonCard } from '../components/common/Loading';
import { useContent } from '../core/hooks/useContent';
import { isFutureDate } from '../core/utils/formatDate';

const ITEMS_PER_PAGE = 6;

const Events = () => {
    const { data: events, loading } = useContent('events');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [upcomingPage, setUpcomingPage] = useState(1);
    const [pastPage, setPastPage] = useState(1);

    // Filter events by category
    const filteredEvents = events?.filter(event =>
        selectedCategory === 'all' || event.category === selectedCategory
    ) || [];

    // Separate upcoming and past events
    const upcomingEvents = useMemo(() =>
        filteredEvents.filter(e => isFutureDate(e.date)),
        [filteredEvents]
    );

    const pastEvents = useMemo(() =>
        filteredEvents.filter(e => !isFutureDate(e.date)),
        [filteredEvents]
    );

    // Reset pagination when category changes
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setUpcomingPage(1);
        setPastPage(1);
    };

    // Paginated data
    const paginatedUpcoming = useMemo(() => {
        const start = (upcomingPage - 1) * ITEMS_PER_PAGE;
        return upcomingEvents.slice(start, start + ITEMS_PER_PAGE);
    }, [upcomingEvents, upcomingPage]);

    const paginatedPast = useMemo(() => {
        const start = (pastPage - 1) * ITEMS_PER_PAGE;
        return pastEvents.slice(start, start + ITEMS_PER_PAGE);
    }, [pastEvents, pastPage]);

    const upcomingTotalPages = Math.ceil(upcomingEvents.length / ITEMS_PER_PAGE);
    const pastTotalPages = Math.ceil(pastEvents.length / ITEMS_PER_PAGE);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                <Navbar />
                <main className="pt-24 pb-16">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <SkeletonCard key={i} />
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
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gdgBlue rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-gdgGreen rounded-full blur-3xl" />
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
                            <span className="px-4 py-2 bg-gradient-to-r from-gdgBlue to-gdgGreen text-white rounded-full text-sm font-bold shadow-lg">
                                ✨ Explore Our Events
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Discover Amazing Events
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                            Join us for workshops, hackathons, and community gatherings that inspire innovation and growth
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="text-4xl font-black text-gdgBlue mb-2">
                                    {upcomingEvents.length}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">Upcoming Events</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="text-4xl font-black text-gdgGreen mb-2">
                                    {events?.length || 0}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">Total Events</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="text-4xl font-black text-gdgYellow mb-2">
                                    800+
                                </div>
                                <div className="text-sm text-gray-600 font-medium">Participants</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Events Section */}
            <main className="pb-20">
                <Container>
                    {/* Filter */}
                    <EventFilter
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />

                    {/* Upcoming Events */}
                    {upcomingEvents.length > 0 && (
                        <div className="mb-16">
                            <EventList events={paginatedUpcoming} title="Upcoming Events" />
                            <Pagination
                                currentPage={upcomingPage}
                                totalPages={upcomingTotalPages}
                                onPageChange={setUpcomingPage}
                                itemsPerPage={ITEMS_PER_PAGE}
                                totalItems={upcomingEvents.length}
                            />
                        </div>
                    )}

                    {/* Past Events */}
                    {pastEvents.length > 0 && (
                        <div>
                            <EventList events={paginatedPast} title="Past Events" />
                            <Pagination
                                currentPage={pastPage}
                                totalPages={pastTotalPages}
                                onPageChange={setPastPage}
                                itemsPerPage={ITEMS_PER_PAGE}
                                totalItems={pastEvents.length}
                            />
                        </div>
                    )}

                    {/* No events message */}
                    {filteredEvents.length === 0 && (
                        <motion.div
                            className="text-center py-20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <p className="text-gray-500 text-xl font-medium">No events found in this category</p>
                            <button
                                onClick={() => handleCategoryChange('all')}
                                className="mt-6 px-6 py-3 bg-gdgBlue text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                            >
                                View All Events
                            </button>
                        </motion.div>
                    )}
                </Container>
            </main>

            <Footer />
        </div>
    );
};

export default Events;
