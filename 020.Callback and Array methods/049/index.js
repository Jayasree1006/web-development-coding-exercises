function validUserNames(usernames) {
    const names = usernames.filter(name => {
 return name.length < 10 
    });
}
