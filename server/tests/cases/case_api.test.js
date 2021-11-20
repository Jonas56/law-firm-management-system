const { Case, Client, User } = require("../../models");
const helper = require("./helper.cases");
const app = require("../../app");
const request = require("supertest");

beforeEach(async () => {
  // clear database
  await Case.destroy({ where: {}, truncate: true });
  await Client.destroy({ where: {}, truncate: true });
  await User.destroy({ where: {}, truncate: true });

  // before each test the db will contain at least one case , user and client
  await Client.create({ ...helper.client });
  await User.create({ ...helper.user });
  await Case.create({ ...helper.cases });
});

describe("GET /api/cases", () => {
  test("should return all cases", async () => {
    const logedInUser = await request(app)
      .post("/api/login")
      .send({
        email: "jonas@email.com",
        password: "Jonas@123",
      })
      .set("Content-Type", "application/json");

    const response = await request(app)
      .get("/api/cases")
      .set({ Authorization: "bearer " + logedInUser.body.token })
      .expect(200);
    expect(response.body.length).toBe(1); // Just one Case inserted
  });
  test("should return error if not authorized", async () => {
    await request(app).get("/api/cases").expect(401);
  });
});

describe("POST /api/cases", () => {
  const insertedCase = {
    title: "Case example",
    description: "Case description",
    judge: "Jonas Tesla",
    enemy: "Vladimir Lennin",
    place: " Dalas",
    result: "Fucked up",
    status: "opened",
    priority: "high",
  };
  const insertedCaseFalse = {
    description: "Case description",
    judge: "Jonas Tesla",
    enemy: "Vladimir Lennin",
    place: " Dalas",
    result: "Fucked up",
    status: "opened",
    priority: "high",
  };

  test("should return the last inserted case", async () => {
    const logedInUser = await request(app).post("/api/login").send({
      email: "jonas@email.com",
      password: "Jonas@123",
    });

    const response = await request(app)
      .post("/api/cases")
      .set({ Authorization: "bearer " + logedInUser.body.token })
      .send({
        ...insertedCase,
        clientId: 1,
        userId: 2,
      })
      .set("Content-Type", "application/json")
      .expect(201);
    expect(response.body).toEqual(insertedCase);
  });

  test("should throw an error when inserting false data", async () => {
    const logedInUser = await request(app).post("/api/login").send({
      email: "jonas@email.com",
      password: "Jonas@123",
    });

    const response = await request(app)
      .post("/api/cases")
      .set({ Authorization: "bearer " + logedInUser.body.token })
      .send({
        ...insertedCaseFalse,
        clientId: 1,
      })
      .set("Content-Type", "application/json")
      .expect(400);
    expect(response.body).toEqual({
      error: "notNull Violation: The case should contain a title field",
    });
  });
  test("should return error if not authorized", async () => {
    const logedInUser = await request(app).post("/api/login").send({
      email: "jonas@email.com",
      password: "s@123",
    });
    await request(app)
      .post("/api/cases")
      .set({ Authorization: "bearer " + logedInUser.body.token })
      .send({
        ...insertedCase,
        clientId: 1,
      })
      .set("Content-Type", "application/json")
      .expect(401);
  });
});

describe("GET /api/cases/:id", () => {
  test("should return a valid case", async () => {
    const logedInUser = await request(app).post("/api/login").send({
      email: "jonas@email.com",
      password: "Jonas@123",
    });
    const response = await request(app)
      .get("/api/cases/1")
      .set({ Authorization: "bearer " + logedInUser.body.token })
      .expect(200);

    expect(Array(response.body).length).toBe(1);
  });
  test("should return an error when accessing unkonwn Case", async () => {
    const logedInUser = await request(app).post("/api/login").send({
      email: "jonas@email.com",
      password: "Jonas@123",
    });
    const response = await request(app)
      .get("/api/cases/10")
      .set({ Authorization: "bearer " + logedInUser.body.token })
      .expect(400);
    expect(response.body).toEqual({ error: "Case not found" });
  });
});

describe("DELETE /api/cases/:id", () => {
  const deletedCase = {
    title: "Case example",
    description: "Case description",
    judge: "Jonas Tesla",
    enemy: "Vladimir Lennin",
    place: " Dalas",
    result: "Fucked up",
    status: "opened",
    priority: "high",
  };
  test("should succesfully delete a case", async () => {
    const logedInUser = await request(app).post("/api/login").send({
      email: "jonas@email.com",
      password: "Jonas@123",
    });
    await request(app)
      .post("/api/cases")
      .send({
        ...deletedCase,
        clientId: 1,
        userId: 1,
      })
      .set({ Authorization: "bearer " + logedInUser.body.token })
      .set("Content-Type", "application/json")
      .expect(201);

    const lastCase = await helper.getLastInsertedCaseId();

    const response = await request(app)
      .delete(`/api/cases/${lastCase.id}`)
      .set({ Authorization: "bearer " + logedInUser.body.token })
      .expect(200);

    expect(response.body).toEqual({ message: "Case deleted succesfully" });
  });
  test("should return error when deleting unkonwn Case", async () => {
    const logedInUser = await request(app).post("/api/login").send({
      email: "jonas@email.com",
      password: "Jonas@123",
    });
    const lastCase = await helper.getLastInsertedCaseId();
    const id = lastCase.id + 10;

    const response = await request(app)
      .delete(`/api/cases/${id}`)
      .set({ Authorization: "bearer " + logedInUser.body.token })
      .expect(400);

    expect(response.body).toEqual({ error: "Cannot find the requested data" });
  });
});
