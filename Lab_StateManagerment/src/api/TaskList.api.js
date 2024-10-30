export class TaskApi {
  constructor() {}
  async getTaskList() {
    return fetch("https://66f37c8771c84d805878db7b.mockapi.io/Review_labs")
      .then((response) => response.json())

      .then((json) => json);
  }

  async createTask(task) {
    return fetch("https://66f37c8771c84d805878db7b.mockapi.io/Review_labs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => console.log("Create Success:", data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async updateTask(task) {
    return fetch(
      `https://66f37c8771c84d805878db7b.mockapi.io/Review_labs/${task.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log("Update Success:", data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async deleteTask(task) {
    return fetch(
      `https://66f37c8771c84d805878db7b.mockapi.io/Review_labs/${task.id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log("Delete Success:", data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
