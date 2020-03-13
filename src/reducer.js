import {extend} from './utils/extend.js';

const initialState = {
  city: `cityId`,
  offers: `offerList`,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
};


const ActionCreator = {
  changeCity: () => ({
    type: ActionType.CHANGE_CITY,
    payload: `city`,
  }),

  getOffersList: () => ({
    type: ActionType.GET_OFFERS_LIST,
    payload: `offers list`,
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: action.payload,
      });
  }
};

export {reducer, ActionCreator};
