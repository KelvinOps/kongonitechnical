
'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Download,
  FileSpreadsheet,
  FileArchive,
  Filter,
  ChevronDown,
  FolderOpen,
  Clock,
  HardDrive,
  ExternalLink,
  FileText,
} from "lucide-react";

// ── Single source of truth for the shared Google Drive folder ─────
// Replace this with your real shared Drive link (zip folders live here)
const DRIVE_FOLDER_LINK = "https://drive.google.com/drive/folders/1Z6dpLIceLiyt-akQhSF_sfwYo3LGO8nR?usp=sharing";

interface DownloadItem {
  title: string;
  category: string;
  fileType: "xlsx" | "zip" | "pdf" | "docx";
  fileSize: string;
  updatedDate: string;
  description: string;
  // Local files live in /public and download directly.
  // Drive files open the shared Drive folder in a new tab instead.
  source: "local" | "drive";
  localPath?: string;
  localFilename?: string;
}

// ── KUCCPS 2026 September Admissions – Address Lists ───────────────
// Local .xlsx files: place the actual files in /public/documents/downloads/
const downloadItems: DownloadItem[] = [
  {
    title: "Artisan – Level 4 KSL Address List",
    category: "Artisan (Level 4)",
    fileType: "xlsx",
    fileSize: "10 KB",
    updatedDate: "23 Jul 2026",
    description: "KSL address list for Artisan Level 4 admitted students, KUCCPS September 2026 intake.",
    source: "local",
    localPath: "/documents/downloads/KONGONI TVC Artisan - Level 4 ksl Address List.xlsx",
    localFilename: "KONGONI TVC Artisan - Level 4 ksl Address List.xlsx",
  },
  {
    title: "Artisan – Level 4 Address List (Revision 1)",
    category: "Artisan (Level 4)",
    fileType: "xlsx",
    fileSize: "13 KB",
    updatedDate: "23 Jul 2026",
    description: "First revision of the Artisan Level 4 address list, KUCCPS September 2026 intake.",
    source: "local",
    localPath: "/documents/downloads/KONGONI TVC Artisan - Level 4 revision_1 Address List.xlsx",
    localFilename: "KONGONI TVC Artisan - Level 4 revision_1 Address List.xlsx",
  },
  {
    title: "Artisan – Level 4 Address List (Revision 3)",
    category: "Artisan (Level 4)",
    fileType: "xlsx",
    fileSize: "10 KB",
    updatedDate: "23 Jul 2026",
    description: "Third revision of the Artisan Level 4 address list, KUCCPS September 2026 intake.",
    source: "local",
    localPath: "/documents/downloads/KONGONI TVC Artisan - Level 4 revision_3 Address List.xlsx",
    localFilename: "KONGONI TVC Artisan - Level 4 revision_3 Address List.xlsx",
  },
  {
    title: "Certificate – Level 5 KSL Address List",
    category: "Certificate (Level 5)",
    fileType: "xlsx",
    fileSize: "12 KB",
    updatedDate: "23 Jul 2026",
    description: "KSL address list for Certificate Level 5 admitted students, KUCCPS September 2026 intake.",
    source: "local",
    localPath: "/documents/downloads/KONGONI TVC Certificate - Level 5 ksl Address List.xlsx",
    localFilename: "KONGONI TVC Certificate - Level 5 ksl Address List.xlsx",
  },
  {
    title: "Certificate – Level 5 Address List (Revision 1)",
    category: "Certificate (Level 5)",
    fileType: "xlsx",
    fileSize: "13 KB",
    updatedDate: "23 Jul 2026",
    description: "First revision of the Certificate Level 5 address list, KUCCPS September 2026 intake.",
    source: "local",
    localPath: "/documents/downloads/KONGONI TVC Certificate - Level 5 revision_1 Address List.xlsx",
    localFilename: "KONGONI TVC Certificate - Level 5 revision_1 Address List.xlsx",
  },
  {
    title: "Certificate – Level 5 Address List (Revision 3)",
    category: "Certificate (Level 5)",
    fileType: "xlsx",
    fileSize: "10 KB",
    updatedDate: "23 Jul 2026",
    description: "Third revision of the Certificate Level 5 address list, KUCCPS September 2026 intake.",
    source: "local",
    localPath: "/documents/downloads/KONGONI TVC Certificate - Level 5 revision_3 Address List.xlsx",
    localFilename: "KONGONI TVC Certificate - Level 5 revision_3 Address List.xlsx",
  },
  {
    title: "Diploma – Level 6 KSL Address List",
    category: "Diploma (Level 6)",
    fileType: "xlsx",
    fileSize: "11 KB",
    updatedDate: "23 Jul 2026",
    description: "KSL address list for Diploma Level 6 admitted students, KUCCPS September 2026 intake.",
    source: "local",
    localPath: "/documents/downloads/KONGONI TVC Diploma - Level 6 ksl Address List.xlsx",
    localFilename: "KONGONI TVC Diploma - Level 6 ksl Address List.xlsx",
  },
  {
    title: "Diploma – Level 6 Address List (Revision 1)",
    category: "Diploma (Level 6)",
    fileType: "xlsx",
    fileSize: "18 KB",
    updatedDate: "23 Jul 2026",
    description: "First revision of the Diploma Level 6 address list, KUCCPS September 2026 intake.",
    source: "local",
    localPath: "/documents/downloads/KONGONI TVC Diploma - Level 6 revision_1 Address List.xlsx",
    localFilename: "KONGONI TVC Diploma - Level 6 revision_1 Address List.xlsx",
  },
  {
    title: "Diploma – Level 6 Address List (Revision 3)",
    category: "Diploma (Level 6)",
    fileType: "xlsx",
    fileSize: "11 KB",
    updatedDate: "23 Jul 2026",
    description: "Third revision of the Diploma Level 6 address list, KUCCPS September 2026 intake.",
    source: "local",
    localPath: "/documents/downloads/KONGONI TVC Diploma - Level 6 revision_3 Address List.xlsx",
    localFilename: "KONGONI TVC Diploma - Level 6 revision_3 Address List.xlsx",
  },
  {
    title: "KUCCPS 2026 September Admissions (Full Folder)",
    category: "All Admissions",
    fileType: "zip",
    fileSize: "—",
    updatedDate: "25 Jul 2026",
    description: "Complete zipped folder of all KUCCPS September 2026 admission address lists, hosted on Google Drive.",
    source: "drive",
  },
];

