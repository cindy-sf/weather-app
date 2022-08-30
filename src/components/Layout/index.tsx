import React, { FunctionComponent, ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Text from '@components/Text'

import Logo from '@assets/images/logo.png'

import { Footer, LayoutContainer, Nav } from './index.styles'

interface Props {
  children: ReactElement
}

const Layout: FunctionComponent<Props> = ({ children }): ReactElement => (
  <>
    <Head>
      <title>Weather App</title>
    </Head>
    <LayoutContainer>
      <header>
        <Nav>
          <Link href="/">
            <a title="Accueil">
              <Image src={Logo} width={170} height={50} layout="fixed" />
            </a>
          </Link>
        </Nav>
      </header>
      <main>{children}</main>
    </LayoutContainer>
    <Footer>
      <Text textAlign="center" size="small">
        Fait avec ❤️ par Cindy SF
      </Text>
    </Footer>
  </>
)

export default Layout
