import * as React from 'react'
import {useRef} from 'react'
import {motion, sync, useCycle} from 'framer-motion'
import {useDimensions} from './use-dimensions'
import {MenuToggle} from './MenuToggle.js'
import {Navigation} from './Navigation'

// 定義選單開關色塊大小，座標 例如：circle(圓形半徑 at left座標 top座標)
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 260px 37px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(23px at 260px 37px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const {height} = useDimensions(containerRef)

  return (
    <motion.nav
      className=" absolute top-0 right-0 bottom-0 h-full"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}>
      <motion.div
        className=" absolute top-0 right-0 bottom-0 w-[300px] bg-black"
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
