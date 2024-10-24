import '@phala/wapo-env'
import { Hono } from 'hono/tiny'
import { handle } from '@phala/wapo-env/guest'
import ClaudeAIService from "./services/ClaudeAIService";
import {ChatResponse} from "./adapters/IChatQueryService";

export const app = new Hono()

const defaultChatQuery = 'Phala Network is the future..?';
const defaultModel = 'claude-3-5-sonnet-20241022';

interface ChatCompletionParams {
    chatQuery?: string;
    model?: string;
    maxTokens?: number;
    temperature?: number;
}


async function getChatCompletion(params: ChatCompletionParams): Promise<ChatResponse> {
  const model = (params.model) ? params.model : '';
  const chatQuery = (params.chatQuery) ? params.chatQuery : defaultChatQuery;
  const maxTokens = (params.maxTokens) ? Number(params.maxTokens) : 20;
  const temperature = (params.temperature) ? Number(params.temperature) : 0.7;
  const claudeAIService = new ClaudeAIService();
  return claudeAIService.executeChatQuery(chatQuery, model, maxTokens, temperature);
}

app.get('/', async (c) => {
  let queries = c.req.queries() || {}
  const params: ChatCompletionParams = {
    model: queries.model?.[0],
    chatQuery: queries.chatQuery?.[0],
    maxTokens: queries.maxTokens ? Number(queries.maxTokens[0]) : undefined,
    temperature: queries.temperature ? Number(queries.temperature[0]) : undefined
  };
  const response = await getChatCompletion(params);
  return c.json(response)
})

app.post('/', async (c) => {
  const data = await c.req.json()
  const response = await getChatCompletion(data);
  return c.json(response)
});

export default handle(app)
