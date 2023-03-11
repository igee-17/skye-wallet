import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

export const links = [
  { id: 1, text: "stats", path: "/", icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: "Make Transfer",
    path: "make-transfer",
    icon: <MdQueryStats />,
  },
  // { id: 3, text: "Send Money", path: "send-money", icon: <FaWpforms /> },
  { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
];
