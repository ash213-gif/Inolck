import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Trophy, Users, BookOpen, Star } from "lucide-react"; // Lucide icons

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1500);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <div className=" lg:flex  lg:flex-row  md:flex-col flex-col  items-center p-4 gap-4">

      <div className="text-center  ">
        <h2 className="text-xl font-bold mb-1">Numbers That Define Our Legacy</h2>
        <p className="mb-2">Join the CLAT coaching institute trusted by thousands of aspirants.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Schedule Now</button>
      </div>

      <ul style={container}>
        {order.map(({ id, icon: Icon, title, subtitle }) => (
          <motion.li
            key={id}
            layout
            transition={spring}
            style={item}
            className="bg-white shadow-lg rounded-xl flex flex-col items-center justify-center p-4 text-center"
          >
            <Icon size={36} className="text-blue-600 mb-2" />
            <h3 className="font-semibold">{title}</h3>
            <p className="text-lg font-bold text-gray-700">{subtitle}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

// Data
const initialOrder = [
  {
    id: "air1",
    icon: Trophy,
    title: "AIR-1 Achieved",
    subtitle: "5X +",
  },
  {
    id: "students",
    icon: Users,
    title: "Students Mentored",
    subtitle: "150K +",
  },
  {
    id: "nlu",
    icon: BookOpen,
    title: "Total NLU Selections",
    subtitle: "10,000 +",
  },
  {
    id: "lastYear",
    icon: Star,
    title: "Selections Last Year",
    subtitle: "1310 +",
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};

const container = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",

  flexWrap: "wrap",
  gap: 20,
  justifyContent: "center",
  alignItems: "center",
};

const item = {
  width: "100%", // Make items responsive
  maxWidth: 250, // Set a max width for items
  height: 160,
  flex: "1 1 200px", // Allow items to grow and shrink
};
