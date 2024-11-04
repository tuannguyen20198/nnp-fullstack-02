function getData(callback) {
  setTimeout(() => {
    console.log("This is data from server");
    callback();
  }, 3000);
}

function showData() {
  console.log("This is data for user");
}

getData(() => {
  showData();
});
