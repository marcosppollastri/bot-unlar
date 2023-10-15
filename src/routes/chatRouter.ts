import { Elysia } from 'elysia'

const router = ({ prefix }: { prefix: string }) =>
    new Elysia({ prefix })
    .get(`/chat`, () => {
        return {
            message: 'ok'
        }
    })


export const chatRouter = router({prefix: 'v1'})