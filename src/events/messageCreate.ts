import { Event } from "disbotter";
import { Message } from "discord.js";

// Every event has to extend the Event class and be exported as default.
// Event type takes generic type argument which is the name of the event.
// Same value has to be passed to the super() call.
export default class MessageCreateEvent extends Event<"messageCreate"> {
    public constructor() {
        // Pass the event name to the super() call.
        // The second argument is whether the event should be
        // registered as once (true) or not (false).
        // Second argument is optional and defaults to false.
        super("messageCreate", false);
    }

    // The handle method is called when the event is emitted.
    // Thanks to the generic type argument, function signature
    // will be checked at compile time.
    public async handle(message: Message): Promise<void> {
        // Ignore messages from bots.
        if (message.author.bot) return;

        // Log the message to the console.
        console.log(
            `Message from ${message.author.tag} in ${message.guild?.name}: ${message.content}`
        );
    }
}
