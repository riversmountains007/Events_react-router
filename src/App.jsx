import { Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import EventsList from './pages/EventsList'
import EventDetail from './pages/EventDetail'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import DashboardLayout from './pages/DashboardLayout'
import DashboardProfile from './pages/DashboardProfile'
import DashboardEvents from './pages/DashboardEvents'
import DashboardSettings from './pages/DashboardSettings'
import RequireAuth from './components/requireAuth'
import BgChanger from './pages/BgChanger'

function App() {
  
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='events' element = {<EventsList/>} />
        <Route path='events/:eventId' element={<EventDetail />} />
        <Route path='login' element={<Login />} />

        <Route element= {<RequireAuth />}>
          <Route path='dashboard' element={<DashboardLayout />} >
              <Route index element={<DashboardProfile />} />
              <Route path='events' element={<DashboardEvents />} />
              <Route path='settings' element={<DashboardSettings />} />
            </Route>
        </Route>

        <Route path='/bgchanger' element = {<BgChanger/>} />
        
        

        <Route path='*' element = {<NotFound/>} />
        
      </Route>
    </Routes>
  )
}

export default App
