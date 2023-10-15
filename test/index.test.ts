import { Elysia } from "elysia";
import { describe, beforeEach, test, expect, jest } from '@jest/globals'
import { chatRouter } from "../src/routes/chatRouter";


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
