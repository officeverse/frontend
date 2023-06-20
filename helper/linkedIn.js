import axios from "axios";

const generateLinkedInPost = async (description) => {
    console.log("generating");
    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a helpful assistant. Help to generate a professional linkedIn post of max 100 words to celebrate my completion of a challenge.  I will tell you what it is about next.",
                },
                {
                    role: "user",
                    content: `The description of the challenge is '${description}'`,
                },
            ],
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
            },
        }
    );
    return response.data.choices[0].message.content;
};

module.exports = {
    generateLinkedInPost,
};
