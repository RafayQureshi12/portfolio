"use client";

import { useState, FC } from 'react';

const CVButton: FC = () => {
    const [isDownloading, setIsDownloading] = useState<boolean>(false);
    
    const handleDownload = (): void => {
        setIsDownloading(true);
        
        // This path will work on Vercel
        const cvFilePath = "@/asssets/CV.pdf";
        
        // Create a link element
        const link = document.createElement('a');
        link.href = cvFilePath;
        link.download = 'Rafay_Qureshi_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => setIsDownloading(false), 1000);
    };
    
    return (
        <div className="flex flex-row justify-center items-center">
            <button 
                className="p-[4px] rounded-full bg-[#1E1E2E]/80 border border-[#6E6C7E]/30 text-[#F5E0DC] hover:text-white font-medium flex items-center transition-all duration-300 hover:border-[#F28FAD]/50 backdrop-blur-sm"
                onClick={handleDownload}
                disabled={isDownloading}
            >
                {isDownloading ? 'Downloading...' : 'Download CV'}
            </button>
        </div>
    );
};

export default CVButton;