export const asynHandler = (fn) => {
  return async (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
};
