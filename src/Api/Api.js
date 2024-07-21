import axios from "axios";

// export const fetchImage = async (query, page = 1, perPage = 15) => {
//   const response = await axios.get(`https://api.unsplash.com/photos/`, {
//     params: {
//       query,
//       per_page: perPage,
//       page,
//       client_id: "mbIVzLXnl4VjQw86pjNSnYZbw9T2zvmMiYLociwwN-g",
//     },
//   });

//   return response.data;
// };

export const fetchImage = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: "mbIVzLXnl4VjQw86pjNSnYZbw9T2zvmMiYLociwwN-g",
    },
  });

  return response.data;
};
