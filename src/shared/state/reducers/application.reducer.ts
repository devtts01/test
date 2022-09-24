import dialogReducer from "./dialog.reducer";
import loadingReducer from "./loading.reducer";
import userReducer from "./user.reducer";

export const rootReducer = {
  reducer: {
    dialog: dialogReducer,
    userData: userReducer,
    loading: loadingReducer,
  },
};
