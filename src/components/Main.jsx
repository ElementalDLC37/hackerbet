import { Montserrat } from 'next/font/google'
import { DirectionLeft, Heart } from 'react-huge-icons/solid'
import styled from 'styled-components'

/// Tipography
const montserrat = Montserrat({ subsets: ['latin'], weight: ['700'] })

/// Component
export function Main() {
  return (
    <InnerMain className={montserrat.className}>
      <PageIndication />
      <iframe src="https://gnobet-iframe.vercel.app/" frameBorder="0"></iframe>
    </InnerMain>
  )
}
const InnerMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;

  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 42px;
  padding: 0 26px;

  @media (max-width: 768px) {
  }

  iframe {
    width: 100%;
    height: 1224px;
    border-radius: 25px;

    @media (max-width: 768px) {
      height: 3500px;
    }

    @media (max-width: 1024px) {
      height: 2000px;
    }
  }
`

/// SubComponents
function PageIndication() {
  return (
    <InnerPageIndication className={montserrat.className}>
      <div>
        <button>
          <DirectionLeft />
        </button>
      </div>
      <h1>Double</h1>
      <button>
        <Heart />
      </button>
    </InnerPageIndication>
  )
}
const InnerPageIndication = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 768px) {
    justify-content: flex-start;

    div {
      width: 100%;
    }
  }

  div {
    svg {
      font-size: 24px;
      margin: 0;

      path {
        stroke: rgba(59, 251, 130, 1);
        stroke-width: 1.5px;
      }
    }
  }

  h1 {
    font-size: 24px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  svg {
    color: rgba(59, 251, 130, 1);
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 19px;
  }
`
