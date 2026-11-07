//import "../index.css";
import "../../css/StoryIndex.css";
import DarkMode from './DarkMode';
import { useState } from "react";
import { DarkModeSwitch } from "react-night-toggle";

function Header() {
    const [dark, setDark] = useState(false);
    const toggleDarkMode = (checked) => setDark(checked);
    return (
        <>            
            <header className="app__header">
                <div className="flex">
                    <div className="flex-1">
                        <h1>Flex General Header</h1>
                        <p>dark: {dark.toString()}</p>
                    </div>
                    <div className="flex-1 content-end border border-2 border-gray-500">
                        <div className={dark ? "dark" : ""}>
                            <DarkModeSwitch
                                checked={dark}
                                onChange={toggleDarkMode}
                                sunColor="orange"
                                moonColor="black"
                            />
                            <h1>{dark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
                        </div>
                        <div className="flex-1 content-end border border-2 border-gray-500">
                        <DarkMode />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header