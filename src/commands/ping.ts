import { Command, LocalizedTranslations } from "disbotter";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

// Every command has to extend the Command class and be exported as default.
export default class PingCommand extends Command {
    // Every command has to have a builder property.
    // It is used to register the command.
    public readonly builder = new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong and greets the user.");

    // The handle method is called when the command is used.
    // It is passed the LocalizedTranslations object
    // and the CommandInteraction object.
    public async handle(
        t: LocalizedTranslations,
        interaction: CommandInteraction
    ): Promise<void> {
        // Here we use the LocalizedTranslations object to translate
        // the message to the user's locale.
        // If you want to get message in specific locale
        // you can get unlocalized Translations from this.client.translations
        interaction.reply(
            t.translate("commands.ping", {
                user: interaction.user.username,
            })
        );
    }
}
