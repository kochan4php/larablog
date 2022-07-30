const createRoute = (path = "/", method = "get", name = "", icon = "") => ({
  path,
  method,
  name,
  icon,
});

export default createRoute;
