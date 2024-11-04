import { describe, test, expect, vi } from "vitest";
import ClaudeAIService from "../../src/services/ClaudeAIService";
import * as path from "node:path";

// Set Testing env secrets
const secretsFile = '../../secrets/default.json';
vi.stubEnv('secret', JSON.stringify(require(path.join(__dirname, secretsFile))));

describe('Test ClaudeAI Service', () => {

    test('Claude AI test: Make a chatQuery to Claude AI', async () => {
        const chatQuery = 'Phala Network is the future...';
        const model = 'claude-3-5-sonnet-20241022';
        const maxTokens = 20;
        const temperature = 0.7;
        const systemPrompt = 'You are a blockchain expert';
        const claudeAiService = new ClaudeAIService();
        const response = await claudeAiService.executeChatQuery(chatQuery, model, maxTokens, temperature, systemPrompt);

        expect(response.model).toEqual(model);
        expect(response.chatQuery).toEqual(chatQuery);
        expect(typeof response.message).toBe("string");
        expect(response).not.toBeNull();
        expect(response.message.length).toBeGreaterThan(10);
        expect(response.message.length).toBeLessThan(200);
        expect(response.message.toLowerCase()).toContain('phala');
    });

    test('Validate apiKey Anthropic', async () => {
        const claudeAiService = new ClaudeAIService();
        const apiKey = claudeAiService.getApiKey();

        expect(typeof apiKey).toBe('string');
        expect(apiKey).not.toBe('');

        if (!(apiKey.startsWith('sk-ant-')) || !(apiKey.length >= 32))
            expect.fail('Invalid Anthropic API Key');

        // Make a test request to Anthropic API
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: "test" }],
                model: "claude-3-5-sonnet-20241022",
                max_tokens: 1
            })
        });

        if (response.statusText === 'Unauthorized')
            expect.fail('Unauthorized Anthropic API Key. Please check your ANTHROPIC_API_KEY in secrets/default.json');

        expect(response.status).toBe(200);
        expect(response.ok).toBe(true);
        const data = await response.json();
        expect(data).toBeDefined();
    });
});
