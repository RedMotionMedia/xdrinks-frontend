import {AnimatePresence, motion} from "framer-motion";
import Page from "./components/page";


export default function Home() {


  return (
      <AnimatePresence exitBeforeEnter>
          <motion.div
              initial="initialState"
              animate="animateState"
              transition={{
                  duration: 0.75,
                  delay:2,
              }}
              variants={{
                  initialState: {
                      opacity: 1,
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  },
                  animateState: {
                      opacity: 1,
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                  }
              }}
              className="absolute flex flex-auto w-full h-full justify-center items-center bg-black z-20">
              <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-1/6 md:w-1/12 stroke-[#00FF00FF] bg-black"
              >
                  <motion.path
                      d="m 21.384 7.128 L 42.768 49.896 L 21.384 92.664 L 42.768 92.664 L 57.024 64.152 L 71.28 92.664 L 92.664 92.664 L 71.28 49.896 L 92.664 7.128 L 71.28 7.128 L 57.024 35.64 L 42.768 7.128 L 21.384 7.128"
                      initial="initial"
                      animate="animate"
                      transition={{
                          default: { duration: 1, ease: "easeInOut" },
                          fill: { duration: 1, ease: [1, 0, 0.8, 1] }
                      }}
                      variants={{
                          initial: {
                              opacity: 0,
                              pathLength: 0,
                              fill: "rgba(0, 255, 0, 0)"
                          },
                          animate: {
                              opacity: 1,
                              pathLength: 1,
                              fill: "rgba(0, 255, 0, 1)",
                          }
                      }}
                  />
              </motion.svg>
              <motion.div
                  initial="initialState"
                  animate="animateState"
                  transition={{
                      duration: 1.5, ease: [1, 0, 0.8, 1]
                  }}
                  variants={{
                      initialState: {
                          opacity: 0,
                      },
                      animateState: {
                          opacity: 1,
                      }
                  }}
                  className="text-3xl mb-1 md:text-6xl md:mb-2 3xl:text-9xl 3xl:mb-3 md text-white font-sans font-bold">
                  <p>Drinks</p>
              </motion.div>
          </motion.div>
          <Page>
              <div className="h-screen flex items-center justify-center pb-10">
                  <h1 className="lg:text-8xl text-4xl">Home Page</h1>
              </div>
          </Page>
      </AnimatePresence>
  );
}
