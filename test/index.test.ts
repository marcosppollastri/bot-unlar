import { Elysia } from "elysia";
import { chatRouter } from "../src/routes/chatRouter";
import { beforeEach, describe, test, expect } from "bun:test";

describe("Elysia App", () => {
    let app: Elysia;

    beforeEach(() => {
        app = new Elysia().use(chatRouter);
    });

    test("app should be defined", () => {
        expect(app).toBeDefined();
    });
    test("chatRouter should respond to /v1/chat", async () => {
        const response = await app.handle(new Request('http://localhost:3000/v1/chat', {method: 'GET'}));
        expect(await response.json()).toEqual({
            message: 'ok'
        });
    });
});
