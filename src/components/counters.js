import { Icon } from "leaflet";

const counters = {
  blufor_inf_bat: {
    icon: new Icon({
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/Military_Symbol_-_Friendly_Battalion_or_Squadron_%28Solid_Light_1.5x1_Frame%29-_Infantry_%28NATO_APP-6%29.svg",
      iconSize: [48, 32]
    }),
    desc: "Regular Infantry Battalion"
  },
  blufor_mech_bat: {
    icon: new Icon({
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Military_Symbol_-_Friendly_Unit_%28Solid_Light_1.6x1_Frame%29-_Infantry_-_Mechanized_%28NATO_APP-6%29.svg/600px-Military_Symbol_-_Friendly_Unit_%28Solid_Light_1.6x1_Frame%29-_Infantry_-_Mechanized_%28NATO_APP-6%29.svg.png",
      iconSize: [40, 26]
    }),
    desc: "Mechanized Armor Battalion",
  },
}

export { counters };
