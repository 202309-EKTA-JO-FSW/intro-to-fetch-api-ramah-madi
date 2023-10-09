// Please read the README.md to understand what to do. Happy Coding !

async function fetchUserData(){
    
    try{
    const fitchUserData = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await fitchUserData.json()
    console.log("Data fetched successfuly")
   
    const ModifyData = response.map(res => { 
          const ModifidObj = [{
            Name: res.name,
            Username: res.username,
            Email: res.email,
            Address: res.address.street,
            Phone: res.phone,
            Website: res.website,
            Company: res.company.name
          }]
          return ModifidObj
          })
    console.log("ModifidData: ", ModifyData)

    const filterUsersBiz = [].concat(
        ...response.map(filter => {
        if(filter.email.substring(filter.email.length - 3) === "biz"){
               return [filter]
        }
        return []
    }))
    console.log("Filter user biz: ", filterUsersBiz)

    const sortedNames = [...response].sort((first, second) => {
        if (first.name < second.name) {
            return -1;
          }
          if (first.name > second.name) {
            return 1;
          }
          return 0;
    })
   
     console.log("Sorted Names: " ,sortedNames)
    }
    catch(error){
        console.log("error can't get the data")
    }
}

fetchUserData()