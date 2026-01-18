import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Texoma Cricket League's mission to make cricket accessible for every child. Meet our coaching team and discover how we are building cricket culture in the Texas and Oklahoma region.",
    openGraph: {
        title: "About Us | Texoma Cricket League",
        description: "Learn about Texoma Cricket League's mission and meet our coaching team.",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
