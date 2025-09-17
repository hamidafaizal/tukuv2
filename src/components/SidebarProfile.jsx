// src/components/SidebarProfile.jsx
import React from 'react';
import { X, User, Key, Bell, CreditCard, UserCheck } from 'lucide-react';

const SidebarProfile = ({ isOpen, onClose }) => {
  // console.log untuk melacak status sidebar profil
  console.log('SidebarProfile rendered, isOpen:', isOpen);

  const profileImageUrl = "https://placehold.co/100x100/e2e8f0/64748b?text=JS";
  const dummyName = "Hamida Faizal";
  const isOwner = true; // Dummy state untuk mode

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 z-40 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar utama */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header Sidebar */}
        <div className="flex justify-between items-center p-4 border-b border-slate-200">
          <h2 className="text-xl font-bold">Profil</h2>
          <button className="icon-btn" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Info Profil */}
        <div className="flex flex-col items-center p-6 border-b border-slate-200">
          <img
            src={profileImageUrl}
            alt="Profil Pengguna"
            className="w-16 h-16 rounded-full object-cover mb-2"
          />
          <span className="font-semibold text-slate-800">{dummyName}</span>
        </div>

        {/* Toggle Mode */}
        <div className="p-4 flex flex-col gap-2 border-b border-slate-200">
          <div className="text-sm font-semibold text-slate-500">Mode</div>
          <div className="flex justify-between items-center bg-slate-100 rounded-lg p-1">
            <button className={`w-1/2 py-1.5 rounded-md font-medium transition-all ${isOwner ? 'bg-white text-slate-800 shadow' : 'text-slate-500'}`}>
              <span className="flex items-center justify-center gap-2"><UserCheck className="h-4 w-4"/> Pemilik</span>
            </button>
            <button className={`w-1/2 py-1.5 rounded-md font-medium transition-all ${!isOwner ? 'bg-white text-slate-800 shadow' : 'text-slate-500'}`}>
              <span className="flex items-center justify-center gap-2"><CreditCard className="h-4 w-4"/> Kasir</span>
            </button>
          </div>
        </div>

        {/* Daftar Menu */}
        <nav className="p-2">
          <ul>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-150">
                <User className="h-5 w-5 text-slate-500" />
                <span className="font-semibold">Akun Saya</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-150">
                <Key className="h-5 w-5 text-slate-500" />
                <span className="font-semibold">Pengaturan Akun</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-150">
                <Bell className="h-5 w-5 text-slate-500" />
                <span className="font-semibold">Notifikasi</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SidebarProfile;
