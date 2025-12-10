/**
 * Home Page - Redesigned with modern layout
 */
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/homepage/Hero';
import { AboutStory } from '../components/homepage/AboutStory';
import { PulseCounters } from '../components/homepage/PulseCounters';
import { Highlights } from '../components/homepage/Highlights';
import { EventTimeline } from '../components/homepage/EventTimeline';
import { ActivitiesSlider } from '../components/homepage/ActivitiesSlider';
import { FAQ } from '../components/homepage/FAQ';
import { PageLoader } from '../components/common/Loading';
import { useContent } from '../core/hooks/useContent';

const Home = () => {
    const { data: events, loading } = useContent('events');

    if (loading) {
        return <PageLoader />;
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <AboutStory />
                <PulseCounters />
                <Highlights />
                {events && <EventTimeline events={events} />}
                <ActivitiesSlider />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
