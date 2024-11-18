const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const figlet = require('figlet');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] });

const token = 'Bot token :>';
const channelId = 'Fake Channel :>';
let lastThumbnail = null;

client.once('ready', async () => {
    figlet('Cocoa', (err, data) => {
        if (err) {
            console.error('Something went wrong with Loading...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
    console.log('Fake Vouch Tool | Cocoa Market');
    setInterval(sendEmbedMessage, 30000);
});

function getRandomRating() {
    const ratings = [
        { stars: '⭐⭐⭐⭐⭐', color: 0x00FF00 },
        { stars: '⭐⭐⭐⭐', color: 0xFFFF00 }
    ];
    return ratings[Math.floor(Math.random() * ratings.length)];
}

function getRandomVouchMessage() {
    const messages = [
        'Thank you for your help!',
        'Great service, highly recommend!',
        'Very satisfied with the assistance!',
        'Excellent support, will use again!',
        'Fantastic experience, thank you!',
        'Quick and efficient, much appreciated!',
        'Top-notch service, couldn\'t be happier!',
        'Went above and beyond, thank you!',
        'Highly professional and reliable!',
        'Outstanding support, five stars!',
        'Very helpful and friendly!',
        'Solved my issue in no time!',
        'Exceptional service, thank you!',
        'Very knowledgeable and patient!',
        'Great communication and support!',
        'Superb assistance, highly recommend!',
        'Very prompt and effective!',
        'Amazing service, will definitely return!',
        'Very courteous and helpful!',
        'Resolved my issue quickly and efficiently!',
        'Very attentive and thorough!',
        'Excellent problem-solving skills!',
        'Very responsive and professional!',
        'Great experience, thank you!',
        'Very supportive and understanding!',
        'Fantastic job, well done!',
        'Very reliable and trustworthy!',
        'Outstanding customer service!',
        'Very friendly and approachable!',
        'Great attention to detail!',
        'Very efficient and knowledgeable!',
        'Excellent follow-up and support!',
        'Very patient and understanding!',
        'Great job, highly recommend!',
        'Very quick and professional!',
        'Amazing support, thank you!',
        'Very helpful and efficient!',
        'Great service, very satisfied!',
        'Very professional and courteous!',
        'Excellent assistance, thank you!'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

async function getRandomMemberThumbnail() {
    const guild = client.guilds.cache.first();
    if (!guild) {
        console.error('Guild not found!');
        return null;
    }

    const members = await guild.members.fetch();
    const humanMembers = members.filter(member => !member.user.bot && !member.roles.cache.has('1299984669621882943'));
    let randomMember;
    let thumbnail;

    do {
        randomMember = humanMembers.random();
        thumbnail = randomMember.user.displayAvatarURL();
    } while (thumbnail === lastThumbnail);

    lastThumbnail = thumbnail;
    return { thumbnail, userId: randomMember.user.id };
}

async function sendEmbedMessage() {
    const channel = client.channels.cache.get(channelId);
    if (!channel) {
        console.error('Channel not found!');
        return;
    }

    const rating = getRandomRating();
    const { thumbnail, userId } = await getRandomMemberThumbnail();
    const currentTime = new Date().toLocaleString();

    const embed = new EmbedBuilder()
        .setTitle('Vouch Submitted!')
        .setColor(rating.color)
        .setThumbnail(thumbnail)
        .addFields(
            { name: 'Rating', value: rating.stars },
            { name: 'Vouch', value: `${getRandomVouchMessage()} <@&1299984669621882943>` },
            { name: 'Submitted By', value: `<@${userId}>`, inline: true },
            { name: 'Vouched at', value: currentTime, inline: true }
        );

    channel.send({ embeds: [embed] });
}

client.login(token);