const fetchTasks = async () => {
    const url = 'https://task-manager-api3.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '70235e7102msh1b23ddcc95b8142p1e2d1ejsn22ee609f8375',
        'X-RapidAPI-Host': 'task-manager-api3.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const tasks = await response.json();
      console.log('Tasks:', tasks);
      return tasks;
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  
  const createTask = async () => {
    const url = 'https://task-manager-api3.p.rapidapi.com/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '70235e7102msh1b23ddcc95b8142p1e2d1ejsn22ee609f8375',
        'X-RapidAPI-Host': 'task-manager-api3.p.rapidapi.com'
      },
      body: JSON.stringify({
        title: 'New task',
        description: 'task description',
        status: 'pendiente'
      })
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to create task');
      }
      const newTask = await response.json();
      console.log('New task:', newTask);
      return newTask;
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
  
  const updateTask = async () => {
    const url = 'https://task-manager-api3.p.rapidapi.com/3tHcSthvj4mjh3CtpnkJ';
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '70235e7102msh1b23ddcc95b8142p1e2d1ejsn22ee609f8375',
        'X-RapidAPI-Host': 'task-manager-api3.p.rapidapi.com'
      },
      body: JSON.stringify({
        title: 'test',
        description: 'test',
        status: 'pendiente'
      })
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      const updatedTask = await response.json();
      console.log('Updated task:', updatedTask);
      return updatedTask;
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  
  const deleteTask = async () => {
    const url = 'https://task-manager-api3.p.rapidapi.com/3tHcSthvj4mjh3CtpnkJ';
    const options = {
      method: 'DELETE',
      headers: {
        'X-RapidAPI-Key': '70235e7102msh1b23ddcc95b8142p1e2d1ejsn22ee609f8375',
        'X-RapidAPI-Host': 'task-manager-api3.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
      console.log('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  
  // Example usage:
  // fetchTasks();
  // createTask();
  // updateTask();
  // deleteTask();
  