import { english } from "./english";
import { russian } from "./russian";
import { ukrainian } from "./ukrainian";

const list = [
  { name: "english", nativeName: "english" },
  { name: "russian", nativeName: "русский" },
  { name: "ukrainian", nativeName: "українська" },
];

const languagesSet = { english, russian, ukrainian, list };
export default languagesSet;
