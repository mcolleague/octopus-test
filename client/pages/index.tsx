import s from '@/styles/pages/Home.module.scss'

export default function Home() {
  return (
    <main>
      <div className={s._}>
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code>/product</code> URL and editing{' '}
          <code>client/pages/product.js</code>
        </p>
      </div>
    </main>
  )
}
