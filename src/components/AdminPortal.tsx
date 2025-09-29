import React, { useState } from "react";
import { ethers } from "ethers";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Avatar } from "./ui/avatar";
import {
  Eye,
  CheckCircle,
  XCircle,
  Satellite,
  Bot,
  Award,
  BarChart3,
  MapPin,
  Calendar,
  FileText,
  Upload,
  Users,
  Activity,
  PieChart,
  LineChart,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Target,
  Globe,
  Wallet,
} from "lucide-react";
import {
  LineChart as RechartsLineChart,
  AreaChart,
  BarChart as RechartsBarChart,
  PieChart as RechartsPieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  Bar,
  Line,
  Pie,
  Cell,
} from "recharts";

interface AdminPortalProps {
  walletAddress?: string;
}

export function AdminPortal({ walletAddress }: AdminPortalProps) {
  const [submissions] = useState([
    {
      id: 1,
      name: "Sundarbans Mangrove Restoration",
      ngo: "Green Earth Foundation",
      location: "West Bengal",
      area: "500 hectares",
      aiScore: 94,
      satelliteScore: 96,
      status: "pending_review",
      submittedDate: "2025-09-01",
      estimatedCarbon: 2500,
      species: 25,
      ndviCurrent: 0.72,
      ndviBaseline: 0.35,
      ndviTarget: 0.85,
      ndviTrend: "increasing",
      ndviChangeRate: 0.12,
    },
    {
      id: 2,
      name: "Bhitarkanika Mangrove Conservation",
      ngo: "Coastal Bloom NGO",
      location: "Odisha",
      area: "300 hectares",
      aiScore: 89,
      satelliteScore: 91,
      status: "ai_verification",
      submittedDate: "2025-08-28",
      estimatedCarbon: 1800,
      species: 18,
      ndviCurrent: 0.58,
      ndviBaseline: 0.28,
      ndviTarget: 0.78,
      ndviTrend: "stable",
      ndviChangeRate: 0.08,
    },
    {
      id: 3,
      name: "Andaman Mangrove Recovery",
      ngo: "Ocean Guardians",
      location: "Andaman & Nicobar Islands",
      area: "200 hectares",
      aiScore: 96,
      satelliteScore: 94,
      status: "approved",
      submittedDate: "2025-08-25",
      estimatedCarbon: 3200,
      species: 12,
      ndviCurrent: 0.84,
      ndviBaseline: 0.42,
      ndviTarget: 0.9,
      ndviTrend: "increasing",
      ndviChangeRate: 0.15,
    },
  ]);

  const [analytics] = useState({
    totalSubmissions: 156,
    pendingReview: 23,
    approved: 89,
    rejected: 12,
    avgAiScore: 92,
    avgSatelliteScore: 89,
    avgNdviScore: 0.71,
    avgNdviImprovement: 0.28,
    totalCarbonOffset: 45600,
    certificatesIssued: 67,
  });

  // Enhanced Analytics Data
  const systemPerformanceData = [
    {
      month: "Jan 2025",
      submissions: 12,
      approved: 8,
      rejected: 2,
      pending: 2,
      avgAiScore: 88,
      avgSatelliteScore: 85,
    },
    {
      month: "Feb 2025",
      submissions: 15,
      approved: 11,
      rejected: 2,
      pending: 2,
      avgAiScore: 89,
      avgSatelliteScore: 87,
    },
    {
      month: "Mar 2025",
      submissions: 18,
      approved: 14,
      rejected: 1,
      pending: 3,
      avgAiScore: 91,
      avgSatelliteScore: 88,
    },
    {
      month: "Apr 2025",
      submissions: 20,
      approved: 16,
      rejected: 2,
      pending: 2,
      avgAiScore: 92,
      avgSatelliteScore: 89,
    },
    {
      month: "May 2025",
      submissions: 22,
      approved: 18,
      rejected: 1,
      pending: 3,
      avgAiScore: 93,
      avgSatelliteScore: 90,
    },
    {
      month: "Jun 2025",
      submissions: 25,
      approved: 20,
      rejected: 2,
      pending: 3,
      avgAiScore: 94,
      avgSatelliteScore: 91,
    },
    {
      month: "Jul 2025",
      submissions: 28,
      approved: 23,
      rejected: 1,
      pending: 4,
      avgAiScore: 95,
      avgSatelliteScore: 92,
    },
    {
      month: "Aug 2025",
      submissions: 30,
      approved: 25,
      rejected: 2,
      pending: 3,
      avgAiScore: 96,
      avgSatelliteScore: 93,
    },
  ];

  const geographicDistributionData = [
    {
      state: "West Bengal",
      projects: 25,
      totalArea: 1200,
      avgNdvi: 0.74,
      totalCarbon: 8500,
    },
    {
      state: "Kerala",
      projects: 18,
      totalArea: 850,
      avgNdvi: 0.68,
      totalCarbon: 6200,
    },
    {
      state: "Maharashtra",
      projects: 22,
      totalArea: 980,
      avgNdvi: 0.71,
      totalCarbon: 7100,
    },
    {
      state: "Gujarat",
      projects: 15,
      totalArea: 750,
      avgNdvi: 0.65,
      totalCarbon: 5800,
    },
    {
      state: "Karnataka",
      projects: 12,
      totalArea: 620,
      avgNdvi: 0.72,
      totalCarbon: 4900,
    },
    {
      state: "Goa",
      projects: 8,
      totalArea: 400,
      avgNdvi: 0.76,
      totalCarbon: 3200,
    },
    {
      state: "Odisha",
      projects: 20,
      totalArea: 950,
      avgNdvi: 0.69,
      totalCarbon: 6800,
    },
    {
      state: "Andaman & Nicobar",
      projects: 6,
      totalArea: 320,
      avgNdvi: 0.78,
      totalCarbon: 2600,
    },
  ];

  const verificationAccuracyData = [
    {
      month: "Jan",
      aiAccuracy: 88,
      satelliteAccuracy: 85,
      combinedAccuracy: 86.5,
      falsePositives: 8,
      falseNegatives: 4,
    },
    {
      month: "Feb",
      aiAccuracy: 89,
      satelliteAccuracy: 87,
      combinedAccuracy: 88,
      falsePositives: 6,
      falseNegatives: 3,
    },
    {
      month: "Mar",
      aiAccuracy: 91,
      satelliteAccuracy: 88,
      combinedAccuracy: 89.5,
      falsePositives: 5,
      falseNegatives: 3,
    },
    {
      month: "Apr",
      aiAccuracy: 92,
      satelliteAccuracy: 89,
      combinedAccuracy: 90.5,
      falsePositives: 4,
      falseNegatives: 2,
    },
    {
      month: "May",
      aiAccuracy: 93,
      satelliteAccuracy: 90,
      combinedAccuracy: 91.5,
      falsePositives: 3,
      falseNegatives: 2,
    },
    {
      month: "Jun",
      aiAccuracy: 94,
      satelliteAccuracy: 91,
      combinedAccuracy: 92.5,
      falsePositives: 2,
      falseNegatives: 1,
    },
    {
      month: "Jul",
      aiAccuracy: 95,
      satelliteAccuracy: 92,
      combinedAccuracy: 93.5,
      falsePositives: 2,
      falseNegatives: 1,
    },
    {
      month: "Aug",
      aiAccuracy: 96,
      satelliteAccuracy: 93,
      combinedAccuracy: 94.5,
      falsePositives: 1,
      falseNegatives: 1,
    },
  ];

  const riskAssessmentData = [
    {
      name: "Low Risk",
      value: 68,
      projects: 89,
      color: "#10B981",
    },
    {
      name: "Medium Risk",
      value: 25,
      projects: 34,
      color: "#F59E0B",
    },
    {
      name: "High Risk",
      value: 7,
      projects: 9,
      color: "#EF4444",
    },
  ];

  const certificateStatusData = [
    {
      name: "Active Certificates",
      value: 67,
      color: "#10B981",
    },
    { name: "Pending Approval", value: 23, color: "#F59E0B" },
    { name: "Under Review", value: 12, color: "#3B82F6" },
    { name: "Expired/Revoked", value: 3, color: "#EF4444" },
  ];

  const ngoPerformanceData = [
    {
      ngo: "Green Earth Foundation",
      projects: 15,
      successRate: 94,
      avgScore: 93,
      totalEarnings: 350000,
    },
    {
      ngo: "Coastal Bloom NGO",
      projects: 12,
      successRate: 89,
      avgScore: 91,
      totalEarnings: 285000,
    },
    {
      ngo: "Ocean Guardians",
      projects: 18,
      successRate: 96,
      avgScore: 95,
      totalEarnings: 420000,
    },
    {
      ngo: "Mangrove Warriors",
      projects: 10,
      successRate: 87,
      avgScore: 88,
      totalEarnings: 245000,
    },
    {
      ngo: "Coastal Conservation Trust",
      projects: 14,
      successRate: 92,
      avgScore: 90,
      totalEarnings: 320000,
    },
  ];

  const carbonOffsetTrendsData = [
    {
      month: "Jan",
      verified: 3200,
      projected: 4500,
      cumulative: 3200,
    },
    {
      month: "Feb",
      verified: 4100,
      projected: 5200,
      cumulative: 7300,
    },
    {
      month: "Mar",
      verified: 5300,
      projected: 6100,
      cumulative: 12600,
    },
    {
      month: "Apr",
      verified: 6200,
      projected: 7300,
      cumulative: 18800,
    },
    {
      month: "May",
      verified: 7100,
      projected: 8200,
      cumulative: 25900,
    },
    {
      month: "Jun",
      verified: 8500,
      projected: 9100,
      cumulative: 34400,
    },
    {
      month: "Jul",
      verified: 9200,
      projected: 10200,
      cumulative: 43600,
    },
    {
      month: "Aug",
      verified: 10100,
      projected: 11500,
      cumulative: 53700,
    },
  ];

  const COLORS = [
    "#10B981",
    "#3B82F6",
    "#8B5CF6",
    "#F59E0B",
    "#EF4444",
  ];

  const [selectedSubmission, setSelectedSubmission] =
    useState(null);
  const [approvedSubmissions, setApprovedSubmissions] =
    useState(new Set());
  const [rejectedSubmissions, setRejectedSubmissions] =
    useState(new Set());
  const [
    showApprovalNotification,
    setShowApprovalNotification,
  ] = useState(null);
  const [
    showRejectionNotification,
    setShowRejectionNotification,
  ] = useState(null);

  // Blockchain state
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [mintingStates, setMintingStates] = useState<Record<number, 'idle' | 'connecting' | 'minting' | 'success' | 'error'>>({});
  const [tokenAmounts, setTokenAmounts] = useState<Record<number, string>>({});
  const [mintedSubmissions, setMintedSubmissions] = useState<Set<number>>(new Set());

  const getStatusColor = (status: string) => {
    switch (status) {
    case "pending_review":
        // Changed text-yellow-300 to text-yellow-800 for contrast
        return "bg-yellow-500/20 text-yellow-800 border-yellow-400/30";
    case "ai_verification":
        // Changed text-blue-300 to text-blue-800 for contrast
        return "bg-blue-500/20 text-blue-800 border-blue-400/30";
    case "approved":
        // Changed text-emerald-300 to text-emerald-800 for contrast
        return "bg-emerald-500/20 text-emerald-900 border-emerald-400/30";
    case "rejected":
        // Changed text-red-300 to text-red-800 for contrast
        return "bg-red-500/20 text-red-900 border-red-400/30";
    default:
        // Changed text-gray-300 to text-gray-800 for contrast
        return "bg-gray-500/20 text-gray-800 border-gray-400/30";
}
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending_review":
        return "Pending Review";
      case "ai_verification":
        return "AI Verification";
      case "approved":
        return "Approved";
      case "rejected":
        return "Rejected";
      default:
        return status;
    }
  };

  const handleApproveSubmission = (id: number) => {
    // Add to approved submissions
    setApprovedSubmissions((prev) => new Set([...prev, id]));

    // Show approval notification
    const submission = submissions.find((s) => s.id === id);
    setShowApprovalNotification({
      id,
      name: submission?.name || "Project",
      timestamp: new Date().toLocaleTimeString(),
    });

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setShowApprovalNotification(null);
    }, 5000);
  };

  const handleRejectSubmission = (id: number) => {
    // Add to rejected submissions
    setRejectedSubmissions((prev) => new Set([...prev, id]));

    // Show rejection notification
    const submission = submissions.find((s) => s.id === id);
    setShowRejectionNotification({
      id,
      name: submission?.name || "Project",
      timestamp: new Date().toLocaleTimeString(),
    });

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setShowRejectionNotification(null);
    }, 5000);
  };

  // Blockchain Functions
  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        
        setProvider(provider);
        setSigner(signer);
        setWalletConnected(true);
        
        console.log("Wallet connected:", await signer.getAddress());
      } else {
        alert("Please install MetaMask to use blockchain features");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      alert("Failed to connect wallet. Please try again.");
    }
  };

  const handleTokenAmountChange = (submissionId: number, amount: string) => {
    setTokenAmounts(prev => ({
      ...prev,
      [submissionId]: amount
    }));
  };

  const handleMintCertificate = async (id: number) => {
    const tokenAmount = tokenAmounts[id];
    if (!tokenAmount || parseInt(tokenAmount) <= 0) {
      alert("Please enter a valid token amount to mint");
      return;
    }

    if (!walletConnected) {
      setMintingStates(prev => ({ ...prev, [id]: 'connecting' }));
      await connectWallet();
      if (!walletConnected) {
        setMintingStates(prev => ({ ...prev, [id]: 'error' }));
        return;
      }
    }

    const submission = submissions.find(s => s.id === id);
    if (!submission) return;

    setMintingStates(prev => ({ ...prev, [id]: 'minting' }));

    try {
      // Mock contract address - replace with actual deployed contract
      const contractAddress = "0x1234567890123456789012345678901234567890";
      
      // Mock contract ABI for minting function
      const contractABI = [
        "function mintCertificate(address to, uint256 carbonCredits, string memory projectName, string memory location) public returns (uint256)"
      ];

      // Mock contract interaction
      console.log("🔗 Initiating blockchain transaction...");
      console.log("Contract Address:", contractAddress);
      console.log("NGO Wallet:", walletAddress);
      console.log("Token Amount:", tokenAmount);
      console.log("Carbon Credits:", submission.estimatedCarbon);
      console.log("Project:", submission.name);
      console.log("Location:", submission.location);

      // Simulate blockchain transaction delay
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Mock transaction hash
      const mockTxHash = "0x" + Math.random().toString(16).substring(2, 66);
      
      // Mock successful minting
      console.log("✅ NFT Certificate minted successfully!");
      console.log("Transaction Hash:", mockTxHash);
      console.log("Token ID:", Math.floor(Math.random() * 10000));
      
      setMintingStates(prev => ({ ...prev, [id]: 'success' }));
      
      // Mark submission as minted
      setMintedSubmissions(prev => new Set([...prev, id]));
      
      // Show success notification
      alert(`🎉 NFT Certificate minted successfully!\n\nTransaction Hash: ${mockTxHash}\nTokens Minted: ${tokenAmount}\nCarbon Credits: ${submission.estimatedCarbon}t CO₂\nSent to NGO Wallet: ${walletAddress}`);
      
      // Reset token amount after successful mint
      setTokenAmounts(prev => ({ ...prev, [id]: '' }));
      
      // Reset state after 3 seconds
      setTimeout(() => {
        setMintingStates(prev => ({ ...prev, [id]: 'idle' }));
      }, 3000);
      
    } catch (error) {
      console.error("Minting failed:", error);
      setMintingStates(prev => ({ ...prev, [id]: 'error' }));
      alert("Failed to mint NFT certificate. Please check your wallet and try again.");
      
      // Reset error state after 3 seconds
      setTimeout(() => {
        setMintingStates(prev => ({ ...prev, [id]: 'idle' }));
      }, 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Tabs defaultValue="dashboard" className="w-full">
        <div className="backdrop-blur-md bg-black/10 rounded-2xl border border-black/20 p-6 mb-8">
          <TabsList className="grid w-full grid-cols-5 bg-black/10 border border-black/20">
            <TabsTrigger
              value="dashboard"
              className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black"
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="submissions"
              className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black"
            >
              Submissions
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="verification"
              className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black"
            >
              AI/Satellite
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black"
            >
              Token Management
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black text-sm">
                    Total Submissions
                  </p>
                  <p className="text-3xl text-black">
                    {analytics.totalSubmissions}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-black" />
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/70 text-sm">
                    Pending Review
                  </p>
                  <p className="text-3xl text-black">
                    {analytics.pendingReview}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-600/30 rounded-xl flex items-center justify-center shadow-lg border border-yellow-600/20">
                  <Eye className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/70 text-sm">
                    Approved Projects
                  </p>
                  <p className="text-3xl text-black">
                    {analytics.approved}
                  </p>
                </div>
                <div className="w-12 h-12 bg-emerald-600/80 rounded-xl flex items-center justify-center shadow-lg border border-emerald-500/30">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/70 text-sm">
                    Certificates Issued
                  </p>
                  <p className="text-3xl text-black">
                    {analytics.certificatesIssued}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-600/80 rounded-xl flex items-center justify-center shadow-lg border border-purple-500/30">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                System Analytics
              </h3>
              <div className="space-y-4">
                <div className="bg-black/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-black/70 text-sm">
                      Average AI Verification Score
                    </p>
                    <p className="text-black">
                      {analytics.avgAiScore}%
                    </p>
                  </div>
                  <Progress
                    value={analytics.avgAiScore}
                    className="h-2 bg-black/10"
                  />
                </div>
                <div className="bg-black/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-black/70 text-sm">
                      Average Satellite Score
                    </p>
                    <p className="text-black">
                      {analytics.avgSatelliteScore}%
                    </p>
                  </div>
                  <Progress
                    value={analytics.avgSatelliteScore}
                    className="h-2 bg-black/10"
                  />
                </div>
                <div className="bg-black/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-black/70 text-sm">
                      Average NDVI Score
                    </p>
                    <p className="text-black">
                      {analytics.avgNdviScore}
                    </p>
                  </div>
                  <Progress
                    value={analytics.avgNdviScore * 100}
                    className="h-2 bg-black/10"
                  />
                </div>
                <div className="bg-black/5 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-black/70 text-sm">
                      Avg NDVI Improvement
                    </p>
                    <p className="text-black">
                      +{analytics.avgNdviImprovement} ↗
                    </p>
                  </div>
                </div>
                <div className="bg-black/5 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-black/70 text-sm">
                      Total Carbon Offset Verified
                    </p>
                    <p className="text-black">
                      {analytics.totalCarbonOffset.toLocaleString()}
                      t CO₂
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6">
                Recent Activities
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-black text-sm">
                      Approved Mangrove Recovery project
                    </p>
                    <p className="text-black/60 text-xs">
                      1 hour ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Bot className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-black text-sm">
                      AI verification completed
                    </p>
                    <p className="text-black/60 text-xs">
                      3 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-black text-sm">
                      Certificate minted as NFT
                    </p>
                    <p className="text-black/60 text-xs">
                      5 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Satellite className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-black text-sm">
                      Satellite data analysis started
                    </p>
                    <p className="text-black/60 text-xs">
                      1 day ago
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="submissions">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-black">
                NGO Submissions
              </h2>
              <div className="flex gap-2">
                <Input
                  placeholder="Search submissions..."
                  className="bg-black/10 border-black/20 text-black placeholder:text-black/60 w-64"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {submissions.map((submission) => (
                <Card
                  key={submission.id}
                  className="backdrop-blur-md bg-black/10 border border-black/20 p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl text-black">
                          {submission.name}
                        </h3>
                        <Badge
                          className={getStatusColor(
                            submission.status,
                          )}
                        >
                          {getStatusText(submission.status)}
                        </Badge>
                        {approvedSubmissions.has(
                          submission.id,
                        ) && (
                          <Badge className="bg-emerald-500/20 text-emerald-800 border-emerald-400/30 animate-pulse">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Reviewed & Verified
                          </Badge>
                        )}
                        {rejectedSubmissions.has(
                          submission.id,
                        ) && (
                          <Badge className="bg-red-500/20 text-red-800 border-red-400/30 animate-pulse">
                            <XCircle className="w-3 h-3 mr-1" />
                            Project Rejected
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-black/70 text-sm mb-3">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {submission.ngo}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {submission.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {submission.submittedDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-black/5 rounded-lg p-3">
                      <p className="text-black/70 text-xs">
                        Area
                      </p>
                      <p className="text-black">
                        {submission.area}
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-lg p-3">
                      <p className="text-black/70 text-xs">
                        AI Score
                      </p>
                      <p className="text-black flex items-center">
                        {submission.aiScore}%
                        <Bot className="w-3 h-3 ml-1 text-blue-400" />
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-lg p-3">
                      <p className="text-black/70 text-xs">
                        Satellite Score
                      </p>
                      <p className="text-black flex items-center">
                        {submission.satelliteScore}%
                        <Satellite className="w-3 h-3 ml-1 text-green-400" />
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-lg p-3">
                      <p className="text-black/70 text-xs">
                        Carbon Offset
                      </p>
                      <p className="text-black">
                        {submission.estimatedCarbon}t
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      onClick={() =>
                        setSelectedSubmission(submission.id)
                      }
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Review Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Approval Notification */}
            {showApprovalNotification && (
    <div className="fixed top-4 right-4 z-50">
        <Card className="backdrop-blur-md bg-gradient-to-br from-emerald-400/90 via-emerald-500/80 to-emerald-600/90 border-2 border-emerald-300 shadow-2xl shadow-emerald-500/50 p-6 min-w-80 ring-4 ring-emerald-200/60 hover:shadow-emerald-400/60 transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg ring-2 ring-emerald-200">
                        <CheckCircle className="w-7 h-7 text-emerald-700" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                            Project Approved!
                        </h4>
                        <p className="text-white/95 font-semibold text-base drop-shadow-md">
                            {showApprovalNotification.name}
                        </p>
                        <p className="text-white/80 text-sm drop-shadow-sm">
                            Reviewed and verified at{" "}
                            {showApprovalNotification.timestamp}
                        </p>
                    </div>
                </div>
                <button
                    onClick={() =>
                        setShowApprovalNotification(null)
                    }
                    className="text-white/80 hover:text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-inner">
                <div className="flex items-center gap-3 text-base text-white font-semibold drop-shadow-md">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                    </div>
                    <span>
                        Ready for NFT certificate minting
                    </span>
                </div>
            </div>
        </Card>
    </div>
)}

            {/* Rejection Notification */}
            {showRejectionNotification && (
    <div className="fixed top-4 right-4 z-50">
        <Card className="backdrop-blur-md bg-gradient-to-br from-red-400/90 via-red-500/80 to-red-600/90 border-2 border-red-300 shadow-2xl shadow-red-500/50 p-6 min-w-80 ring-4 ring-red-200/60 hover:shadow-red-400/60 transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg ring-2 ring-red-200">
                        <XCircle className="w-7 h-7 text-red-700" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                            Project Rejected
                        </h4>
                        <p className="text-white/95 font-semibold text-base drop-shadow-md">
                            {showRejectionNotification.name}
                        </p>
                        <p className="text-white/80 text-sm drop-shadow-sm">
                            Reviewed and rejected at{" "}
                            {showRejectionNotification.timestamp}
                        </p>
                    </div>
                </div>
                <button
                    onClick={() =>
                        setShowRejectionNotification(null)
                    }
                    className="text-white/80 hover:text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-inner">
                <div className="flex items-center gap-3 text-base text-white font-semibold drop-shadow-md">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span>
                        NGO will be notified of rejection
                    </span>
                </div>
            </div>
        </Card>
    </div>
)}

            {/* Detailed Submission Modal */}
            {selectedSubmission && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-white/50 backdrop-blur-sm"
                  onClick={() => setSelectedSubmission(null)}
                />

                {/* Modal Content */}
                <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto">
                  <Card className="backdrop-blur-md bg-gradient-to-br from-white/95 to-gray-50/95 border border-gray-300/50 p-8 shadow-2xl">
                    {(() => {
                      const submission = submissions.find(
                        (s) => s.id === selectedSubmission,
                      );
                      if (!submission) return null;

                      return (
                        <>
                          {/* Header */}
                          <div className="flex justify-between items-start mb-8">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h2 className="text-3xl text-gray-900 font-bold">
                                  {submission.name}
                                </h2>
                                <Badge
                                  className={getStatusColor(
                                    submission.status,
                                  )}
                                >
                                  {getStatusText(
                                    submission.status,
                                  )}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-6 text-gray-700 text-sm mb-4">
                                <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                                  <Users className="w-4 h-4 text-gray-600" />
                                  <span className="font-medium">{submission.ngo}</span>
                                </span>
                                <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                                  <MapPin className="w-4 h-4 text-gray-600" />
                                  <span className="font-medium">{submission.location}</span>
                                </span>
                                <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                                  <Calendar className="w-4 h-4 text-gray-600" />
                                  <span className="font-medium">{submission.submittedDate}</span>
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                setSelectedSubmission(null)
                              }
                              className="text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>

                          {/* Project Description */}
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200/50 shadow-sm">
                            <p className="text-gray-700 text-sm mb-3 font-semibold uppercase tracking-wide">
                              Project Description
                            </p>
                            <p className="text-gray-900 leading-relaxed">
                              Large-scale forest restoration
                              project focusing on native species
                              reforestation, biodiversity
                              conservation, and community
                              engagement for sustainable
                              environmental impact. This
                              comprehensive initiative aims to
                              restore degraded forest ecosystems
                              while providing sustainable
                              livelihoods for local communities
                              and measurable carbon
                              sequestration benefits.
                            </p>
                          </div>

                          {/* Enhanced Metrics Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-5 border border-emerald-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                              <p className="text-emerald-700 text-xs mb-2 font-semibold uppercase tracking-wide">
                                Area Restored
                              </p>
                              <p className="text-gray-900 text-2xl font-bold mb-1">
                                {submission.area}
                              </p>
                              <p className="text-emerald-600 text-xs font-medium">
                                Target achieved
                              </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                              <p className="text-blue-700 text-xs mb-2 font-semibold uppercase tracking-wide">
                                AI Verification
                              </p>
                              <p className="text-gray-900 flex items-center text-2xl font-bold mb-1">
                                {submission.aiScore}%
                                <Bot className="w-6 h-6 ml-2 text-blue-500" />
                              </p>
                              <p className="text-blue-600 text-xs font-medium">
                                High confidence
                              </p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                              <p className="text-green-700 text-xs mb-2 font-semibold uppercase tracking-wide">
                                Satellite Analysis
                              </p>
                              <p className="text-gray-900 flex items-center text-2xl font-bold mb-1">
                                {submission.satelliteScore}%
                                <Satellite className="w-6 h-6 ml-2 text-green-500" />
                              </p>
                              <p className="text-green-600 text-xs font-medium">
                                Verified growth
                              </p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                              <p className="text-purple-700 text-xs mb-2 font-semibold uppercase tracking-wide">
                                Carbon Offset
                              </p>
                              <p className="text-gray-900 text-2xl font-bold mb-1">
                                {submission.estimatedCarbon}t
                                CO₂
                              </p>
                              <p className="text-purple-600 text-xs font-medium">
                                Certified volume
                              </p>
                            </div>
                          </div>

                          {/* Additional Details */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                              <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                                  <FileText className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="text-gray-900 font-bold text-lg">
                                  Documentation
                                </h4>
                              </div>
                              <div className="space-y-3 text-sm">
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                  Environmental Impact Report
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                  Species Inventory (24 documents)
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                  Progress Photos (156 images)
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                  Community Engagement Records
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                  Soil Analysis Reports
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                  Wildlife Monitoring Data
                                </p>
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                              <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                                  <BarChart3 className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="text-gray-900 font-bold text-lg">
                                  Impact Metrics
                                </h4>
                              </div>
                              <div className="space-y-3 text-sm">
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                  Tree Survival Rate: <span className="font-semibold ml-1">94%</span>
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                  Species Diversity: <span className="font-semibold ml-1">{submission.species} types</span>
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                  Local Jobs Created: <span className="font-semibold ml-1">45</span>
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                  Community Beneficiaries: <span className="font-semibold ml-1">1,200</span>
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                  Water Sources Protected: <span className="font-semibold ml-1">8</span>
                                </p>
                                <p className="text-gray-700 flex items-center">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                  Wildlife Species Returned: <span className="font-semibold ml-1">23</span>
                                </p>
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                              <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                                  <Award className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="text-gray-900 font-bold text-lg">
                                  Certifications
                                </h4>
                              </div>
                              <div className="space-y-3 text-sm">
                                <p className="text-emerald-600 flex items-center font-medium">
                                  <span className="mr-2">✓</span>
                                  FSC Certification Ready
                                </p>
                                <p className="text-emerald-600 flex items-center font-medium">
                                  <span className="mr-2">✓</span>
                                  Carbon Credit Verified
                                </p>
                                <p className="text-emerald-600 flex items-center font-medium">
                                  <span className="mr-2">✓</span>
                                  Biodiversity Compliant
                                </p>
                                <p className="text-emerald-600 flex items-center font-medium">
                                  <span className="mr-2">✓</span>
                                  Community Impact Verified
                                </p>
                                <p className="text-amber-600 flex items-center font-medium">
                                  <span className="mr-2">⏳</span>
                                  Government Approval Pending
                                </p>
                                <p className="text-blue-600 flex items-center font-medium">
                                  <span className="mr-2">📋</span>
                                  REDD+ Standards Met
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Verification Progress */}
                          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8 border border-gray-200/50 shadow-md">
                            <div className="flex justify-between items-center mb-6">
                              <h4 className="text-gray-900 font-bold text-lg">
                                Verification Progress
                              </h4>
                              <p className="text-gray-900 font-semibold text-lg">
                                {Math.round(
                                  (submission.aiScore +
                                    submission.satelliteScore) /
                                    2,
                                )}
                                % Complete
                              </p>
                            </div>
                            <Progress
                              value={Math.round(
                                (submission.aiScore +
                                  submission.satelliteScore) /
                                  2,
                              )}
                              className="h-4 bg-gray-200 mb-6"
                            />
                            <div className="grid grid-cols-4 gap-4 text-sm">
                              <div className="text-center">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full mx-auto mb-3 shadow-md"></div>
                                <p className="text-emerald-600 font-semibold">
                                  Submitted
                                </p>
                                <p className="text-gray-600 text-xs">
                                  Complete
                                </p>
                              </div>
                              <div className="text-center">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full mx-auto mb-3 shadow-md"></div>
                                <p className="text-emerald-600 font-semibold">
                                  AI Verified
                                </p>
                                <p className="text-gray-600 text-xs">
                                  {submission.aiScore}%
                                  confidence
                                </p>
                              </div>
                              <div className="text-center">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full mx-auto mb-3 shadow-md"></div>
                                <p className="text-emerald-600 font-semibold">
                                  Satellite Confirmed
                                </p>
                                <p className="text-gray-600 text-xs">
                                  {submission.satelliteScore}%
                                  verified
                                </p>
                              </div>
                              <div className="text-center">
                                <div className="w-5 h-5 bg-amber-500 rounded-full mx-auto mb-3 shadow-md"></div>
                                <p className="text-amber-600 font-semibold">
                                  Admin Review
                                </p>
                                <p className="text-gray-600 text-xs">
                                  In Progress
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Timeline & Milestones */}
                          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-200/50 shadow-md">
                            <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center">
                              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                                <Calendar className="w-4 h-4 text-white" />
                              </div>
                              Project Timeline & Milestones
                            </h3>
                            <div className="space-y-4">
                              <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-indigo-100 shadow-sm">
                                <span className="text-gray-900 font-medium">
                                  Project Initiation
                                </span>
                                <span className="text-emerald-700 font-semibold flex items-center">
                                  <span className="mr-2">✓</span>
                                  March 2025
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-indigo-100 shadow-sm">
                                <span className="text-gray-900 font-medium">
                                  First Planting Phase
                                </span>
                                <span className="text-emerald-700 font-semibold flex items-center">
                                  <span className="mr-2">✓</span>
                                  April 2025
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-indigo-100 shadow-sm">
                                <span className="text-gray-900 font-medium">
                                  Mid-term Assessment
                                </span>
                                <span className="text-blue-600 font-semibold flex items-center">
                                  <span className="mr-2">⏳</span>
                                  September 2025
                                </span>
                              </div>
                              <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-indigo-100 shadow-sm">
                                <span className="text-gray-900 font-medium">
                                  Final Certification
                                </span>
                                <span className="text-gray-600 font-medium flex items-center">
                                  <span className="mr-2">📅</span>
                                  March 2026
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4 justify-end">
                            <Button
                              variant="ghost"
                              onClick={() =>
                                setSelectedSubmission(null)
                              }
                              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300"
                            >
                              Close
                            </Button>
                            <Button
                              variant="ghost"
                              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300"
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              Download Report
                            </Button>
                            <Button
                              onClick={() => {
                                handleRejectSubmission(
                                  submission.id,
                                );
                                setSelectedSubmission(null);
                              }}
                              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg"
                            >
                              <XCircle className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                            <Button
                              onClick={() => {
                                handleApproveSubmission(
                                  submission.id,
                                );
                                setSelectedSubmission(null);
                              }}
                              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg"
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve Project
                            </Button>
                          </div>
                        </>
                      );
                    })()}
                  </Card>
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-black">
                System Analytics Dashboard
              </h2>
              <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600">
                <Activity className="w-4 h-4 mr-2" />
                Export Analytics
              </Button>
            </div>

            {/* System Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black/70 text-sm">
                      Total Projects
                    </p>
                    <p className="text-3xl text-black">156</p>
                    <p className="text-emerald-900 text-sm">
                      +18% this month
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black/70 text-sm">
                      Approval Rate
                    </p>
                    <p className="text-3xl text-black">89%</p>
                    <p className="text-blue-400 text-sm">
                      Above target
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black/70 text-sm">
                      AI Accuracy
                    </p>
                    <p className="text-3xl text-black">96%</p>
                    <p className="text-purple-400 text-sm">
                      Best performing
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black/70 text-sm">
                      Total Carbon Verified
                    </p>
                    <p className="text-3xl text-black">53.7k</p>
                    <p className="text-teal-400 text-sm">
                      tonnes CO₂
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-teal-400" />
                  </div>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black/70 text-sm">
                      Active NGOs
                    </p>
                    <p className="text-3xl text-black">47</p>
                    <p className="text-yellow-400 text-sm">
                      Registered
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
              </Card>
            </div>

            {/* System Performance Over Time */}
            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6 flex items-center">
                <LineChart className="w-5 h-5 mr-2" />
                System Performance Trends
              </h3>
              <div className="h-80 bg-[rgba(0,0,0,0)]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={systemPerformanceData}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(0,0,0,0.1)"
                    />
                    <XAxis
                      dataKey="month"
                      stroke="rgba(0,0,0,0.7)"
                    />
                    <YAxis stroke="rgba(0,0,0,0.7)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor:
                          "rgba(255,255,255,0.9)",
                        border:
                          "1px solid rgba(0,0,0,0.2)",
                        borderRadius: "8px",
                        backdropFilter: "blur(10px)",
                        color: "#000000",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="submissions"
                      stroke="#10B981"
                      strokeWidth={3}
                      name="Total Submissions"
                    />
                    <Line
                      type="monotone"
                      dataKey="approved"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      name="Approved"
                    />
                    <Line
                      type="monotone"
                      dataKey="rejected"
                      stroke="#EF4444"
                      strokeWidth={3}
                      name="Rejected"
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Geographic Distribution */}
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Projects by State Distribution
                </h3>
                <div className="h-64">
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <RechartsBarChart
                      data={geographicDistributionData.slice(
                        0,
                        6,
                      )}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(0,0,0,0.1)"
                      />
                      <XAxis
                        dataKey="state"
                        stroke="rgba(0,0,0,0.7)"
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis stroke="rgba(0,0,0,0.7)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor:
                            "rgba(0,0,0,0.1)",
                          border:
                            "1px solid rgba(0,0,0,0.2)",
                          borderRadius: "8px",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                      <Bar
                        dataKey="projects"
                        fill="#10B981"
                        name="Projects"
                      />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Risk Assessment Distribution */}
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Risk Assessment Distribution
                </h3>
                <div className="h-64">
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <RechartsPieChart>
                      <Pie
                        data={riskAssessmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => name + ": " + value + "%"}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {riskAssessmentData.map(
                          (entry, index) => (
                            <Cell
                              key={"cell-" + index}
                              fill={entry.color}
                            />
                          )
                        )}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor:
                            "rgba(0,0,0,0.1)",
                          border:
                            "1px solid rgba(0,0,0,0.2)",
                          borderRadius: "8px",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Verification Accuracy and Carbon Offset Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <Bot className="w-5 h-5 mr-2" />
                  AI & Satellite Verification Accuracy
                </h3>
                <div className="h-64">
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <RechartsLineChart
                      data={verificationAccuracyData}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(0,0,0,0.1)"
                      />
                      <XAxis
                        dataKey="month"
                        stroke="rgba(0,0,0,0.7)"
                      />
                      <YAxis
                        stroke="rgba(0,0,0,0.7)"
                        domain={[80, 100]}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor:
                            "rgba(0,0,0,0.1)",
                          border:
                            "1px solid rgba(0,0,0,0.2)",
                          borderRadius: "8px",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="aiAccuracy"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        name="AI Accuracy"
                      />
                      <Line
                        type="monotone"
                        dataKey="satelliteAccuracy"
                        stroke="#10B981"
                        strokeWidth={3}
                        name="Satellite Accuracy"
                      />
                      <Line
                        type="monotone"
                        dataKey="combinedAccuracy"
                        stroke="#8B5CF6"
                        strokeWidth={3}
                        name="Combined Score"
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Carbon Offset Verification Trends
                </h3>
                <div className="h-64">
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <AreaChart data={carbonOffsetTrendsData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(0,0,0,0.1)"
                      />
                      <XAxis
                        dataKey="month"
                        stroke="rgba(0,0,0,0.7)"
                      />
                      <YAxis stroke="rgba(0,0,0,0.7)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor:
                            "rgba(0,0,0,0.1)",
                          border:
                            "1px solid rgba(0,0,0,0.2)",
                          borderRadius: "8px",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="verified"
                        stackId="1"
                        stroke="#10B981"
                        fill="rgba(16,185,129,0.6)"
                        name="Verified (t CO₂)"
                      />
                      <Area
                        type="monotone"
                        dataKey="projected"
                        stackId="2"
                        stroke="#3B82F6"
                        fill="rgba(59,130,246,0.3)"
                        name="Projected (t CO₂)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* NGO Performance Table */}
            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                NGO Performance Analytics
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-black/20">
                      <th className="text-left text-black/70 p-3">
                        NGO
                      </th>
                      <th className="text-left text-black/70 p-3">
                        Projects
                      </th>
                      <th className="text-left text-black/70 p-3">
                        Success Rate
                      </th>
                      <th className="text-left text-black/70 p-3">
                        Avg Score
                      </th>
                      <th className="text-left text-black/70 p-3">
                        Total Earnings
                      </th>
                      <th className="text-left text-black/70 p-3">
                        Performance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ngoPerformanceData.map((ngo, index) => (
                      <tr
                        key={index}
                        className="border-b border-black/10"
                      >
                        <td className="text-black p-3 font-medium">
                          {ngo.ngo}
                        </td>
                        <td className="text-black p-3">
                          {ngo.projects}
                        </td>
                        <td className="text-black p-3">
                          <Badge
                            className={
                              ngo.successRate >= 90
                                ? "bg-emerald-500/20 text-emerald-800 border-emerald-400/30"
                                : "bg-yellow-500/20 text-yellow-800 border-yellow-400/30"
                            }
                          >
                            {ngo.successRate}%
                          </Badge>
                        </td>
                        <td className="text-black p-3">
                          <Badge className="bg-blue-500/20 text-blue-800 border-blue-400/30">
                            {ngo.avgScore}
                          </Badge>
                        </td>
                        <td className="text-black p-3">
                          ${ngo.totalEarnings.toLocaleString()}
                        </td>
                        <td className="text-black p-3">
                          <div className="flex items-center">
                            <div
                              className={"w-2 h-2 rounded-full mr-2 " + (ngo.successRate >= 95 ? "bg-emerald-900" : ngo.successRate >= 90 ? "bg-blue-400" : "bg-yellow-400")}
                            ></div>
                            <span className="text-sm">
                              {ngo.successRate >= 95
                                ? "Excellent"
                                : ngo.successRate >= 90
                                  ? "Good"
                                  : "Average"}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Certificate Status Overview */}
            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Certificate Status Distribution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-64">
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <RechartsPieChart>
                      <Pie
                        data={certificateStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => name + ": " + value}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {certificateStatusData.map(
                          (entry, index) => (
                            <Cell
                              key={"cell-" + index}
                              fill={entry.color}
                            />
                          )
                        )}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor:
                            "rgba(255,255,255,0.1)",
                          border:
                            "1px solid rgba(255,255,255,0.2)",
                          borderRadius: "8px",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  {certificateStatusData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-black/5 rounded-lg p-3"
                    >
                      <div className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-3"
                          style={{
                            backgroundColor: item.color,
                          }}
                        ></div>
                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </div>
                      <Badge className="bg-black/10 text-black border-black/20">
                        {item.value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="verification">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-blue-400" />
                  AI Analysis Dashboard
                </h3>
                <div className="space-y-4">
                  <div className="bg-black/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black/70 text-sm">
                        Image Recognition Accuracy
                      </p>
                      <p className="text-black">97.5%</p>
                    </div>
                    <Progress
                      value={97.5}
                      className="h-2 bg-black/10"
                    />
                  </div>
                  <div className="bg-black/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black/70 text-sm">
                        Species Identification
                      </p>
                      <p className="text-black">94.2%</p>
                    </div>
                    <Progress
                      value={94.2}
                      className="h-2 bg-black/10"
                    />
                  </div>
                  <div className="bg-black/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black/70 text-sm">
                        Growth Pattern Analysis
                      </p>
                      <p className="text-black">89.8%</p>
                    </div>
                    <Progress
                      value={89.8}
                      className="h-2 bg-black/10"
                    />
                  </div>
                  <div className="bg-black/5 rounded-lg p-4">
                    <p className="text-black/70 text-sm mb-2">
                      Recent AI Checks
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-black">
                          Amazon Project
                        </span>
                        <span className="text-emerald-900">
                          Verified
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-black">
                          Sahel Initiative
                        </span>
                        <span className="text-yellow-700">
                          Processing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <Satellite className="w-5 h-5 mr-2 text-green-400" />
                  Satellite Monitoring
                </h3>
                <div className="space-y-4">
                  <div className="bg-black/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black/70 text-sm">
                        Vegetation Index (NDVI)
                      </p>
                      <p className="text-black">0.82</p>
                    </div>
                    <Progress
                      value={82}
                      className="h-2 bg-black/10"
                    />
                  </div>
                  <div className="bg-black/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black/70 text-sm">
                        Forest Cover Change
                      </p>
                      <p className="text-black">+15.3%</p>
                    </div>
                    <Progress
                      value={78}
                      className="h-2 bg-black/10"
                    />
                  </div>
                  <div className="bg-black/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black/70 text-sm">
                        Deforestation Risk
                      </p>
                      <p className="text-black">Low (12%)</p>
                    </div>
                    <Progress
                      value={12}
                      className="h-2 bg-black/10"
                    />
                  </div>
                  <div className="bg-black/5 rounded-lg p-4">
                    <p className="text-black/70 text-sm mb-2">
                      Satellite Updates
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-black">
                          Weekly Scan
                        </span>
                        <span className="text-emerald-900">
                          Completed
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-black">
                          Change Detection
                        </span>
                        <span className="text-blue-900">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6">
                Verification Queue
              </h3>
              <div className="space-y-4">
                {submissions
                  .filter(
                    (s) =>
                      s.status === "ai_verification" ||
                      s.status === "pending_review",
                  )
                  .map((submission) => (
                    <div
                      key={submission.id}
                      className="bg-black/5 rounded-xl p-4 border border-black/10 flex justify-between items-center"
                    >
                      <div>
                        <p className="text-black">
                          {submission.name}
                        </p>
                        <p className="text-black/60 text-sm">
                          AI: {submission.aiScore}% • Satellite:{" "}
                          {submission.satelliteScore}%
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          <Bot className="w-4 h-4 mr-2" />
                          Run AI Check
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600"
                        >
                          <Satellite className="w-4 h-4 mr-2" />
                          Satellite Analysis
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="certificates">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-black">
                Certificate Management
              </h2>
              <div className="flex items-center gap-4">
                {/* Wallet Connection Status */}
                <div className="flex items-center gap-2">
                  <div className={"w-3 h-3 rounded-full " + (walletConnected ? "bg-emerald-500" : "bg-red-500")}></div>
                  <span className="text-sm text-black/70">
                    {walletConnected ? "Wallet Connected" : "Wallet Disconnected"}
                  </span>
                </div>
                
                {!walletConnected && (
                  <Button 
                    onClick={connectWallet}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                )}
                
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Upload className="w-4 h-4 mr-2" />
                  Mint New Token
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {submissions
                .filter((s) => s.status === "approved")
                .map((submission) => (
                  <Card
                    key={submission.id}
                    className="backdrop-blur-md bg-black/10 border border-black/20 p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl text-black mb-2">
                          {submission.name}
                        </h3>
                        <p className="text-black/70 text-sm">
                          {submission.ngo}
                        </p>
                      </div>
                      <Badge className="bg-emerald-500/20 text-emerald-800 border-emerald-400/30">
                        Ready for Minting
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-black/5 rounded-lg p-3">
                        <p className="text-black/70 text-xs">
                          Carbon Verified
                        </p>
                        <p className="text-black text-lg">
                          {submission.estimatedCarbon}t CO₂
                        </p>
                      </div>
                      <div className="bg-black/5 rounded-lg p-3">
                        <p className="text-black/70 text-xs">
                          Verification Score
                        </p>
                        <p className="text-black text-lg">
                          {Math.round(
                            (submission.aiScore +
                              submission.satelliteScore) /
                              2,
                          )}
                          %
                        </p>
                      </div>
                      <div className="bg-black/5 rounded-lg p-3">
                        <p className="text-black/70 text-xs">
                          Area Restored
                        </p>
                        <p className="text-black text-lg">
                          {submission.area}
                        </p>
                      </div>
                      <div className="bg-black/5 rounded-lg p-3">
                        <p className="text-black/70 text-xs">
                          Species Count
                        </p>
                        <p className="text-black text-lg">
                          {submission.species}
                        </p>
                      </div>
                    </div>

                    {/* NGO Wallet & Token Amount Section */}
                    <div className="bg-gradient-to-r from-emerald-50/50 to-blue-50/50 rounded-xl p-4 mb-6 border border-emerald-200/30">
                      {mintedSubmissions.has(submission.id) ? (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-emerald-600/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-emerald-500/30">
                            <CheckCircle className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-emerald-700 text-lg mb-2 font-semibold">Already Minted</h4>
                          <p className="text-emerald-600/80 text-sm">NFT Certificate has been successfully minted for this submission</p>
                          <Badge className="mt-3 bg-emerald-100 text-emerald-700 border-emerald-300">
                            ✓ Completed
                          </Badge>
                        </div>
                      ) : (
                        <>
                          <h4 className="text-black text-sm mb-4 flex items-center gap-2">
                            <div className="w-6 h-6 bg-emerald-600/80 rounded-lg flex items-center justify-center shadow-lg border border-emerald-500/30">
                              <Wallet className="w-3 h-3 text-white" />
                            </div>
                            Minting Configuration
                          </h4>
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <label className="text-black/70 text-xs block mb-2">
                                NGO Wallet Address (Auto-fetched)
                              </label>
                              <Input
                                value={walletAddress || "0x742d35Cc...8B9C4A"}
                                readOnly
                                className="bg-black/10 border-black/20 text-black text-sm font-mono cursor-not-allowed"
                                placeholder="Auto-fetched from NGO profile"
                              />
                            </div>
                            <div>
                              <label className="text-black/70 text-xs block mb-2">
                                Token Amount to Mint
                              </label>
                              <Input
                                type="number"
                                placeholder="Enter token amount"
                                value={tokenAmounts[submission.id] || ''}
                                onChange={(e) => handleTokenAmountChange(submission.id, e.target.value)}
                                className="bg-white/50 border-black/20 text-black text-sm"
                                min="1"
                                step="1"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {!mintedSubmissions.has(submission.id) && (
                      <div className="flex gap-3">
                        <Button
                          onClick={() =>
                            handleMintCertificate(submission.id)
                          }
                          disabled={mintingStates[submission.id] === 'minting' || mintingStates[submission.id] === 'connecting'}
                          className={"flex-1 " + (
                            mintingStates[submission.id] === "success" 
                              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
                              : mintingStates[submission.id] === "error"
                              ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          ) + " " + (
                            mintingStates[submission.id] === "minting" || mintingStates[submission.id] === "connecting"
                              ? "opacity-70 cursor-not-allowed" 
                              : ""
                          )}
                        >
                          {mintingStates[submission.id] === 'connecting' ? (
                            <>
                              <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                              Connecting Wallet...
                            </>
                          ) : mintingStates[submission.id] === 'minting' ? (
                            <>
                              <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                              Minting on Blockchain...
                            </>
                          ) : mintingStates[submission.id] === 'success' ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Minted Successfully!
                            </>
                          ) : mintingStates[submission.id] === 'error' ? (
                            <>
                              <XCircle className="w-4 h-4 mr-2" />
                              Minting Failed - Retry
                            </>
                          ) : (
                            <>
                              <Award className="w-4 h-4 mr-2" />
                              Mint NFT Token
                            </>
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          className="text-black hover:bg-black/10"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    )}
                  </Card>
                ))}
            </div>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6">
                Issued Tokens
              </h3>
              <div className="space-y-4">
                {mintedSubmissions.size === 0 ? (
                  <div className="bg-black/5 rounded-xl p-6 border border-black/10 text-center">
                    <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-black/40" />
                    </div>
                    <p className="text-black/60 text-sm">
                      No tokens have been minted yet.
                    </p>
                    <p className="text-black/40 text-xs mt-1">
                      Complete the minting process in Token Management to see issued tokens here.
                    </p>
                  </div>
                ) : (
                  Array.from(mintedSubmissions).map((submissionId) => {
                    const submission = submissions.find(s => s.id === submissionId);
                    if (!submission) return null;
                    
                    const tokenId = `NFT-${String(submissionId).padStart(3, '0')}-2025`;
                    const mintedAmount = tokenAmounts[submissionId] || '0';
                    const mintDate = new Date().toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    });

                    return (
                      <div key={submissionId} className="bg-black/5 rounded-xl p-4 border border-black/10 flex justify-between items-center">
                        <div>
                          <p className="text-black">
                            Token #{tokenId}
                          </p>
                          <p className="text-black/60 text-sm">
                            {submission.name} • Issued: {mintDate}
                          </p>
                          <p className="text-black/50 text-xs mt-1">
                            {submission.estimatedCarbon}t CO₂ • {submission.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-emerald-500/20 text-emerald-800 border-emerald-400/30">
                            Minted
                          </Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-black hover:bg-black/10"
                            onClick={() => {
                              const mockTxHash = "0x" + Math.random().toString(16).substring(2, 66);
                              const blockchainUrl = `https://etherscan.io/tx/${mockTxHash}`;
                              alert(`🔗 Blockchain Explorer\n\nToken ID: ${tokenId}\nProject: ${submission.name}\nCarbon Credits: ${submission.estimatedCarbon}t CO₂\nNGO: ${submission.ngo}\nLocation: ${submission.location}\n\nView on Etherscan: ${blockchainUrl}`);
                            }}
                          >
                            View on Blockchain
                          </Button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}