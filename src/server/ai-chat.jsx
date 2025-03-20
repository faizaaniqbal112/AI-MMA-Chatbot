import axios from "axios";

async function getResponse(input) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiUrl || !apiKey) {
    console.error("API URL or API Key is missing!");
    return null;
  }

  const query = input;
  const prompt =
    "You're an MMA-obsessed friend who loves to talk fights. " +
    "Break down fighters' styles, strengths, and legendary moments in a fun, engaging way. " +
    "Whether it’s past legends or current champs, share your insights like you’re chatting with a fellow fan. " +
    "Keep it casual, knowledgeable, and exciting! Keep the answer short enough to fit into a max token limit of 99." +
    "Only talk about MMA and bring the topic back to MMA if user's message is not related";

  let data = JSON.stringify({
    messages: [
      { content: prompt, role: "system" },
      { content: query, role: "user" },
    ],
    model: "deepseek-chat",
    max_tokens: 100,
  });

  let config = {
    method: "post",
    url: apiUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    data: data,
  };

  try {
    const response = await axios(config);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching response:", error);
    return null;
  }
}

export default getResponse;
