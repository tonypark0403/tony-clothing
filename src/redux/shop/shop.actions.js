import ActionTypes from "../action-types";

export const updateCollections = collectionsMap => ({
  type: ActionTypes.shop.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
