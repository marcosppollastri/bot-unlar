import { Elysia } from "elysia";
import { chatRouter } from "./routes/chatRouter";

const app = new Elysia().
use(chatRouter).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
