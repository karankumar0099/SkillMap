import React, { useState } from 'react';
import './AiTutor.css';
import ReactMarkdown from 'react-markdown';

const AiTutor = ({ mode = 'page' }) => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const suggestionChips = [
        "Help select a career path",
        "Help me find a job",
        "Learn a Topic",
        "Test my Knowledge"
    ];

    const predefinedQuestions = [
        "What roadmap should I pick?",
        "What are the best jobs for me?",
        "Recommend me a project based on my expertise",
        "Recommend me a topic I can learn in an hour"
    ];

    const processMessage = async (text) => {
        setMessages(prev => [...prev, { text: text, sender: 'user' }]);
        setLoading(true);

        try {
            const response = await fetch("/api/ai/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: text })
            });

            const data = await response.json();

            if (data.reply) {
                setMessages(prev => [...prev, { text: data.reply, sender: 'ai' }]);
            } else {
                setMessages(prev => [...prev, { text: "Sorry, I couldn't understand that.", sender: 'ai' }]);
            }

        } catch (error) {
            console.error("AI Error:", error);
            setMessages(prev => [...prev, { text: "Error connecting to AI server.", sender: 'ai' }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        const text = inputText;
        setInputText('');
        await processMessage(text);
    };

    const getContainerClass = () => {
        if (mode === 'section') return 'ai-container-section';
        if (mode === 'card') return 'ai-container-card';
        if (mode === 'sidebar') return 'ai-container-sidebar';
        return 'ai-tutor-container';
    };

    const getWrapperClass = () => {
        if (mode === 'section') return 'ai-wrapper-section';
        if (mode === 'card') return 'ai-wrapper-card';
        if (mode === 'sidebar') return 'ai-wrapper-sidebar';
        return 'ai-tutor-page section-dark';
    };

    return (
        <div className={getWrapperClass()}>
            <div className={getContainerClass()}>

                <h1 className="ai-header-title">How can I help you?</h1>

                {messages.length === 0 ? (
                    <>
                        <div className="ai-chips-grid">
                            {suggestionChips.map((chip, index) => (
                                <button key={index} className="ai-chip" onClick={() => processMessage(chip)}>
                                    {chip}
                                </button>
                            ))}
                        </div>

                        <div className="ai-questions-list">
                            {predefinedQuestions.map((q, index) => (
                                <button key={index} className="ai-question-item" onClick={() => processMessage(q)}>
                                    {q}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="ai-chat-history">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`ai-message ${msg.sender}`}>
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                        ))}
                        {loading && <div className="ai-message ai">AI is thinking...</div>}
                    </div>
                )}

                <div className="ai-input-wrapper">
                    <form onSubmit={handleSend} className="ai-input-box">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button type="submit" className="ai-send-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AiTutor;
