const config = {
  baseURL: process.env.REACT_APP_API_URL,
  apiEndPoint: {
    user: {
      verifyEmail: "/verifyEmail",
    },
  },
};

export default config;
