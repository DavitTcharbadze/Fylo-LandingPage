import classes from '../modules/Review.module.scss';
import Productive from '../assets/images/illustration-stay-productive.png'

export default function Review() {
  return (
    <>
    <div className={classes['review-wrapper']}>
      <div className={classes['first-section']}>
        <img className={classes['productive-img']} src={Productive} alt="" />
        <div className={classes['text']}>
            <h1>Stay productive <br /> wherever you are</h1> <br />
            <p>Lorem ipsum dolorsit amet, consectetur adipisicing elit. Soluta, eligendi doloremque perspiciatis 
             voluptatibus <br /> <br />
             sit sequi necessitatibus nobis, ad maiores quam quisquam. Lorem ipsum dolor sit amet consectetur adipisicing</p> <br />
        </div>
        <h3><a href="/">See How Fylo works!</a></h3>
      </div>
    </div>
    </>
  )
}
