// components/Qualification.js
export default function Qualification() {
  return (
    <section className="py-12 bg-white container">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Qualifications</h2>
        <div className="space-y-6">
          {/* Replace with your actual qualifications */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Qualification 1</h3>
            <p className="text-gray-700">Description of Qualification 1</p>
            <span className="block mt-2 text-gray-500">Institution/Year</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Qualification 2</h3>
            <p className="text-gray-700">Description of Qualification 2</p>
            <span className="block mt-2 text-gray-500">Institution/Year</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Qualification 3</h3>
            <p className="text-gray-700">Description of Qualification 3</p>
            <span className="block mt-2 text-gray-500">Institution/Year</span>
          </div>
        </div>
      </div>
    </section>
  );
}
