import image_f47276e688678a84cdbc9054b14f1ee3c86ca640 from 'figma:asset/f47276e688678a84cdbc9054b14f1ee3c86ca640.png';

import React, { useState, useEffect } from 'react';
import { NGOPortal } from './components/NGOPortal';
import { AdminPortal } from './components/AdminPortal';
import { InvestorPortal } from './components/InvestorPortal';
import { LoginModal } from './components/LoginModal';
import { RegistrationModal } from './components/RegistrationModal';
import { Button } from './components/ui/button';
import { Leaf } from 'lucide-react';

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

  const handleLoginSuccess = (address: string) => {
    if (pendingPortalType) {
      setAuthState({
        isAuthenticated: true,
        userType: pendingPortalType,
        user: {
          username: `${pendingPortalType}_user`,
          walletAddress: address, // use real address
        },
      });
      setSelectedPortal(pendingPortalType);
      setShowLoginModal(false);
      setPendingPortalType(null);
    }
  };

  const handleRegistrationSuccess = () => {
    setShowRegistrationModal(false);
    if (pendingPortalType) {
      setAuthState({
        isAuthenticated: true,
        userType: pendingPortalType,
        user: {
          username: `${pendingPortalType}_user`, // Mock user
          walletAddress: '0x742d...9C4A' // Mock wallet
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
      <div 
        className="min-h-screen relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.3)',
          transformOrigin: 'top left',
          width: '76.92%',
          height: '76.92%'
        }}
      >
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/10"></div>
        {/* Navigation Bar */}
        <nav className="relative z-10 pt-8 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-4 flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={image_f47276e688678a84cdbc9054b14f1ee3c86ca640} 
                    alt="Coastly Logo" 
                    className="w-20 h-20 object-cover"
                  />
                </div>
              </div>
              
              {/* Navigation Items */}
              <div className="flex space-x-8">
                <button 
                  onClick={() => {
                    setActiveNavItem('Home');
                    setShowNavModal(true);
                  }}
                  className="text-white hover:text-white/80 transition-colors px-6 py-2 rounded-full bg-white/20"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    setActiveNavItem('Contact');
                    setShowNavModal(true);
                  }}
                  className="text-white/70 hover:text-white transition-colors px-6 py-2 rounded-full hover:bg-white/10"
                >
                  Contact
                </button>
                <button 
                  onClick={() => {
                    setActiveNavItem('History');
                    setShowNavModal(true);
                  }}
                  className="text-white/70 hover:text-white transition-colors px-6 py-2 rounded-full hover:bg-white/10"
                >
                  History
                </button>
                <button 
                  onClick={() => {
                    setActiveNavItem('About Us');
                    setShowNavModal(true);
                  }}
                  className="text-white/70 hover:text-white transition-colors px-6 py-2 rounded-full hover:bg-white/10"
                >
                  About Us
                </button>
              </div>
              
              {/* Empty div for balance */}
              <div className="w-12"></div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-between min-h-[calc(100vh-200px)] px-8">
          {/* Left Side - Title */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-8xl text-white leading-tight" style={{ 
              color: 'rgba(255, 255, 255, 1.0)',
              textShadow: '0 8px 13px rgba(255, 255, 255, 0.25)',
              fontFamily: '"Zen Dots", monospace, sans-serif',
              fontSize: '96px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}>
              Coastly
            </h1>
          </div>

          {/* Right Side - Portal Buttons */}
          <div className="flex-1 flex items-center justify-end pr-16">
            <div className="grid grid-cols-2 gap-8">
              {/* Admin Portal */}
              <div 
                className="w-32 h-32 backdrop-blur-md bg-white/15 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all duration-300 hover:scale-110"
                onClick={() => handlePortalClick('admin')}
              >
                <div className="text-center">
                  <div className="text-4xl text-white mb-1">A</div>
                  <div className="text-sm text-white/80">Admin</div>
                </div>
              </div>

              {/* Investor/Buyers Portal */}
              <div 
                className="w-32 h-32 backdrop-blur-md bg-white/15 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all duration-300 hover:scale-110"
                onClick={() => handlePortalClick('investor')}
              >
                <div className="text-center">
                  <div className="text-4xl text-white mb-1">B</div>
                  <div className="text-sm text-white/80">Buyers</div>
                </div>
              </div>

              {/* NGO Portal with Icon */}
              <div 
                className="w-32 h-32 backdrop-blur-md bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500/30 transition-all duration-300 hover:scale-110 relative z-10"
                onClick={() => handlePortalClick('ngo')}
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
                className="w-32 h-32 backdrop-blur-md bg-white/15 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all duration-300 hover:scale-110"
                onClick={() => handlePortalClick('ngo')}
              >
                <div className="text-center">
                  <div className="text-4xl text-white mb-1">N</div>
                  <div className="text-sm text-white/80">NGO</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="relative z-10 text-center pb-8">
          <h2 className="text-2xl text-white/90" style={{ 
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Secure Blockchain-Verified Access
          </h2>
          <p className="text-white/70 text-sm mt-2">
            MetaMask + Traditional Authentication Required
          </p>
        </div>

        {/* Navigation Modal */}
        {showNavModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-8">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setShowNavModal(false)}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-6xl">
              {/* Navigation Bar (repeated at top of modal) */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-4 flex justify-between items-center mb-6">
                {/* Logo */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={image_f47276e688678a84cdbc9054b14f1ee3c86ca640} 
                      alt="Coastly Logo" 
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                </div>
                
                {/* Navigation Items */}
                <div className="flex space-x-8">
                  <button 
                    onClick={() => setActiveNavItem('Home')}
                    className={`transition-colors px-6 py-2 rounded-full ${
                      activeNavItem === 'Home' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => setActiveNavItem('Contact')}
                    className={`transition-colors px-6 py-2 rounded-full ${
                      activeNavItem === 'Contact' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Contact
                  </button>
                  <button 
                    onClick={() => setActiveNavItem('History')}
                    className={`transition-colors px-6 py-2 rounded-full ${
                      activeNavItem === 'History' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    History
                  </button>
                  <button 
                    onClick={() => setActiveNavItem('About Us')}
                    className={`transition-colors px-6 py-2 rounded-full ${
                      activeNavItem === 'About Us' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    About Us
                  </button>
                </div>
                
                {/* Empty div for balance */}
                <div className="w-12"></div>
              </div>

              {/* Modal Content Card */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/25 via-white/15 to-white/10 border-2 border-white/40 rounded-3xl overflow-hidden min-h-[500px] shadow-2xl shadow-black/30 ring-1 ring-white/30">
                {/* Enhanced overlay for content readability */}
                <div className="p-8 min-h-[500px] flex flex-col bg-gradient-to-b from-transparent via-black/5 to-black/10">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl text-white" style={{ 
                      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                    }}>
                      {activeNavItem}
                    </h2>
                    <button 
                      onClick={() => setShowNavModal(false)}
                      className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1 text-white">
                    {activeNavItem === 'Home' && (
                      <div className="space-y-6">
                        <p className="text-lg text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                          Welcome to The Bit Ninjas Coastly Platform
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                            <h3 className="text-xl text-white mb-3">Our Mission</h3>
                            <p className="text-white/80">
                              Connecting NGOs, government officials, and investors through AI-powered coastal restoration verification and blockchain technology.
                            </p>
                          </div>
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                            <h3 className="text-xl text-white mb-3">Technology</h3>
                            <p className="text-white/80">
                              Advanced satellite monitoring, AI verification, and NFT certificates for transparent coastal restoration tracking.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeNavItem === 'Contact' && (
                      <div className="space-y-6">
                        <p className="text-lg text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                          Get in touch with our team
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                            <h3 className="text-xl text-white mb-4">Contact Information</h3>
                            <div className="space-y-3 text-white/80">
                              <p>Email: contact@bitninjas.com</p>
                              <p>Phone: +1 (555) 123-4567</p>
                              <p>Address: 123 Coastal Tech Ave, Bay City</p>
                            </div>
                          </div>
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                            <h3 className="text-xl text-white mb-4">Support</h3>
                            <div className="space-y-3 text-white/80">
                              <p>Technical Support: support@bitninjas.com</p>
                              <p>Partnership Inquiries: partners@bitninjas.com</p>
                              <p>Business Hours: Mon-Fri 9AM-6PM EST</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeNavItem === 'History' && (
                      <div className="space-y-6">
                        <p className="text-lg text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                          Our Journey in Coastal Restoration Technology
                        </p>
                        <div className="space-y-4">
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                            <h3 className="text-xl text-white mb-2">2025 - Platform Launch</h3>
                            <p className="text-white/80">
                              Launched the Coastly platform with AI verification and blockchain integration.
                            </p>
                          </div>
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                            <h3 className="text-xl text-white mb-2">2024 - Development Phase</h3>
                            <p className="text-white/80">
                              Built partnerships with NGOs and developed satellite monitoring capabilities.
                            </p>
                          </div>
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                            <h3 className="text-xl text-white mb-2">2023 - Foundation</h3>
                            <p className="text-white/80">
                              The Bit Ninjas was founded with a vision to revolutionize coastal restoration tracking.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeNavItem === 'About Us' && (
                      <div className="space-y-6">
                        <p className="text-lg text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                          The Bit Ninjas - Coastly Team
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                            <h3 className="text-xl text-white mb-3">Our Vision</h3>
                            <p className="text-white/80">
                              To create a transparent, AI-driven ecosystem that accelerates global coastal restoration efforts through technology and blockchain verification.
                            </p>
                          </div>
                          <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20">
                            <h3 className="text-xl text-white mb-3">Our Values</h3>
                            <ul className="text-white/80 space-y-2">
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
    <div className="min-h-screen" style={{ backgroundColor: '#1E40AF' }}>
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={image_f47276e688678a84cdbc9054b14f1ee3c86ca640} 
                alt="Coastly Logo" 
                className="w-15 h-15 object-cover"
              />
            </div>
            <span className="text-white text-xl">Coastly</span>
            {authState.user && (
              <div className="ml-4 flex items-center gap-2">
                <span className="text-white/70 text-sm">•</span>
                <span className="text-emerald-400 text-sm">{authState.user.username}</span>
                {authState.user.walletAddress && (
                  <span className="text-white/60 text-xs font-mono">
                    {authState.user.walletAddress}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className="text-white hover:bg-white/10"
            >
              Logout
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setSelectedPortal('select')}
              className="text-white hover:bg-white/10"
            >
              Switch Portal
            </Button>
          </div>
        </div>
      </nav>
      
      <div className="p-6" style={{ backgroundColor: '#000080' }}>
        {selectedPortal === 'ngo' && <NGOPortal />}
        {selectedPortal === 'admin' && <AdminPortal />}
        {selectedPortal === 'investor' && <InvestorPortal />}
      </div>
    </div>
  );
}