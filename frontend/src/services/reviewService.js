const reviews = [
  {
    id: 1,
    userName: "Jorque Watson",
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    reviewDate: "01-01-2022, 14:33",
    reviewText:
      "Graffersid one of the best company for app development services.",
    rating: 4,
  },
  {
    id: 2,
    userName: "Jenny Kole",
    userImage: "https://randomuser.me/api/portraits/women/2.jpg",
    reviewDate: "12-01-2022, 15:00",
    reviewText: "Very professional team and amazing experience.",
    rating: 4,
  },
  {
    id: 3,
    userName: "Ayush Patel",
    userImage: "https://randomuser.me/api/portraits/men/3.jpg",
    reviewDate: "12-01-2022, 15:00",
    reviewText: "Graffersid one of the best company in App Development.",
    rating: 4,
  },
];

export const getReviews = async (companyId) => {
  try {
    const response = await axiosClient.get(`/reviews/${companyId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export const createReview = async (companyId, data) => {
  try {
    const response = await axiosClient.post(`/reviews/${companyId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};
