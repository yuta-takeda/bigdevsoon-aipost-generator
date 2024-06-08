import React, { useState } from "react";

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
];

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

const App: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedToneOfVoice, setSelectedToneOfVoice] = useState<string>("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 w-full max-w-screen-md bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">
          Generate your post
        </h1>
        <div className="mb-4">
          <div className="mb-2 font-bold text-gray-700">Social platform</div>
          <div className="flex space-x-3">
            {socialPlatforms.map((platform) => {
              return (
                <button
                  className="flex items-center p-1 w-8 h-8 rounded-md border-2 border-solid justify-content hover:saturate-[7085%] hover:filter hover:brightness-[100%] hover:contrast-[106%]"
                  onClick={() => setSelectedPlatform(platform.name)}
                >
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    height={32}
                    width={32}
                    style={{
                      filter:
                        selectedPlatform === platform.name
                          ? "invert(17%) sepia(91%) saturate(7085%) hue-rotate(128deg) brightness(100%) contrast(106%)"
                          : "",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-row justify-between">
            <label className="mb-2 font-bold text-gray-700" htmlFor="message">
              Your message
            </label>
            <div>
              {message.length} / {maxMessageLength}
            </div>
          </div>
          <textarea
            id="message"
            name="message"
            className="py-2 px-4 w-full rounded-md border focus:ring-2 focus:ring-blue-200 focus:outline-none"
            rows={5}
            maxLength={maxMessageLength}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <div className="mb-2 font-bold text-gray-700">Tone of Voice</div>
          <div className="flex flex-wrap gap-2">
            {toneOfVoices.map((tone) => {
              return (
                <button
                  className={`py-2 px-4 text-sm bg-white rounded-full border ${selectedToneOfVoice === tone ? "bg-blue-200" : "hover:bg-gray-200"}`}
                  key={tone}
                  onClick={() => setSelectedToneOfVoice(tone)}
                >
                  {tone}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
