import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Plus, MapPin, DollarSign, CheckCircle, Clock, AlertCircle, FileText, Camera, Leaf, BarChart3, Calendar, Users, TreePine, Droplets, Award, TrendingUp, Satellite, Bot, Wallet, Activity, PieChart, LineChart, Download, X, QrCode, Shield } from 'lucide-react';
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
  Cell
} from 'recharts';

export function NGOPortal() {
  const [projects] = useState([
    {
      id: 1,
      name: "Sundarbans Mangrove Restoration",
      location: "West Bengal",
      area: "500 hectares",
      earnings: 125000,
      aiScore: 94,
      certProgress: 75,
      status: "active",
      species: 25,
      carbonOffset: 2500,
      ndviCurrent: 0.72,
      ndviBaseline: 0.35,
      ndviTarget: 0.85,
      ndviTrend: "increasing"
    },
    {
      id: 2,
      name: "Kutch Mangrove Conservation",
      location: "Gujarat",
      area: "300 hectares",
      earnings: 87500,
      aiScore: 89,
      certProgress: 45,
      status: "pending",
      species: 18,
      carbonOffset: 1800,
      ndviCurrent: 0.58,
      ndviBaseline: 0.28,
      ndviTarget: 0.78,
      ndviTrend: "stable"
    },
    {
      id: 3,
      name: "Pichavaram Mangrove Recovery",
      location: "Tamil Nadu",
      area: "200 hectares",
      earnings: 95000,
      aiScore: 96,
      certProgress: 90,
      status: "verified",
      species: 12,
      carbonOffset: 3200,
      ndviCurrent: 0.84,
      ndviBaseline: 0.42,
      ndviTarget: 0.90,
      ndviTrend: "increasing"
    }
  ]);

  const [showNewProject, setShowNewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const [newProject, setNewProject] = useState({
    name: '',
    location: '',
    area: '',
    description: '',
    species: '',
    estimatedCarbon: ''
  });

  // Analytics Data
  const projectPerformanceData = [
    { month: 'Jan 2025', sundarbans: 0.68, kutch: 0.54, pichavaram: 0.80, earnings: 8500, carbonOffset: 1200 },
    { month: 'Feb 2025', sundarbans: 0.69, kutch: 0.55, pichavaram: 0.81, earnings: 12000, carbonOffset: 1450 },
    { month: 'Mar 2025', sundarbans: 0.70, kutch: 0.56, pichavaram: 0.82, earnings: 15500, carbonOffset: 1700 },
    { month: 'Apr 2025', sundarbans: 0.71, kutch: 0.57, pichavaram: 0.83, earnings: 18000, carbonOffset: 2100 },
    { month: 'May 2025', sundarbans: 0.72, kutch: 0.58, pichavaram: 0.84, earnings: 22000, carbonOffset: 2500 },
    { month: 'Jun 2025', sundarbans: 0.72, kutch: 0.58, pichavaram: 0.84, earnings: 25000, carbonOffset: 2850 },
    { month: 'Jul 2025', sundarbans: 0.72, kutch: 0.58, pichavaram: 0.84, earnings: 28500, carbonOffset: 3200 },
    { month: 'Aug 2025', sundarbans: 0.72, kutch: 0.58, pichavaram: 0.84, earnings: 32000, carbonOffset: 3650 }
  ];

  const carbonImpactData = [
    { project: 'Sundarbans', current: 2500, target: 3000, baseline: 1000 },
    { project: 'Kutch', current: 1800, target: 2200, baseline: 800 },
    { project: 'Pichavaram', current: 3200, target: 3500, baseline: 1200 }
  ];

  const aiVerificationTrends = [
    { month: 'Jan', accuracy: 88, confidence: 85, submissions: 12 },
    { month: 'Feb', accuracy: 90, confidence: 87, submissions: 15 },
    { month: 'Mar', accuracy: 92, confidence: 89, submissions: 18 },
    { month: 'Apr', accuracy: 93, confidence: 91, submissions: 20 },
    { month: 'May', accuracy: 94, confidence: 93, submissions: 22 },
    { month: 'Jun', accuracy: 96, confidence: 94, submissions: 25 },
    { month: 'Jul', accuracy: 95, confidence: 93, submissions: 28 },
    { month: 'Aug', accuracy: 96, confidence: 94, submissions: 30 }
  ];

  const speciesDistributionData = [
    { name: 'Rhizophora', value: 35, projects: 2, color: '#10B981' },
    { name: 'Avicennia', value: 28, projects: 3, color: '#3B82F6' },
    { name: 'Bruguiera', value: 22, projects: 2, color: '#8B5CF6' },
    { name: 'Sonneratia', value: 15, projects: 1, color: '#F59E0B' }
  ];

  const projectComparisonData = [
    { name: 'Sundarbans', area: 500, aiScore: 94, ndvi: 0.72, carbonOffset: 2500, earnings: 125000 },
    { name: 'Kutch', area: 300, aiScore: 89, ndvi: 0.58, carbonOffset: 1800, earnings: 87500 },
    { name: 'Pichavaram', area: 200, aiScore: 96, ndvi: 0.84, carbonOffset: 3200, earnings: 95000 }
  ];

  const earningsBreakdownData = [
    { source: 'Carbon Credits', amount: 180000, percentage: 58, color: '#10B981' },
    { source: 'Biodiversity Bonus', amount: 75000, percentage: 24, color: '#3B82F6' },
    { source: 'AI Verification Bonus', amount: 35000, percentage: 11, color: '#8B5CF6' },
    { source: 'Community Impact', amount: 22500, percentage: 7, color: '#F59E0B' }
  ];

  const COLORS = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-500/20 text-blue-800 border-blue-400/30';
      case 'verified':
        return 'bg-emerald-500/20 text-emerald-800 border-emerald-400/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-800 border-yellow-400/30';
      default:
        return 'bg-gray-500/20 text-gray-800 border-gray-400/30';
    }
  };

  // Certificate data for NGO projects
  const certificates = [
    {
      id: 1,
      nftId: "COASTLY-NGO-001",
      projectName: "Sundarbans Mangrove Restoration",
      location: "West Bengal",
      landArea: 500,
      carbonCredits: 2500,
      totalTokens: 25000,
      tokenPrice: 5.2,
      ngoName: "Coastal Conservation Foundation",
      ngoId: "CCF-WB-2023",
      issueDate: "2025-08-15",
      expiryDate: "2028-08-15",
      verificationDate: "2025-08-10",
      projectStartDate: "2024-01-15",
      blockchainHash: "0x8f2e9d7c3a1b4e6f9c8d7a2b3c4e5f6a9b8c7d2e3f4a5b6c9d8e7f3a2b1c4d5e6f",
      transactionHash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c",
      downloadable: true
    },
    {
      id: 2,
      nftId: "COASTLY-NGO-002",
      projectName: "Kutch Mangrove Conservation",
      location: "Gujarat",
      landArea: 300,
      carbonCredits: 1800,
      totalTokens: 18000,
      tokenPrice: 4.8,
      ngoName: "Coastal Conservation Foundation",
      ngoId: "CCF-GJ-2023",
      issueDate: "2025-07-20",
      expiryDate: "2028-07-20",
      verificationDate: "2025-07-15",
      projectStartDate: "2024-03-10",
      blockchainHash: "0x7e1d8c6b5a4f3e2d9c8b7a6f5e4d3c2b1a9f8e7d6c5b4a3f2e1d9c8b7a6f5e4d3c",
      transactionHash: "0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d",
      downloadable: false
    },
    {
      id: 3,
      nftId: "COASTLY-NGO-003",
      projectName: "Pichavaram Mangrove Recovery",
      location: "Tamil Nadu",
      landArea: 200,
      carbonCredits: 3200,
      totalTokens: 32000,
      tokenPrice: 6.1,
      ngoName: "Coastal Conservation Foundation",
      ngoId: "CCF-TN-2023",
      issueDate: "2025-09-05",
      expiryDate: "2028-09-05",
      verificationDate: "2025-09-01",
      projectStartDate: "2024-02-20",
      blockchainHash: "0x9f3e8d7c6b5a4f3e2d1c9b8a7f6e5d4c3b2a1f9e8d7c6b5a4f3e2d1c9b8a7f6e5d",
      transactionHash: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e",
      downloadable: true
    }
  ];

  const handleViewCertificate = (certId: number) => {
    setSelectedCertificate(certId);
    setShowCertificateModal(true);
  };

  const handleActualDownload = (certId: number) => {
    // Create a simple certificate text file
    const certificate = certificates.find(cert => cert.id === certId);
    if (certificate) {
      const content = `
COASTLY CARBON CREDIT CERTIFICATE (NGO COPY)
===========================================

Certificate ID: ${certificate.nftId}
Project: ${certificate.projectName}
Location: ${certificate.location}
NGO: ${certificate.ngoName}
Carbon Credits: ${certificate.carbonCredits} tCO₂
Land Area: ${certificate.landArea} hectares
Issue Date: ${certificate.issueDate}
Blockchain Hash: ${certificate.blockchainHash}

This certificate represents verified carbon credits
from coastal mangrove restoration projects implemented
by ${certificate.ngoName}.

Issued by: Coastly Platform
Verified by: Government of India + AI + Satellite Monitoring
      `;
      
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ngo-certificate-${certificate.nftId}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleSubmitProject = () => {
    // Mock submission
    setShowNewProject(false);
    setNewProject({
      name: '',
      location: '',
      area: '',
      description: '',
      species: '',
      estimatedCarbon: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Tabs defaultValue="dashboard" className="w-full">
        <div className="backdrop-blur-md bg-black/10 rounded-2xl border border-black/20 p-6 mb-8">
          <TabsList className="grid w-full grid-cols-5 bg-black/10 border border-black/20">
            <TabsTrigger value="dashboard" className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="projects" className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black">
              Projects
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="earnings" className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black">
              Earnings
            </TabsTrigger>
            <TabsTrigger value="certificates" className="text-black data-[state=active]:bg-black/20 data-[state=active]:text-black">
              Certificates
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/70 text-sm">Active Projects</p>
                  <p className="text-3xl text-black">{projects.length}</p>
                </div>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/70 text-sm">Total Earnings</p>
                  <p className="text-3xl text-black">${projects.reduce((sum, p) => sum + p.earnings, 0).toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/70 text-sm">Avg AI Score</p>
                  <p className="text-3xl text-black">{Math.round(projects.reduce((sum, p) => sum + p.aiScore, 0) / projects.length)}%</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/70 text-sm">Avg NDVI Score</p>
                  <p className="text-3xl text-black">{(projects.reduce((sum, p) => sum + p.ndviCurrent, 0) / projects.length).toFixed(2)}</p>
                </div>
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                  <Satellite className="w-6 h-6 text-teal-400" />
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black/70 text-sm">Carbon Offset</p>
                  <p className="text-3xl text-black">{projects.reduce((sum, p) => sum + p.carbonOffset, 0).toLocaleString()}t</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6">Recent Activities</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-black text-sm">AI verification completed for Sundarbans project</p>
                    <p className="text-black/60 text-xs">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-black text-sm">Payment received: $15,000</p>
                    <p className="text-black/60 text-xs">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-black text-sm">Certificate pending approval</p>
                    <p className="text-black/60 text-xs">3 days ago</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6">AI Verification Status</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-black/5 rounded-xl p-4 border border-black/10">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black text-sm">{project.name}</p>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black/70 text-xs">AI Confidence Score</p>
                      <p className="text-black text-sm">{project.aiScore}%</p>
                    </div>
                    <Progress value={project.aiScore} className="h-2 bg-black/10" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-black">My Projects</h2>
              <Button 
                onClick={() => setShowNewProject(true)}
                className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>

            {showNewProject && (
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-4">Register New Project</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    placeholder="Project Name"
                    value={newProject.name}
                    onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                    className="bg-black/10 border-black/20 text-black placeholder:text-black/60"
                  />
                  <Input
                    placeholder="Location"
                    value={newProject.location}
                    onChange={(e) => setNewProject({...newProject, location: e.target.value})}
                    className="bg-black/10 border-black/20 text-black placeholder:text-black/60"
                  />
                  <Input
                    placeholder="Area (hectares)"
                    value={newProject.area}
                    onChange={(e) => setNewProject({...newProject, area: e.target.value})}
                    className="bg-black/10 border-black/20 text-black placeholder:text-black/60"
                  />
                  <Input
                    placeholder="Number of Species"
                    value={newProject.species}
                    onChange={(e) => setNewProject({...newProject, species: e.target.value})}
                    className="bg-black/10 border-black/20 text-black placeholder:text-black/60"
                  />
                </div>
                <Textarea
                  placeholder="Project Description"
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  className="bg-black/10 border-black/20 text-black placeholder:text-black/60 mb-4"
                />
                <div className="flex gap-4">
                  <Button 
                    onClick={handleSubmitProject}
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
                  >
                    Submit for Review
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowNewProject(false)}
                    className="text-black hover:bg-black/10"
                  >
                    Cancel
                  </Button>
                </div>
              </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl text-black mb-2">{project.name}</h3>
                      <p className="text-black/70 text-sm flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location} • {project.area}
                      </p>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-black/5 rounded-lg p-3">
                      <p className="text-black/70 text-xs">AI Score</p>
                      <p className="text-black text-lg">{project.aiScore}%</p>
                    </div>
                    <div className="bg-black/5 rounded-lg p-3">
                      <p className="text-black/70 text-xs">NDVI Current</p>
                      <p className="text-black text-lg">{project.ndviCurrent}</p>
                    </div>
                    <div className="bg-black/5 rounded-lg p-3">
                      <p className="text-black/70 text-xs">Species</p>
                      <p className="text-black text-lg">{project.species}</p>
                    </div>
                    <div className="bg-black/5 rounded-lg p-3">
                      <p className="text-black/70 text-xs">Carbon Offset</p>
                      <p className="text-black text-lg">{project.carbonOffset}t</p>
                    </div>
                  </div>

                  {/* NDVI Progress Bar */}
                  <div className="bg-black/5 rounded-lg p-3 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-black/70 text-xs">NDVI Progress</p>
                      <div className="flex items-center gap-2">
                        <span className="text-black/60 text-xs">{project.ndviBaseline}</span>
                        <TrendingUp className={`w-3 h-3 ${project.ndviTrend === 'increasing' ? 'text-emerald-400' : 'text-yellow-400'}`} />
                        <span className="text-black text-xs">{project.ndviCurrent}</span>
                        <span className="text-black/60 text-xs">/ {project.ndviTarget}</span>
                      </div>
                    </div>
                    <Progress 
                      value={((project.ndviCurrent - project.ndviBaseline) / (project.ndviTarget - project.ndviBaseline)) * 100} 
                      className="h-2 bg-black/10" 
                    />
                  </div>

                  <Progress value={project.certProgress} className="mb-4 h-2 bg-black/10" />

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-black hover:bg-black/10"
                      onClick={() => {
                        setModalLoading(true);
                        setTimeout(() => {
                          setSelectedProject(project.id);
                          setModalLoading(false);
                        }, 100);
                      }}
                      disabled={modalLoading}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      {modalLoading ? 'Loading...' : 'View Details'}
                    </Button>
                    <Button size="sm" variant="ghost" className="text-black hover:bg-black/10">
                      <Camera className="w-4 h-4 mr-2" />
                      Upload Images
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-black">Project Analytics Dashboard</h2>
              <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600">
                <Activity className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>

            {/* Analytics Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black/70 text-sm">Total Area Restored</p>
                    <p className="text-3xl text-black">1,000 ha</p>
                    <p className="text-emerald-800 text-sm">+15% this quarter</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black/70 text-sm">Avg NDVI Improvement</p>
                    <p className="text-3xl text-black">+0.31</p>
                    <p className="text-blue-400 text-sm">From baseline</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black/70 text-sm">AI Verification Rate</p>
                    <p className="text-3xl text-black">96%</p>
                    <p className="text-purple-400 text-sm">Success rate</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-black/70 text-sm">Species Planted</p>
                    <p className="text-3xl text-black">55</p>
                    <p className="text-teal-400 text-sm">Native varieties</p>
                  </div>
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-teal-400" />
                  </div>
                </div>
              </Card>
            </div>

            {/* NDVI Progress Tracking */}
            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6 flex items-center">
                <Satellite className="w-5 h-5 mr-2" />
                NDVI Vegetation Tracking Over Time
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={projectPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(0,0,0,0.7)" />
                    <YAxis stroke="rgba(0,0,0,0.7)" domain={[0.5, 0.9]} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        border: '1px solid rgba(0,0,0,0.2)',
                        borderRadius: '8px',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="sundarbans" stroke="#10B981" strokeWidth={3} name="Sundarbans" />
                    <Line type="monotone" dataKey="kutch" stroke="#3B82F6" strokeWidth={3} name="Kutch" />
                    <Line type="monotone" dataKey="pichavaram" stroke="#8B5CF6" strokeWidth={3} name="Pichavaram" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Carbon Impact Progress */}
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <Leaf className="w-5 h-5 mr-2" />
                  Carbon Offset Progress by Project
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={carbonImpactData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis dataKey="project" stroke="rgba(0,0,0,0.7)" />
                      <YAxis stroke="rgba(0,0,0,0.7)" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          border: '1px solid rgba(0,0,0,0.2)',
                          borderRadius: '8px',
                          backdropFilter: 'blur(10px)'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="baseline" fill="rgba(107,114,128,0.5)" name="Baseline" />
                      <Bar dataKey="current" fill="#10B981" name="Current" />
                      <Bar dataKey="target" fill="rgba(16,185,129,0.3)" name="Target" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Species Distribution */}
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  Mangrove Species Distribution
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={speciesDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {speciesDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          border: '1px solid rgba(0,0,0,0.2)',
                          borderRadius: '8px',
                          backdropFilter: 'blur(10px)'
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Earnings and AI Verification Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Earnings Growth Over Time
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={projectPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(0,0,0,0.7)" />
                      <YAxis stroke="rgba(0,0,0,0.7)" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          border: '1px solid rgba(0,0,0,0.2)',
                          borderRadius: '8px',
                          backdropFilter: 'blur(10px)'
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="earnings"
                        stroke="#10B981"
                        fill="rgba(16,185,129,0.3)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
                <h3 className="text-xl text-black mb-6 flex items-center">
                  <Bot className="w-5 h-5 mr-2" />
                  AI Verification Accuracy Trends
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={aiVerificationTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(0,0,0,0.7)" />
                      <YAxis stroke="rgba(0,0,0,0.7)" domain={[80, 100]} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          border: '1px solid rgba(0,0,0,0.2)',
                          borderRadius: '8px',
                          backdropFilter: 'blur(10px)'
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="accuracy" stroke="#3B82F6" strokeWidth={3} name="Accuracy %" />
                      <Line type="monotone" dataKey="confidence" stroke="#8B5CF6" strokeWidth={3} name="Confidence %" />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Project Comparison Table */}
            <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
              <h3 className="text-xl text-black mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Project Performance Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-black/20">
                      <th className="text-left text-black/70 p-3">Project</th>
                      <th className="text-left text-black/70 p-3">Area (ha)</th>
                      <th className="text-left text-black/70 p-3">AI Score</th>
                      <th className="text-left text-black/70 p-3">NDVI</th>
                      <th className="text-left text-black/70 p-3">Carbon Offset (t)</th>
                      <th className="text-left text-black/70 p-3">Earnings ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectComparisonData.map((project, index) => (
                      <tr key={index} className="border-b border-black/10">
                        <td className="text-black p-3 font-medium">{project.name}</td>
                        <td className="text-black p-3">{project.area}</td>
                        <td className="text-black p-3">
                          <Badge className="bg-blue-500/20 text-blue-800 border-blue-400/30">
                            {project.aiScore}%
                          </Badge>
                        </td>
                        <td className="text-black p-3">
                          <Badge className="bg-emerald-500/20 text-emerald-800 border-emerald-400/30">
                            {project.ndvi}
                          </Badge>
                        </td>
                        <td className="text-black p-3">{project.carbonOffset.toLocaleString()}</td>
                        <td className="text-black p-3">${project.earnings.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="earnings">
          <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
            <h2 className="text-2xl text-black mb-6">Earnings Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-black/5 rounded-xl p-6 border border-black/10">
                <h3 className="text-black/70 text-sm mb-2">Total Earned</h3>
                <p className="text-3xl text-black mb-2">${projects.reduce((sum, p) => sum + p.earnings, 0).toLocaleString()}</p>
                <p className="text-emerald-400 text-sm">+12% from last month</p>
              </div>
              <div className="bg-black/5 rounded-xl p-6 border border-black/10">
                <h3 className="text-black/70 text-sm mb-2">Pending Payments</h3>
                <p className="text-3xl text-black mb-2">$45,000</p>
                <p className="text-yellow-400 text-sm">3 payments pending</p>
              </div>
              <div className="bg-black/5 rounded-xl p-6 border border-black/10">
                <h3 className="text-black/70 text-sm mb-2">Average per Project</h3>
                <p className="text-3xl text-black mb-2">${Math.round(projects.reduce((sum, p) => sum + p.earnings, 0) / projects.length).toLocaleString()}</p>
                <p className="text-blue-400 text-sm">Across {projects.length} projects</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-black">Payment History</h3>
              {projects.map((project) => (
                <div key={project.id} className="bg-black/5 rounded-xl p-4 border border-black/10 flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-black">{project.name}</p>
                    <p className="text-black/60 text-sm">Last payment: Sep 1, 2025</p>
                  </div>
                  <div className="text-right mr-4">
                    <p className="text-black text-lg">${project.earnings.toLocaleString()}</p>
                    <p className="text-emerald-400 text-sm">Verified</p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-black hover:bg-black/10"
                    onClick={() => setSelectedProject(`payment-${project.id}`)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              ))}
            </div>

            {/* Payment Details Modal */}
            {selectedProject && selectedProject.toString().startsWith('payment-') && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <div 
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setSelectedProject(null)}
                />
                
                {/* Modal Content */}
                <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                  <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-8">
                    {(() => {
                      const projectId = parseInt(selectedProject.toString().replace('payment-', ''));
                      const project = projects.find(p => p.id === projectId);
                      if (!project) return null;
                      
                      // Mock payment transactions data
                      const transactions = [
                        {
                          id: 1,
                          date: '2025-09-01',
                          amount: 15000,
                          type: 'Carbon Credit Payment',
                          status: 'Completed',
                          txHash: '0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456',
                          blockNumber: 18542367,
                          gasUsed: '21,000',
                          gasFee: '0.002 ETH',
                          fromAddress: '0x742d...9C4A',
                          toAddress: '0x8ba1...f214'
                        },
                        {
                          id: 2,
                          date: '2025-08-15',
                          amount: 25000,
                          type: 'Milestone Payment',
                          status: 'Completed',
                          txHash: '0xb2c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567a',
                          blockNumber: 18421893,
                          gasUsed: '21,000',
                          gasFee: '0.0018 ETH',
                          fromAddress: '0x742d...9C4A',
                          toAddress: '0x8ba1...f214'
                        },
                        {
                          id: 3,
                          date: '2025-07-30',
                          amount: 20000,
                          type: 'Initial Payment',
                          status: 'Completed',
                          txHash: '0xc3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2',
                          blockNumber: 18298745,
                          gasUsed: '21,000',
                          gasFee: '0.0021 ETH',
                          fromAddress: '0x742d...9C4A',
                          toAddress: '0x8ba1...f214'
                        },
                        {
                          id: 4,
                          date: '2025-09-10',
                          amount: 18000,
                          type: 'Verification Bonus',
                          status: 'Pending',
                          txHash: '0xd4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2c3',
                          blockNumber: null,
                          gasUsed: 'N/A',
                          gasFee: 'N/A',
                          fromAddress: '0x742d...9C4A',
                          toAddress: '0x8ba1...f214'
                        }
                      ];
                      
                      return (
                        <>
                          {/* Header */}
                          <div className="flex justify-between items-start mb-6">
                            <div className="flex-1">
                              <h2 className="text-2xl text-black mb-2">Payment Transaction Details</h2>
                              <h3 className="text-lg text-black/80 mb-4">{project.name}</h3>
                              <div className="flex items-center gap-4 text-black/70 text-sm">
                                <span>Total Earned: ${project.earnings.toLocaleString()}</span>
                                <span>•</span>
                                <span>Location: {project.location}</span>
                                <span>•</span>
                                <span>Area: {project.area}</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => setSelectedProject(null)}
                              className="text-black/70 hover:text-black bg-black/10 hover:bg-black/20 rounded-full p-2 transition-colors"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>

                          {/* Payment Summary */}
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-black/5 rounded-lg p-4 border border-black/10">
                              <p className="text-black/70 text-xs mb-1">Total Payments</p>
                              <p className="text-black text-xl">{transactions.filter(t => t.status === 'Completed').length}</p>
                              <p className="text-emerald-400 text-xs">Successful</p>
                            </div>
                            <div className="bg-black/5 rounded-lg p-4 border border-black/10">
                              <p className="text-black/70 text-xs mb-1">Total Amount</p>
                              <p className="text-black text-xl">${project.earnings.toLocaleString()}</p>
                              <p className="text-blue-400 text-xs">USD received</p>
                            </div>
                            <div className="bg-black/5 rounded-lg p-4 border border-black/10">
                              <p className="text-black/70 text-xs mb-1">Pending</p>
                              <p className="text-black text-xl">${transactions.filter(t => t.status === 'Pending').reduce((sum, t) => sum + t.amount, 0).toLocaleString()}</p>
                              <p className="text-yellow-400 text-xs">Processing</p>
                            </div>
                            <div className="bg-black/5 rounded-lg p-4 border border-black/10">
                              <p className="text-black/70 text-xs mb-1">Next Expected</p>
                              <p className="text-black text-xl">Oct 15</p>
                              <p className="text-purple-400 text-xs">Milestone</p>
                            </div>
                          </div>

                          {/* Transactions List */}
                          <div className="bg-black/5 rounded-lg p-6 mb-6 border border-black/10">
                            <h3 className="text-black mb-4 flex items-center">
                              <DollarSign className="w-5 h-5 mr-2" />
                              Transaction History
                            </h3>
                            <div className="space-y-4">
                              {transactions.map((transaction) => (
                                <div key={transaction.id} className="bg-black/5 rounded-lg p-4 border border-black/10">
                                  <div className="flex justify-between items-start mb-3">
                                    <div>
                                      <h4 className="text-black mb-1">{transaction.type}</h4>
                                      <p className="text-black/60 text-sm">{transaction.date}</p>
                                    </div>
                                    <div className="text-right">
                                      <p className="text-black text-lg">${transaction.amount.toLocaleString()}</p>
                                      <Badge className={transaction.status === 'Completed' ? 
                                        'bg-emerald-500/20 text-emerald-300 border-emerald-400/30' : 
                                        'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
                                      }>
                                        {transaction.status}
                                      </Badge>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <p className="text-black/70 mb-2">Transaction Hash:</p>
                                      <p className="text-blue-400 font-mono text-xs break-all mb-3">{transaction.txHash}</p>
                                      <div className="space-y-1">
                                        <div className="flex justify-between">
                                          <span className="text-black/70">From:</span>
                                          <span className="text-black font-mono text-xs">{transaction.fromAddress}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-black/70">To:</span>
                                          <span className="text-black font-mono text-xs">{transaction.toAddress}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="space-y-2">
                                        <div className="flex justify-between">
                                          <span className="text-black/70">Block Number:</span>
                                          <span className="text-black">{transaction.blockNumber || 'Pending'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-black/70">Gas Used:</span>
                                          <span className="text-black">{transaction.gasUsed}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-black/70">Gas Fee:</span>
                                          <span className="text-black">{transaction.gasFee}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-black/70">Network:</span>
                                          <span className="text-black">Ethereum Mainnet</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {transaction.status === 'Completed' && (
                                    <div className="mt-3 pt-3 border-t border-black/10">
                                      <Button 
                                        size="sm" 
                                        variant="ghost" 
                                        className="text-blue-400 hover:bg-blue-500/10"
                                      >
                                        View on Etherscan
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Payment Methods & Wallet Info */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-black/5 rounded-lg p-6 border border-black/10">
                              <h4 className="text-black mb-4 flex items-center">
                                <Wallet className="w-5 h-5 mr-2" />
                                Payment Methods
                              </h4>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-black/5 rounded-lg">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                                      <span className="text-blue-400 text-xs">ETH</span>
                                    </div>
                                    <div>
                                      <p className="text-black text-sm">Ethereum Wallet</p>
                                      <p className="text-black/60 text-xs">Primary payment method</p>
                                    </div>
                                  </div>
                                  <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30">
                                    Active
                                  </Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-black/5 rounded-lg">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                                      <span className="text-green-400 text-xs">USD</span>
                                    </div>
                                    <div>
                                      <p className="text-black text-sm">Bank Transfer</p>
                                      <p className="text-black/60 text-xs">Backup method</p>
                                    </div>
                                  </div>
                                  <Badge className="bg-gray-500/20 text-gray-300 border-gray-400/30">
                                    Inactive
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <div className="bg-black/5 rounded-lg p-6 border border-black/10">
                              <h4 className="text-black mb-4 flex items-center">
                                <BarChart3 className="w-5 h-5 mr-2" />
                                Payment Analytics
                              </h4>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-black/70 text-sm">Average Payment:</span>
                                  <span className="text-black">${Math.round(project.earnings / transactions.filter(t => t.status === 'Completed').length).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-black/70 text-sm">Payment Frequency:</span>
                                  <span className="text-black">Monthly</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-black/70 text-sm">Success Rate:</span>
                                  <span className="text-emerald-400">100%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-black/70 text-sm">Total Gas Fees:</span>
                                  <span className="text-black">0.0059 ETH</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4 justify-end">
                            <Button 
                              variant="ghost"
                              onClick={() => setSelectedProject(null)}
                              className="text-black hover:bg-black/10"
                            >
                              Close
                            </Button>
                            <Button 
                              variant="ghost"
                              className="text-black hover:bg-black/10"
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              Export Transactions
                            </Button>
                            <Button 
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                            >
                              <DollarSign className="w-4 h-4 mr-2" />
                              Request Payment
                            </Button>
                          </div>
                        </>
                      );
                    })()}
                  </Card>
                </div>
              </div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="certificates">
          <Card className="backdrop-blur-md bg-black/10 border border-black/20 p-6">
            <h2 className="text-2xl text-black mb-6">Government Certificates</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="bg-black/5 rounded-xl p-4 border border-black/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-black text-lg">{project.name}</h3>
                    <Badge className={getStatusColor(project.status)}>
                      {project.certProgress >= 90 ? 'Ready' : 'In Progress'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-black/70">Certificate Progress</p>
                    <p className="text-black">{project.certProgress}%</p>
                  </div>
                  <Progress value={project.certProgress} className="mb-4 h-2 bg-black/10" />
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      disabled={project.certProgress < 90}
                      onClick={() => handleViewCertificate(project.id)}
                      className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 disabled:opacity-50"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                    <Button size="sm" variant="ghost" className="text-black hover:bg-black/10">
                      View Status
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <Card className="backdrop-blur-md bg-gradient-to-br from-white/95 to-gray-50/95 border border-gray-300/50 p-8 shadow-2xl">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h2 className="text-3xl text-gray-900 font-bold">{project.name}</h2>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-gray-700 text-sm mb-4">
                          <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                            <MapPin className="w-4 h-4 text-gray-600" />
                            <span className="font-medium">{project.location}</span>
                          </span>
                          <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                            <TreePine className="w-4 h-4 text-gray-600" />
                            <span className="font-medium">{project.area}</span>
                          </span>
                          <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                            <Calendar className="w-4 h-4 text-gray-600" />
                            <span className="font-medium">Started: March 2025</span>
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Project Overview */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200/50 shadow-sm">
                      <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        Project Overview
                      </h3>
                      <p className="text-gray-900 leading-relaxed">
                        {project.name} is a comprehensive mangrove restoration initiative focusing on rehabilitating degraded coastal ecosystems. 
                        Our approach combines traditional ecological knowledge with modern restoration techniques to create sustainable mangrove forests 
                        that provide critical habitat for wildlife, protect coastlines from erosion, and sequester significant amounts of carbon. 
                        The project actively involves local communities, providing training and employment opportunities while ensuring long-term 
                        stewardship of the restored areas.
                      </p>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-5 border border-emerald-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                        <p className="text-emerald-700 text-xs mb-2 font-semibold uppercase tracking-wide">Project Area</p>
                        <p className="text-gray-900 text-xl font-bold mb-1">{project.area}</p>
                        <p className="text-emerald-600 text-xs font-medium">Active restoration</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                        <p className="text-blue-700 text-xs mb-2 font-semibold uppercase tracking-wide">AI Verification</p>
                        <p className="text-gray-900 flex items-center text-xl font-bold mb-1">
                          {project.aiScore}%
                          <Bot className="w-5 h-5 ml-2 text-blue-500" />
                        </p>
                        <p className="text-blue-600 text-xs font-medium">High confidence</p>
                      </div>
                      <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                        <p className="text-teal-700 text-xs mb-2 font-semibold uppercase tracking-wide">NDVI Current</p>
                        <p className="text-gray-900 flex items-center text-xl font-bold mb-1">
                          {project.ndviCurrent}
                          <Satellite className="w-5 h-5 ml-2 text-teal-500" />
                        </p>
                        <p className="text-teal-600 text-xs font-medium">{project.ndviTrend}</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                        <p className="text-green-700 text-xs mb-2 font-semibold uppercase tracking-wide">Species Count</p>
                        <p className="text-gray-900 text-xl font-bold mb-1">{project.species}</p>
                        <p className="text-green-600 text-xs font-medium">Native varieties</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                        <p className="text-purple-700 text-xs mb-2 font-semibold uppercase tracking-wide">Carbon Sequestered</p>
                        <p className="text-gray-900 text-xl font-bold mb-1">{project.carbonOffset}t</p>
                        <p className="text-purple-600 text-xs font-medium">CO₂ equivalent</p>
                      </div>
                    </div>

                    {/* NDVI Monitoring Section */}
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 mb-8 border border-teal-200/50 shadow-md">
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                          <Satellite className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-gray-900 font-bold text-lg">Satellite-Based Vegetation Monitoring (NDVI)</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <p className="text-gray-700 text-sm font-medium">Vegetation Recovery Progress</p>
                            <p className="text-gray-900 text-sm font-bold">
                              {Math.round(((project.ndviCurrent - project.ndviBaseline) / (project.ndviTarget - project.ndviBaseline)) * 100)}%
                            </p>
                          </div>
                          <Progress 
                            value={((project.ndviCurrent - project.ndviBaseline) / (project.ndviTarget - project.ndviBaseline)) * 100} 
                            className="h-3 bg-gray-200 mb-3" 
                          />
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-600">Baseline: {project.ndviBaseline}</span>
                            <span className="text-gray-900 font-medium">Current: {project.ndviCurrent}</span>
                            <span className="text-gray-600">Target: {project.ndviTarget}</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-gray-700 text-sm">Change Rate:</span>
                            <span className="text-emerald-600 font-semibold">+{((project.ndviCurrent - project.ndviBaseline) * 100).toFixed(1)}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700 text-sm">Trend:</span>
                            <span className={`${project.ndviTrend === 'increasing' ? 'text-emerald-600' : 'text-amber-600'} flex items-center font-semibold`}>
                              {project.ndviTrend}
                              <TrendingUp className={`w-3 h-3 ml-1 ${project.ndviTrend === 'increasing' ? 'text-emerald-600' : 'text-amber-600'}`} />
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700 text-sm">Health Score:</span>
                            <span className="text-gray-900 font-semibold">{(project.ndviCurrent * 100).toFixed(0)}/100</span>
                          </div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-4 border border-teal-100">
                          <p className="text-teal-700 text-xs mb-2 font-semibold uppercase tracking-wide">Latest Satellite Analysis</p>
                          <p className="text-gray-900 text-sm mb-1 font-medium">Captured: Sept 8, 2025</p>
                          <p className="text-emerald-600 text-xs font-medium">✓ Verified by AI</p>
                          <p className="text-blue-600 text-xs mt-2 font-medium">Next scan: Sept 22, 2025</p>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Information Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Environmental Impact */}
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                            <Leaf className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-gray-900 font-bold text-lg">Environmental Impact</h4>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-700">Trees Planted:</span>
                            <span className="text-gray-900 font-semibold">12,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Survival Rate:</span>
                            <span className="text-emerald-600 font-semibold">94%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Biodiversity Index:</span>
                            <span className="text-gray-900 font-semibold">8.7/10</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Soil Quality Improvement:</span>
                            <span className="text-blue-600 font-semibold">+32%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Water Retention:</span>
                            <span className="text-cyan-600 font-semibold">+45%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">NDVI Improvement:</span>
                            <span className="text-teal-600 font-semibold">+{((project.ndviCurrent - project.ndviBaseline) * 100).toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Community Engagement */}
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200/50 shadow-md hover:shadow-lg transition-all duration-200">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-gray-900 font-bold text-lg">Community Impact</h4>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-700">Local Jobs Created:</span>
                            <span className="text-gray-900 font-semibold">45</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Families Benefited:</span>
                            <span className="text-gray-900 font-semibold">1,200</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Training Programs:</span>
                            <span className="text-blue-600 font-semibold">8 completed</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Women Participation:</span>
                            <span className="text-purple-600 font-semibold">65%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-700">Youth Involvement:</span>
                            <span className="text-amber-600 font-semibold">180 students</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Timeline */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-200/50 shadow-md">
                      <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center">
                        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        Project Timeline & Milestones
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-indigo-100 shadow-sm">
                          <div>
                            <span className="text-gray-900 text-sm font-medium">Site Preparation & Planning</span>
                            <p className="text-gray-600 text-xs">Soil analysis, community consultation, permits</p>
                          </div>
                          <span className="text-emerald-700 text-sm font-semibold flex items-center">
                            <span className="mr-2">✓</span>
                            March 2025
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-indigo-100 shadow-sm">
                          <div>
                            <span className="text-gray-900 text-sm font-medium">First Planting Phase</span>
                            <p className="text-gray-600 text-xs">5,000 mangrove saplings planted</p>
                          </div>
                          <span className="text-emerald-700 text-sm font-semibold flex items-center">
                            <span className="mr-2">✓</span>
                            April 2025
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-indigo-100 shadow-sm">
                          <div>
                            <span className="text-gray-900 text-sm font-medium">Community Training Program</span>
                            <p className="text-gray-600 text-xs">Local capacity building and education</p>
                          </div>
                          <span className="text-emerald-700 text-sm font-semibold flex items-center">
                            <span className="mr-2">✓</span>
                            June 2025
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-blue-100 rounded-lg border-2 border-blue-400/50 shadow-sm">
                          <div>
                            <span className="text-gray-900 text-sm font-medium">Mid-term Assessment</span>
                            <p className="text-gray-600 text-xs">Growth monitoring and adaptive management</p>
                          </div>
                          <span className="text-blue-600 text-sm font-semibold flex items-center">
                            <span className="mr-2">⏳</span>
                            In Progress
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-indigo-100 shadow-sm">
                          <div>
                            <span className="text-gray-900 text-sm font-medium">Second Planting Phase</span>
                            <p className="text-gray-600 text-xs">Expansion to remaining areas</p>
                          </div>
                          <span className="text-gray-600 text-sm font-medium flex items-center">
                            <span className="mr-2">📅</span>
                            November 2025
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-indigo-100 shadow-sm">
                          <div>
                            <span className="text-gray-900 text-sm font-medium">Final Assessment & Certification</span>
                            <p className="text-gray-600 text-xs">Government verification and NFT minting</p>
                          </div>
                          <span className="text-gray-600 text-sm font-medium flex items-center">
                            <span className="mr-2">📅</span>
                            March 2026
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Certification Progress */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8 border border-gray-200/50 shadow-md">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-gray-900 font-bold text-lg flex items-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                          Certification Progress
                        </h3>
                        <p className="text-gray-900 font-semibold text-lg">{project.certProgress}% Complete</p>
                      </div>
                      <Progress value={project.certProgress} className="h-4 bg-gray-200 mb-6" />
                      <div className="grid grid-cols-5 gap-4 text-sm">
                        <div className="text-center">
                          <div className="w-5 h-5 bg-emerald-500 rounded-full mx-auto mb-3 shadow-md"></div>
                          <p className="text-emerald-600 font-semibold">Documentation</p>
                          <p className="text-gray-600 text-xs">Complete</p>
                        </div>
                        <div className="text-center">
                          <div className="w-5 h-5 bg-emerald-500 rounded-full mx-auto mb-3 shadow-md"></div>
                          <p className="text-emerald-600 font-semibold">AI Verification</p>
                          <p className="text-gray-600 text-xs">{project.aiScore}% verified</p>
                        </div>
                        <div className="text-center">
                          <div className="w-5 h-5 bg-emerald-500 rounded-full mx-auto mb-3 shadow-md"></div>
                          <p className="text-emerald-600 font-semibold">Field Assessment</p>
                          <p className="text-gray-600 text-xs">Approved</p>
                        </div>
                        <div className="text-center">
                          <div className="w-5 h-5 bg-amber-500 rounded-full mx-auto mb-3 shadow-md"></div>
                          <p className="text-amber-600 font-semibold">Admin Review</p>
                          <p className="text-gray-600 text-xs">In Progress</p>
                        </div>
                        <div className="text-center">
                          <div className="w-5 h-5 bg-gray-500 rounded-full mx-auto mb-3 shadow-md"></div>
                          <p className="text-gray-600 font-semibold">NFT Certificate</p>
                          <p className="text-gray-500 text-xs">Pending</p>
                        </div>
                      </div>
                    </div>

                    {/* Financial Summary */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border border-green-200/50 shadow-md">
                      <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                          <DollarSign className="w-4 h-4 text-white" />
                        </div>
                        Financial Summary
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/80 rounded-lg p-5 border border-green-100 shadow-sm">
                          <p className="text-green-700 text-xs mb-2 font-semibold uppercase tracking-wide">Total Earnings</p>
                          <p className="text-gray-900 text-2xl font-bold mb-2">${project.earnings.toLocaleString()}</p>
                          <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 text-emerald-600 mr-1" />
                            <span className="text-emerald-600 text-xs font-medium">+12% this month</span>
                          </div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-5 border border-green-100 shadow-sm">
                          <p className="text-green-700 text-xs mb-2 font-semibold uppercase tracking-wide">Pending Payments</p>
                          <p className="text-gray-900 text-2xl font-bold mb-2">$25,000</p>
                          <p className="text-amber-600 text-xs font-medium">Next payment: Oct 15</p>
                        </div>
                        <div className="bg-white/80 rounded-lg p-5 border border-green-100 shadow-sm">
                          <p className="text-green-700 text-xs mb-2 font-semibold uppercase tracking-wide">Carbon Credit Value</p>
                          <p className="text-gray-900 text-2xl font-bold mb-2">${(project.carbonOffset * 12).toLocaleString()}</p>
                          <p className="text-blue-600 text-xs font-medium">@$12 per tonne CO₂</p>
                        </div>
                      </div>
                    </div>

                    {/* Monitoring Data */}
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 mb-8 border border-cyan-200/50 shadow-md">
                      <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center">
                        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
                          <Satellite className="w-4 h-4 text-white" />
                        </div>
                        Recent Monitoring Data
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-gray-900 text-sm mb-4 font-semibold">Satellite Analysis (Last 30 days)</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 text-sm">Vegetation Health Index:</span>
                              <span className="text-emerald-600 font-semibold">0.82 (Excellent)</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 text-sm">Canopy Coverage:</span>
                              <span className="text-gray-900 font-semibold">78%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 text-sm">Growth Rate:</span>
                              <span className="text-blue-600 font-semibold">+2.3% monthly</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-gray-900 text-sm mb-4 font-semibold">Field Observations</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 text-sm">Wildlife Species Count:</span>
                              <span className="text-gray-900 font-semibold">42</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 text-sm">Water Quality:</span>
                              <span className="text-emerald-600 font-semibold">Good</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 text-sm">Community Engagement:</span>
                              <span className="text-purple-600 font-semibold">High</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-end">
                      <Button 
                        variant="ghost"
                        onClick={() => setSelectedProject(null)}
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
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white shadow-lg"
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Upload Progress Photos
                      </Button>
                    </div>
                  </>
                );
              })()}
            </Card>
          </div>
        </div>
      )}

      {/* Certificate Viewing Modal */}
      {showCertificateModal && selectedCertificate && (
        <Dialog open={showCertificateModal} onOpenChange={setShowCertificateModal}>
          <DialogContent className="max-w-[95vw] w-full max-h-[95vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                Carbon Credit Certificate (NGO Copy)
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Government verified blockchain-backed carbon credit certificate for NGO records
              </DialogDescription>
            </DialogHeader>

            {(() => {
              const certificate = certificates.find(cert => cert.id === selectedCertificate);
              if (!certificate) return null;

              return (
                <div className="space-y-8">
                  {/* Certificate Image/Visual */}
                  <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50 rounded-xl p-8 border-2 border-gray-200 shadow-lg">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Award className="w-12 h-12 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">CARBON CREDIT CERTIFICATE</h2>
                      <p className="text-xl text-gray-700">Verified by Government of India & Coastly Platform</p>
                      <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-md">
                        <p className="text-2xl font-bold text-emerald-600">{certificate.nftId}</p>
                        <p className="text-gray-600">Certificate ID</p>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {/* Project Information */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-md">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <TreePine className="w-5 h-5 mr-2 text-green-600" />
                        Project Information
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-600 text-sm">Project Name</p>
                          <p className="text-gray-900 font-semibold">{certificate.projectName}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Location</p>
                          <p className="text-gray-900 font-semibold flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                            {certificate.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Land Area</p>
                          <p className="text-gray-900 font-semibold">{certificate.landArea} hectares</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Project Start Date</p>
                          <p className="text-gray-900 font-semibold">{new Date(certificate.projectStartDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>

                    {/* NGO Information */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-md">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-blue-600" />
                        NGO Details
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-600 text-sm">NGO Name</p>
                          <p className="text-gray-900 font-semibold">{certificate.ngoName}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">NGO ID</p>
                          <p className="text-gray-900 font-semibold">{certificate.ngoId}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Verification Status</p>
                          <p className="text-emerald-600 font-semibold flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Government Verified
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">AI Verification</p>
                          <p className="text-blue-600 font-semibold flex items-center">
                            <Bot className="w-4 h-4 mr-1" />
                            95% Confidence Score
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Carbon Credits Information */}
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200 shadow-md">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Droplets className="w-5 h-5 mr-2 text-purple-600" />
                        Carbon Credits
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-600 text-sm">Carbon Credits</p>
                          <p className="text-gray-900 font-bold text-2xl">{certificate.carbonCredits} tCO₂</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Total Tokens</p>
                          <p className="text-gray-900 font-semibold">{certificate.totalTokens}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Token Price</p>
                          <p className="text-gray-900 font-semibold">${certificate.tokenPrice}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Verification Method</p>
                          <p className="text-gray-900 font-semibold flex items-center">
                            <Satellite className="w-4 h-4 mr-1 text-gray-500" />
                            Satellite + AI Monitoring
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Transaction Information */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 shadow-md">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-amber-600" />
                        Transaction Details
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-600 text-sm">Issue Date</p>
                          <p className="text-gray-900 font-semibold">{new Date(certificate.issueDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Expiry Date</p>
                          <p className="text-gray-900 font-semibold">{new Date(certificate.expiryDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Verification Date</p>
                          <p className="text-gray-900 font-semibold">{new Date(certificate.verificationDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Status</p>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                            <p className="text-emerald-600 font-semibold">Active & Verified</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blockchain Information */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-300 shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Wallet className="w-5 h-5 mr-2 text-gray-700" />
                      Blockchain Verification
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      <div>
                        <p className="text-gray-600 text-sm mb-2">Certificate Hash</p>
                        <div className="bg-white rounded-lg p-3 border border-gray-300 font-mono text-sm">
                          <p className="text-gray-900 break-all">{certificate.blockchainHash}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm mb-2">Transaction Hash</p>
                        <div className="bg-white rounded-lg p-3 border border-gray-300 font-mono text-sm">
                          <p className="text-gray-900 break-all">{certificate.transactionHash}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm mb-2">Blockchain Network</p>
                        <div className="bg-white rounded-lg p-3 border border-gray-300 font-mono text-sm">
                          <p className="text-gray-900 font-semibold">Ethereum Mainnet</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QR Code and Download Section */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center">
                      {/* QR Code */}
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-center">
                          <QrCode className="w-5 h-5 mr-2 text-indigo-600" />
                          Certificate QR Code
                        </h4>
                        <div className="bg-white rounded-lg p-6 border-2 border-gray-300 inline-block shadow-md">
                          {/* Simple QR Code representation */}
                          <div className="w-32 h-32 bg-gray-900 rounded-lg flex items-center justify-center">
                            <div className="grid grid-cols-8 gap-1">
                              {Array.from({ length: 64 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-gray-900'}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Scan to verify certificate</p>
                      </div>

                      {/* Download Section */}
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Download Certificate</h4>
                        <div className="space-y-4">
                          <p className="text-gray-600 text-sm">
                            Download your verified carbon credit certificate for NGO records
                          </p>
                          <Button
                            onClick={() => handleActualDownload(certificate.id)}
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg w-full"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Certificate
                          </Button>
                          <div className="text-xs text-gray-500 mt-2">
                            File format: TXT • Size: ~1KB
                          </div>
                        </div>
                      </div>

                      {/* Verification Status */}
                      <div className="text-center xl:block hidden">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                          Verification Status
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-3 border border-green-300 shadow-sm">
                            <div className="flex items-center justify-center text-green-600">
                              <Satellite className="w-4 h-4 mr-2" />
                              <span className="text-sm font-semibold">Satellite Verified</span>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 border border-blue-300 shadow-sm">
                            <div className="flex items-center justify-center text-blue-600">
                              <Bot className="w-4 h-4 mr-2" />
                              <span className="text-sm font-semibold">AI Validated</span>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 border border-purple-300 shadow-sm">
                            <div className="flex items-center justify-center text-purple-600">
                              <Shield className="w-4 h-4 mr-2" />
                              <span className="text-sm font-semibold">Government Certified</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Footer */}
                  <div className="text-center py-4 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                      This certificate is issued by Coastly Platform and verified through blockchain technology.
                      <br />
                      For verification, visit: coastly.platform/verify/{certificate.nftId}
                    </p>
                  </div>
                </div>
              );
            })()}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}