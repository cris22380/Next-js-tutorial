import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Images({ image, text, title, type, galery }) {
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
            <Image src={image} alt='foto' width={450} height={450}/>
          </div>
        </div>
          </Link>
      )}
      {image && galery && (
        <div>
          <div className={styles.imagesGalery}>
            <Image src={image} alt='foto' width={450} height={450}/>
          </div>
        </div>
      )}

    </div>

  )
}