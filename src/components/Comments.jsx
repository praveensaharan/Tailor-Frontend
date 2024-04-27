import React, { useState, useEffect } from "react";

const Base_url = "https://tailorapp.azurewebsites.net";

const Comments = ({ id }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTailor = async () => {
    try {
      const response = await fetch(`${Base_url}/commentsget/${id}`);
      const data = await response.json();
      setCommentsData(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching comments.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTailor();
  }, [id]); // Include 'id' in the dependency array to re-fetch comments when the 'id' changes.

  const handleRatingChange = (value) => {
    setRating(value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="m-10">
      <h2 className="text-lg font-medium mb-4">Feedback Comments</h2>
      {commentsData.map((comment, index) => (
        <div key={index} className="mb-4 bg-gray-100 rounded-lg p-4 shadow-md">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 italic text-xs">
              Feedback by: {comment.name}
            </p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  fill={star <= comment.rating ? "orange" : "gray"}
                  onClick={() => handleRatingChange(star)}
                  className="w-6 h-6 cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  ></path>
                </svg>
              ))}
            </div>
          </div>
          <h3 className="text-lg font-medium mb-2">{comment.topic}</h3>
          <p className="text-gray-600 pb-4 text-sm">{comment.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
