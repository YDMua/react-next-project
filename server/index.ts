import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
// @ts-ignore
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
