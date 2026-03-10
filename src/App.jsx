import React from "react";

function App() {
  const student = {
    name: "K.Glory",
    regNo: "2500031830",
    department: "Computer Science and Engineering",
  };

  const subjects = [
    { name: "DSA", attendance: 82 },
    { name: "Mathematics For AI", attendance: 74 },
    { name: "FWD", attendance: 58 },
    { name: "LSE", attendance: 91 },
    { name: "DDCA", attendance: 67 },
  ];

  const getColor = (percentage) => {
    if (percentage > 75) return "bg-green-500";
    if (percentage >= 60) return "bg-yellow-400";
    return "bg-red-500";
  };

  const getTextColor = (percentage) => {
    if (percentage > 75) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Simple Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-light tracking-tight text-stone-800">
            attendance<span className="font-medium text-stone-600">.</span>
          </h1>
          <div className="mt-3 text-sm text-stone-600 space-y-0.5">
            <p><span className="text-stone-400">name</span> {student.name}</p>
            <p><span className="text-stone-400">reg no</span> {student.regNo}</p>
            <p><span className="text-stone-400">dept</span> {student.department}</p>
          </div>
        </div>
      </div>

      {/* Simple Cards */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg border border-stone-200 hover:border-stone-300 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-medium text-stone-900">
                  {subject.name}
                </span>
                <span className={`text-sm font-medium ${getTextColor(subject.attendance)}`}>
                  {subject.attendance}%
                </span>
              </div>
              
              <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${getColor(subject.attendance)}`}
                  style={{ width: `${subject.attendance}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Simple Legend */}
        <div className="mt-8 flex gap-4 text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> &gt;75%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span> 60-75%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500"></span> &lt;60%
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;