import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Explore from "./Explore";
import Listing from "./Listing";
import { createStackNavigator } from "react-navigation-stack";

export const assets = [
  require("./assets/tiny-home.jpg"),
  require("./assets/cook-house.jpg"),
  require("./assets/host.jpg")
];

// export const fonts = {
//   CerealBook: require("./assets/fonts/AirbnbCerealBook.ttf"),
//   CerealMedium: require("./assets/fonts/AirbnbCerealMedium.ttf"),
//   CerealLight: require("./assets/fonts/AirbnbCerealLight.ttf")
// };


export default createStackNavigator(
    {
        Explore,
        Listing
    },
    {
        headerMode: "none",
        defaultNavigationOptions: {
            cardStyle: {
                backgroundColor: 'transparent'
            }
        }
    }
)

