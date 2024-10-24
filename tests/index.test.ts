import {afterAll, describe, test, vi, expect, beforeAll} from 'vitest'
import { app } from '../src/'

beforeAll(() => {
  this.chatQuery = 'Who are you two?';
  this.model = 'claude-3-5-sonnet-20241022';
} ) ;



// Set Testing env secrets
const apiKey = JSON.stringify({apiKey: 'sk-qVBlJkO3e99t81623PsB0zHookSQJxU360gDMooLenN01gv2'})
vi.stubEnv('secret', apiKey)

describe('Test RedPill AI Agent Contract', () => {
  test('GET Test: Pass chatQuery through URL Query', async () => {
    let chatQuery = this.chatQuery;
    let model = this.model;
    const resp = await app.request(encodeURI(`/?chatQuery=${chatQuery}&model=${model}`))
    expect(resp.status).toBe(200)
    expect(resp.headers.get('content-type')?.toLowerCase()).toBe('application/json; charset=utf-8')
    const data = await resp.json()
    console.log(data)
    expect(data).toHaveProperty('model')
    expect(data).toHaveProperty('chatQuery')
    expect(data).toHaveProperty('message')
  })

  test('POST Test: Pass chatQuery and model through body of POST request', async () => {
    const input = { chatQuery: this.chatQuery, model: this.model }
    const resp = await app.request('/', {
      method: 'POST',
      body: JSON.stringify(input),
    })
    expect(resp.status).toBe(200)
    expect(resp.headers.get('content-type')?.toLowerCase()).toBe('application/json; charset=utf-8')
    const data = await resp.json()
    console.log(data)
    expect(data).toHaveProperty('model')
    expect(data).toHaveProperty('chatQuery')
    expect(data).toHaveProperty('message')
  })
})

afterAll(async () => {
  console.log(`\nNow you are ready to publish your agent, add secrets, and interact with your agent in the following steps:\n- Execute: 'npm run publish-agent'\n- Set secrets: 'npm run set-secrets'\n- Go to the url produced by setting the secrets (e.g. https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf)`)
}) ;

