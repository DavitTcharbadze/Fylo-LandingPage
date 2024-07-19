import classes from '../modules/Features.module.scss'
import FeatureImg from '../assets/images/illustration-intro.png'

export default function Features() {
  return (
    <div className={classes['feature-wrapper']}>
      <img className={classes['feature-img']} src={FeatureImg} alt="" />
      <div className={classes['title-section']}>
        <h1 className={classes['feature-title']}>All your files in one secure location.</h1>
        <p className={classes['feature-paragraph']}>Fylo stores all your most important fles inone secure location. <br /> Access them wherever you need, share and collaborate with <br /> friends and family, and co-workers.</p>
        <button className={classes['feature-button']}><h2>get started</h2></button>
      </div>
      <div className={classes['feature-info']}>
        <div className={classes['access']}> <h2>Access your files, anywhere</h2> <br />
        <p>The ability to use a smartphone, tablet, <br /> or computer to access your account means <br /> your files follow you everywhere</p>
         </div>
        <div className={classes['security']}> <h2>Security you can trust</h2> <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolores expedita,  aliquam modi blanditiis doloribus natus <br /> ut! Eligendi!</p>
        </div>
        <div className={classes['collaboration']}> <h2>Real-time collaboration</h2> <br />
        <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.  Dolores expedita,  aliquam modi <br /> blanditiis doloribus natus  ut! Eligendi!</p> </div>
        <div className={classes['any-file']}> <h2>Store any type of file</h2> <br />
        <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.  Dolores expedita,  aliquam modi <br /> blanditiis doloribus natus  ut! Eligendi!</p> </div>
      </div>
    </div>
  )
}
