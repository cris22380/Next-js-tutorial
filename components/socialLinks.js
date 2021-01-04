import styles from './styles.module.css'
import React, { useState } from 'react';


const Card = ({href, title, id}) => {
  return (
    <div className={styles.social}>
      <a className={styles.socialText} href={href}  >
        <div className={styles.socialButton}  id={id}>
        {title}
        </div>
      </a> 
    </div>
  )
}

export default function SocialLinks({ socialLinkslist }) {
  
  return (
    <div className={styles.socialContainer}>
      {socialLinkslist && socialLinkslist.map((link, ind) =>
        <Card href={link.href} title={link.title} id={ind}/>
      )}
    </div>

  )
}