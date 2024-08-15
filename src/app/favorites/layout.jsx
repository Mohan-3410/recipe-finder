import Navbar from '@/components/home/navbar';
import Footer from '@/components/home/footer';

export const metadata = {
    title: "Your Favorite Recipe",
    description: "All you favorite recipe is organised here.",
};
export default function FavoritesLayout({
    children,
}) {
    return (
        <div>
            <div className="flex flex-col min-h-screen bg-background text-foreground">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}
