/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Pricing from './components/Pricing';
import Access from './components/Access';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Pricing />
        <Access />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
