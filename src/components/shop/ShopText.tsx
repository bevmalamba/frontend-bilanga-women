
import Sidebar from './Sidebar';
import ProductGrid from './ProductGrid';


export default function ShopText() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">Showing 1-9 of 72 results</p>
              <div className="flex gap-4">
                <select className="border rounded-lg px-4 py-2 bg-white">
                  <option>Sort by Popularity</option>
                  <option>Sort by Price</option>
                  <option>Sort by Rating</option>
                </select>
                <select className="border rounded-lg px-4 py-2 bg-white">
                  <option>Show 9</option>
                  <option>Show 18</option>
                  <option>Show 27</option>
                </select>
              </div>
            </div>

            <ProductGrid />
            

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <button className="px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">1</button>
              <button className="px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">2</button>
              <button className="px-4 py-2 bg-white rounded-lg border hover:bg-gray-50">
                <span className="sr-only">Next</span>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}