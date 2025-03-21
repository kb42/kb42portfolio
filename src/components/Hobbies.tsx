import { motion } from 'framer-motion';
import { FiActivity, FiMap, FiGlobe, FiAward, FiTarget } from 'react-icons/fi';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <FiActivity className="w-8 h-8" />,
      title: "Chess",
      description: "Strategic thinking and competitive play in chess tournaments"
    },
    {
      icon: <FiMap className="w-8 h-8" />,
      title: "Biking",
      description: "Exploring scenic trails and maintaining an active lifestyle"
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "GeoGuessr",
      description: "Testing geography knowledge and exploring the world virtually"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Cricket",
      description: "Playing competitive cricket in local leagues"
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Soccer",
      description: "Regular matches and following professional leagues"
    }
  ];

  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Hobbies</h2>
          <p className="section-subtitle">Beyond the Code</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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