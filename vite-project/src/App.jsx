import classes from './modules/App.module.scss'
import Header from './components/Header.jsx'
import Features from './components/Features.jsx'
import Review from './components/Review.jsx'
import FreeTrial from './components/FreeTrial.jsx'
function App() {

  return (
    <div className={classes['main-wrapper']}>
      <div className={classes['header-section']}>
        <Header />
      </div>

      <div className={classes['features-section']}>
        <Features />
      </div>

      <div className={classes['review-section']}>
        <Review />
      </div>

      <div className={classes['trial-section']}>
        <FreeTrial />
      </div>
    </div>
  )
}

export default App
