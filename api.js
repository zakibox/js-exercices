fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Use map to create an array of names
        const names = data.map(person => person.name);
        console.log(names); // Output: ["Alice", "Bob", "Charlie"]

        // Use map to create an array of objects with id and name
        const idNamePairs = data.map(person => {
            return { id: person.id, name: person.name };
        });
        console.log(idNamePairs);
        // Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
});

[
    User: { "id": 1, "name": "Alice", "age": 25 , "enum":['string'] },
    person :{ "id": 2, "name": "Bob", "age": 30 },
    { "id": 3, "name": "Charlie", "age": 35 }
]



[
    { id: 1, name: "Alice" },
     { id: 2, name: "Bob" }, 
     { id: 3, name: "Charlie" }
]
[1,2,3,4]