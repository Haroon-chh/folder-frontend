import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContentDisplay = ({ contentId }) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (contentId) {
            // Fetch the content details from the backend
            axios.get(`/api/contents/${contentId}`)
                .then(response => setContent(response.data))
                .catch(error => console.error(error));
        }
    }, [contentId]);

    if (!content) return <div>Select a content item to view details</div>;

    return (
        <div className="content-display">
            <h2>{content.title}</h2>
            <p>{content.text}</p>
            <div className="screenshots">
                {content.screenshots.map((screenshot, index) => (
                    <img key={index} src={screenshot.url} alt={`Screenshot ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default ContentDisplay;
