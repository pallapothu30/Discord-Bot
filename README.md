Here's a complete `README.md` for your Discord bot project. It includes setup, environment configuration, and run instructions — ideal for pushing to GitHub.

---

````markdown
# 🔗 Discord URL Shortener Bot

A simple Discord bot that responds to messages and slash commands. It supports basic interactions and can be extended to generate shortened URLs (like Bitly).

## ✨ Features

- Responds to regular messages with a friendly greeting.
- Slash command `/create` for future URL shortening.
- Clean project structure using `dotenv` and Discord.js v14.

---

## ⚙️ Requirements

- Node.js v18 or above
- A Discord bot token
- Discord application and server (guild)

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/discord-url-bot.git
   cd discord-url-bot
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   DISCORD_TOKEN=your-discord-bot-token
   CLIENT_ID=your-discord-client-id
   GUILD_ID=your-discord-guild-id (for testing commands)
   ```

---

## 🚀 Running the Bot

### 1. **Register Slash Commands**

This step is required to sync slash commands with Discord:

```bash
node commands.js
```

> ⚠️ Note: Use `applicationGuildCommands()` for quick updates during testing.

### 2. **Start the bot**

```bash
node index.js
```

You should see:

```
Bot is online!
```

---

## 🧪 Usage

### Message Commands

In any text channel the bot has access to:

* Type any message → bot replies `Hi from Bot <BotName>`
* Type:

  ```
  create https://example.com
  ```

  → Bot responds that it’s generating a short URL.

### Slash Command

In the chat box, type `/create` and run the command — bot replies with a message (logic to shorten URL can be added later).

---

## 🛡 Security

* Keep your `.env` file **out of GitHub** by adding it to `.gitignore`.
* Never commit your bot token.

---

## 💡 Future Improvements

* Accept URLs as slash command input
* Integrate Bitly API or custom URL shortener
* Save links to a database
* Add logging and error handling

---

## 📄 License

MIT

---

## 🙌 Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

```

---

Let me know if you want badges, contributor guidelines, or CI instructions added.
```
