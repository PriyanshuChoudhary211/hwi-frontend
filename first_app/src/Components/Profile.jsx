import React from "react";
const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center pt-8">
        <h1 className="text-4xl font-bold mb-8">Great to see you!</h1>

        <div className="w-full max-w-6xl">
          {/* My Courses Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4">Course Title</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores dolores expedita voluptas facilis ad asperiores architecto deserunt, velit eveniet hic!
                </p>
                <div className="text-gray-400">Duration: 3 hours</div>
              </div>
              {/* Add more course cards here */}
            </div>
          </section>

          {/* Recommended Courses Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Recommended Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4">Course Title</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores dolores expedita voluptas facilis ad asperiores architecto deserunt, velit eveniet hic!
                </p>
                <div className="text-gray-400">Duration: 4 hours</div>
              </div>
              {/* Add more course cards here */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
