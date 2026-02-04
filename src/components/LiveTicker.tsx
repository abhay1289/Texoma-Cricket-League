'use client';

import React from 'react';

const LiveTicker: React.FC = () => (
    <div className="bg-primary text-white py-3 overflow-hidden relative z-[101] border-b border-white/10">
        <div className="animate-marquee whitespace-nowrap">
            {Array(10).fill(null).map((_, i) => (
                <div key={i} className="inline-flex items-center mx-12 gap-8">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="font-heading text-xs tracking-[0.2em] uppercase font-bold text-white">
                        LIVE: TEXOMA TIGERS 184/4 (18.2) v NORTH OAK RAIDERS
                    </span>
                    <span className="text-secondary font-bold">•</span>
                    <span className="font-heading text-xs tracking-[0.2em] uppercase text-white/90">
                        SPRING CHAMPIONSHIP REGISTRATION: 12 SPOTS REMAINING
                    </span>
                </div>
            ))}
        </div>
    </div>
);

export default LiveTicker;
