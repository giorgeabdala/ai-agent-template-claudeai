import 'dotenv/config';

import IChatQueryService, {ChatResponse} from "../adapters/IChatQueryService";
import Anthropic from "@anthropic-ai/sdk";

export default class ClaudeAIService  implements IChatQueryService{

    private anthropic: Anthropic;
    private apiKey: string = '';

    public constructor() {
        this.apiKey = this.getApiKey();
        if (!this.apiKey) throw new Error('ANTHROPIC_API_KEY is not defined');

        console.log('Initializing Anthropic AI Service with API Key... ')
        this.anthropic = new Anthropic({
            apiKey: this.apiKey
        });
    }
    public async executeChatQuery(chatQuery: string, model: string, max_tokens: number, temperature: number, systemPrompt?: string): Promise<ChatResponse> {
        if(!model) model = "claude-3-5-sonnet-20241022";
        if (!systemPrompt) systemPrompt = "You are a blockchain expert";

        console.log(`Executing Chat Query: ${chatQuery} with model: ${model} and systemPrompt: ${systemPrompt}`);
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${this.apiKey}`,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: `${chatQuery}` }],
                model: `${model}`,
                max_tokens: max_tokens
            })
        });

        const data = await response.json();
        console.log(`Response from Chat Query: ${JSON.stringify(data)}`);
        const message = (data.content) ? data.content[0].text as string : 'Failed to get response from Claude AI';
        console.log('Message Response: ', message);

        return {
            model,
            chatQuery,
            message: message
        };
    }


    private getApiKey() : String{
        let vault: Record<string, string> = {};
        try {
            vault = JSON.parse(process.env.secret || '')
        } catch (e) {
            console.error(e)
        }
        return (vault.ANTHROPIC_API_KEY) ? vault.ANTHROPIC_API_KEY as string : '';

    }


}
