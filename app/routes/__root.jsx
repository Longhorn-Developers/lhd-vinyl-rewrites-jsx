// app/routes/__root.jsx
import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import appCss from '../styles/app.css?url';
import { NavBar } from '../Components/NavBar';

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'Vinyl Rewrites',
            },
            {
                name: 'description',
                content: 'A website to search for vinyl records and find details about them.',
            },
        ],
        links: [
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossOrigin: 'anonymous',
            },
            {
                href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap',
                rel: 'stylesheet',
            },
            {
                rel: 'stylesheet',
                href: appCss,
            },
        ],
    }),
    component: RootComponent,
});

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    );
}

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 */
function RootDocument({ children }) {
    return (
        <html lang='en'>
            <head>
                <HeadContent />
            </head>
            <body>
                <NavBar />
                <div className='app'>{children}</div>
                <Scripts />
            </body>
        </html>
    );
}
