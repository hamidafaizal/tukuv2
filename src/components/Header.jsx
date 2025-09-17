// src/components/Header.jsx
import React from 'react';
import { Menu, User } from 'lucide-react';

// Header kini menerima prop onToggleProfileSidebar
const Header = ({ onToggleSidebar, onToggleProfileSidebar }) => {
  // console.log untuk melacak render komponen Header
  console.log('Header component rendered');

  // URL placeholder untuk gambar profil
  const profileImageUrl = "https://placehold.co/100x100/e2e8f0/64748b?text=JS";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container-app h-16 flex items-center justify-between">
        {/* Tombol Hamburger */}
        {/* Menggunakan onClick untuk memanggil fungsi dari parent */}
        <button className="icon-btn focus:ring-sky-500" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo Tuku */}
        <div className="flex-1 flex justify-center mx-4">
          <img src="/logotuku2.svg" alt="Logo Tuku" className="h-8 md:h-9" />
        </div>

        {/* Ikon Profil */}
        {/* Menggunakan onClick untuk memanggil fungsi dari parent */}
        <button
          className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200 hover:ring-2 hover:ring-sky-500 transition-all duration-200"
          onClick={onToggleProfileSidebar}
        >
          <img
            src={profileImageUrl}
            alt="Profil Pengguna"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
