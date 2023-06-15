import React, { useState } from "react";

const stripHtmlTags = (htmlString) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  return tempElement.textContent || tempElement.innerText || "";
};

const Summary = ({ summary }) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const summaryText = stripHtmlTags(summary);

  return (
    <div>
      {showFullText ? (
        <div>
          <p dangerouslySetInnerHTML={{ __html: summary }}></p>
          {summary.length > 200 && (
            <button className="text-yellow-500" onClick={handleToggleText}>
              See Less
            </button>
          )}
        </div>
      ) : (
        <div>
          <p>
            {summaryText.length > 200
              ? `${summaryText.slice(0, 200)}...`
              : summaryText}{" "}
            {summaryText.length > 200 && (
              <button className="text-yellow-500" onClick={handleToggleText}>
                See More
              </button>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Summary;