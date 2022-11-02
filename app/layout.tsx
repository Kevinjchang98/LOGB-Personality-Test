import './globals.css';
import Footer from '../components/Footer/Footer';

/**
 * Imports global css styles and renders a footer on all pages for this site
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head></head>
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
