# Backend-Dev-Test

start server by typing "yarn dev" in cmd

PORT:9000

=====================ENDPOINTS examples====================

POST localhost:9000/users/create
    -body as raw json
    {
	"phoneNumber":"33333",
	"name":"bilal"
   }

GET localhost:9000/users/read
  -parameters: id,phoneNumber
  
PUT localhost:9000/api/v1/update
  -parameters: id,phoneNumber
  -body as raw json
    {
	"phoneNumber":"33333",
	"name":"bilal"
   }
   
 DELETE localhost:9000/api/v1/delete
   -parameters: id,phoneNumber
    

===========DATABASE MODEL====================
  id: string
  phoneNumber: string
  name: string
