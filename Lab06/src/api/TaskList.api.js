export class TaskApi {
  constructor() {}
  async getTaskList() {
    return fetch(
      "https://66f37c8771c84d805878db7b.mockapi.io/api/rn/product_grid"
    )
      .then((response) => response.json())

      .then((json) => json);
  }

  async createTask(task) {
    return fetch(
      "https://66f37c8771c84d805878db7b.mockapi.io/api/rn/product_grid",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log("Create Success:", data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async updateTask(task) {
    console.log("Update Task", task.id);
    return fetch(
      `https://66f37c8771c84d805878db7b.mockapi.io/api/rn/product_grid?id=${task.id}`,
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
}
