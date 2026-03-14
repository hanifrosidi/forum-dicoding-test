export function loadingReducer(isPreload = false, action = {}) {
  switch (action.type) {
  case "SET_LOADING":
    return action.payload.loading;
  default:
    return isPreload;
  }
}
