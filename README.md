<div align="center">
  <a href="https://github.com/Phala-Network/ai-agent-template-claudeai">
    <h1>AI Agent Contract Template with Claude AI</h1>
    <img height="320" src="./public/AI-Agent-Contract.jpg" />
    <br />
  </a>

  <p align="center">
    Host your AI Agent Contract on Phala's decentralized serverless cloud.
    <br />
    <a href="https://github.com/Phala-Network/ai-agent-template-claudeai"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wapo-testnet.phala.network/ipfs/Qmc7EDq1X8rfYGGfHyXZ6xsmcSUWQcqsDoeRMfmvFujih3?key=51f265212c26086c&chatQuery=When%20did%20humans%20land%20on%20the%20moon">View Demo</a>
    ·
    <a href="https://github.com/Phala-Network/ai-agent-template-claudeai/issues">Report Bug</a>
    ·
    <a href="https://discord.gg/phala-network">Discord</a>
  </p>

  <h3>Architecure Overview</h3>
  <img height="320" src="./public/ai-agent-architecture.jpg" />
</div>

## 🤖 What Is This?!

<div align="center">
  <img height="240" src="https://www.jlwranglerforums.com/forum/attachments/zoolander-gif.325299/">
</div>

The Claude AI Agent template is a **MINIMAL** template to build an AI Agent that can be hosted on Phala Network's decentralized hosting protocol. Unlike Vercel or other FaaS, it allows you to publish your AI Agent compiled code to IPFS and hosts it on a fully decentralized FaaS cloud with the following benefits:

