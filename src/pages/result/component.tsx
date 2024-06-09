import React from "react";

interface Props {
  generatedMessage: string;
}

export const Component: React.FC<Props> = (props) => {
  const { generatedMessage } = props;

  return (
    <div className="p-8 w-full max-w-screen-md bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-center">
        Your generated post
      </h1>
      <div className="p-4 rounded-md border-2 border-solid">
        {generatedMessage}
      </div>
      <div className="flex flex-row gap-4 mt-8">
        <button
          className={`py-2 w-full bg-white border-solid border-2 rounded-md`}
        >
          ← Back to Generator
        </button>
        <button
          className={`py-2 w-full text-white bg-gray-500 rounded-md flex flex-row items-center justify-center gap-2`}
        >
          <img
            src={
              "https://img.icons8.com/ios-filled/50/000000/available-updates.png"
            }
            alt="regenerate"
            width={16}
            height={16}
          />
          Regenerate
        </button>
      </div>
    </div>
  );
};
