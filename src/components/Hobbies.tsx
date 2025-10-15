import { motion } from 'framer-motion';
import { GiChessKnight, GiCricketBat } from 'react-icons/gi';
import { MdTravelExplore } from 'react-icons/md';
import { FaFutbol, FaBicycle } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hobbies = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

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
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} text-center mb-16`}>
          <h2 className="section-title">Hobbies</h2>
          <p className="section-subtitle">Beyond the Code</p>
        </div>

        <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
          {/* First row - 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-3xl mx-auto">
            {hobbies.slice(0, 2).map((hobby) => (
              <motion.div
                key={hobby.title}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card group hover:bg-secondary/5 transition-colors duration-200"
              >
                <div className="flex flex-col items-center text-center p-6">
                  <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-200">
                    {hobby.icon}
                  </div>
                  <h3 className="text-text-light font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-text">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 max-w-3xl mx-auto">
            {hobbies.slice(2, 4).map((hobby) => (
              <motion.div
                key={hobby.title}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card group hover:bg-secondary/5 transition-colors duration-200"
              >
                <div className="flex flex-col items-center text-center p-6">
                  <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-200">
                    {hobby.icon}
                  </div>
                  <h3 className="text-text-light font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-text">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third row - 1 centered card */}
          <div className="flex justify-center">
            <motion.div
              key={hobbies[4].title}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card group hover:bg-secondary/5 transition-colors duration-200 w-full sm:w-1/2 max-w-md"
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-200">
                  {hobbies[4].icon}
                </div>
                <h3 className="text-text-light font-semibold mb-2">{hobbies[4].title}</h3>
                <p className="text-text">{hobbies[4].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
