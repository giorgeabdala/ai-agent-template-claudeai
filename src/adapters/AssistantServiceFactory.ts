import ClaudeAIService from "../services/ClaudeAIService";


export default class AssistantServiceFactory {

    public static create(service?: string) {
        if (service === 'claude' || (!service)) {
            return new ClaudeAIService();
        }
        throw new Error('Invalid service');
    }
}