const allCategories = [
  "All Categories",
  "Artisan (Level 4)",
  "Certificate (Level 5)",
  "Diploma (Level 6)",
  "All Admissions",
];

const fileTypeMeta: Record<DownloadItem["fileType"], { label: string; color: string; icon: React.ElementType }> = {
  xlsx: { label: "Excel", color: "#1D6F42", icon: FileSpreadsheet },
  zip: { label: "ZIP", color: "#e07b00", icon: FileArchive },
  pdf: { label: "PDF", color: "#c0392b", icon: FileText },
  docx: { label: "Word", color: "#2b579a", icon: FileText },
};

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('updated');
  const [showFilters, setShowFilters] = useState(false);

  const stats = [
    { label: "Available Files", value: String(downloadItems.length), icon: FolderOpen },
    { label: "Categories", value: String(new Set(downloadItems.map(d => d.category)).size), icon: Filter },
    { label: "Zipped Folders (Drive)", value: String(downloadItems.filter(d => d.source === 'drive').length), icon: HardDrive },
    { label: "Last Updated", value: "25 Jul 2026", icon: Clock },
  ];

  const filteredAndSortedItems = useMemo(() => {
    const filtered = downloadItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title': return a.title.localeCompare(b.title);
        case 'category': return a.category.localeCompare(b.category);
        case 'updated': return new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime();
        default: return 0;
      }
    });
    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Local files download directly. Drive-sourced files open the shared
  // Google Drive folder in a new tab, since the zip lives there.
  const handleDownload = (item: DownloadItem) => {
    if (item.source === 'drive') {
      window.open(DRIVE_FOLDER_LINK, '_blank', 'noopener,noreferrer');
      return;
    }
    if (!item.localPath) return;
    const link = document.createElement('a');
    link.href = item.localPath;
    link.download = item.localFilename ?? item.title;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#099cca] to-[#277DF5] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Downloads</h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              KUCCPS 2026 September admissions address lists by level, plus the full zipped folder hosted on our shared Google Drive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[#f0df83] text-gray-800 text-lg px-4 py-2 rounded-full font-medium">
                {downloadItems.length} Files Available
              </div>
              <div className="bg-white/20 text-white text-lg px-4 py-2 rounded-full font-medium">
                Direct & Drive Downloads
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stats */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <stat.icon className="text-[#099cca] w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Google Drive callout */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4" style={{ borderColor: "#e07b00" }}>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: "#e07b0018" }}>
                <HardDrive className="w-6 h-6" style={{ color: "#e07b00" }} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">Zipped folders live on Google Drive</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Some files below are too large to host directly, so they're bundled as zip folders in our shared Drive.
                  Files marked <span className="font-semibold" style={{ color: "#e07b00" }}>ZIP</span> will open the Drive folder in a new tab instead of downloading right away.
                  Open Drive link to Download Zipped folder. Folders are encrypted using student INDEX NUMBER 
                </p>
                <a
                  href={DRIVE_FOLDER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  style={{ color: "#e07b00" }}
                >
                  Open shared Drive folder <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Find a File</h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search file names, categories, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none transition-colors bg-white dark:bg-gray-700 text-foreground"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 bg-[#f0df83] hover:bg-[#F5BB27] text-gray-800 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>

            {showFilters && (
              <div className="border-t border-gray-200 dark:border-gray-600 pt-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <div className="relative">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#099cca] focus:outline-none bg-white dark:bg-gray-700 text-foreground appearance-none"
                      >
                        {allCategories.map((c) => <option key={c} value={c}>{c}</option>)}
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
                        <option value="updated">Last Updated</option>
                        <option value="title">File Name</option>
                        <option value="category">Category</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Showing <span className="font-semibold text-[#099cca]">{filteredAndSortedItems.length}</span> file{filteredAndSortedItems.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Downloads Table */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-600 flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-2xl font-bold text-foreground">Available Files</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">Updated regularly</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#099cca] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">FILE</th>
                    <th className="px-6 py-4 text-left font-semibold">CATEGORY</th>
                    <th className="px-6 py-4 text-left font-semibold">TYPE / SIZE</th>
                    <th className="px-6 py-4 text-left font-semibold">UPDATED</th>
                    <th className="px-6 py-4 text-left font-semibold">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedItems.map((item, index) => {
                    const meta = fileTypeMeta[item.fileType];
                    const Icon = meta.icon;
                    return (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"} hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                      >
                        <td className="px-6 py-4">
                          <div>
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-md">{item.description}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-foreground">{item.category}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" style={{ color: meta.color }} />
                            <span className="font-medium" style={{ color: meta.color }}>{meta.label}</span>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.fileSize}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-foreground">{item.updatedDate}</div>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleDownload(item)}
                            className="flex items-center gap-2 text-[#099cca] hover:text-[#277DF5] transition-colors"
                            title={item.source === 'drive' ? 'Open Google Drive folder' : `Download ${item.localFilename}`}
                          >
                            {item.source === 'drive' ? <ExternalLink className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                            <div className="text-left">
                              <div className="text-sm font-medium">{item.source === 'drive' ? 'Open in Drive' : 'Download'}</div>
                              <div className="text-xs text-gray-500">{item.fileSize}</div>
                            </div>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="bg-gradient-to-r from-[#099cca]/10 to-[#277DF5]/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Can't Find a File?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              If you're looking for a document that isn't listed here, reach out and we'll point you to the right place.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2">
                <FileText className="text-[#099cca]" size={16} />
                <span>info@kongonitechnical.ac.ke</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="text-[#099cca]" size={16} />
                <span>+254 788 070 303</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}