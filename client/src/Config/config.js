const config = {
  baseURL: process.env.REACT_APP_QUANTUM_API_URL,
  apiEndPoint: {
    user: {
      verifyEmail: "/users/send-verification-email",
      login: "/users/login",
      googleAuthenticate: "/users/google-authenticate",
      register: "/users/register",
    },
    post: {
      uploadImage: `/posts/uploadImage`,
      removeImage: `/posts/removeImage`,
      postApi: "/posts/",
    },
  },
};

export default config;
