import { motion } from 'framer-motion';
import { GiChessKnight, GiCricketBat } from 'react-icons/gi';
import { MdTravelExplore } from 'react-icons/md';
import { FaFutbol, FaBicycle } from 'react-icons/fa';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <GiChessKnight className="w-8 h-8" />,
      title: "Chess",
      description: "Played since 5 years old, played at the state level in school"
    },
    {
      icon: <FaBicycle className="w-8 h-8" />,
      title: "Biking",
      description: "Exploring any scenic trails I can find near me!"
    },
    {
      icon: <MdTravelExplore className="w-8 h-8" />,
      title: "GeoGuessr",
      description: "Drop me anywhere and I can tell you where it is! (Gold Division)"
    },
    {
      icon: <GiCricketBat className="w-8 h-8" />,
      title: "Cricket",
      description: "Always have a bat and ball on deck to play. Fan of CSK"
    },
    {
      icon: <FaFutbol className="w-8 h-8" />,
      title: "Soccer",
      description: "Recreational player and fan of Mancherster City"
    }
  ];

  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Hobbies</h2>
          <p className="section-subtitle">Beyond the Code</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
              className="card group hover:bg-secondary/5 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {hobby.icon}
                </div>
                <h3 className="text-text-light font-semibold mb-2">{hobby.title}</h3>
                <p className="text-text">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
