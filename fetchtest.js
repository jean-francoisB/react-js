async function loadData() {
    var rawResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    var response = await rawResponse.json();
    console.log(response);
}

loadData()