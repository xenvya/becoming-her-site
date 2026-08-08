import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'

const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const AccessibilityPage = lazy(() => import('./pages/AccessibilityPage').then((module) => ({ default: module.AccessibilityPage })))
const ApplyPage = lazy(() => import('./pages/ApplyPage').then((module) => ({ default: module.ApplyPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })))
const DonatePage = lazy(() => import('./pages/DonatePage').then((module) => ({ default: module.DonatePage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((module) => ({ default: module.PrivacyPage })))
const ProgramsPage = lazy(() => import('./pages/ProgramsPage').then((module) => ({ default: module.ProgramsPage })))
const SafetyPage = lazy(() => import('./pages/SafetyPage').then((module) => ({ default: module.SafetyPage })))
const TeamPage = lazy(() => import('./pages/TeamPage').then((module) => ({ default: module.TeamPage })))

function PageLoader() {
  return <div className="page-loader" role="status"><span>Loading page</span></div>
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="programs" element={<ProgramsPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="apply" element={<ApplyPage />} />
            <Route path="donate" element={<DonatePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="safety" element={<SafetyPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="accessibility" element={<AccessibilityPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
