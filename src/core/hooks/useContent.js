/**
 * Custom hook to load and cache JSON content files
 */
import { useState, useEffect } from 'react';

export const useContent = (contentFile) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadContent = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/content/${contentFile}.json`);

                if (!response.ok) {
                    throw new Error(`Failed to load ${contentFile}`);
                }

                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                console.error(`Error loading ${contentFile}:`, err);
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        loadContent();
    }, [contentFile]);

    return { data, loading, error };
};
