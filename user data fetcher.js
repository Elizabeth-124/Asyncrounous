function fetchUserProfile() {
    fetch("https://dummyjson.com/users/1")
        .then(response => response.json())
        .then(data => {
            console.log(data.firstName);
            console.log(data.lastName);
            console.log(data.email);
        });
}

fetchUserProfile();
