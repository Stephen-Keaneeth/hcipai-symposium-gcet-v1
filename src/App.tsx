/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SchedulePage } from './pages/SchedulePage';
import { PanelMembersPage } from './pages/PanelMembersPage';
import { OrganizingCommitteePage } from './pages/OrganizingCommitteePage';
import { VenueContactPage } from './pages/VenueContactPage';

export default function App() {
  const getInitialRoute = (): RoutePath => {
    const path = window.location.pathname;
    if (path === '/schedule') return '/schedule';
    if (path === '/panel-members') return '/panel-members';
    if (path === '/organizing-committee') return '/organizing-committee';
    if (path === '/venue-contact') return '/venue-contact';
    return '/home';
  };

  const [currentPath, setCurrentPath] = useState<RoutePath>(getInitialRoute);

  // Sync route on mount and browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);

    // If initial is root '/', sync URL to '/home'
    if (window.location.pathname === '/' || window.location.pathname === '') {
      window.history.replaceState({}, '', '/home');
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigate = (path: RoutePath) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/schedule':
        return <SchedulePage onNavigate={handleNavigate} />;
      case '/panel-members':
        return <PanelMembersPage onNavigate={handleNavigate} />;
      case '/organizing-committee':
        return <OrganizingCommitteePage onNavigate={handleNavigate} />;
      case '/venue-contact':
        return <VenueContactPage onNavigate={handleNavigate} />;
      case '/home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#111c2d] selection:bg-[#e6b9de] selection:text-[#51304e]">
      {/* Global Shared Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Shared Footer */}
      <Footer
        onNavigate={handleNavigate}
      />
    </div>
  );
}
