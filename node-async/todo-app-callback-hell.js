// nodejs error first callback

const request = require("request");

// callback hell => promise hell => promise chaining
// promise: pending, fulfilled (resolved), rejected
request(
  "https://jsonplaceholder.typicode.com/todos",
  function (error, response, body) {
    if (error) {
      console.log("Error: ", error);
    } else {
      // console.log("Response: ", response);
      const items = JSON.parse(body);
      console.log(items[0]);
      const item = items[0];

      request(
        {
          url: `https://jsonplaceholder.typicode.com/todos/${item.id}`,
          method: "PATCH",
          json: { completed: true },
        },
        function (error, response, body) {
          if (error) {
            console.log("Error: ", error);
          } else {
            // console.log("Response: ", response);
            const item = body;
            console.log(item);

            request(
              {
                url: `https://jsonplaceholder.typicode.com/todos/${item.id}`,
                method: "DELETE",
              },
              function (error, response, body) {
                if (error) {
                  console.log("Error: ", error);
                } else {
                  // console.log("Response: ", response);
                  console.log("Item deleted");

                  request(
                    "https://jsonplaceholder.typicode.com/todos",
                    function (error, response, body) {
                      if (error) {
                        console.log("Error: ", error);
                      } else {
                        // console.log("Response: ", response);
                        const items = JSON.parse(body);
                        console.log(items[0]);
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    }
  }
);
