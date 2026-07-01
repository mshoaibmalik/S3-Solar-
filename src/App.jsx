  import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SplitNav } from './components/layout/SplitNav';
import { Footer } from './components/layout/Footer';
import { PageTransition } from './components/PageTransition';
import { useScrollToTop } from './hooks/useScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import ResidentialOverview from './pages/residential/Overview';
import HybridSystems from './pages/residential/HybridSystems';
import NetBilling from './pages/residential/NetBilling';
import CalculatorPage from './pages/residential/Calculator';

import CommercialOverview from './pages/commercial/Overview';
import Solutions from './pages/commercial/Solutions';
import CaseStudies from './pages/commercial/CaseStudies';

import LearningCenter from './pages/learning-center/Index';
import NetBillingExplained from './pages/learning-center/NetBillingExplained';
import Tier1PanelsVsCounterfeits from './pages/learning-center/Tier1PanelsVsCounterfeits';
import StringVsMicroinverters from './pages/learning-center/StringVsMicroinverters';

export default function App() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-700 font-body antialiased">
      <SplitNav />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

          {/* Residential */}
          <Route path="/residential/overview" element={<PageTransition><ResidentialOverview /></PageTransition>} />
          <Route path="/residential/hybrid-systems" element={<PageTransition><HybridSystems /></PageTransition>} />
          <Route path="/residential/net-billing" element={<PageTransition><NetBilling /></PageTransition>} />
          <Route path="/residential/calculator" element={<PageTransition><CalculatorPage /></PageTransition>} />

          {/* Commercial */}
          <Route path="/commercial/overview" element={<PageTransition><CommercialOverview /></PageTransition>} />
          <Route path="/commercial/solutions" element={<PageTransition><Solutions /></PageTransition>} />
          <Route path="/commercial/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />

          {/* Learning Center */}
          <Route path="/learning-center" element={<PageTransition><LearningCenter /></PageTransition>} />
          <Route path="/learning-center/net-billing-explained" element={<PageTransition><NetBillingExplained /></PageTransition>} />
          <Route path="/learning-center/tier-1-panels-vs-counterfeits" element={<PageTransition><Tier1PanelsVsCounterfeits /></PageTransition>} />
          <Route path="/learning-center/string-vs-microinverters" element={<PageTransition><StringVsMicroinverters /></PageTransition>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}