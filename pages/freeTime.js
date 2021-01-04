import Link from 'next/link'
import Image from '../components/image'
import utilStyles from '../styles/utils.module.css'
import imagesList from '../pages/api/utils/auxiliar'
import Footer from '../components/footer'
export default function FreeTime() {
  return (
    <div className={utilStyles.divContainer}>
      <div className={utilStyles.heading3Xl}>My free time</div>
      <div className={utilStyles.galeryFreeTime}>
        {imagesList && (
          imagesList.map(img =>  (
            img.image && img.title && img.text &&
          <Image image={img.image} title={img.title} text={img.text} type={img.type}></Image>))
        )}
      </div>
      <Footer 
        hrefBtn1="/posts/about-me" 
        titleBtn1='Back to my history' 
        hrefBtn2="/" 
        titleBtn2='Back to home'
        reference
        />
    </div>
  )
}