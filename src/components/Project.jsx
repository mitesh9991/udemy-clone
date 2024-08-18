// components/Project.js
export default function Project() {
  return (
    <section className="py-12 bg-white container">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace with your actual projects */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Project 1</h3>
            <p className="text-gray-700">Description of Project 1</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Project 2</h3>
            <p className="text-gray-700">Description of Project 2</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Project 3</h3>
            <p className="text-gray-700">Description of Project 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}
