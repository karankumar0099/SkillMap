const express = require("express");
const router = express.Router();

router.post("/chat", async (req, res) => {
    const { message } = req.body;
    console.log("REQ BODY:", message);

    try {
        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        {
                            role: "system",
                            content: "Respond using clean markdown formatting with headings, bullet points, and code blocks when helpful."
                        },
                        { role: "user", content: message }
                    ]
                })
            }
        );

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message || "Groq API Error");
        }

        res.json({
            reply: data.choices?.[0]?.message?.content || "No response from AI."
        });
    } catch (err) {
        console.error("GROQ ERROR:", err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
