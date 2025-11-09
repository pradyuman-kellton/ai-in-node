# AI in Node.js

A simple Node.js project demonstrating how to use the OpenAI API to interact with GPT models.

## 🚀 Features

- **OpenAI Integration**: Direct integration with OpenAI's GPT models
- **Environment Configuration**: Secure API key management using environment variables
- **ES Modules**: Modern JavaScript using ES6 import/export syntax
- **Error Handling**: Comprehensive error handling for API calls

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js (version 14 or higher)
- An OpenAI API key from [OpenAI Platform](https://platform.openai.com/account/api-keys)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pradyuman-kellton/ai-in-node.git
   cd ai-in-node
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

4. Add your OpenAI API key to the `.env` file:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## 🏃‍♂️ Usage

Run the example script:

```bash
node example.mjs
```

This will send a request to OpenAI's GPT-3.5-turbo model asking for a bedtime story about a unicorn.

## 📁 Project Structure

```
ai-in-node/
├── .env                 # Environment variables (not tracked in git)
├── .gitignore          # Git ignore rules
├── example.mjs         # Main example script
├── package.json        # Project dependencies
├── package-lock.json   # Dependency lock file
└── README.md          # Project documentation
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |

### OpenAI Model Options

You can modify the `example.mjs` file to use different models:

- `gpt-3.5-turbo` (default) - Fast and cost-effective
- `gpt-4` - More capable but slower and more expensive
- `gpt-4-turbo` - Latest GPT-4 model with improved performance

## 📝 Example Code

```javascript
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({ 
    apiKey: process.env.OPENAI_API_KEY 
});

const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
            role: "user",
            content: "Write a one-sentence bedtime story about a unicorn."
        }
    ]
});

console.log("Response:", response.choices[0].message.content);
```

## 🛡️ Security

- **Never commit your `.env` file** - It contains sensitive API keys
- **Rotate your API keys regularly** - For better security
- **Use environment variables** - Never hardcode API keys in your source code
- **Monitor API usage** - Keep track of your OpenAI API usage and costs

## 🔍 Troubleshooting

### Common Issues

1. **"Please set your OPENAI_API_KEY" error**
   - Make sure your `.env` file exists and contains the correct API key
   - Verify the API key is valid on the OpenAI platform

2. **Import/Export errors**
   - The project uses ES modules (`.mjs` extension)
   - Make sure you're using Node.js version 14 or higher

3. **API rate limits**
   - OpenAI has rate limits based on your plan
   - Implement retry logic for production applications

## 📚 Learn More

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [OpenAI Node.js Library](https://github.com/openai/openai-node)
- [ES Modules in Node.js](https://nodejs.org/api/esm.html)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Repository](https://github.com/pradyuman-kellton/ai-in-node)
- [OpenAI Platform](https://platform.openai.com)
- [Issues](https://github.com/pradyuman-kellton/ai-in-node/issues)

---

**Note**: This is a learning project demonstrating basic OpenAI API integration. For production use, consider implementing additional features like error retry logic, response streaming, and proper logging.