// Add your code here
function submitData(name, email)
{
    const userData = {
        name: name,
        email: email,
    };
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(userData),
      };
    
    let fetchVar = fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
      })
    .then(function (object) {
        document.body.append(object.id)
      })
    .catch(function (error) 
    {
        document.body.append(error.message)
    });
    return fetchVar;
}