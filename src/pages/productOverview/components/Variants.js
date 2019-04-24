import React from 'react'
import styles from '../stylesheets/variants.module.sass'
import Sizes from '../components/Sizes'


export default function Variants({color,size,variants,selectedSize,handleClick,clickSize}) {
  return (
    <div>
    <div className={styles.color_title}>
      COLOUR:
    </div>
    <div className={styles.color_name}>
      {color}
    </div>
    <div className={styles.color_pic}>
      {variants && variants.map(v =>
        <img onClick={()=>handleClick(v)} key={v.color} src={v.imagePath} alt="" />
      )}
    </div>
    <div className={styles.sizes}>
      SIZES:
            <Sizes 
            sizes={size.split(",")} 
            selectedSize={selectedSize}
            clickSize={clickSize}
            />
    </div>
  </div>
  )
}



