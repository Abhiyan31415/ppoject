import React, { useEffect, useState } from "react";

const TypingLoop: React.FC = () => {
  const messages = [
    "Welcome!",
    "Enjoy your stay!",
    "Let's get started!",
    "Have fun exploring!"
  ];

  const [text, setText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const speed = isDeleting ? 80 : 150;

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];

    const handleTyping = () => {
      const updatedText = isDeleting
        ? currentMessage.substring(0, text.length - 1)
        : currentMessage.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentMessage) {
        setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length); // loop through messages
        setLoop(loop + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loop, currentMessageIndex, messages]);

  return (
    <div className="text-2xl font-semibold font-mono text-white">
      {text}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypingLoop;
