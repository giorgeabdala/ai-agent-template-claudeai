import 'dotenv/config';

import IChatQueryService, {ChatResponse} from "../adapters/IChatQueryService";
import Anthropic from "@anthropic-ai/sdk";

export default class ClaudeAIService  implements IChatQueryService{

    private anthropic: Anthropic;

    public constructor() {
        const apiKey = this.getApiKey();
        if (!apiKey) throw new Error('ANTHROPIC_API_KEY is not defined');


        this.anthropic = new Anthropic({
            apiKey: apiKey
        });
    }
    public async executeChatQuery(chatQuery: string, model: string, max_tokens: number, temperature: number, systemPrompt?: string): Promise<ChatResponse> {
        if(!model) model = "claude-3-5-sonnet-20241022";
        if (!systemPrompt) systemPrompt = "You are a blockchain expert";


        const msg = await this.anthropic.messages.create({
            model: model,
            max_tokens: max_tokens,
            temperature: temperature,
            system: systemPrompt,
            messages: [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": chatQuery
                        }
                    ]
                }
            ]
        });

        return {
            model: model,
            chatQuery: chatQuery,
            message: Array.isArray(msg.content) ? msg.content[0].text : msg.content.toString()
        }

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
