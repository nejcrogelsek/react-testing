import { rest } from 'msw'

// method, path, function that returns mock response
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Bruce Wayne',
        },
        {
          name: 'Clark Kent',
        },
        {
          name: 'Princess Diana',
        },
      ])
    )
  }),
]
