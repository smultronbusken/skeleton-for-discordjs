import { ComponentCommand } from "../../implementations/Component/Command";

export default new ComponentCommand(
  {
    customId: "test",
  },
  async (interaction, app) => {
    if (interaction.isRepliable()) interaction.reply("Button with id 'test' clicked!");
  },
);
