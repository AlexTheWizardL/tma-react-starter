# Telegram Mini App - React Starter

Minimal starter template for Telegram Mini Apps with React + TypeScript.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173/ in browser or [TMA Studio](https://github.com/erfanmola/TMA-Studio).

## Deploy

1. Update `vite.config.ts` - change base path to your repo name
2. Deploy and connect bot:

```bash
npm run deploy
./scripts/setup-bot.sh <BOT_TOKEN> <APP_URL>
```

## Create Bot

1. Open [@BotFather](https://t.me/BotFather) in Telegram
2. Send `/newbot`
3. Enter name and username (must end with `bot`)
4. Save the token

## Project Structure

```
src/
├── components/
│   ├── App.tsx       # Router + theme
│   └── Page.tsx      # Back button wrapper
├── pages/
│   └── IndexPage/    # Home page
├── init.ts           # SDK initialization
└── mockEnv.ts        # Local dev mock
```

## SDK Features Available

| Feature | Usage |
|---------|-------|
| `initData` | User profile (name, username, premium) |
| `themeParams` | Auto dark/light theme |
| `hapticFeedback` | Vibration feedback |
| `backButton` | Native back navigation |
| `mainButton` | Bottom action button |
| `popup` | Native dialogs |
| `cloudStorage` | Persist user data |

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run deploy       # Deploy to GitHub Pages
```

## Resources

- [TMA Docs](https://docs.telegram-mini-apps.com/)
- [@tma.js/sdk-react](https://docs.telegram-mini-apps.com/packages/tma-js-sdk-react)
- [Telegram UI](https://github.com/Telegram-Mini-Apps/TelegramUI)

## License

MIT
