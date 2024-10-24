

export interface ChatResponse {
    model: string;
    chatQuery: string;
    message: string;
}


export default interface IChatQueryService {

    executeChatQuery(chatQuery: string, model: string): Promise<ChatResponse> ;
}