- 💨 Ship Fast: Build and ship with familiar toolchain in minutes
- ⛑️ Secure: Execution guarded by rock solid TEE / Intel SGX
- 🔒 Private: Host API keys and user privacy at ease
- 💎 Unstoppable: Powered by IPFS and Phala's 35k+ decentralized TEE workers
- :fire: [**hono/tiny** Support](https://hono.dev/docs/api/presets#hono-tiny): a small, simple, and ultrafast web framework built on Web Standards.
- 🧪: [Vite Test Framework](https://vitest.dev/guide/): Vite Testing Framework support, but your free to change the test framework to your desire.

> **NOTICE**
>
> We recommend using @hono/tiny to avoid a large bundle size and the 20MB final artifact limitation.

[//]: # (<img width="320" src="https://media1.tenor.com/m/NBtFH5F9QTgAAAAd/what-is-my-purpose-butter.gif" />)

## Getting Started
### Prepare
Install dependencies
```shell
npm install
```

### Testing Locally
Create `.env` file with the default ThirdWeb API key for publishing your Agent Contract to IPFS
```shell
cp .env.example .env
```
Get an API Key from ClaudeAI/Anthropic
> **Note**
>
- Go to https://console.anthropic.com/settings/keys and get your API Key.

In [default.json](./secrets/default.json) file replace `ANTHROPIC_API_KEY` with your API Key. 
```text
{
  "ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY"
}
```

Build your Agent
```shell
npm run build
```

Test your Agent locally
```shell
npm run test
```

Expected Test Results
```shell
Now you are ready to publish your agent, add secrets, and interact with your agent in the following steps:
- Execute: 'npm run publish-agent'
- Set secrets: 'npm run set-secrets'
- Go to the url produced by setting the secrets (e.g. https://wapo-testnet.phala.network/ipfs/QmPQJD5zv3cYDRM25uGAVjLvXGNyQf9Vonz7rqkQB52Jae?key=b092532592cbd0cf)

 ✓ tests/index.test.ts (2) 6157ms
   ✓ Test ClaudeAI AI Agent Contract (2) 6156ms
     ✓ GET Test: Pass chatQuery through URL Query 2722ms
     ✓ POST Test: Pass chatQuery and model through body of POST request 3434ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  16:30:03
   Duration  6.36s (transform 23ms, setup 6ms, collect 31ms, tests 6.16s, environment 0ms, prepare 39ms)
```

### Publish Your AI Agent

Upload your compiled AI Agent code to IPFS.
```shell
npm run publish-agent
```

Upon a successful upload, the command should show the URL to access your AI Agent.
```shell
- Uploading file to IPFS. This may take a while depending on file sizes.

✔ Successfully uploaded file to IPFS.
✔ Files stored at the following IPFS URI: ipfs://QmaUbZgNz9dZ5eGm87DDqegRtcBV7RdosxizYQcfe2bHRc
✔ Open this link to view your upload: https://b805a9b72767504353244e0422c2b5f9.ipfscdn.io/ipfs/bafybeifukvkuyztltpq2gi55nswzvwkpgrwrogwykm4ymoqeymh2pxoukm/

Agent Contract deployed at: https://wapo-testnet.phala.network/ipfs/QmaUbZgNz9dZ5eGm87DDqegRtcBV7RdosxizYQcfe2bHRc

If your agent requires secrets, ensure to do the following:
1) Edit the ./secrets/default.json file or create a new JSON file in the ./secrets folder and add your secrets to it.
2) Run command: 'npm run set-secrets' or 'npm run set-secrets [path-to-json-file]'
Logs folder created.
Deployment information updated in ./logs/latestDeployment.json
```


> :information_source: Note that your latest deployment information will be logged to in file [`./logs/latestDeployment.json`](./logs/latestDeployment.json). This file is updated every time you publish a new Agent Contract to IPFS. This file is also used to get the IPFS CID of your Agent Contract when setting secrets for your Agent Contract.
>
> Here is an example:
> ```json
> {
>   "date": "2024-08-29T18:47:55.108Z",
>   "cid": "QmaUbZgNz9dZ5eGm87DDqegRtcBV7RdosxizYQcfe2bHRc",
>   "url": "https://wapo-testnet.phala.network/ipfs/QmaUbZgNz9dZ5eGm87DDqegRtcBV7RdosxizYQcfe2bHRc"
> }
> ```

<details>
<summary>New to Thirdweb?</summary>
We use <a href="https://thirdweb.com/dashboard/infrastructure/storage">thirdweb Storage</a> to host IPFS contents. If you are new to thirdweb, the command will guide you to create your account or login to your existing account from the browser.
</details>

> **Did Thirdweb fail to publish?**
>
> If ThirdWeb fails to publish, please signup for your own ThirdWeb account to publish your Agent Contract to IPFS. Signup or login at https://thirdweb.com/dashboard/
>
> Whenever you log into ThirdWeb, create a new API key and replace the default API Key with yours in the [.env](./.env) file.
>
> ```
> THIRDWEB_API_KEY="YOUR_THIRDWEB_API_KEY"
> ```


### Access the Published AI Agent

Once published, your AI Agent is available at the URL: `https://wapo-testnet.phala.network/ipfs/<your-cid>`. You can get it from the "Publish to IPFS" step.

You can test it with `curl`.

```bash
curl https://wapo-testnet.phala.network/ipfs/<your-cid>
```

### Add Secrets

By default, all the compiled JS code is visible for anyone to view if they look at IPFS CID. This makes private info like API keys, signer keys, etc. vulnerable to be stolen. To protect devs from leaking keys, we have added a field called `secret` in the `Request` object. It allows you to store secrets in a vault for your AI Agent to access.

To add your secrets,
1) Edit the [default.json](./secrets/default.json) file or create a new JSON file in the `./secrets` folder and add your secrets to it.
```json
{
  "ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY"
}
```
2) Run command to set the secrets
```shell
npm run set-secrets
# or if you have a custom JSON file
npm run set-secrets <path-to-json-file>
```
Expected output:
```shell
Use default secrets...
Storing secrets...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   199    0    68  100   131    121    234 --:--:-- --:--:-- --:--:--   356
{"token":"5d9faaed6be5414a","key":"a3a8a4ef2c057d5c","succeed":true}

Secrets set successfully. Go to the URL below to interact with your agent:
https://wapo-testnet.phala.network/ipfs/QmaUbZgNz9dZ5eGm87DDqegRtcBV7RdosxizYQcfe2bHRc?key=a3a8a4ef2c057d5c
Log entry added to secrets.log
```

> :information_source: Note that all your secrets will be logged in file [`./logs/secrets.log`](./logs/secrets.log). This file is updated every time you add new secrets to your Agent Contract. If you have not published an Agent Contract, yet, this command will fail since there is not a CID to map the secrets to.
>
> Here is an example:
> ```text
> 2024-08-29T18:54:16.643Z, CID: [QmaUbZgNz9dZ5eGm87DDqegRtcBV7RdosxizYQcfe2bHRc], Token: [5d9faaed6be5414a], Key: [a3a8a4ef2c057d5c], URL: [https://wapo-testnet.phala.network/ipfs/QmaUbZgNz9dZ5eGm87DDqegRtcBV7RdosxizYQcfe2bHRc?key=a3a8a4ef2c057d5c]
> ```

The API returns a `token` and a `key`. The `key` is the id of your secret. It can be used to specify which secret you are going to pass to your frame. The `token` can be used by the developer to access the raw secret. You should never leak the `token`.

To verify the secret, run the following command where `key` and `token` are replaced with the values from adding your `secret` to the vault.
```shell
curl https://wapo-testnet.phala.network/vaults/<key>/<token>
```

Expected output:
```shell
{"data":{"ANTHROPIC_API_KEY":"<ANTHROPIC_API_KEY>"},"succeed":true}
```

#### Accessing Secrets in Your Code
To access your secrets you will have to get them from secret `vault` via `process.env.secret`. Here is an example of accessing the secret key value of `apiKey`.
```typescript
let vault: Record<string, string> = {}
try {
  vault = JSON.parse(process.env.secret || '')
} catch (e) {
  console.error(e)
  return c.json({ error: "Failed to parse secrets" })
}
const apiKey = (vault.apiKey) ? vault.apiKey as string : 'SALTY_BAE'
```

### Handling Requests
Check the [`Hono` docs](https://hono.dev/docs) for information on accessing URL `queries` or `body` from a `post` request.

> **NOTICE**
>
> We recommend using @hono/tiny to avoid a large bundle size and the 20MB final artifact limitation.

```typescript
// Access query value for a URL query named `type`
let queries = c.req.queries() || {}
const getType = (queries.type) ? queries.type[0] as string : ''
// Access body from post request
const data = await c.req.json()
```

## Architecture/Source Code Design Details

This architecture uses the `IAssistantService` interface and `AssistantServiceFactory` to simplify integration with various AI services, keeping the system flexible and extensible.

### `IAssistantService`: Standardizing AI Services

The `IAssistantService` interface defines a common contract for all AI services, ensuring each service implements the `executeChatQuery` method. This approach:

- **Facilitates service swapping**: Each implementation can be easily swapped or expanded.
- **Maintains code consistency**: All services follow the same input and output format.

### `AssistantServiceFactory`: Instantiation Flexibility

`AssistantServiceFactory` centralizes the logic for creating services, returning instances based on the requested type (e.g., `"claude"`). This allows:

- **Simplified service selection**: The client specifies a service by name, and the factory returns the correct instance.
- **Easy expansion**: Adding a new service requires only a new `case` in the factory.

This design makes the system modular, easy to maintain, and ready for integrating new AI services with minimal effort.

### Adding New AI Services

To integrate additional AI implementations, follow these steps:

1. **Create a New Service Class**: Build a new class that implements the `IAssistantService` interface, ensuring the `executeChatQuery` method is implemented. For example, to add support for a hypothetical service named `OtherAIService`:

    ```typescript
    import IAssistantService from "../adapters/IAssistantService";

    export default class OtherAIService implements IAssistantService {
        public async executeChatQuery(chatQuery: string, model: string, max_tokens: number, temperature: number): Promise<any> {
            // Implement the call to the OtherAI API
            // Return an object in the format { model, chatQuery, message }
        }
    }
    ```

2. **Register the New Service in the Factory**: Add a new `case` to `AssistantServiceFactory` to include the new implementation:

    ```typescript
    import IAssistantService from "../adapters/IAssistantService";
    import ClaudeAIService from "./ClaudeAIService";
    import OtherAIService from "./OtherAIService"; // Import the new service

    export default class AssistantServiceFactory {
        public static create(serviceType: string): IAssistantService {
            switch (serviceType.toLowerCase()) {
                case "claude":
                    return new ClaudeAIService();
                case "other":
                    return new OtherAIService(); // New service
                default:
                    throw new Error(`No IAssistantService implementation found for type: ${serviceType}`);
            }
        }
    }
    ```

3. **Use the New Service**: To use the new service, simply specify its `serviceType` when calling `AssistantServiceFactory`:

    ```typescript
    const assistantService = AssistantServiceFactory.create("other");
    ```

### Notes

- **Multiple AI Services**: `AssistantServiceFactory` enables adding multiple AI services easily, centralizing the creation logic and simplifying maintenance.
- **`IAssistantService` Implementation**: All services must adhere to the `IAssistantService` interface, ensuring consistency in query response format.

With this design, `AssistantServiceFactory` offers flexibility to expand the system and support new AI providers without modifying the core system logic.


### Debugging

To debug your agent, you can use the following command:
```shell
curl https://wapo-testnet.phala.network/logs/all/ipfs/<CID>
```

After executing this command then you should see some output in the terminal to show the logs of requests to your agent.
```shell
2024-09-04T03:18:34.758Z [95f5ec53-3d71-4bb5-bbb6-66065211102c] [REPORT] END Request: Duration: 166ms
2024-09-04T03:18:34.758Z [95f5ec53-3d71-4bb5-bbb6-66065211102c] [INFO] 'Is signature valid? ' true
2024-09-04T03:18:34.758Z [95f5ec53-3d71-4bb5-bbb6-66065211102c] [INFO] 'Verifying Signature with PublicKey ' '0xC1BF8dB4D06416c43Aca3deB289CF7CC0aAFF540'
2024-09-04T03:18:34.758Z [95f5ec53-3d71-4bb5-bbb6-66065211102c] [REPORT] START Request: GET /ipfs/QmfLpQjxAMsppUX9og7xpmfSKZAZ8zuWJV5g42DmpASSWz?key=0e26a64a1e805bfd&type=verify&data=tintinland%20message%20to%20sign&signature=0x34c4d8c83406e7a292ecc940d60b34c9b11024db10a8872c753b9711cd6dbc8f746da8be9bc2ae0898ebf8f49f48c2ff4ba2a851143c3e4b371647eed32f707b1b
2024-09-04T03:17:15.238Z [768b6fda-f9f1-463f-86bd-a948e002bf80] [REPORT] END Request: Duration: 183ms
2024-09-04T03:17:15.238Z [768b6fda-f9f1-463f-86bd-a948e002bf80] [INFO] 'Signature: 0x34c4d8c83406e7a292ecc940d60b34c9b11024db10a8872c753b9711cd6dbc8f746da8be9bc2ae0898ebf8f49f48c2ff4ba2a851143c3e4b371647eed32f707b1b'
2024-09-04T03:17:15.238Z [768b6fda-f9f1-463f-86bd-a948e002bf80] [INFO] 'Signing data [tintinland message to sign] with Account [0xC1BF8dB4D06416c43Aca3deB289CF7CC0aAFF540]'
2024-09-04T03:17:15.238Z [768b6fda-f9f1-463f-86bd-a948e002bf80] [REPORT] START Request: GET /ipfs/QmfLpQjxAMsppUX9og7xpmfSKZAZ8zuWJV5g42DmpASSWz?key=0e26a64a1e805bfd&type=sign&data=tintinland%20message%20to%20sign
2024-09-04T03:16:38.507Z [3717d307-bff0-4fc0-bc98-8f66c33dd46f] [REPORT] END Request: Duration: 169ms
2024-09-04T03:16:38.507Z [3717d307-bff0-4fc0-bc98-8f66c33dd46f] [REPORT] START Request: GET /ipfs/QmfLpQjxAMsppUX9og7xpmfSKZAZ8zuWJV5g42DmpASSWz?key=0e26a64a1e805bfd
2024-09-04T03:15:00.375Z [793f58f9-f24f-4580-8ebc-04debb7d727f] [REPORT] END Request: Duration: 158ms
2024-09-04T03:15:00.375Z [793f58f9-f24f-4580-8ebc-04debb7d727f] [REPORT] START Request: GET /ipfs/QmfLpQjxAMsppUX9og7xpmfSKZAZ8zuWJV5g42DmpASSWz?key=0e26a64
a1e805bfd
```
To create logs in your Agent Contract, you can use the following syntax in your `index.ts` file.
```typescript
// info logs
console.log('info log message!')
// error logs
console.error('error log message!')
```
For more information check the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/console) on `console` object.

### Getting Rugged By The WiFi?!
Run a local testnet with [`docker` support](https://docs.docker.com/desktop/). All you need to do to get a local testnet started is run:
> **WARNING**
>
> Running the local testnet may return an error if port `8000` is already in use.

```shell
npm run dev
```

#### Make a Request to Your Local Build
```shell
# GET request
curl http://127.0.0.1:8000/local
# GET request with URL queries
curl http://127.0.0.1:8000/local?query1=one&query2=two
# POST request
curl http://127.0.0.1:8000/local -X POST -H 'content-type: application/json' -d '{"foo": "bar"}'
```

#### Add Secrets to Your Local Build
```shell
curl http://127.0.0.1:8000/vaults -H 'Content-Type: application/json' -d '{"cid": "local", "data": {"secretKey":"secretValue"}}'
```

#### Check The Logs of Your Local Build
```shell
curl 'http://127.0.0.1:8000/logs/all/local'
```

## FAQ

<details>
<summary><b>What packages can I use in the AI Agent server?</b></summary>
<ul>
  <li>Most of the npm packages are supported: viem, onchainkit, ….</li>
  <li>Some packages with some advanced features are not supported:</li>
  <ul>
    <li>Memory usage over 100MB</li>
    <li>Web Assembly</li>
    <li>Browser only features: local storage, service workers, etc</li>
  </ul>
</ul>
</details>

<details>
<summary><b>What’s the spec of the Javascript runtime?</b></summary>
<ul>
  <li>The code runs inside a tailored <a href="https://bellard.org/quickjs/">QuickJS engine</a></li>
  <li>Available features: ES2023, async, fetch, setTimeout, setInterval, bigint</li>
  <li> <a href="https://docs.phala.network/tech-specs/ai-agent-contract#wapojs/">Tech spec doc</a></li>
</ul>
</details>

<details>
<summary><b>Why is the serverless platform secure?</b></summary>
<ul>
  <li>Your AI Agent code on is fully secure, private, and permissionless. Nobody can manipulate your program, steal any data from it, or censor it.</li>
  <li>Security: The code is executed in the decentralized TEE network running on Phala Network. It runs code inside a secure blackbox (called enclave) created by the CPU. It generates cryptographic proofs verifiable on Phala blockchain. It proves that the hosted code is exactly the one you deployed.</li>
  <li>Privacy: You can safely put secrets like API keys or user privacy on Phala Network. The code runs inside TEE hardware blackboxs. The memory of the program is fully encrypted by the TEE. It blocks any unauthorized access to your data.</li>
  <li>Learn more at <a href="https://phala.network">Phala Network Homepage</a></li>
</details>

<details>
<summary><b>What's TEE / Intel SGX?</b></summary>
<ul>
  <li><a href="https://collective.flashbots.net/t/tee-sgx-wiki/2019">TEE/SGX wiki</a></li>
  <li><a href="https://collective.flashbots.net/t/debunking-tee-fud-a-brief-defense-of-the-use-of-tees-in-crypto/2931">Debunking TEE FUD: A Brief Defense of The Use of TEEs in Crypto</a></li>
</details>
