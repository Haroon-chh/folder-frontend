import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContentList = ({ folderId, onSelectContent }) => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        if (folderId) {
            // Fetch contents of the selected folder from the backend
            axios.get(`/api/folders/${folderId}/contents`)
                .then(response => setContents(response.data))
                .catch(error => console.error(error));
        }
    }, [folderId]);

    return (
        <div className="content-list">
            {contents.map(content => (
                <div key={content.id} onClick={() => onSelectContent(content.id)}>
                    {content.title}
                </div>
            ))}
        </div>
    );
};

export default ContentList;
