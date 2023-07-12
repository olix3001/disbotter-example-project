// Import bot client.
import { BotClient } from "disbotter";

// Import dotenv and load .env file.
import dotenv from "dotenv";
dotenv.config();

// As we are using ESM modules, we have to implement
// our own __filename and __dirname variables.
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create new bot client and start it.
new BotClient({
    // ==< Basics >==
    // Base directory of the bot.
    // (where the commands, events, etc. folders are)
    baseDir: __dirname,

    // Set the token to the token from the .env file.
    token: process.env["BOT_TOKEN"] || "",
    // Set the client ID to the client ID from the .env file.
    clientID: process.env["CLIENT_ID"] || "",
    // Set the intents to the intents we want to use.
    intents: ["MessageContent"],

    // ==< Development Options >==
    // Guilds where the bot should be considered as a development bot.
    // This means that the commands will be registered on these guilds
    // separately from the global commands. This is useful for testing.
    devGuilds: [],

    // Development mode, for now only sends errors
    // to the user who executed the command.
    enableDevMode: false,

    // Hot reload, automatically reloads commands, events and locales
    // when they are changed, without having to restart the bot.
    // However, if you want to change additional things
    // like utility functions which are separate from the
    // commands and events, you still have to restart the bot.
    // For this you can use 'pnpm run dev' which will automatically
    // restart the bot when you change something.
    enableHotReload: false,

    // Here you can add any other options that are available
}).start();
