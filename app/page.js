"use client"
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import DataResolve from '@/components/dataResolve/index';


export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false)

    const [filteredItems, setFilteredItems] = useState([
      "água",
      "verde",
      "planta",
      "boca",
      "amor",
      "vida",
      "discord",
      "next",
      "javascript",
      "typescript",
      "programação",
      "desenvolvimento",
      "computador",
      "tecnologia",
      "internet",
      "aplicativo",
      "framework",
      "componente",
      "biblioteca",
      "frontend",
      "backend",
      "API",
      "web",
      "mobile",
      "responsivo",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js"
  ]);

    let items = [
        "água",
        "verde",
        "planta",
        "boca",
        "amor",
        "vida",
        "discord",
        "next",
        "javascript",
        "typescript",
        "programação",
        "desenvolvimento",
        "computador",
        "tecnologia",
        "internet",
        "aplicativo",
        "framework",
        "componente",
        "biblioteca",
        "frontend",
        "backend",
        "API",
        "web",
        "mobile",
        "responsivo",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js"
    ];

    const handleClick = () => {
        setLoading(true)
        if (searchTerm.trim() === '') {
            setFilteredItems(items);
        } else {
          let filt = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
          if(filt.length > 0) {
            setFilteredItems(filt);
          } else {
            setFilteredItems(items);
          }
        }
        
        setTimeout(() => {
          setLoading(false)
        }, 500)
    };

    return (
        <main className="flex min-h-screen items-center gap-2 pt-4  flex-col">
            <div className="flex">
                <input
                    placeholder="Digite o nome aqui"
                    className="rounded-l-md pl-2 pr-12 pt-2 pb-2 text-black focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleClick} className="p-2 bg-white rounded-r-md text-black hover:bg-slate-400"><FaSearch /></button>
            </div>
            <div>
                <DataResolve items={filteredItems} loading={loading}/>
            </div>
        </main>
    );
}
