import { Routes , Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Settings from './components/settings/Settings'; 
import Profile from "./components/profile/Profile"; 
import Projects from "./components/projects/Projects";
import Courses from "./components/Courses/Courses"; 
import Friends from "./components/friends/Friends";
import Files from "./components/files/Files";
import Plans from "./components/plans/Plans";
import NotFound from './components/NotFound'; 
const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/files" element={<Files />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default RoutesApp; 