const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const formatDuration = require("../../../structures/FormatDuration.js");

module.exports = {
	name: "play",
	description: "Play your favorite song/s.",
	category: "Music",
	options: [
		{
			name: "query",
			description: "Provide song name/url.",
			type: ApplicationCommandOptionType.String,
			required: true,
		},
	],
	permissions: {
		bot: ["Speak", "Connect"],
		user: [],
	},
	settings: {
		inVc: true,
		sameVc: true,
		player: false,
		current: false,
		owner: false,
	},
	run: async (client, interaction) => {
		await interaction.deferReply({ ephemeral: false });

		let player = client.poru.players.get(interaction.guild.id);

		if (!player) {
			player = await client.poru.createConnection({
				guildId: interaction.guildId,
				voiceChannel: interaction.member.voice.channelId,
				textChannel: interaction.channel.id,
				deaf: true,
			});
		}

		const song = interaction.options.getString("query");
		let source = client.config.playSource;

		const res = await client.poru.resolve(song, source);
		const { loadType, tracks, playlistInfo } = res;

		if (player.state !== "CONNECTED") player.connect();

		if (loadType === "PLAYLIST_LOADED") {
			for (const track of res.tracks) {
				track.info.requester = interaction.member;
				await player.queue.add(track);
			}

			const track = tracks.shift();

			const embed = new EmbedBuilder()
				.setColor(client.color)
				.setDescription(`\`☑️\` | **[${playlistInfo.name}](${song})** • \`${tracks.length}\` tracks • ${track.info.requester}`);

			await interaction.editReply({ embeds: [embed] });
			if (!player.isPlaying && !player.isPaused) return player.play();
		} else if (loadType === "SEARCH_RESULT" || loadType === "TRACK_LOADED") {
			const track = tracks.shift();

			track.info.requester = interaction.member;
			await player.queue.add(track);

			const embed = new EmbedBuilder()
				.setColor(client.color)
				.setDescription(
					`\`☑️\` | **[${track.info.title ? track.info.title : "Unknown"}](${track.info.uri})** • \`${
						track.info.isStream ? "LIVE" : formatDuration(track.info.length)
					}\` • ${track.info.requester}`
				);

			await interaction.editReply({ embeds: [embed] });
			if (!player.isPlaying && !player.isPaused) return player.play();
		} else if (loadType === "LOAD_FAILED") {
			const embed = new EmbedBuilder().setColor(client.color).setDescription(`\`❌\` | Failed to load track!`);

			await interaction.editReply({ embeds: [embed] }).then((msg) => {
				setTimeout(() => {
					msg.delete();
				}, 12000);
			});
			player.destroy();
		}
	},
};
