// import React from "react";
// import Comments from "./Comments";
// import Price from "./Price";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// const Base_url = "http://localhost:5000";

// const ProductSection = () => {
//   const { id } = useParams();
//   const [dummyTailors, setDummyTailors] = useState([]);
//     const [rating, setRating] = useState(0);
//   const [formData, setFormData] = useState({
//     topic: "",
//     rating: 0,
//     message: "",
//   });
//   const { topic, rating, message } = formData;
//   const handleRatingChange = (value) => {
//     setFormData({ ...formData, rating: value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace 'your_post_endpoint' with the actual endpoint to which you want to send the data
//       const response = await fetch("your_post_endpoint", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log(data);
//       // Do something with the response data if needed
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   // Use a more appropriate variable name (dummyTailors instead of dummyTailors1)
//   const fetchTailor = async () => {
//     try {
//       const response = await fetch(`${Base_url}/tailors/${id}`);
//       const data = await response.json(); // Corrected variable name to 'data'
//       setDummyTailors(data); // Use 'data' instead of 'dummyTailors1'
//     } catch (error) {
//       console.error("Error fetching blog:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTailor(); // Fetch data when the component mounts
//   }, []);

//   const handleRatingChange1 = (value) => {
//     setRating(value);
//   };

//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <Price dummyTailors={dummyTailors} />

//       <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//         <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//           <iframe
//             className="absolute inset-0"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.37272993523!2d72.90710667357106!3d19.135155050116044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b807e5f3ef61%3A0x937e3ffa2e86855b!2sHostel%205%2C%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1690100383970!5m2!1sen!2sin"
//             width="100%" // Corrected width value to use 100% of parent container width
//             height="100%"
//             style={{ border: 0 }} // Use an object for the style attribute
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//           <div className="bg-blue-100 relative flex flex-wrap py-6 rounded shadow-md">
//             <div className="lg:w-1/2 px-6">
//               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                 ADDRESS
//               </h2>
//               <p className="mt-1">{dummyTailors.address}</p>
//             </div>
//             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                 EMAIL
//               </h2>
//               <a className="text-indigo-500 leading-relaxed">
//                 {dummyTailors.email}
//               </a>
//               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
//                 PHONE
//               </h2>
//               <p className="leading-relaxed">{dummyTailors.phoneNumber}</p>
//             </div>
//           </div>
//         </div>
//         <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//           <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//             Feedback
//           </h2>
//           <p className="leading-relaxed mb-5 text-gray-600">Rate Your Tailor</p>
//           <form onSubmit={handleSubmit}>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="topic"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Topic
//               </label>
//               <input
//                 type="text"
//                 id="topic"
//                 name="topic"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="rating"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Rating
//               </label>
//               <div className="flex items-center">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <svg
//                     key={star}
//                     fill={star <= rating ? "orange" : "gray"}
//                     onClick={() => handleRatingChange1(star)}
//                     className="w-6 h-6 cursor-pointer"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//                     ></path>
//                   </svg>
//                 ))}
//               </div>
//             </div>
//             <div className="relative mb-4">
//               <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-600"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 //   value={message}
//                 //   onChange={(e) => setMessage(e.target.value)}
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               ></textarea>
//             </div>
//             <button
//               // onClick={handleSubmit}
//               className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//       <Comments />
//     </section>
//   );
// };

// export default ProductSection;
import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import Price from "./Price";
import { useParams } from "react-router-dom";

const Base_url = "https://tailorapp.azurewebsites.net";

const ProductSection = ({ username }) => {
  const [rating, setRating] = useState(0);

  const { id } = useParams();
  const [dummyTailors, setDummyTailors] = useState([]);
  const [formData, setFormData] = useState({
    topic: "",
    rating: 0,
    message: "",
  });
  const { topic, message } = formData;

  const handleRatingChange1 = (value) => {
    setRating(value);
    setFormData({ ...formData, rating: value });
  };
  useEffect(() => {
    setFormData({ ...formData, name: username });
  }, [username]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'your_post_endpoint' with the actual endpoint to which you want to send the data
      const response = await fetch(`${Base_url}/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setFormData({
        topic: "",
        rating: 0,
        message: "",
      });
      setRating(0);

      // Do something with the response data if needed
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const fetchTailor = async () => {
    try {
      const response = await fetch(`${Base_url}/tailors/${id}`);
      const data = await response.json(); // Corrected variable name to 'data'
      setDummyTailors(data); // Use 'data' instead of 'dummyTailors1'
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    fetchTailor(); // Fetch data when the component mounts
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Price dummyTailors={dummyTailors} />

      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.37272993523!2d72.90710667357106!3d19.135155050116044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b807e5f3ef61%3A0x937e3ffa2e86855b!2sHostel%205%2C%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1690100383970!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="bg-blue-100 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">{dummyTailors.address}</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href={`mailto:${dummyTailors.email}`}
                className="text-indigo-500 leading-relaxed"
              >
                {dummyTailors.email}
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">{dummyTailors.phoneNumber}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">Rate Your Tailor</p>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="name" value={username} />
            <div className="relative mb-4">
              <label
                htmlFor="topic"
                className="leading-7 text-sm text-gray-600"
              >
                Topic
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={topic}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) =>
                  setFormData({ ...formData, topic: e.target.value })
                }
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="rating"
                className="leading-7 text-sm text-gray-600"
              >
                Rating
              </label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    fill={star <= rating ? "orange" : "gray"}
                    onClick={() => handleRatingChange1(star)}
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
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Comments id={id} />
    </section>
  );
};

export default ProductSection;
