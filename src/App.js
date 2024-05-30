import React, { useState } from 'react';
import FolderList from './components/FolderList';
import ContentList from './components/ContentList';
import ContentDisplay from './components/ContentDisplay';
import './App.css';

function App() {
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const [selectedContentId, setSelectedContentId] = useState(null);

    return (
        <div className="app">
            <div className="sidebar">
                <FolderList onSelectFolder={id => {
                    setSelectedFolderId(id);
                    setSelectedContentId(null);
                }} />
                {selectedFolderId && (
                    <ContentList folderId={selectedFolderId} onSelectContent={id => setSelectedContentId(id)} />
                )}
            </div>
            <div className="main-content">
                <ContentDisplay contentId={selectedContentId} />
            </div>
        </div>
    );
}

export default App;
