import Link from 'next/link'
import styles from './styles.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Image({ image, text, title, type, galery }) {
  return (
    <div>
      {image && text && title && type && (
          <Link href={`/galery/galery_${type}`}>
        <div>
          <div className={styles.imageTextContainer}>
            <div className={utilStyles.headingMd}>{title}</div>
            <div className={styles.imageText}>{text}</div>
          </div>
          <div className={styles.images}>
            <img src={image} alt='foto'></img>
          </div>
        </div>
          </Link>
      )}
      {image && galery && (
        <div>
          <div className={styles.imagesGalery}>
            <img src={image} alt='foto'></img>
          </div>
        </div>
      )}

    </div>

  )
}