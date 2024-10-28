import '@phala/wapo-env'
import { Hono } from 'hono/tiny'
import { handle } from '@phala/wapo-env/guest'
import ClaudeAIService from "./services/ClaudeAIService";
import IAssistantService, {ChatResponse} from "./adapters/IAssistantService";
import AssistantServiceFactory from "./adapters/AssistantServiceFactory";
export const app = new Hono()
const defaultChatQuery = 'Complete the Sentence: Phala Network is the future..?';
const defaultModel = 'claude-3-5-sonnet-20241022';
const defaultMaxTokens = 20;
const defaultTemperature = 0.7;

interface ChatCompletionParams {
    chatQuery?: string;
    model?: string;
    maxTokens?: number;
    temperature?: number;
}

//My Changes
async function getChatCompletion(params: ChatCompletionParams): Promise<ChatResponse> {
  //My Changes
  try {
    const model = (params.model) ? params.model : defaultModel;
    const chatQuery = (params.chatQuery) ? params.chatQuery : defaultChatQuery;
    const maxTokens = (params.maxTokens) ? Number(params.maxTokens) : defaultMaxTokens;
    const temperature = (params.temperature) ? Number(params.temperature) : defaultTemperature;
    const claudeAIService:IAssistantService = AssistantServiceFactory.create();
    return claudeAIService.executeChatQuery(chatQuery, model, maxTokens, temperature);
  } catch (error) {
    console.error('Chat query execution failed:', error);
    console.error('Params:', params);
    }
  }


app.get('/', async (c) => {
  //My Changes
  let queries = c.req.queries() || {}
  const params: ChatCompletionParams = {
    model: queries.model?.[0] ? queries.model[0] : defaultModel,
    chatQuery: queries.chatQuery?.[0] ? queries.chatQuery[0] : defaultChatQuery,
    maxTokens: queries.maxTokens ? Number(queries.maxTokens[0]) : defaultMaxTokens,
    temperature: queries.temperature ? Number(queries.temperature[0]) : defaultTemperature
  };
  const response = await getChatCompletion(params);
  return c.json(response);
})

app.post('/', async (c) => {
  //My Changes
  const data = await c.req.json()
  const response = await getChatCompletion(data);
  return c.json(response)
});

export default handle(app)