import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className='about-page'>
            <h1>About Vinyl Rewrites</h1>
            <p>
                Vinyl Rewrites is a hands-on introduction to React, designed for those with basic web dev experience
                (HTML/CSS/JS). Over the course of an hour, you'll transform a vinyl-record-themed website into a dynamic
                React app—learning components, JSX, hooks, and state along the way. You'll walk away with a solid
                understanding of how React works and the grooves to get started building your own interactive UIs.
            </p>
            <p>
                This project was created by Samuel Gunter and Elie Soloveichik at{' '}
                <a href='https://longhorndevelopers.org/'>Longhorn Developers</a> for a workshop during the{' '}
                <a href='https://freetailhackers.com/'>Freetail Hackers</a> "Record Hacks" Hackathon.
            </p>
            <p>
                Data and images from Wikipedia. Album covers are property of their owners and used for educational
                purposes.
            </p>
        </div>
    );
}
