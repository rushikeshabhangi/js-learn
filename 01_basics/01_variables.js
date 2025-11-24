const accountId = 144553
let accountEmail = "test@accountEmail.com"
var accountPassword = "123456789"
accountCity = "Gujarat"

let accountState;
// accountId = 55 // Not allowed 

accountEmail = "my@id.com"

console.log(accountEmail)

/*
Prefer not to use var
because of issue in block scope and functional scope    
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])