import image_f47276e688678a84cdbc9054b14f1ee3c86ca640 from 'figma:asset/f47276e688678a84cdbc9054b14f1ee3c86ca640.png';
import mangroveInfoImage from 'figma:asset/74fee26769207bbd5818ce3842678878a4c2cd09.png';
import mobileApp1 from 'figma:asset/9a32d3ad31a4c76f508edbdd2eef02952be9d417.png';
import mobileApp2 from 'figma:asset/0475ce54d9a574345773d22df429d6b19bc62eb3.png';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { NGOPortal } from './components/NGOPortal';
import { AdminPortal } from './components/AdminPortal';
import { InvestorPortal } from './components/InvestorPortal';
import { LoginModal } from './components/LoginModal';
import { RegistrationModal } from './components/RegistrationModal';
import { Button } from './components/ui/button';
import { Leaf, Shield, TrendingUp, Users, CheckCircle, Satellite, Award, Smartphone, Camera, Bell, MapPin } from 'lucide-react';

type PortalType = 'select' | 'ngo' | 'admin' | 'investor';
type AuthState = {
  isAuthenticated: boolean;
  userType: PortalType | null;
  user: {
    username: string;
    walletAddress?: string;
  } | null;
};

export default function App() {
  const [selectedPortal, setSelectedPortal] = useState<PortalType>('select');
  const [showNavModal, setShowNavModal] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');
  const [appReady, setAppReady] = useState(false);
  
  // Authentication state
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    userType: null,
    user: null
  });
  
  // Modal state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [pendingPortalType, setPendingPortalType] = useState<PortalType | null>(null);

  // Instant app initialization
  useEffect(() => {
    setAppReady(true);
  }, []);

  // Note: MetaMask connection is now handled in LoginModal

  // Authentication handlers
  const handlePortalClick = (portalType: PortalType) => {
    if (authState.isAuthenticated && authState.userType === portalType) {
      // Already authenticated for this portal
      setSelectedPortal(portalType);
    } else {
      // Need to authenticate
      setPendingPortalType(portalType);
      setShowLoginModal(true);
    }
  };

  const handleLoginSuccess = (walletAddress: string) => {
    if (pendingPortalType) {
      setAuthState({
        isAuthenticated: true,
        userType: pendingPortalType,
        user: {
          username: `${pendingPortalType}_user`, // Mock user
          walletAddress: walletAddress // Wallet address from LoginModal
        }
      });
      setSelectedPortal(pendingPortalType);
      setShowLoginModal(false);
      setPendingPortalType(null);
    }
  };

  const handleRegistrationSuccess = async () => {
    setShowRegistrationModal(false);
    if (pendingPortalType) {
      // For registration, we'll use the demo address as fallback
      // since RegistrationModal doesn't have MetaMask integration yet
      setAuthState({
        isAuthenticated: true,
        userType: pendingPortalType,
        user: {
          username: `${pendingPortalType}_user`, // Mock user
          walletAddress: '0x742d35Cc...8B9C4A' // Demo address for registration
        }
      });
      setSelectedPortal(pendingPortalType);
      setPendingPortalType(null);
    }
  };

  const handleLogout = () => {
    setAuthState({
      isAuthenticated: false,
      userType: null,
      user: null
    });
    setSelectedPortal('select');
  };

  const handleShowRegistration = () => {
    setShowLoginModal(false);
    setShowRegistrationModal(true);
  };

  const handleBackToLogin = () => {
    setShowRegistrationModal(false);
    setShowLoginModal(true);
  };

  if (selectedPortal === 'select') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Hero Section with Background */}
        <div 
          className="min-h-screen relative"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-white/10"></div>
        {/* Navigation Bar */}
        <nav className="relative z-10 pt-4 md:pt-8 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald-500/20 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={image_f47276e688678a84cdbc9054b14f1ee3c86ca640} 
                    alt="Coastly Logo" 
                    className="w-12 h-12 md:w-20 md:h-20 object-cover"
                  />
                </div>
              </div>
              
              {/* Navigation Items - Centered */}
              <div className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-8">
                <button 
                  onClick={() => {
                    setActiveNavItem('Home');
                    setShowNavModal(true);
                  }}
                  className="text-white hover:text-white/80 transition-colors px-3 lg:px-6 py-2 rounded-full bg-white/20 text-sm lg:text-base"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    setActiveNavItem('Contact');
                    setShowNavModal(true);
                  }}
                  className="text-white/70 hover:text-white transition-colors px-3 lg:px-6 py-2 rounded-full hover:bg-white/10 text-sm lg:text-base"
                >
                  Contact
                </button>
                <button 
                  onClick={() => {
                    setActiveNavItem('History');
                    setShowNavModal(true);
                  }}
                  className="text-white/70 hover:text-white transition-colors px-3 lg:px-6 py-2 rounded-full hover:bg-white/10 text-sm lg:text-base"
                >
                  History
                </button>
                <button 
                  onClick={() => {
                    setActiveNavItem('About Us');
                    setShowNavModal(true);
                  }}
                  className="text-white/70 hover:text-white transition-colors px-3 lg:px-6 py-2 rounded-full hover:bg-white/10 text-sm lg:text-base"
                >
                  About Us
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => {
                  setActiveNavItem('Home');
                  setShowNavModal(true);
                }}
                className="md:hidden text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-200px)] px-4 md:px-8 py-8 lg:py-0">
          {/* Left Side - Title */}
          <div className="flex-1 w-full lg:max-w-xl text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-white leading-tight" style={{ 
              color: 'rgba(255, 255, 255, 1.0)',
              textShadow: '0 8px 13px rgba(255, 255, 255, 0.25)',
              fontFamily: '"Zen Dots", monospace, sans-serif',
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}>
              Coastly
            </h1>
          </div>

          {/* Right Side - Portal Buttons */}
          <div className="flex-1 flex items-center justify-center lg:justify-end lg:pr-16 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-sm lg:max-w-none">
              {/* Admin Portal */}
              <div 
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 backdrop-blur-md bg-white/15 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all duration-300 hover:scale-110"
                onClick={() => handlePortalClick('admin')}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-white mb-1">A</div>
                  <div className="text-xs sm:text-sm text-white/80">Admin</div>
                </div>
              </div>

              {/* Buyer Portal */}
              <div 
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 backdrop-blur-md bg-white/15 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all duration-300 hover:scale-110"
                onClick={() => handlePortalClick('investor')}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-white mb-1">B</div>
                  <div className="text-xs sm:text-sm text-white/80">Buyers</div>
                </div>
              </div>

              {/* NGO Portal with Icon */}
              <div 
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 backdrop-blur-md bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500/30 transition-all duration-300 hover:scale-110 relative z-10"
              >
                <img 
                  src={image_f47276e688678a84cdbc9054b14f1ee3c86ca640} 
                  alt="NGO Portal - Coastal Restoration" 
                  className="w-full h-full object-cover rounded-full"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* NGO Portal with Letter */}
              <div 
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 backdrop-blur-md bg-white/15 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all duration-300 hover:scale-110"
                onClick={() => handlePortalClick('ngo')}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl text-white mb-1">N</div>
                  <div className="text-xs sm:text-sm text-white/80">NGO</div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Bottom Text */}
          <div className="relative z-10 text-center pb-4 md:pb-8 px-4">
            <h2 className="text-lg sm:text-xl lg:text-2xl text-white/90" style={{ 
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Secure Blockchain-Verified Access
            </h2>
            <p className="text-white/70 text-xs sm:text-sm mt-2">
              MetaMask + Traditional Authentication Required
            </p>
            
            {/* Scroll indicator */}
            <div className="mt-8 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <p className="text-xs text-white/60 mt-1">Scroll for more</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div className="relative bg-white">
          {/* Why Coastly Section */}
          <div className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl text-gray-900 mb-8 font-bold">
                  Why Coastly?
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                  Coastly bridges the gap between environmental and technology, providing transparent, 
                  Monitoring Reporting Verifiable, and scalable solutions for coastal ecosystem recovery across Indian states.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-emerald-200">
                  <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-900 mb-6 font-bold">Verified Projects</h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    All projects are verified by marine scientists and certified through international standards using AI and satellite monitoring.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-900 mb-6 font-bold">Measurable Impact</h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Real-time tracking of CO₂ absorption, biodiversity restoration, and community benefits through blockchain technology.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-10 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-200">
                  <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-gray-900 mb-6 font-bold">Community Support</h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Direct support to coastal communities through sustainable livelihood programs and local capacity building.
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* What are Carbon Credits Section */}
          <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl text-gray-900 mb-8 font-bold">
                  What are Carbon Credits?
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                  Carbon credits represent one metric ton of CO₂ equivalent removed from or not emitted to the atmosphere. 
                  Our blockchain-verified credits ensure transparency and trust in environmental impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-emerald-200">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mr-8 shadow-lg">
                      <Leaf className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl text-gray-900 font-bold">How It Works</h3>
                  </div>
                  <ul className="text-lg md:text-xl text-gray-700 space-y-4 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3 mt-1">•</span>
                      <span>NGOs implement verified restoration projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3 mt-1">•</span>
                      <span>AI monitors progress through satellite data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3 mt-1">•</span>
                      <span>Government verifies and issues NFT certificates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-3 mt-1">•</span>
                      <span>Buyers purchase authenticated carbon credits</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mr-8 shadow-lg">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl text-gray-900 font-bold">Our Advantage</h3>
                  </div>
                  <ul className="text-lg md:text-xl text-gray-700 space-y-4 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span>Blockchain verification ensures authenticity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span>Real-time satellite monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span>Direct community impact tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span>Government-backed certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Section */}
          <div className="py-24 px-4 md:px-8 bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl text-gray-900 mb-8 font-bold">
                  Coastly Mobile App
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                  Experience real-time coastal restoration monitoring on the go. Our mobile app enables NGOs 
                  to capture geo-tagged plant photos, track progress, and receive instant updates from restoration sites 
                  across Indian coastal regions. It ensures transparency, accuracy, and accountability in measuring carbon sequestration efforts.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Features */}
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mr-6 shadow-lg">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl text-gray-900 font-bold">Real-Time Plant Capture</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Capture and upload plant photos instantly with GPS coordinates and timestamp verification. AI analyzes growth patterns and species identification automatically.
                    </p>
                  </div>



                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-200">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mr-6 shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl text-gray-900 font-bold">GPS-Enabled Tracking</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Precise location tracking for all restoration activities with offline capability for remote coastal areas. Sync automatically when connection returns.
                    </p>
                  </div>
                </div>

                {/* Right Side - Mobile Mockups */}
                <div className="relative flex justify-center items-center">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
                  
                  {/* Mobile Phone 1 - Animated */}
                  <div className="relative z-10 transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110">
                    <div className="w-64 md:w-80 bg-black rounded-3xl p-2 shadow-2xl">
                      <div className="bg-white rounded-2xl overflow-hidden">
                        <img 
                          src={mobileApp1} 
                          alt="Coastly Mobile App - Capture Plant Photo" 
                          className="w-full h-auto object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Phone 2 - Animated */}
                  <div className="relative z-20 transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110 -ml-20">
                    <div className="w-64 md:w-80 bg-black rounded-3xl p-2 shadow-2xl">
                      <div className="bg-white rounded-2xl overflow-hidden">
                        <img 
                          src={mobileApp2} 
                          alt="Coastly Mobile App - NGO Login" 
                          className="w-full h-auto object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements - Animated */}
                  <div className="absolute top-10 left-10 w-16 h-16 bg-emerald-500/20 rounded-full animate-bounce delay-100 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="absolute bottom-10 right-10 w-12 h-12 bg-blue-500/20 rounded-full animate-bounce delay-300 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute top-1/2 right-0 w-14 h-14 bg-teal-500/20 rounded-full animate-bounce delay-500 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-teal-600" />
                  </div>
                </div>
              </div>

              {/* App Benefits Grid */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Regular Plant Updates</h4>
                  <p className="text-gray-700">Periodic manual verification and time-to-time updates ensure accurate plant growth tracking and restoration progress monitoring.</p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Satellite className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">AI-Powered</h4>
                  <p className="text-gray-700">Advanced AI analyzes for instant species identification and health assessment.</p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h4>
                  <p className="text-gray-700">Connect with other NGOs and share restoration progress across India.</p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Verified Data</h4>
                  <p className="text-gray-700">All captured data is blockchain-verified and government-certified for authenticity.</p>
                </div>
              </div>


            </div>
          </div>

          {/* Call to Action Section */}
          <div className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-5xl mx-auto text-center">
              <h3 className="text-3xl md:text-5xl text-gray-900 mb-8 font-bold">
                Ready to Make an Impact?
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
                Join the Coastly ecosystem and be part of the solution for coastal restoration across India. 
                Choose your portal and start making a difference today.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <button 
                  onClick={() => handlePortalClick('ngo')}
                  className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-2xl text-white text-xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg"
                >
                  NGO Portal
                </button>
                <button 
                  onClick={() => handlePortalClick('admin')}
                  className="px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl text-white text-xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg"
                >
                  Government Portal
                </button>
                <button 
                  onClick={() => handlePortalClick('investor')}
                  className="px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-2xl text-white text-xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg"
                >
                  Buyer Portal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Modal */}
        {showNavModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setShowNavModal(false)}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto">
              {/* Navigation Bar (repeated at top of modal) */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 md:px-8 py-3 md:py-4 flex justify-between items-center mb-4 md:mb-6">
                {/* Logo */}
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-emerald-500/20 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={image_f47276e688678a84cdbc9054b14f1ee3c86ca640} 
                      alt="Coastly Logo" 
                      className="w-12 h-12 md:w-20 md:h-20 object-cover"
                    />
                  </div>
                </div>
                
                {/* Navigation Items */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-8 flex-1 mx-4">
                  <button 
                    onClick={() => setActiveNavItem('Home')}
                    className={`transition-colors px-3 md:px-6 py-2 rounded-full text-sm md:text-base ${
                      activeNavItem === 'Home' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => setActiveNavItem('Contact')}
                    className={`transition-colors px-3 md:px-6 py-2 rounded-full text-sm md:text-base ${
                      activeNavItem === 'Contact' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Contact
                  </button>
                  <button 
                    onClick={() => setActiveNavItem('History')}
                    className={`transition-colors px-3 md:px-6 py-2 rounded-full text-sm md:text-base ${
                      activeNavItem === 'History' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    History
                  </button>
                  <button 
                    onClick={() => setActiveNavItem('About Us')}
                    className={`transition-colors px-3 md:px-6 py-2 rounded-full text-sm md:text-base ${
                      activeNavItem === 'About Us' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    About Us
                  </button>
                </div>
                
                {/* Close button visible on mobile */}
                <button 
                  onClick={() => setShowNavModal(false)}
                  className="md:hidden text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content Card */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/25 via-white/15 to-white/10 border-2 border-white/40 rounded-2xl md:rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px] shadow-2xl shadow-black/30 ring-1 ring-white/30">
                {/* Enhanced overlay for content readability */}
                <div className="p-4 md:p-8 min-h-[400px] md:min-h-[500px] flex flex-col bg-gradient-to-b from-transparent via-black/5 to-black/10">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <h2 className="text-xl md:text-3xl text-white" style={{ 
                      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                    }}>
                      {activeNavItem}
                    </h2>
                    <button 
                      onClick={() => setShowNavModal(false)}
                      className="hidden md:block text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1 text-white">
                    {activeNavItem === 'Home' && (
                      <div className="space-y-8 md:space-y-12 max-h-[70vh] overflow-y-auto pr-2">
                        {/* Hero Section */}
                        <div className="text-center space-y-4">
                          <p className="text-lg md:text-2xl text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                            Welcome to The Bit Ninjas Coastly Platform
                          </p>
                          <p className="text-sm md:text-lg text-white/80" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                            Revolutionizing coastal restoration through AI, blockchain, and satellite monitoring
                          </p>
                        </div>

                        {/* Why Coastly Section */}
                        <div className="space-y-6">
                          <div className="text-center">
                            <h2 className="text-2xl md:text-4xl text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                              Why Coastly?
                            </h2>
                            <p className="text-sm md:text-lg text-white/80 max-w-4xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                              Coastly bridges the gap between environmental restoration and technology, providing transparent, 
                              verifiable, and scalable solutions for coastal ecosystem recovery across Indian states.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 text-center">
                              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-emerald-400" />
                              </div>
                              <h3 className="text-lg md:text-xl text-white mb-3">Verified Projects</h3>
                              <p className="text-sm md:text-base text-white/80">
                                All projects are verified by marine scientists and certified through international standards using AI and satellite monitoring.
                              </p>
                            </div>

                            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 text-center">
                              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-blue-400" />
                              </div>
                              <h3 className="text-lg md:text-xl text-white mb-3">Measurable Impact</h3>
                              <p className="text-sm md:text-base text-white/80">
                                Real-time tracking of CO₂ absorption, biodiversity restoration, and community benefits through blockchain technology.
                              </p>
                            </div>

                            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 text-center">
                              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-purple-400" />
                              </div>
                              <h3 className="text-lg md:text-xl text-white mb-3">Community Support</h3>
                              <p className="text-sm md:text-base text-white/80">
                                Direct support to coastal communities through sustainable livelihood programs and local capacity building.
                              </p>
                            </div>
                          </div>
                        </div>

                    
                        {/* What are Carbon Credits Section */}
                        <div className="space-y-6">
                          <div className="text-center">
                            <h2 className="text-2xl md:text-4xl text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                              What are Carbon Credits?
                            </h2>
                            <p className="text-sm md:text-lg text-white/80 max-w-4xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                              Carbon credits represent one metric ton of CO₂ equivalent removed from or not emitted to the atmosphere. 
                              Our blockchain-verified credits ensure transparency and trust in environmental impact.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                              <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4">
                                  <Leaf className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-lg md:text-xl text-white">How It Works</h3>
                              </div>
                              <ul className="text-sm md:text-base text-white/80 space-y-2">
                                <li>• NGOs implement verified restoration projects</li>
                                <li>• AI monitors progress through satellite data</li>
                                <li>• Government verifies and issues NFT certificates</li>
                                <li>• Buyers purchase authenticated carbon credits</li>
                              </ul>
                            </div>

                            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                              <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                                  <Award className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-lg md:text-xl text-white">Our Advantage</h3>
                              </div>
                              <ul className="text-sm md:text-base text-white/80 space-y-2">
                                <li>• Blockchain verification ensures authenticity</li>
                                <li>• Real-time satellite monitoring</li>
                                <li>• Direct community impact tracking</li>
                                <li>• Government-backed certification</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center space-y-4 py-8">
                          <h3 className="text-xl md:text-2xl text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                            Ready to Make an Impact?
                          </h3>
                          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                            Join the Coastly ecosystem and be part of the solution for coastal restoration across India. 
                            Choose your portal and start making a difference today.
                          </p>
                          <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <button 
                              onClick={() => {
                                setShowNavModal(false);
                                handlePortalClick('ngo');
                              }}
                              className="px-6 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 rounded-full text-white transition-all duration-300"
                            >
                              NGO Portal
                            </button>
                            <button 
                              onClick={() => {
                                setShowNavModal(false);
                                handlePortalClick('admin');
                              }}
                              className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/40 rounded-full text-white transition-all duration-300"
                            >
                              Government Portal
                            </button>
                            <button 
                              onClick={() => {
                                setShowNavModal(false);
                                handlePortalClick('investor');
                              }}
                              className="px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 rounded-full text-white transition-all duration-300"
                            >
                              Buyer Portal
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeNavItem === 'Contact' && (
                      <div className="space-y-4 md:space-y-6">
                        <p className="text-sm md:text-lg text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                          Get in touch with our team
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 md:p-6 border border-white/20">
                            <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4">Contact Information</h3>
                            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-white/80">
                              <p>Email: contact@bitninjas.com</p>
                              <p>Phone: +91 1234567891</p>
                              <p>Address:Harohalli Bengaluru Karnataka India</p>
                            </div>
                          </div>
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 md:p-6 border border-white/20">
                            <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4">Support</h3>
                            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-white/80">
                              <p>Technical Support: support@bitninjas.com</p>
                              <p>Business Hours: Mon-Fri 9AM-6PM IST</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeNavItem === 'History' && (
                      <div className="space-y-4 md:space-y-6">
                        <p className="text-sm md:text-lg text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                          Our Journey in Coastal Restoration Technology
                        </p>
                        <div className="space-y-3 md:space-y-4">
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 md:p-6 border border-white/20">
                            <h3 className="text-lg md:text-xl text-white mb-2">2025 - Platform Launch</h3>
                            <p className="text-sm md:text-base text-white/80">
                              Launched the Coastly platform with AI verification and blockchain integration.
                            </p>
                          </div>
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 md:p-6 border border-white/20">
                            <h3 className="text-lg md:text-xl text-white mb-2">2024 - Development Phase</h3>
                            <p className="text-sm md:text-base text-white/80">
                              Built partnerships with NGOs and developed satellite monitoring capabilities.
                            </p>
                          </div>
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 md:p-6 border border-white/20">
                            <h3 className="text-lg md:text-xl text-white mb-2">2023 - Foundation</h3>
                            <p className="text-sm md:text-base text-white/80">
                              The Bit Ninjas was founded with a vision to revolutionize coastal restoration tracking.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeNavItem === 'About Us' && (
                      <div className="space-y-4 md:space-y-6">
                        <p className="text-sm md:text-lg text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                          The Bit Ninjas - Coastly Team
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 md:p-6 border border-white/20">
                            <h3 className="text-lg md:text-xl text-white mb-2 md:mb-3">Our Vision</h3>
                            <p className="text-sm md:text-base text-white/80">
                              To create a transparent, AI-driven ecosystem that accelerates global coastal restoration efforts through technology and blockchain verification.
                            </p>
                          </div>
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 md:p-6 border border-white/20">
                            <h3 className="text-lg md:text-xl text-white mb-2 md:mb-3">Our Values</h3>
                            <ul className="text-sm md:text-base text-white/80 space-y-1 md:space-y-2">
                              <li>• Transparency in coastal restoration</li>
                              <li>• AI-powered verification</li>
                              <li>• Sustainable technology solutions</li>
                              <li>• Global environmental impact</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Login Modal */}
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => {
            setShowLoginModal(false);
            setPendingPortalType(null);
          }}
          portalType={pendingPortalType as 'admin' | 'ngo' | 'investor'}
          onLoginSuccess={handleLoginSuccess}
          onShowRegistration={handleShowRegistration}
        />

        {/* Registration Modal */}
        <RegistrationModal
          isOpen={showRegistrationModal}
          onClose={() => {
            setShowRegistrationModal(false);
            setPendingPortalType(null);
          }}
          onBackToLogin={handleBackToLogin}
          onRegistrationSuccess={handleRegistrationSuccess}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#013220' }}>
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 p-3 md:p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-emerald-500/20 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={image_f47276e688678a84cdbc9054b14f1ee3c86ca640} 
                alt="Coastly Logo" 
                className="w-10 h-10 md:w-15 md:h-15 object-cover"
              />
            </div>
            <span className="text-white text-lg md:text-xl truncate">Coastly</span>
            {authState.user && (
              <div className="ml-2 md:ml-4 flex items-center gap-1 md:gap-2 min-w-0">
                <span className="text-white/70 text-xs md:text-sm">•</span>
                <span className="text-emerald-400 text-xs md:text-sm truncate">{authState.user.username}</span>
                {authState.user.walletAddress && (
                  <span className="hidden sm:block text-white/60 text-xs font-mono truncate">
                    {authState.user.walletAddress}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className="text-white hover:bg-white/10 text-xs md:text-sm px-2 md:px-4 py-1 md:py-2"
            >
              Logout
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setSelectedPortal('select')}
              className="text-white hover:bg-white/10 text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 hidden sm:flex"
            >
              Switch Portal
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setSelectedPortal('select')}
              className="text-white hover:bg-white/10 text-xs px-2 py-1 sm:hidden"
            >
              Switch
            </Button>
          </div>
        </div>
      </nav>
      
      <div className="p-3 md:p-6" style={{ backgroundColor: '#ffffff', color: '#00000' }}>
        {selectedPortal === 'ngo' && <NGOPortal />}
        {selectedPortal === 'admin' && <AdminPortal walletAddress={authState.user?.walletAddress} />}
        {selectedPortal === 'investor' && <InvestorPortal />}
      </div>
    </div>
  );
}