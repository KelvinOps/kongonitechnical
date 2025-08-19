'use client';

import { useState } from 'react';
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
  ExternalLink
} from "lucide-react";

export default function ServiceCharterPage() {
  const [activeTab, setActiveTab] = useState<'both' | 'english' | 'kiswahili'>('both');

  // PDF Viewer Component with fallback content
  const PDFViewer = ({ src, title, language, isKiswahili = false }: { 
    src: string; 
    title: string; 
    language: string;
    isKiswahili?: boolean;
  }) => (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with custom colors */}
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
      
      {/* Document Display - Using placeholder content */}
      <div className="relative bg-gray-100 min-h-[600px]">
        <div className="p-8 text-center">
          {/* KSTVET Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="text-primary font-bold text-xl">K</div>
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-primary">KSTVET</h1>
                <p className="text-sm text-gray-600">Kenya School of TVET</p>
                <p className="text-xs text-secondary italic">The Home of Technical Education</p>
              </div>
            </div>
          </div>

          {/* Charter Document Image - Enhanced */}
          <div className="flex justify-center mb-8">
            <div 
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => {
                const imageSrc = isKiswahili ? "/documents/KiswahiliCharter.jpg" : "/documents/EnglishCharter.jpg";
                window.open(imageSrc, '_blank');
              }}
            >
              <div className="relative w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
                {/* Elegant frame effect */}
                <div className="absolute inset-2 border-2 border-gray-100 rounded-lg"></div>
                
                <img 
                  src={isKiswahili ? "/documents/KiswahiliCharter.jpg" : "/documents/EnglishCharter.jpg"}
                  alt={isKiswahili ? "Kiswahili Charter Preview" : "English Charter Preview"}
                  className="w-full h-full object-cover p-3 rounded-xl"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback content if image fails to load */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-400 text-sm text-center p-4" style={{ display: 'none' }}>
                  <div>
                    <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <div className="font-semibold">Charter Document</div>
                    <div className="text-xs mt-2 text-gray-500">Preview Unavailable</div>
                  </div>
                </div>
                
                {/* Hover overlay with zoom hint */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                
                {/* Document type badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg ${
                  isKiswahili ? 'bg-secondary text-gray-800' : 'bg-primary'
                }`}>
                  {isKiswahili ? 'Kiswahili' : 'English'}
                </div>
                
                {/* Subtle shine effect */}
                <div className="absolute -top-1 -left-1 w-16 h-16 bg-gradient-to-br from-white to-transparent opacity-30 rounded-full blur-sm"></div>
              </div>
              
              {/* Document title below */}
              <div className="text-center mt-4">
                <h4 className="font-semibold text-gray-800 text-lg">
                  {isKiswahili ? 'Mithaq wa Huduma' : 'Service Charter'}
                </h4>
                <p className="text-sm text-gray-500 mt-1">Click to view full document</p>
              </div>
            </div>
          </div>

          {/* Document Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">
              {isKiswahili ? 'MITHAQ WA UTOAJI HUDUMA KWA WATEJA' : 'CUSTOMER SERVICE DELIVERY CHARTER'}
            </h2>
          </div>

          {/* Vision and Mission */}
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

          {/* Commitment Section */}
          <div className="bg-primary text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              {isKiswahili ? 'AHADI YETU KWA WATEJA WETU' : 'OUR COMMITMENT TO OUR CUSTOMERS'}
            </h2>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
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
              className={`${isKiswahili ? 'border-secondary text-secondary hover:bg-secondary/10' : 'border-primary text-primary hover:bg-primary/10'}`}
              onClick={() => window.open(src, '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

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
              <h2 className="text-2xl text-gray-600 mr-4">Mithaq wa Huduma</h2>
              <Languages className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality service delivery • Ahadi yetu ya utoaji huduma bora
            </p>
          </div>
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

        {/* Service Charter Display */}
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-8 ${activeTab === 'both' ? 'md:grid-cols-2' : 'grid-cols-1 max-w-4xl mx-auto'}`}>
            
            {/* English Version */}
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
                
                <PDFViewer 
                  src="/documents/English-Service-Charter.pdf" 
                  title="Service Charter" 
                  language="English Version"
                  isKiswahili={false}
                />
              </div>
            )}

            {/* Kiswahili Version */}
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
                
                <PDFViewer 
                  src="/documents/Kiswahili-Service-Charter.pdf" 
                  title="Mithaq wa Huduma" 
                  language="Toleo la Kiswahili"
                  isKiswahili={true}
                />
              </div>
            )}
          </div>
        </div>

        {/* Information Section */}
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

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Need Help? • Unahitaji Msaada?</h4>
            <p className="text-gray-600 mb-6">
              For any inquiries about our service charter or to provide feedback on our services
              <br />
              <em>Kwa maswali yoyote kuhusu mithaq wetu wa huduma au kutoa maoni</em>
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