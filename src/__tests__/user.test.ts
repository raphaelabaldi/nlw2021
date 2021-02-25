import request from "supertest";
import { app } from "../app";

describe("users", () => {
    request(app).post("/users")
        .send({
            email: "user@example.com.br",
            name: "user"
        })
})