export const getUser = async (loginToFind) => (
	fetch(`http://localhost:3005/users?login=${loginToFind}`).then((data)=> data.json()
.then(([loadedUser])=> loadedUser))
)
