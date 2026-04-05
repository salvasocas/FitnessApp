export default {
  routes: [
    {
      method: "POST",
      path: "/image-analyse",
      handler: "image-analysis.analyse",
      config: { auth: false },
    },
  ],
};
