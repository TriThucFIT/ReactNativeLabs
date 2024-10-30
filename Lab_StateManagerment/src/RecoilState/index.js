import { atom, selector } from "recoil";
import { TaskApi } from "../api/TaskList.api";
const taskListAPI = new TaskApi();

export const userLoginState = atom({
  key: "userLoginState",
  default: {
    isLogin: false,
    user: null,
  },
});

export const taskListState = atom({
  key: "taskListState",
  default: [],
});
export const taskListSelector = selector({
  key: "taskListSelector",
  get: async ({ get }) => {
    const user = get(userLoginState);
    if (user.isLogin) {
      const data = await taskListAPI.getTaskList();
      return data;
    }
    return [];
  },
});

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const taskActionState = atom({
  key: "taskActionState",
  default: {
    action: "none",
    task: null,
  },
});

export const taskActionSelector = selector({
  key: "taskActionSelector",
  get: async ({ get }) => {
    const taskAction = get(taskActionState);
    console.log("taskActionSelector", taskAction);
    switch (taskAction.action) {
      case "add":
        const add = await taskListAPI.createTask(taskAction.task);
        return add;
      case "update":
        const update = await taskListAPI.updateTask(taskAction.task);
        return update;
      case "delete":
        const del = await taskListAPI.deleteTask(taskAction.task);
        return del;
      default:
        return null;
    }
  },
});
