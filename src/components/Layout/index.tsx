import React, { FunctionComponent, ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Text from '@components/Text'

import Logo from '@assets/images/logo.png'

import { Footer, LayoutContainer, Nav } from './index.styles'

interface Props {
  children: ReactElement
}

const Layout: FunctionComponent<Props> = ({ children }): ReactElement => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>
      <LayoutContainer>
        <header>
          <Nav>
            <Image
              src={Logo}
              width={170}
              height={50}
              layout="fixed"
              onClick={() => router.push('/')}
            />
          </Nav>
        </header>
        <main>{children}</main>
      </LayoutContainer>
      <Footer>
        <Text fontFamily="Katwijkmono" textAlign="center" size="small">
          Fait avec ❤️ par Cindy Saint Fleurant
        </Text>
      </Footer>
    </>
  )
}

export default Layout
