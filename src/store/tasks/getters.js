export default {
  tasksTodo: (_, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    const tasks = {};
    Object.keys(tasksFiltered).forEach((key) => {
      let task = tasksFiltered[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompleted: (_, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    const tasks = {};
    Object.keys(tasksFiltered).forEach((key) => {
      let task = tasksFiltered[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted;
    let tasksFiltered = {};
    if (state.search) {
      Object.keys(tasksSorted).forEach((key) => {
        let task = tasksSorted[key];
        if (task.name.toLowerCase().includes(state.search.toLowerCase())) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    }
    return tasksSorted;
  },
  tasksSorted: (state) => {
    let tasksSorted = {},
      keysOrdered = Object.keys(state.tasks);

    keysOrdered.sort((a, b) => {
      let taskA = state.tasks[a][state.sort].toLowerCase();
      let taskB = state.tasks[b][state.sort].toLowerCase();
      if (taskA > taskB) return 1;
      else if (taskA < taskB) return -1;
      else return 0;
    });
    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key];
    });
    return tasksSorted;
  },
};
