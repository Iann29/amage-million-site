'use client';

import Image from 'next/image';

interface IphoneMockupProps {
  src: string;
  className?: string;
}

export function IphoneMockup({ src, className = '' }: IphoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone Frame */}
      <div className="relative w-[280px] h-[570px] md:w-[320px] md:h-[650px] mx-auto">
        {/* Outer Frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[45px] shadow-2xl">
          {/* Inner Frame */}
          <div className="absolute inset-[3px] bg-black rounded-[42px]">
            {/* Screen */}
            <div className="absolute inset-[12px] bg-black rounded-[35px] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[25px] bg-black rounded-b-2xl z-10" />
              
              {/* Screen Content */}
              <div className="absolute inset-0 bg-white rounded-[35px]">
                <Image
                  src={src}
                  alt="Instagram Million"
                  fill
                  className="object-cover rounded-[35px]"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Side Buttons */}
        <div className="absolute left-[-3px] top-[100px] w-[3px] h-[70px] bg-gray-700 rounded-r-lg" />
        <div className="absolute right-[-3px] top-[130px] w-[3px] h-[50px] bg-gray-700 rounded-l-lg" />
      </div>
    </div>
  );
}