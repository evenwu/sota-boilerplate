import * as React from 'react'
import {motion} from 'framer-motion'
import {MenuItem} from './MenuItem'

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  },
}

export const Navigation = () => (
  <motion.ul className=" absolute top-24 right-0 w-[230px] p-[25px]" variants={variants}>
    <MenuItem />
  </motion.ul>
)
