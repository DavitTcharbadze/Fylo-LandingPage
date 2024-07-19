import classes from '../modules/Header.module.scss'

export default function Header() {
  return (
    <div className={classes['header-wrapper']}>
      <h1 className={classes['header-title']}>Fylo</h1>
      <nav className={classes['linkers']}>
            <h3>Feutures</h3>
            <h3>Team</h3>
            <h3>Sign in</h3>
      </nav>
    </div>
  )
}
