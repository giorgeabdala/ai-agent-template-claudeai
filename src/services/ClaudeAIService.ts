import IAssistantService, {ChatResponse} from "../adapters/IAssistantService";

export default class ClaudeAIService implements IAssistantService {

    private apiKey: string;

    public constructor() {
        this.apiKey = this.getApiKey();
        if (!this.apiKey) throw new Error('ANTHROPIC_API_KEY is not defined');

        console.log('Initializing Anthropic AI Service with API Key... ')

    }

    public async executeChatQuery(chatQuery: string, model: string, max_tokens: number, temperature: number, systemPrompt?: string): Promise<ChatResponse> {
        if(!model) model = "claude-3-5-sonnet-20241022";

        console.log('Executing Chat Query... ')
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: chatQuery }],
                model: model,
                max_tokens: max_tokens
            })
        });

        if (response.status === 200) {
        const msg:any = await response.json();
        return {model: msg.model, chatQuery: chatQuery, message: msg.content[0].text, success: true};
        }
        return {message: "Error in executeChatQuery", success: false};
    }


    public getApiKey() : string{
        console.log('Getting API Key from Vault... ')
        let vault: Record<string, string> = {};
        try {
            vault = JSON.parse(process.env.secret || '')
        } catch (e) {
            console.error(e)
        }
        return (vault.ANTHROPIC_API_KEY) ? vault.ANTHROPIC_API_KEY as string : '';

    }










}