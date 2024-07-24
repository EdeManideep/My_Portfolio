import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css';

function SingleService({ id, title, image, url }) {
    const { theme } = useContext(ThemeContext);
    return (
        <Fade bottom>
            <a href={url} target="_blank" rel="noreferrer" className="single-service" style={{ backgroundColor: theme.primary400 }}>
                <div className="service-content" style={{ color: theme.tertiary }}>
                    {/* Render the image using an img tag */}
                    <img src={image} height={75} alt={title} className="service-icon" />
                    <h4 style={{ color: theme.tertiary }}>{title}</h4>
                </div>
            </a>
        </Fade>
    );
}

export default SingleService;