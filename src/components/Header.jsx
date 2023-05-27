import { Manrope } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'
import {
  BarChart,
  CoinDollar,
  DirectionDown,
  Heart,
  Home,
} from 'react-huge-icons/solid'

const manrope = Manrope({ subsets: ['latin'] })

export function Header() {
  return (
    <InnerHeader className={manrope.className}>
      <Logo />
      <Menu />
      <User />
    </InnerHeader>
  )
}

const InnerHeader = styled.header`
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 26px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(13, 13, 13, 0.4);
  border-bottom: 2px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 5px 20px rgba(13, 13, 13, 0.4);
  position: relative;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    padding: 0 110px;
  }
`

/// SubComponents

function Logo() {
  return (
    <InnerLogo>
      <Image width={30} height={30} src="/logo-icon.svg" alt="Hackerbet" />
      <Image width={100} height={12} src="/logo-title.svg" alt="HackerBet" />
    </InnerLogo>
  )
}

const InnerLogo = styled.span`
  display: flex;
  height: 30px;
  align-items: center;
  gap: 11px;
  cursor: pointer;
`

//

function Menu() {
  return (
    <InnerMenu>
      <li>
        <Link href="/">
          <Home />
          <span>Início</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <CoinDollar />
          <span>Bônus</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <Heart />
          <span>Favoritos</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <BarChart />
          <span>Estatísticas</span>
        </Link>
      </li>
    </InnerMenu>
  )
}

const InnerMenu = styled.ul`
  display: flex;
  height: 30px;
  align-items: center;
  gap: 11px;
  list-style: none;
  text-transform: uppercase;
  font-weight: 700;
  gap: 42px;

  li {
    a {
      display: flex;
      opacity: 0.7;
      align-items: center;
      gap: 13px;
      transition: 0.2s;

      svg {
        font-size: 24px;
        color: rgba(255, 255, 255, 1);
      }

      span {
        display: none;
        line-height: 17px;
        font-size: 10px;
        letter-spacing: 0.4px;

        @media (min-width: 1024px) {
          display: flex;
        }
      }
    }

    a:hover {
      opacity: 1;
    }
  }
`

//

function User() {
  return (
    <InnerUser>
      <Image width={280} height={280} src="/avatar.jfif" alt="Avatar" />
      <p>Usuário</p>
      <DirectionDown />
    </InnerUser>
  )
}

const InnerUser = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 140px;
  min-height: 40px;
  background-color: rgba(50, 50, 50, 0.4);
  border-radius: 32px;
  padding: 7px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.2s;

  &:hover {
    background-color: rgba(50, 50, 50, 0.5);

    p {
      opacity: 1;
    }
  }

  img {
    object-fit: cover;
    width: 28px;
    height: 28px;
    border-radius: 100%;
  }

  p {
    font-size: 10px;
    opacity: 0.8;
    letter-spacing: 0.4px;
  }

  svg {
    color: rgba(59, 251, 130, 1);
    margin-right: 10px;
  }
`
