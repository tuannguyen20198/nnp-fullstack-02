const axios = require("axios");

// promise hell
axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    const items = response.data;
    console.log(items[0]);
    const item = items[0];
    axios
      .patch(`https://jsonplaceholder.typicode.com/todos/${item.id}`, {
        completed: true,
      })
      .then((response) => {
        const item = response.data;
        console.log(item);
        axios
          .delete(`https://jsonplaceholder.typicode.com/todos/${item.id}`)
          .then((response) => {
            console.log("Item deleted");
            axios
              .get("https://jsonplaceholder.typicode.com/todos")
              .then((response) => {
                const items = response.data;
                console.log(items[0]);
              })
              .catch((error) => {
                console.log("Error: ", error);
              });
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
