const config = {
  baseURL: process.env.REACT_APP_QUANTUM_API_URL,
  cloudinaryURL: process.env.REACT_APP_CLOUDINARY_URL,
  apiEndPoint: {
    user: {
      verifyEmail: "/users/send-verification-email",
      login: "/users/login",
      googleAuthenticate: "/users/google-authenticate",
      register: "/users/register",
    },
    post: {
      uploadImage: `/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
    },
  },
};

export default config;
