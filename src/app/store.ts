import { configureStore } from "@reduxjs/toolkit";
import campaignsSlice from "../slices/campaignsSlice";
import bannersSlice from "../slices/bannersSlice";
import offersSlice from "../slices/offersSlice";
import categoriesHomeSlice from "../slices/categoryHomeSlice";
import categoriesBrandSlice from "../slices/categoryBrandSlice";
import myPaginatedCarouselsSlice from "../slices/myPaginatedCarouselSlice";
import iconUrlsSlice from "../slices/yarnLogoSlice";
import myShoppingCarouselSlice from "../slices/myShoppingCarouselSlice";
import phonesSlice from "../slices/phonesSlice";
import androidPhonesSlice from "../slices/androidPhones";
import appleIosPhonesSlice from "../slices/appleIosPhones";
import myCardsSlice from "../slices/myCards";
import myCardsBottomSlice from "../slices/myCardsBottom";
import myOtherCardsSlice from "../slices/myOtherCards";
import yarnOffersSlice from "../slices/yarnOffersSlice";
import payCardImageSlice from "../slices/payCardSlice";

const store = configureStore({
  reducer: {
    campaign: campaignsSlice.reducer,
    banner: bannersSlice.reducer,
    offer: offersSlice.reducer,
    yarnOffer: yarnOffersSlice.reducer,
    category: categoriesHomeSlice.reducer,
    categoryBrand: categoriesBrandSlice.reducer,
    mypaginatedcarousel: myPaginatedCarouselsSlice.reducer,
    iconurl: iconUrlsSlice.reducer,
    myshoppingcarousel: myShoppingCarouselSlice.reducer,
    phone: phonesSlice.reducer,
    androidPhone: androidPhonesSlice.reducer,
    appleIosPhone: appleIosPhonesSlice.reducer,
    paycardimage: payCardImageSlice.reducer,
    mycard: myCardsSlice.reducer,
    mycardbottom: myCardsBottomSlice.reducer,
    myothercard: myOtherCardsSlice.reducer
  }
});

export default store;
