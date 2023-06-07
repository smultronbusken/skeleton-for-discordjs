import { ApplicationCommandOptionType } from "discord.js";
import { SlashCommand } from "../../../../jobs/SlashCommand";

export default new SlashCommand<{}>(
  {
    name: "another",
    description: "Another",
    options: [
      {
        name: "option",
        description: "Epic",
        type: ApplicationCommandOptionType.String,
      },
    ],
  },
  async (interaction, app) => {
    interaction.reply("Hi.");
  },
);
