'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Eye, 
  Languages,
  Scale,
  Users,
  Clock,
  CheckCircle,
  Video,
  Accessibility,
  Headphones,
  Play,
  Pause,
  SkipBack,
  SkipForward
} from "lucide-react";

export default function ServiceCharterPage() {
  const [activeTab, setActiveTab] = useState('both');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Audio controls
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const downloadPDF = (filename: string, displayName: string) => {
    try {
      const link = document.createElement('a');
      link.href = filename;
      link.download = displayName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(filename, '_blank');
    }
  };

  const downloadAudio = () => {
    try {
      const link = document.createElement('a');
      link.href = '/documents/Kongoni tvc audio Recordings of service delivery charter.m4a';
      link.download = 'KTVC-Service-Charter-Audio.m4a';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const PDFViewer = ({ title, language, isKiswahili = false }: { title: string; language: string; isKiswahili?: boolean }) => {
    const pdfPath = isKiswahili ? '/documents/Kiswahili-Service-Charter.pdf' : '/documents/English-Service-Charter.pdf';
    const imagePath = isKiswahili ? "/documents/KiswahiliCharter.jpg" : "/documents/EnglishCharter.jpg";
    const downloadName = isKiswahili ? 'KongoniTVC-Service-Charter-Kiswahili.pdf' : 'KongoniTVC-Service-Charter-English.pdf';

    return (
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className={`p-4 text-white ${isKiswahili ? 'bg-secondary' : 'bg-primary'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="text-white w-6 h-6" />
              <div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="text-white/80 text-sm">{language}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Official Document
            </Badge>
          </div>
        </div>
        
        <div className="relative bg-gray-100 min-h-[600px]">
          <div className="p-8 text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="text-primary font-bold text-xl">K</div>
                  </div>
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-primary">KTVC</h1>
                  <p className="text-sm text-gray-600">Kongoni Technical and Vocational College</p>
                  <p className="text-xs text-secondary italic">The top-rated technical and vocational college in technical training.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div 
                className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => window.open(imagePath, '_blank')}
              >
                <div className="relative w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
                  <div className="absolute inset-2 border-2 border-gray-100 rounded-lg z-10"></div>
                  
                  <Image 
                    src={imagePath}
                    alt={isKiswahili ? "Kiswahili Charter Preview" : "English Charter Preview"}
                    fill
                    className="object-cover p-3 rounded-xl"
                    sizes="256px"
                    priority={false}
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg z-20 ${
                    isKiswahili ? 'bg-secondary text-gray-800' : 'bg-primary'
                  }`}>
                    {isKiswahili ? 'Kiswahili' : 'English'}
                  </div>
                  
                  <div className="absolute -top-1 -left-1 w-16 h-16 bg-gradient-to-br from-white to-transparent opacity-30 rounded-full blur-sm z-10"></div>
                </div>
                
                <div className="text-center mt-4">
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {isKiswahili ? 'Mkataba wa Huduma' : 'Service Charter'}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">Click to view full document</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                {isKiswahili ? 'MKATABA WA UTOAJI HUDUMA KWA WATEJA' : 'CUSTOMER SERVICE DELIVERY CHARTER'}
              </h2>
            </div>

            <div className="text-left max-w-4xl mx-auto space-y-4 mb-8">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {isKiswahili ? 'Maono:' : 'Vision:'} 
                </h3>
                <p className="text-gray-700">
                  {isKiswahili 
                    ? 'Kituo cha Kimataifa cha Ubora katika Elimu ya Teknikal na Mafunzo ya Kitaaluma, Utafiti na Ushauri.'
                    : 'A Global Center of Excellence in Technical Vocational Education and Training, Research and Consultancy.'
                  }
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {isKiswahili ? 'Dhamira:' : 'Mission:'}
                </h3>
                <p className="text-gray-700">
                  {isKiswahili
                    ? 'Kutoa mafunzo ya hali ya juu na ya kimataifa yanayoshindana kwa wataalamu wa TVET, kufanya utafiti na kutoa ushauri ili kukidhi mahitaji ya ulimwengu wenye mabadiliko.'
                    : 'To Provide high quality and internationally competitive training for TVET practitioners, undertake research and consultancies to meet the needs of a dynamic world.'
                  }
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {isKiswahili ? 'Maadili Muhimu:' : 'Core Values:'}
                </h3>
                <p className="text-gray-700">
                  {isKiswahili
                    ? 'i. Utaalamu ii. Uvumbuzi iii. Uongozi iv. Ujumuishi v. Uwajibikaji'
                    : 'i. Professionalism ii. Innovation iii. Integrity iv. Inclusivity v. Accountability'
                  }
                </p>
              </div>
            </div>

            <div className="bg-primary text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                {isKiswahili ? 'AHADI YETU KWA WATEJA WETU' : 'OUR COMMITMENT TO OUR CUSTOMERS'}
              </h2>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                Preview Available
              </span>
              <span className="flex items-center">
                <Scale className="w-4 h-4 mr-1" />
                Official Charter
              </span>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => downloadPDF(pdfPath, downloadName)}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50/30">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Scale className="w-10 h-10 text-primary mr-3" />
              <h1 className="text-4xl font-bold text-gray-800">Service Charter</h1>
            </div>
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-2xl text-gray-600 mr-4">Mkataba wa Huduma</h2>
              <Languages className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality service delivery • Ahadi yetu ya utoaji huduma bora
            </p>
          </div>
        </div>
      </div>

      {/* Sign Language Video Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-xl border-2 border-blue-200">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Accessibility className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Service Charter in Sign Language</h2>
                    <p className="text-blue-100 text-sm">Mkataba wa Huduma kwa Lugha ya Alama</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Video className="w-4 h-4 mr-2 inline" />
                  Accessible Format
                </Badge>
              </div>
            </div>

            <div className="bg-gray-900 p-4">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/W5UQKhJaE7s"
                  title="KTVC Service Charter - Sign Language Version"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Accessibility className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Inclusive Service Charter Presentation
                  </h3>
                  <p className="text-gray-600 mb-3">
                    We are committed to accessibility and inclusion. This video presents our Service Charter 
                    in Kenyan Sign Language to ensure all members of our community can access important 
                    information about our services and commitments.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Tumejitolea kuhakikisha huduma zetu zinafikiwa na wote. Video hii inaonyesha Mkataba 
                    wetu wa Huduma kwa Lugha ya Alama ya Kenya ili kuhakikisha wanajamii wetu wote 
                    wanapata taarifa muhimu kuhusu huduma na ahadi zetu.
                  </p>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => window.open('https://www.youtube.com/watch?v=W5UQKhJaE7s', '_blank')}
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Watch on YouTube
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-400 text-gray-700 hover:bg-gray-50"
                  >
                    <Accessibility className="w-4 h-4 mr-2" />
                    Accessibility Info
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Compact Audio Section */}
      <div className="container mx-auto px-4 pb-6">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-md border border-gray-200">
            <div className="bg-white p-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Headphones className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Service Charter Audio</h3>
                    <p className="text-xs text-gray-500">Rekodi ya Sauti</p>
                  </div>
                </div>

                <audio
                  ref={audioRef}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                >
                  <source src="/documents/Kongoni tvc audio Recordings of service delivery charter.m4a" type="audio/mp4" />
                </audio>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => skipTime(-10)}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <SkipBack className="w-3 h-3" />
                  </Button>

                  <Button
                    onClick={togglePlayPause}
                    className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-white p-0"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5" />
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => skipTime(10)}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <SkipForward className="w-3 h-3" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={downloadAudio}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    title="Download Audio"
                  >
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #0893f0 0%, #0893f0 ${(currentTime / duration) * 100}%, #e5e7eb ${(currentTime / duration) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-md">
            <div className="flex space-x-2">
              <Button
                variant={activeTab === 'both' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('both')}
                className={activeTab === 'both' ? 'bg-primary text-white hover:bg-primary/90' : 'text-gray-600 hover:bg-gray-100'}
              >
                <Languages className="w-4 h-4 mr-2" />
                Both Languages
              </Button>
              <Button
                variant={activeTab === 'english' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('english')}
                className={activeTab === 'english' ? 'bg-primary text-white hover:bg-primary/90' : 'text-gray-600 hover:bg-gray-100'}
              >
                English Only
              </Button>
              <Button
                variant={activeTab === 'kiswahili' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('kiswahili')}
                className={activeTab === 'kiswahili' ? 'bg-primary text-white hover:bg-primary/90' : 'text-gray-600 hover:bg-gray-100'}
              >
                Kiswahili Only
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-8 ${activeTab === 'both' ? 'md:grid-cols-2' : 'grid-cols-1 max-w-4xl mx-auto'}`}>
            {(activeTab === 'both' || activeTab === 'english') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      EN
                    </span>
                    English Version
                  </h3>
                  <Badge variant="outline" className="border-primary text-primary">
                    Official Language
                  </Badge>
                </div>
                <PDFViewer title="Service Charter" language="English Version" isKiswahili={false} />
              </div>
            )}

            {(activeTab === 'both' || activeTab === 'kiswahili') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <span className="w-8 h-8 bg-secondary text-gray-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      SW
                    </span>
                    Toleo la Kiswahili
                  </h3>
                  <Badge variant="outline" className="border-secondary text-secondary">
                    Lugha Rasmi
                  </Badge>
                </div>
                <PDFViewer title="Mkataba wa Huduma" language="Toleo la Kiswahili" isKiswahili={true} />
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Download Service Charters</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">English Version</h4>
                <p className="text-gray-600 text-sm mb-4">Official Service Charter in English</p>
                <Button 
                  onClick={() => downloadPDF('/documents/English-Service-Charter.pdf', 'KTVC-Service-Charter-English.pdf')}
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download English PDF
                </Button>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <FileText className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Toleo la Kiswahili</h4>
                <p className="text-gray-600 text-sm mb-4">Mkataba wa Huduma kwa Kiswahili</p>
                <Button 
                  onClick={() => downloadPDF('/documents/Kiswahili-Service-Charter.pdf', 'KTVC-Service-Charter-Kiswahili.pdf')}
                  className="bg-secondary text-gray-800 hover:bg-secondary/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Kiswahili PDF
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Our Commitment</h4>
              <p className="text-gray-600 text-sm">Dedicated to providing excellent service to all stakeholders</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Service Standards</h4>
              <p className="text-gray-600 text-sm">Clear timelines and quality benchmarks for all services</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Accountability</h4>
              <p className="text-gray-600 text-sm">Transparent processes and feedback mechanisms</p>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Need Help? • Unahitaji Msaada?</h4>
            <p className="text-gray-600 mb-6">
              For any inquiries about our service charter or to provide feedback on our services
              <br />
              <em>Kwa maswali yoyote kuhusu Mkataba wetu wa huduma au kutoa maoni</em>
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                Feedback Form
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}