export default async function handler(req, res) {
  const apiKey = process.env.POE_API_KEY; 
  const { prompt } = req.body;

  try {
    const response = await fetch('https://api.poe.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bot: "GPT-5.4-Nano", 
        query: prompt
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "AI bridge failed" });
  }
}
