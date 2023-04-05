import * as React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import NavLink from './navlink.json'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
}

export const MenuItem = () => {
  return (
    <>
      {NavLink.map((item) => (
        <motion.li
          key={item.name}
          variants={variants}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.95}}>
          <Link href={item.href} className="block py-4 text-white">
            {item.name}
          </Link>
        </motion.li>
      ))}
    </>
  )
}
