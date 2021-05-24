import request from "supertest";

describe("api/greeting" , () => {
  it("should return 200 and the greeting", async () => {
    const response = await request("http://localhost:3000").get("/api/greeting").send();
    expect(response.status).toEqual(200);
  });
});
