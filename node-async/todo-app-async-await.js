const axios = require("axios");
const yargs = require("yargs");

const argv = yargs
  .options({
    id: {
      demand: true,
      alias: "identifier",
      describe: "Enter todo id",
    },
  })
  .help()
  .alias("id", "i").argv;

console.log(argv.id);

async function main(id) {
  const res1 = await axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
  });
  const items = res1.data;
  console.log(
    "🚀 ~ main ~ items:",
    items.find((item) => item.id === id)
  );

  const res2 = await axios.request({
    method: "PATCH",
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    data: { completed: true },
  });
  const item = res2.data;
  console.log("🚀 ~ main ~ item:", item);

  const res3 = await axios.request({
    method: "DELETE",
    url: `https://jsonplaceholder.typicode.com/todos/${id}`,
  });
  console.log("🚀 ~ main ~ res3:", res3.data);
}

main(argv.id);
