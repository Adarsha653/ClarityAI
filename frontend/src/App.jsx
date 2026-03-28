import Landing from './Landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import Onboarding1 from './pages/Onboarding1';
import Onboarding2 from './pages/Onboarding2';
import Dashboard from './pages/Dashboard';
import SessionComplete from './pages/Sessioncomplete';
import Progress from './pages/Progress';
import ContentLibrary from './pages/ContentLibrary';
import AccountSettings from './pages/AccountSettings';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding1" element={<Onboarding1 />} />
        <Route path="/onboarding2" element={<Onboarding2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sessionover" element={<SessionComplete />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/contentlibrary" element={<ContentLibrary />} />
        <Route path="/settings" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
