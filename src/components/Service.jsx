// components/Service.js
export default function Service() {
  return (
    <section className="py-12 bg-gray-100 container">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace with your actual services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Service 1</h3>
            <p className="text-gray-700">Description of Service 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Service 2</h3>
            <p className="text-gray-700">Description of Service 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Service 3</h3>
            <p className="text-gray-700">Description of Service 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}
