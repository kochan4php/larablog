const createRoute = (path = "/", method = "get", name = "") => ({
  path,
  method,
  name,
});

export default createRoute;
