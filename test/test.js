const request = require("supertest");
process.env.port = 3000
const app = require("../server");
describe("GET /", () => {
  it("respond with Hello World", (done) => {
    request(app).get("/").expect("Hello World test1234567!", done);
  })
});