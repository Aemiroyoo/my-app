import './../css/Home.css';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
// useScroll, useTransform, useSpring,
import { useRef, useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Enhanced animation variants
const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            when: "beforeChildren",
            staggerChildren: 0.15
        }
    }
};

const titleVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.8
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1
        }
    }
};

const subtitleVariants = {
    hidden: { 
        opacity: 0, 
        x: -30,
        filter: "blur(10px)"
    },
    visible: { 
        opacity: 1, 
        x: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.3
        }
    }
};

const descVariants = {
    hidden: { 
        opacity: 0, 
        y: 30,
        scale: 0.95
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.5
        }
    }
};

const buttonVariants = {
    hidden: { 
        opacity: 0, 
        y: 40,
        rotateX: -15
    },
    visible: { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.7
        }
    }
};

const buttonHover = {
    scale: 1.05,
    y: -5,
    rotateX: 5,
    boxShadow: "0 20px 40px rgba(96, 165, 250, 0.3)",
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
    }
};

const buttonTap = {
    scale: 0.98,
    y: -2,
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
    }
};

const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const statItemVariants = {
    hidden: { 
        opacity: 0, 
        y: 60,
        rotateY: -45,
        scale: 0.8
    },
    visible: { 
        opacity: 1, 
        y: 0,
        rotateY: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

const statHover = {
    y: -15,
    rotateY: 5,
    scale: 1.05,
    boxShadow: "0 25px 50px rgba(96, 165, 250, 0.2)",
    background: "rgba(255, 255, 255, 0.15)",
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
    }
};

// Tech stack animation variants
const techStackVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const iconVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.3, 
        rotate: -45, 
        y: 40,
        filter: "blur(5px)"
    },
    visible: { 
        opacity: 1, 
        scale: 1, 
        rotate: 0, 
        y: 0,
        filter: "blur(0px)",
        transition: { 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.1
        }
    }
};

const iconHover = {
    scale: 1.3,
    rotate: [0, -10, 10, 0],
    y: -10,
    color: "#3b82f6",
    filter: "drop-shadow(0 10px 30px rgba(59,130,246,0.4))",
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        rotate: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};

// Floating animation for background elements
const floatingVariants = {
    animate: {
        y: [-20, 20],
        rotate: [0, 5, 0, -5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
};

// Counter component with smooth animation
const AnimatedCounter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const timer = setInterval(() => {
                setCount(prev => {
                    if (prev >= end) {
                        clearInterval(timer);
                        return end;
                    }
                    return prev + 1;
                });
            }, (duration * 1000) / end);

            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}+</span>;
};

function Home() {
    const containerRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: containerRef,
    //     offset: ["start start", "end start"]
    // });

    // const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    // const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    // const ySpring = useSpring(y, springConfig);
    // const opacitySpring = useSpring(opacity, springConfig);
    // const scaleSpring = useSpring(scale, springConfig);

    return (
        <motion.div
            ref={containerRef}
            className="home-root"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0, scale: 0.95 }}
            // transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            // style={{
            //     y: ySpring,
            //     opacity: opacitySpring,
            //     scale: scaleSpring
            // }}
        >
            {/* Animated background elements */}
            <motion.div
                className="floating-bg-1"
                variants={floatingVariants}
                animate="animate"
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
            <motion.div
                className="floating-bg-2"
                variants={floatingVariants}
                animate="animate"
                style={{
                    position: 'absolute',
                    top: '60%',
                    right: '15%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0,
                    animationDelay: '3s'
                }}
            />

            <div className="home-hero">
                <motion.div
                    className="home-content"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="home-title" 
                        variants={titleVariants}
                        whileHover={{
                            scale: 1.02,
                            textShadow: "0 0 20px rgba(96,165,250,0.5)"
                        }}
                    >
                        Hi, I'm <span className="highlight">Sutiyo Yulianto</span>
                    </motion.h1>
                    
                    <motion.h2 
                        className="home-subtitle" 
                        variants={subtitleVariants}
                        whileHover={{
                            scale: 1.05,
                            color: "#60a5fa"
                        }}
                    >
                        Full Stack Developer
                    </motion.h2>
                    
                    <motion.p 
                        className="home-desc" 
                        variants={descVariants}
                        whileHover={{
                            scale: 1.02
                        }}
                    >
                        I craft responsive websites where technology meets creativity.
                        Specialized in building modern web applications with React and Node.js.
                    </motion.p>
                    
                    <motion.div
                        className="home-buttons"
                        variants={buttonVariants}
                    >
                        <motion.div
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                        >
                            <Link to="/kontak" className="home-link primary">
                                Hire Me
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                        >
                            <Link to="/tentang" className="home-link secondary">
                                My Work
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="home-stats"
                    variants={statsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div 
                        className="stat-item"
                        variants={statItemVariants}
                        whileHover={statHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.span 
                            className="stat-number"
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 200, 
                                damping: 15,
                                delay: 0.5 
                            }}
                        >
                            <AnimatedCounter end={3} />
                        </motion.span>
                        <span className="stat-label">Years Experience</span>
                    </motion.div>
                    
                    <motion.div 
                        className="stat-item"
                        variants={statItemVariants}
                        whileHover={statHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.span 
                            className="stat-number"
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 200, 
                                damping: 15,
                                delay: 0.7 
                            }}
                        >
                            <AnimatedCounter end={15} />
                        </motion.span>
                        <span className="stat-label">Projects Completed</span>
                    </motion.div>
                    
                    <motion.div 
                        className="stat-item"
                        variants={statItemVariants}
                        whileHover={statHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.span 
                            className="stat-number"
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 200, 
                                damping: 15,
                                delay: 0.9 
                            }}
                        >
                            <AnimatedCounter end={10} />
                        </motion.span>
                        <span className="stat-label">Happy Clients</span>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="tech-stack"
                    variants={techStackVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                    }}
                >
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Tech Stack
                    </motion.h3>
                    <div className="tech-icons">
                        {[
                            { icon: "fab fa-react", title: "React", color: "#61dafb" },
                            { icon: "fab fa-js", title: "JavaScript", color: "#f7df1e" },
                            { icon: "fab fa-node-js", title: "Node.js", color: "#68a063" },
                            { icon: "fab fa-php", title: "PHP", color: "#777bb4" },
                            { icon: "fab fa-html5", title: "HTML5", color: "#e34f26" },
                            { icon: "fab fa-css3-alt", title: "CSS3", color: "#1572b6" },
                            { icon: "fab fa-git-alt", title: "Git", color: "#f05032" }
                        ].map((item, idx) => (
                            <motion.i
                                key={item.title}
                                className={item.icon}
                                title={item.title}
                                variants={iconVariants}
                                whileHover={{
                                    ...iconHover,
                                    color: item.color
                                }}
                                whileTap={{ 
                                    scale: 0.9,
                                    rotate: 180,
                                    transition: { duration: 0.2 }
                                }}
                                style={{ 
                                    cursor: "pointer",
                                    originX: 0.5,
                                    originY: 0.5
                                }}
                                custom={idx}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Home;