import React from "react";
import ErrorBoundary from '../components/errorBoundary';
import { config } from '@/config';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import '../../css/app.css'
import Header from "../components/Header";
import StoryIndex from "./StoryIndex";
import StoryListView from "./StoryListView";
import StoryView from "./StoryView";
//import Fus from "./pages/Fus";

const App: React.FC = () => {
    return (
      <Router>
        <main className="app">
          <Header />
          <Routes>
            <Route path="/" element={<StoryIndex />} />
            <Route path="/story/:id" element={<StoryView />} />
            <Route path="/tags/:id" element={<StoryListView />} />
          </Routes>
        </main>
      </Router>
  );
};

export default App;
