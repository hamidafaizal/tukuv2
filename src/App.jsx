// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import SidebarProfile from './components/SidebarProfile.jsx';

function App() {
  // Inisialisasi state untuk mengontrol sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Inisialisasi state baru untuk sidebar profil
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);

  // Fungsi untuk membuka/menutup sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log('Sidebar state toggled to:', !isSidebarOpen);
  };
  
  // Fungsi untuk membuka/menutup sidebar profil
  const toggleProfileSidebar = () => {
    setIsProfileSidebarOpen(!isProfileSidebarOpen);
    console.log('Profile sidebar state toggled to:', !isProfileSidebarOpen);
  };

  return (
    // Gunakan div dengan kelas app-shell dari index.css
    <div className="app-shell">
      {/* Render komponen Header dengan prop untuk toggle sidebar */}
      <Header 
        onToggleSidebar={toggleSidebar} 
        onToggleProfileSidebar={toggleProfileSidebar} 
      />
      
      {/* Render komponen Sidebar dengan properti state dan fungsi onClose */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      
      {/* Render komponen SidebarProfile dengan properti state dan fungsi onClose */}
      <SidebarProfile isOpen={isProfileSidebarOpen} onClose={toggleProfileSidebar} />

      {/* Konten utama aplikasi akan ditempatkan di sini */}
    </div>
  )
}

export default App
