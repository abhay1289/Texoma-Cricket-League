import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Texoma Cricket League. Questions about registration, tournaments, or coaching? We're here to help. Located in Pottsboro, TX with quick response times.",
    openGraph: {
        title: "Contact Us | Texoma Cricket League",
        description: "Get in touch with Texoma Cricket League. We're here to help with registration and questions.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
