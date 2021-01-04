import Link from 'next/link';
import styles from './styles.module.css'

export default function Footer({reference, home, hrefBtn1, hrefBtn2, titleBtn1, titleBtn2}){
  return (
    <div className={styles.footer}>
       {reference && (
          <div className={styles.footerButton}>
          <Link href={hrefBtn1}>
            <a className={styles.a}>{titleBtn1}</a>
          </Link>
        </div>
        )}
        {!home && (
          <div>
          <div className={styles.footerButton}>
            <Link href={hrefBtn2}>
              <a className={styles.a}>{titleBtn2}</a>
            </Link>
          </div>
        </div>
        )}

    </div>
  )
}
