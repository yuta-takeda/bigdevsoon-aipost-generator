import React, { useState } from "react";
import axios from "axios";
import { Component } from "./component";

export interface SocialPlatform {
  name: string;
  icon: string;
}

const socialPlatforms = [
  {
    name: "Facebook",
    icon: "https://img.icons8.com/ios-filled/50/000000/facebook-new.png",
  },
  {
    name: "Twitter",
    icon: "https://img.icons8.com/ios-filled/50/000000/twitter.png",
  },
  {
    name: "Reddit",
    icon: "https://img.icons8.com/ios-filled/50/000000/reddit.png",
  },
  {
    name: "LinkedIn",
    icon: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
  },
] as SocialPlatform[];

const maxMessageLength = 200;
const toneOfVoices = [
  "Polite",
  "Funny",
  "Friendly",
  "Informal",
  "Serious",
  "Optimistic",
  "Motivational",
];
const postStyles = ["Work", "Opinion", "Case study", "Story", "Tutorial"];

export const Container: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedToneOfVoice, setSelectedToneOfVoice] = useState<string>("");
  const [selectedPostStyle, setSelectedPostStyle] = useState<string>("");
  // const [generatedPost, setGeneratedPost] = useState<string>("");

  const isPostable = (): boolean => {
    return !!(
      selectedPlatform &&
      message &&
      selectedToneOfVoice &&
      selectedPostStyle
    );
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const postMessage = `Generate a ${selectedPlatform} post with a ${selectedToneOfVoice} tone in a ${selectedPostStyle} style with the following message: "${message}". これを日本語でのみ返してください`;
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

    console.log(response.data);
    console.log(response.data.choices[0].message.content);
  };

  return (
    <Component
      socialPlatforms={socialPlatforms}
      maxMessageLength={maxMessageLength}
      toneOfVoices={toneOfVoices}
      postStyles={postStyles}
      handleSubmit={handleSubmit}
      setSelectedPlatform={setSelectedPlatform}
      selectedPlatform={selectedPlatform}
      setMessage={setMessage}
      message={message}
      setSelectedToneOfVoice={setSelectedToneOfVoice}
      selectedToneOfVoice={selectedToneOfVoice}
      setSelectedPostStyle={setSelectedPostStyle}
      selectedPostStyle={selectedPostStyle}
      isPostable={isPostable}
    />
  );
};
