import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Register | Become a TCL Academy Partner",
    description: "Join the Texoma Cricket League Academy Partner program. Connect your academy to a national youth cricket platform with priority tournament access, national championships, and player development pathways.",
    openGraph: {
        title: "Register | Become a TCL Academy Partner",
        description: "Join the TCL Academy Partner program and access national youth cricket tournaments.",
    },
    keywords: ["TCL registration", "youth cricket academy", "cricket partner program", "national cricket tournaments", "youth cricket Texas"],
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
