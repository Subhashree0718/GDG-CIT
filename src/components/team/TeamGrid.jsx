/**
 * TeamGrid Component - Grid layout for team members with special lead display
 */
import { motion } from 'framer-motion';
import { TeamCard } from './TeamCard';

export const TeamGrid = ({ members = [] }) => {
    if (!members || members.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No team members found</p>
            </div>
        );
    }

    // Find the lead (GDGoC Organizer)
    const lead = members.find(member =>
        member.role && member.role.toLowerCase().includes('organizer')
    );

    // Get other team members (exclude the organizer)
    const otherMembers = members.filter(member =>
        !member.role || !member.role.toLowerCase().includes('organizer')
    );

    return (
        <div>
            {/* Lead Member - Special Display */}
            {lead && (
                <motion.div
                    className="max-w-md mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <TeamCard member={lead} isLead={true} />
                </motion.div>
            )}

            {/* Other Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherMembers.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <TeamCard member={member} isLead={false} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
