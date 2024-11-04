

export interface ChatResponse {
    model?: string;
    chatQuery?: string;
    message: string;
    success: boolean;
}


export default interface IAssistantService {
    executeChatQuery(chatQuery: string, model: string, max_tokens: number, temperature: number, systemPrompt?: string): Promise<ChatResponse> ;
}