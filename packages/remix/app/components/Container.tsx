import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface ContainerProps {
  children?: ReactNode
}
export default function Container({ children }: ContainerProps) {
  return (
    <main id="skip" className="flex flex-col justify-center px-2 py-2">
      <Header /> {children}
      <Footer />
    </main>
  )
}
