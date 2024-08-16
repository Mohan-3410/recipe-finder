import Navbar from '@/components/home/navbar';
import Footer from '@/components/home/footer';

export const metadata = {
    title: "Login",
    description: "Authenticate yourself first",
};
export default function RecipeLayout({
    children,
}) {
    return (
        <div>     
            {children}
        </div>
    );
}
