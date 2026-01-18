import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tournaments & Events",
    description: "Browse upcoming cricket tournaments for all age groups at Texoma Cricket League. T20, ODI, and Pairs formats available. Register your team for the 2025 season championship.",
    openGraph: {
        title: "Tournaments & Events | Texoma Cricket League",
        description: "Browse upcoming cricket tournaments and register your team for the 2025 season.",
    },
};

export default function TournamentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
