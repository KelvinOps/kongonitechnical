'use client';

import React, { useState, useMemo } from 'react';
import { Search, Download, Calendar, FileText, Clock, ChevronDown, Filter, AlertCircle } from 'lucide-react';

interface TenderDocument {
  title: string;
  fileName: string;
  pdfUrl: string;
  fileSize: string;
}

interface TenderType {
  id: number;
  title: string;
  deadline: string;
  category: string;
  fileSize: string;
  status: string;
  description: string;
  pdfUrl: string;
  fileName: string;
  previewImageUrl?: string;
  isExtension?: boolean;
  previousDeadline?: string;
  documents?: TenderDocument[];
}

const tenderData: TenderType[] = [
  {
    id: 1,
    title: "INVITATION FOR CONTINUOUS REGISTRATION AND UPDATING OF SUPPLIERS FOR GOODS, SERVICES AND WORKS FOR FINANCIAL YEAR 2025/2027",
    deadline: "16 Jun 2026",
    category: "Supplier Registration",
    fileSize: "1.0 Mb",
    status: "Active",
    description: "Kongoni Technical and Vocational College invites suppliers, contractors and service providers to apply for continuous registration for supply of goods, works and services for FY 2025/2027.",
    pdfUrl: "/documents/tenders/kongoniTVC-supplier-registration-2025-2027.pdf",
    fileName: "Kongoni_TVC_Supplier_Registration_2025_2027.pdf",
    isExtension: true,
    previousDeadline: "09 Jun 2026",
    previewImageUrl: "/documents/tenders/TENDER_NOTICE_extension.png",
    documents: [
      {
        title: "Supplier Registration Form 2025–2027",
        fileName: "Kongoni_TVC_Supplier_Registration_2025_2027.pdf",
        pdfUrl: "/documents/tenders/kongoniTVC-supplier-registration-2025-2027.pdf",
        fileSize: "1.0 MB",
      },
      {
        title: "Tender Advert Extension Notice",
        fileName: "TENDER_NOTICE_extension.pdf",
        pdfUrl: "/documents/tenders/Tender_Extension_Date.pdf",
        fileSize: "136 KB",
      },
    ],
  }
];

const categories = ["All Categories", "Supplier Registration"];

function PdfIcon() {
  return (
    <div className="flex-shrink-0 w-12 h-14 relative">
      <svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="48" height="56" rx="4" fill="#E53E3E" />
        <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">PDF</text>
        <path d="M30 0 L48 18 L30 18 Z" fill="rgba(0,0,0,0.15)" />
        <path d="M30 0 L48 18 L30 18 L30 0 Z" fill="white" opacity="0.3" />
      </svg>
    </div>
  );
}

