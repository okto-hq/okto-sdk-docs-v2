
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Okto Summer of Abstraction',
  description: 'Okto Summer of Abstraction is a global, online program designed to kickstart the Okto and core Web3 ecosystem by onboarding and supporting builders, developers, content creators, educators, and community leaders in Web3 under the guidance of mentors and industry leaders.',
}

export default function SoaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}
  