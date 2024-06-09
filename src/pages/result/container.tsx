import React, { useState, useEffect } from "react";
import { Component } from "./component";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export const Container: React.FC = () => {
  const [generatedMessage, setGeneratedMessage] = useState<string>("");
  const [searchParams] = useSearchParams();
  useEffect(() => {
    (async () => {
      const platform = searchParams.get("platform");
      const toneOfVoice = searchParams.get("tone");
      const postStyle = searchParams.get("style");
      const message = searchParams.get("message");

      const postMessage = `Generate a ${platform} post with a ${toneOfVoice} tone in a ${postStyle} style with the following message: "${message}". これを日本語でのみ返してください`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      };
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: postMessage }],
          temperature: 0.7,
        },
        { headers: headers },
      );
      setGeneratedMessage(response.data.choices[0].message.content);
    })();
  }, []);

  return <Component generatedMessage={generatedMessage} />;
};