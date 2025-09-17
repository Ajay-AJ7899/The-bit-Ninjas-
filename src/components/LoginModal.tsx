import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Wallet, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Shield,
  UserPlus
} from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  portalType: 'admin' | 'ngo' | 'investor';
  onShowRegistration: () => void;
  onLoginSuccess: (walletAddress: string) => void; // add this
}



export function LoginModal({ 
  isOpen, 
  onClose, 
  portalType, 
  onLoginSuccess, 
  onShowRegistration 
}: LoginModalProps) {
  const [loginStep, setLoginStep] = useState<'metamask' | 'credentials'>('metamask');
  const [isConnectingWallet, setIsConnectingWallet] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState<{metamask?: string, credentials?: string}>({});

  const getPortalTitle = () => {
    switch (portalType) {
      case 'admin': return 'Government Admin Portal';
      case 'ngo': return 'NGO Portal';
      case 'investor': return 'Buyer Portal';
      default: return 'Portal';
    }
  };
  
  const getPortalColor = () => {
    switch (portalType) {
      case 'admin': return 'from-blue-500 to-indigo-500';
      case 'ngo': return 'from-emerald-500 to-teal-500';
      case 'investor': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const handleMetaMaskConnect = async () => {
    setIsConnectingWallet(true);
    setErrors({});

    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        // Demo mode - simulate MetaMask connection
        console.log('MetaMask not detected, using demo mode');
        
        // Show demo message
        setErrors({ 
          metamask: 'Demo Mode: MetaMask not detected. Simulating wallet connection...' 
        });

        // Simulate connection delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Generate mock wallet address
        const mockAddress = '0x' + Math.random().toString(16).substr(2, 8).toUpperCase() + '...' + Math.random().toString(16).substr(2, 4).toUpperCase();
        
        setWalletAddress(mockAddress);
        setWalletConnected(true);
        setLoginStep('credentials');
        setErrors({}); // Clear the demo message
        return;
      }

      // Real MetaMask flow
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length === 0) {
        throw new Error('No MetaMask accounts found. Please unlock MetaMask and try again.');
      }

      // Mock wallet verification
      await new Promise(resolve => setTimeout(resolve, 2000));

      const address = accounts[0];
      setWalletAddress(address);
      setWalletConnected(true);
      setLoginStep('credentials');

    } catch (error: any) {
      console.error('MetaMask connection error:', error);
      
      // If error is due to user rejection, provide helpful message
      if (error.code === 4001) {
        setErrors({ metamask: 'MetaMask connection was rejected. Please try again and approve the connection.' });
      } else if (error.message.includes('not detected')) {
        // Fallback to demo mode if MetaMask issues
        console.log('Falling back to demo mode due to MetaMask issues');
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockAddress = '0x' + Math.random().toString(16).substr(2, 8).toUpperCase() + '...' + Math.random().toString(16).substr(2, 4).toUpperCase();
        setWalletAddress(mockAddress);
        setWalletConnected(true);
        setLoginStep('credentials');
        setErrors({});
      } else {
        setErrors({ metamask: error.message || 'Failed to connect to MetaMask' });
      }
    } finally {
      setIsConnectingWallet(false);
    }
  };

  const handleCredentialsLogin = async () => {
    setIsLoggingIn(true);
    setErrors({});

    // Basic validation
    if (!credentials.username || !credentials.password) {
      setErrors({ credentials: 'Please enter both username and password' });
      setIsLoggingIn(false);
      return;
    }

    try {
      // Mock authentication
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock success - in real app, validate against backend
      const mockUsers = {
        admin: { username: 'admin', password: 'admin123' },
        ngo: { username: 'ngo', password: 'ngo123' },
        investor: { username: 'investor', password: 'investor123' }
      };

      const expectedUser = mockUsers[portalType];
      if (credentials.username === expectedUser.username && credentials.password === expectedUser.password) {
        // Successful login
        onLoginSuccess(walletAddress);
      } else {
        throw new Error('Invalid username or password');
      }

    } catch (error: any) {
      setErrors({ credentials: error.message || 'Login failed' });
    } finally {
      setIsLoggingIn(false);
    }
  };

  const resetModal = () => {
    setLoginStep('metamask');
    setWalletConnected(false);
    setWalletAddress('');
    setCredentials({ username: '', password: '' });
    setErrors({});
    setIsConnectingWallet(false);
    setIsLoggingIn(false);
    setShowPassword(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md">
        <Card className="backdrop-blur-md bg-white/10 border border-white/20 p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto w-full max-w-md mx-4 sm:mx-0">
          {/* Header */}
          <div className="text-center mb-8">
            <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${getPortalColor()} rounded-full flex items-center justify-center`}>
              {portalType === 'admin' && <Shield className="w-8 h-8 text-white" />}
              {portalType === 'ngo' && <User className="w-8 h-8 text-white" />}
              {portalType === 'investor' && <Wallet className="w-8 h-8 text-white" />}
            </div>
            <h2 className="text-2xl text-white mb-2">{getPortalTitle()}</h2>
            <p className="text-white/70 text-sm">Secure blockchain-verified access</p>
          </div>

          {loginStep === 'metamask' && (
            <div className="space-y-6">
              {/* MetaMask Connection Step */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-orange-400 text-sm">1</span>
                  </div>
                  <h3 className="text-white">Connect MetaMask Wallet</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  {typeof window !== 'undefined' && typeof window.ethereum === 'undefined' 
                    ? 'Connect your wallet for blockchain verification. Demo wallet will be used since MetaMask is not installed.'
                    : 'First, connect your MetaMask wallet for blockchain verification and security.'}
                </p>
                
                {errors.metamask && (
                  <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-3 mb-4 flex items-center">
                    <AlertCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                    <p className="text-red-300 text-sm">{errors.metamask}</p>
                  </div>
                )}

                <Button 
                  onClick={handleMetaMaskConnect}
                  disabled={isConnectingWallet}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12"
                >
                  {isConnectingWallet ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      {typeof window !== 'undefined' && typeof window.ethereum === 'undefined' 
                        ? 'Connecting Demo Wallet...' 
                        : 'Connecting to MetaMask...'}
                    </>
                  ) : (
                    <>
                      <Wallet className="w-5 h-5 mr-3" />
                      {typeof window !== 'undefined' && typeof window.ethereum === 'undefined' 
                        ? 'Connect Demo Wallet' 
                        : 'Connect MetaMask'}
                    </>
                  )}
                </Button>

                {/* Demo Mode Info */}
                {typeof window !== 'undefined' && typeof window.ethereum === 'undefined' && (
                  <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3 mt-3">
                    <p className="text-blue-300 text-xs text-center">
                      🔧 Demo Mode: MetaMask not detected. Using simulated wallet for demonstration.
                    </p>
                  </div>
                )}
              </div>

              {/* Demo Credentials Info */}
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                <h4 className="text-blue-300 text-sm mb-2">Demo Credentials:</h4>
                <div className="text-blue-200 text-xs space-y-1">
                  <p>• Admin: admin / admin123</p>
                  <p>• NGO: ngo / ngo123</p>
                  <p>• Investor: investor / investor123</p>
                </div>
              </div>
            </div>
          )}

          {loginStep === 'credentials' && (
            <div className="space-y-6">
              {/* Wallet Connected Status */}
              <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                <div className="flex-1">
                  <p className="text-emerald-300 text-sm">
                    {typeof window !== 'undefined' && typeof window.ethereum === 'undefined' 
                      ? 'Demo Wallet Connected' 
                      : 'MetaMask Connected'}
                  </p>
                  <p className="text-emerald-200 text-xs font-mono">{walletAddress}</p>
                </div>
                {typeof window !== 'undefined' && typeof window.ethereum === 'undefined' && (
                  <div className="text-xs text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded">
                    DEMO
                  </div>
                )}
              </div>

              {/* Credentials Step */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-400 text-sm">2</span>
                  </div>
                  <h3 className="text-white">Enter Your Credentials</h3>
                </div>

                {errors.credentials && (
                  <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-3 mb-4 flex items-center">
                    <AlertCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                    <p className="text-red-300 text-sm">{errors.credentials}</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Username</label>
                    <Input
                      type="text"
                      placeholder={`${portalType} username`}
                      value={credentials.username}
                      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      disabled={isLoggingIn}
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 pr-10"
                        disabled={isLoggingIn}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/70"
                        disabled={isLoggingIn}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleCredentialsLogin}
                  disabled={isLoggingIn || !credentials.username || !credentials.password}
                  className={`w-full bg-gradient-to-r ${getPortalColor()} hover:opacity-90 text-white h-12 mt-6`}
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 mr-3" />
                      Access {portalType === 'investor' ? 'BUYER' : portalType.toUpperCase()} Portal
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Registration Link */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Don't have an account?{' '}
              <button 
                onClick={onShowRegistration}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Register here
              </button>
            </p>
          </div>

          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </Card>
      </div>
    </div>
  );
}