# Backend-Dev-Test

start server by typing <b>"yarn dev"</b> in cmd

PORT:9000

=====================ENDPOINTS examples====================

<b>POST localhost:9000/users/create </b><br>
    -body as raw json
    
    {
	"phoneNumber":"33333",
	"name":"bilal"
	}
   
   

<b>GET localhost:9000/users/read</b>:
 <br> 
 -parameters: id,phoneNumber

  
<b>PUT localhost:9000/api/v1/update</b><br>
  -parameters: id,phoneNumber
  -body as raw json
  
    {
	"phoneNumber":"33333",
	"name":"bilal"
	}
   
 <b>DELETE localhost:9000/api/v1/delete </b><br>
   -parameters: id,phoneNumber
    

===========DATABASE MODEL====================
<br>

  id: string <br>
  phoneNumber: string <br>
  name: string
	
