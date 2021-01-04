import Link from 'next/link'
import Image from '../../components/image'
import utilStyles from '../../styles/utils.module.css'
import imagesList from '../../pages/api/utils/auxiliar'
import Footer from '../../components/footer'
export default function FreeTime() {
  return (
    <div className={utilStyles.divContainer}>
      <div style={{marginLeft: '1rem'}}>
        <div className={utilStyles.headingXl}>Flying like a Condor</div>
      </div>
      <div className={utilStyles.galery}>
        {imagesList && (
          imagesList.map(img =>  (
            img.image && !img.title && !img.text && img.type === 'flying' &&
          <Image image={img.image} galery></Image>))
        )}
      </div>
      <div className={utilStyles.footerGalery}>
        <Footer 
          hrefBtn1="/freeTime"
          titleBtn1='Back to my free time hobbies' 
          hrefBtn2="/posts/about-me"
          titleBtn2='Back to my history'
          reference
          />
      </div>
    </div>
  )
}