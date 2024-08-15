export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      

      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">Recipe App</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-700">Search for Recipes</h2>
          <div className="mt-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter an ingredient or dish name..."
            />
            <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
              Search
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-700">Popular Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Example of a recipe card */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/recipe.jpg" alt="Recipe" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Delicious Dish</h3>
                <p className="text-gray-600">A brief description of the recipe goes here...</p>
                <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto px-6 py-4">
          <p className="text-gray-600">&copy; 2024 Recipe App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
