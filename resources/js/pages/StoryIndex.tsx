import '../../css/app.css'
//import "../index.css";
import "../../css/StoryIndex.css";
import StoryList from "../components/StoryList";
import TagList from '../components/TagList';
import React, { useState, useEffect } from 'react';

function StoryIndex() {
    
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    return (
        <>
            <div className="app__body">
                <TagList />

                <section className="panel panel--right">
                    <h2>Story content</h2>
                    <StoryList />
                    
                </section>
            </div>
        <script src="js/hello.js"></script>
        </>
    )
}

export default StoryIndex