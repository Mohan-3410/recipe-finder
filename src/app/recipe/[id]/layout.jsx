import Navbar from '@/components/home/navbar';
import Footer from '@/components/home/footer';

export const metadata = {
    title: "Recipe Search",
    description: "Search and view recipes",
};
export default function RecipeIDLayout({
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
