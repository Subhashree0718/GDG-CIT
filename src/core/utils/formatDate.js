/**
 * Date formatting utilities
 */

/**
 * Format date to readable string
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date like "January 15, 2024"
 */
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

/**
 * Format date to short format
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date like "Jan 15, 2024"
 */
export const formatDateShort = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

/**
 * Check if date is in the future
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {boolean} True if date is in the future
 */
export const isFutureDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
};

/**
 * Get relative time string
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Relative time like "2 days ago" or "in 3 weeks"
 */
export const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays === -1) return 'Yesterday';
    if (diffDays > 1 && diffDays <= 7) return `In ${diffDays} days`;
    if (diffDays < -1 && diffDays >= -7) return `${Math.abs(diffDays)} days ago`;
    if (diffDays > 7 && diffDays <= 30) return `In ${Math.ceil(diffDays / 7)} weeks`;
    if (diffDays < -7 && diffDays >= -30) return `${Math.ceil(Math.abs(diffDays) / 7)} weeks ago`;

    return formatDateShort(dateString);
};
