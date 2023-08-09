
import './styles.css'
import logo from '../assets/mutantLogo.png'
import Image from '../../node_modules/next/image'

export default function Home() {
  return (
    <main>
      <Image 
      src={logo}
      alt="logo"
      />
      <p>Our platform simplifies the process from Meta verification to activating your MutantWhats</p>
    </main>
  )
}
