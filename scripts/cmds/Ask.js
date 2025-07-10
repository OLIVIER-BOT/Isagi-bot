const axios = require('axios');

const Prefixes = [
  '/ai',
  'gear',
  'préscilia ',
  '+ai',
  'shinmon',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("🌹𝑰𝑺𝑨𝑮𝑰 𝑩𝑶𝑻🌹 \n____________________\n 𝙌𝙪𝙚 𝙫𝙚𝙪𝙭 𝙩𝙪 𝙢𝙤𝙧𝙩𝙚𝙡𝙡𝙚............?  ");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `🌹𝑰𝑺𝑨𝑮𝑰 𝑩𝑶𝑻🌹
_______________________
${answer}
𝑰𝑺𝑨𝑮𝑰 💢`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
