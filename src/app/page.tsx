"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Recipe = () => {
  const router = useRouter();

  const handleSearchClick = () => {
    const token = localStorage.getItem('key_access_token');
    
    if (token) {
      // If token is present, navigate to the search page
      router.push("/search");
    } else {
      // If token is not present, show an alert or navigate to the login page
      alert('Please log in to search for recipes.');
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/recipe.jpg')" }}
    >
      <div className="flex flex-col gap-4 md:gap-3 items-center justify-center h-full bg-black bg-opacity-70 text-center px-4 md:px-0">
        <h2 className="text-5xl md:text-6xl text-white mb-2 font-bold font-pacifico">
          Find Your <span className="text-yellow-400">Favorite</span> Recipes
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-4 font-pacifico">
          Discover and <span className="text-yellow-400">save</span> recipes
          from around the world.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={handleSearchClick}
            className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition-colors font-poppins"
          >
            Search Recipes
          </Button>
          <Button
            onClick={() => router.push("/login")}
            className="bg-yellow-500 min-w-36 text-black py-2 px-4 rounded hover:bg-yellow-400 transition-colors font-poppins"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
