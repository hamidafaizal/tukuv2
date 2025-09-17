// src/components/Sidebar.jsx
import React from 'react';
import { X, Home, DollarSign, Package, Settings } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  // console.log untuk melacak status sidebar
  console.log('Sidebar rendered, isOpen:', isOpen);

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
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header Sidebar */}
        <div className="flex justify-between items-center p-4 border-b border-slate-200">
          <h2 className="text-xl font-bold">Menu</h2>
          <button className="icon-btn" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Daftar Menu */}
        <nav className="p-2">
          <ul>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-150">
                <Home className="h-5 w-5 text-slate-500" />
                <span className="font-semibold">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-150">
                <DollarSign className="h-5 w-5 text-slate-500" />
                <span className="font-semibold">Keuangan</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-150">
                <Package className="h-5 w-5 text-slate-500" />
                <span className="font-semibold">Gudang</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-150">
                <Settings className="h-5 w-5 text-slate-500" />
                <span className="font-semibold">Pengaturan</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
