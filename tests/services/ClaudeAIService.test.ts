import {describe, test, expect} from "vitest";
import ClaudeAIService from "../../src/services/ClaudeAIService";


describe ('Test ClaudeAI Service', () => {

    test('Claude AI test: Make a chatQuery to Claude AI', async () => {
        const chatQuery = 'Phala Network is the future...';
        const model = 'claude-3-5-sonnet-20241022';
        const maxTokens = 20;
        const temperature = 0.7;
        const systemPrompt = 'You are a blockchain expert';
        const claudeAiService = new ClaudeAIService();
        const response = await claudeAiService.executeChatQuery(chatQuery, model, maxTokens, temperature, systemPrompt);

        expect(response.model).to.equal(model);
        expect(response.chatQuery).to.equal(chatQuery);
        expect(typeof response.message).to.equal('string');
        expect(response).to.not.be.empty;
        expect(response.message.length).to.be.greaterThan(10);
        expect(response.message.length).to.be.lessThan(200);
        expect(response.message.toLowerCase()).to.include('blockchain' || 'phala' || 'network');

    } ) ;
} ) ;