export default function TendersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('deadline');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedTenders = useMemo(() => {
    const filtered = tenderData.filter((tender) => {
      const matchesSearch =
        tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tender.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All Categories' || tender.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'deadline':
          return new Date(a.deadline.split(' at ')[0]).getTime() - new Date(b.deadline.split(' at ')[0]).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleDownload = (pdfUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
    switch (status) {
      case 'New':
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
      case 'Active':
        return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`;
      case 'Closing Soon':
        return `${baseClasses} bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Current Tenders</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Explore our latest procurement opportunities and submit your proposals for various services and supplies.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">

        {/* Search and Filter Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="relative mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tenders by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none transition-colors bg-white dark:bg-gray-700 text-foreground"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 bg-[#f0df83] hover:bg-[#F5BB27] text-gray-800 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center sm:justify-start"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="animate-fade-in border-t border-gray-200 dark:border-gray-600 pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none bg-white dark:bg-gray-700 text-foreground appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sort By</label>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none bg-white dark:bg-gray-700 text-foreground appearance-none"
                    >
                      <option value="deadline">Deadline</option>
                      <option value="title">Title</option>
                      <option value="category">Category</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Showing <span className="font-semibold text-[#099cca]">{filteredAndSortedTenders.length}</span> of {tenderData.length} tenders
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tenders List */}
        <div className="grid gap-6">
          {filteredAndSortedTenders.length > 0 ? (
            filteredAndSortedTenders.map((tender) => (
              <div
                key={tender.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* ── 1. EXTENSION BANNER ── */}
                {tender.isExtension && (
                  <div className="bg-amber-50 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-700 px-6 py-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                      Deadline Extended — New closing date: <span className="font-bold">{tender.deadline}</span>
                      {tender.previousDeadline && (
                        <span className="ml-2 font-normal line-through opacity-60">(was {tender.previousDeadline})</span>
                      )}
                    </p>
                  </div>
                )}

                {/* ── 2. SPLIT: image LEFT half | document downloads RIGHT half ── */}
                {(tender.previewImageUrl || tender.documents) && (
                  <div className="flex flex-col lg:flex-row border-b border-gray-100 dark:border-gray-700">

                    {/* LEFT — Extension notice image, half page width */}
                    {tender.previewImageUrl && (
                      <div className="lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-700">
                        <button
                          onClick={() => handleViewPDF('/documents/tenders/TENDER_NOTICE_extension.pdf')}
                          className="block w-full h-full group"
                          title="Click to view extension notice PDF"
                        >
                          <img
                            src={tender.previewImageUrl}
                            alt="Tender Advert Extension Notice"
                            className="w-full h-full object-cover object-top bg-white group-hover:opacity-95 transition-opacity"
                            style={{ maxHeight: '480px', objectFit: 'contain', objectPosition: 'top center' }}
                          />
                          <div className="bg-amber-50 dark:bg-amber-900/20 px-4 py-2 text-xs text-amber-700 dark:text-amber-400 text-center font-medium flex items-center justify-center gap-1.5 border-t border-amber-100 dark:border-amber-800">
                            <FileText className="w-3.5 h-3.5" />
                            Tender Advert Extension Notice — Click to view full PDF
                          </div>
                        </button>
                      </div>
                    )}

                    {/* RIGHT — Individual downloadable document rows */}
                    {tender.documents && tender.documents.length > 0 && (
                      <div className="lg:w-1/2 p-4 flex flex-col gap-3 justify-center">
                        {tender.documents.map((doc, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-[#099cca]/40 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                          >
                            <PdfIcon />
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-foreground text-sm leading-tight uppercase tracking-wide line-clamp-2">
                                {doc.title}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                1 file(s) &nbsp;{doc.fileSize}
                              </p>
                            </div>
                            <button
                              onClick={() => handleDownload(doc.pdfUrl, doc.fileName)}
                              className="flex-shrink-0 px-4 py-2 bg-[#099cca] hover:bg-[#277DF5] text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* ── 3. TENDER INFO (original card body) ── */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                            {tender.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {tender.description}
                          </p>
                        </div>
                        <div className="ml-4">
                          <span className={getStatusBadge(tender.status)}>{tender.status}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Deadline: {tender.deadline}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>{tender.category}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>File Size: {tender.fileSize}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                      <button
                        onClick={() => handleViewPDF(tender.pdfUrl)}
                        className="px-6 py-2 border-2 border-[#099cca] text-[#099cca] rounded-lg hover:bg-[#099cca] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                      >
                        <FileText className="w-4 h-4" />
                        View PDF
                      </button>
                      <button
                        onClick={() => handleDownload(tender.pdfUrl, tender.fileName)}
                        className="px-6 py-2 bg-[#f0df83] hover:bg-[#F5BB27] text-gray-800 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* ── 4. CARD FOOTER ── */}
                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <FileText className="w-4 h-4 text-red-500" />
                      <span className="font-medium">PDF Document</span>
                      <span>•</span>
                      <span>{tender.fileName}</span>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">{tender.fileSize}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No tenders found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All Categories'); }}
                className="px-6 py-2 bg-[#099cca] text-white rounded-lg hover:bg-[#277DF5] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* How to Submit */}
        <div className="mt-12 bg-gradient-to-r from-[#099cca]/10 to-[#277DF5]/10 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Submit Your Tender</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#099cca] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">1. Download Documents</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Download and review all tender documents carefully</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#099cca] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">2. Prepare Your Proposal</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Complete all required forms and gather necessary documentation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#099cca] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">3. Submit Before Deadline</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Submit your complete proposal before the specified deadline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}