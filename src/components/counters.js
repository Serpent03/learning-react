import { Icon } from "leaflet";

const counters = {
  blufor_inf_bat: new Icon({
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Infantry_%28NATO_APP-6%29.svg/1280px-Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Infantry_%28NATO_APP-6%29.svg.png",
    iconSize: [48, 32],
  }),
  blufor_mech_bat: new Icon({
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Armour_%28NATO_APP-6%29.svg/1280px-Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Armour_%28NATO_APP-6%29.svg.png",
    iconSize: [48, 32],
  })
}

export { counters };
