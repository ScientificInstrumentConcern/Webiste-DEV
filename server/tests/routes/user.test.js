import request from 'supertest';
import supertest from 'supertest';
import userRouter from '../../routes/user.js'

describe('GET /admin/', function(){
   //Get http status  200
   test("Should respond with a 200 status code", () => {
       const response = await request(userRouter).get("/admin");
       expect(response.statusCode).toBe(200)
   })
   //get json data
})