import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FolderList.css'; // Import the CSS file

const FolderList = ({ onSelectFolder }) => {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        // Fetch folders from the backend
        axios.get('/api/folders')
            .then(response => setFolders(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="folder-list">
            {folders.map(folder => (
                <div key={folder.id} onClick={() => onSelectFolder(folder.id)}>
                    {folder.name}
                </div>
            ))}
        </div>
    );
};

export default FolderList;
