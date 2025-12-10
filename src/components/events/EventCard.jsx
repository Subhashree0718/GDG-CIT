/**
 * EventCard Component - Modern, professional event card design
 */
import { motion } from 'framer-motion';
import { formatDate } from '../../core/utils/formatDate';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '../../core/utils/constants';

export const EventCard = ({ event, mode = 'compact' }) => {
    const categoryColor = CATEGORY_COLORS[event.category] || CATEGORY_COLORS.default;

    if (mode === 'compact') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Card className="overflow-hidden group h-full flex flex-col" hover={true}>
                    {/* Top colored accent bar */}
                    <div
                        className="h-2 -mx-8 -mt-8 mb-6"
                        style={{ background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}aa)` }}
                    />

                    {/* Category Badge */}
                    <div className="mb-4">
                        <span
                            className="inline-block px-3 py-1.5 rounded-lg text-white text-xs font-bold"
                            style={{ backgroundColor: categoryColor }}
                        >
                            {CATEGORY_LABELS[event.category]}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-gdgBlue transition-colors duration-300">
                        {event.title}
                    </h3>

                    {/* Date & Time */}
                    <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: `${categoryColor}15` }}
                            >
                                <svg className="w-5 h-5" style={{ color: categoryColor }} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-sm">{formatDate(event.date)}</div>
                                <div className="text-sm text-gray-500">{event.time}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: `${categoryColor}15` }}
                            >
                                <svg className="w-5 h-5" style={{ color: categoryColor }} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="font-medium text-sm">{event.venue}</div>
                        </div>
                    </div>

                    {/* Summary */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {event.summary}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                        {event.registerUrl && (
                            <Button
                                variant="primary"
                                href={event.registerUrl}
                                className="flex-1 text-sm py-3 font-bold"
                            >
                                Register Now
                            </Button>
                        )}
                        {event.resourcesUrl && (
                            <Button
                                variant="outline"
                                href={event.resourcesUrl}
                                className="flex-1 text-sm py-3 font-bold"
                            >
                                Resources
                            </Button>
                        )}
                    </div>
                </Card>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="p-6">
                <h2 className="text-2xl font-heading font-bold mb-4">{event.title}</h2>
                <p className="text-gray-700">{event.details}</p>
            </div>
        </motion.div>
    );
};
