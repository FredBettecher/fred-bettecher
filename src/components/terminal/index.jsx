"use client";

import { useState } from "react";
import { LuPanelLeftOpen, LuPanelRightOpen, LuFolderSearch, LuHome, LuUser, LuBriefcase, LuFolderGit2, LuMail } from "react-icons/lu";

export default function Terminal({ pageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative w-[90%] h-[80%] bg-charade-950 rounded-lg bg-opacity-40 shadow-lg flex">
      <header className={`w-full h-10 bg-charade-950 rounded-t-lg bg-opacity-60 shadow flex items-center gap-3 transition-all duration-500 ease-in-out ${isMenuOpen ? 'pl-[21%]' : 'pl-2'}`}>
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <LuPanelRightOpen className="text-3xl" />
          ) : (
            <LuPanelLeftOpen className="text-3xl" />
          )}
        </button>
        <h1 className="text-lg">{`~/terminal/${pageName}`}</h1>
      </header>
      <aside className={`h-full  bg-charade-950 rounded-lg bg-opacity-80 flex flex-col absolute top-0 left-0 gap-4 transition-all duration-500 ease-in-out ${isMenuOpen ? 'w-[20%]': 'w-0 opacity-0'}`}>
        <div className="w-full h-10 flex items-center pl-4 border-b border-charade-700 gap-2">
          <LuFolderSearch className="text-lg" />
          <h2>navegação</h2>
        </div>
        <div className={`flex items-center gap-2 pl-2 mx-2 py-1 hover:cursor-pointer ${pageName === 'início' ? 'bg-charade-500 rounded-lg' : ''}`}>
          <LuHome className="text-lg" />
          início
        </div>
        <div className={`flex items-center gap-2 pl-2 mx-2 py-1 hover:cursor-pointer ${pageName === 'sobre' ? 'bg-charade-500 rounded-lg' : ''}`}>
          <LuUser className="text-lg" />
          sobre
        </div>
        <div className={`flex items-center gap-2 pl-2 mx-2 py-1 hover:cursor-pointer ${pageName === 'experiência' ? 'bg-charade-500 rounded-lg' : ''}`}>
          <LuBriefcase className="text-lg" />
          experiência
        </div>
        <div className={`flex items-center gap-2 pl-2 mx-2 py-1 hover:cursor-pointer ${pageName === 'projetos' ? 'bg-charade-500 rounded-lg' : ''}`}>
          <LuFolderGit2 className="text-lg" />
          projetos
        </div>
        <div className={`flex items-center gap-2 pl-2 mx-2 py-1 hover:cursor-pointer ${pageName === 'contato' ? 'bg-charade-500 rounded-lg' : ''}`}>
          <LuMail className="text-lg" />
          contato
        </div>
      </aside>
    </div>
  );
}
