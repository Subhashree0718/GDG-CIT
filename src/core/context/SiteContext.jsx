/**
 * Site Context - Global state management
 */
import { createContext, useContext, useState, useEffect } from 'react';

const SiteContext = createContext();

export const useSiteContext = () => {
    const context = useContext(SiteContext);
    if (!context) {
        throw new Error('useSiteContext must be used within SiteProvider');
    }
    return context;
};

export const SiteProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [siteData, setSiteData] = useState(null);
    const [settings, setSettings] = useState(null);
    const [socialLinks, setSocialLinks] = useState(null);

    // Load global site data on mount
    useEffect(() => {
        const loadGlobalData = async () => {
            try {
                const [siteResponse, settingsResponse, socialResponse] = await Promise.all([
                    fetch('/content/site.json'),
                    fetch('/content/settings.json'),
                    fetch('/content/social.json')
                ]);

                const [site, setts, social] = await Promise.all([
                    siteResponse.json(),
                    settingsResponse.json(),
                    socialResponse.json()
                ]);

                setSiteData(site);
                setSettings(setts);
                setSocialLinks(social);
                setTheme(setts.theme || 'light');
            } catch (error) {
                console.error('Error loading global site data:', error);
            }
        };

        loadGlobalData();
    }, []);

    const value = {
        theme,
        setTheme,
        siteData,
        settings,
        socialLinks
    };

    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
