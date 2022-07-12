const config = {
  baseURL: process.env.REACT_APP_QUANTUM_API_URL,
  apiEndPoint: {
    user: {
      verifyEmail: "/users/send-verification-email",
    },
  },
};

export default config;
