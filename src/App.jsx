/**
 * App Component - Root application component
 */
import { SiteProvider } from './core/context/SiteContext';
import { AppRouter } from './core/router/AppRouter';
import './styles/globals.css';

function App() {
    return (
        <SiteProvider>
            <AppRouter />
        </SiteProvider>
    );
}

export default App;
