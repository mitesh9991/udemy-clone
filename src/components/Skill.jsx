// components/Skill.js
export default function Skill() {
  return (
    <section className="py-12 bg-gray-100 container">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace with your actual skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Skill 1</h3>
            <p className="text-gray-700">Description of Skill 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Skill 2</h3>
            <p className="text-gray-700">Description of Skill 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Skill 3</h3>
            <p className="text-gray-700">Description of Skill 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}
