import React from 'react';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Estadísticas</h2>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-sm text-blue-600 font-medium">Total</p>
          <p className="text-2xl font-bold text-blue-800">{totalTasks}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <p className="text-sm text-green-600 font-medium">Completadas</p>
          <p className="text-2xl font-bold text-green-800">{completedTasks}</p>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg text-center">
          <p className="text-sm text-amber-600 font-medium">Pendientes</p>
          <p className="text-2xl font-bold text-amber-800">{pendingTasks}</p>
        </div>
      </div>
      
    </div>
  );
};

export default TaskStats;