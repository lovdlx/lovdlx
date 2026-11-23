import { useCallback, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { SidebarDesktop } from './components/SidebarDesktop';
import { HeaderMobile } from './components/HeaderMobile';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { VisualDiaryPage } from './pages/VisualDiaryPage';

function AppShell() {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const resetScrollRef = useRef<() => void>(() => {});

  const registerScrollReset = useCallback((fn: () => void) => {
    resetScrollRef.current = fn;
  }, []);

  const isHome = location.pathname === '/';

  return (
    <>
      <SidebarDesktop
        isCollapsed={isHome && sidebarCollapsed}
        onExpandRequest={() => resetScrollRef.current()}
      />
      <HeaderMobile />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onScrollCollapseChange={setSidebarCollapsed}
              registerScrollReset={registerScrollReset}
            />
          }
        />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/visual-diary" element={<VisualDiaryPage />} />
        <Route
          path="*"
          element={
            <HomePage
              onScrollCollapseChange={setSidebarCollapsed}
              registerScrollReset={registerScrollReset}
            />
          }
        />
      </Routes>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  );
}
