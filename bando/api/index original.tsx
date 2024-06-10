import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'
import React from 'react';

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/', (c) => {
  const { buttonValue, inputText, status} = c
  const fruit = inputText || buttonValue
  //Return can be an URL from internet to serve as an image line 24 = "http://pepe_imagenet.com",
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? '#17101F'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
              }}
      >
        <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 16,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Aqui puedes mintear tu primer transacción en Bando
        </div>
      </div>
    ),
    intents: [
      <Button action="/Polygon" value="Polygon">,
      <Button action="/Arbitrum" value="Arbitrum">,
      <Button action="/Base" value="Base">,
      <Button action="/Scroll" value="Scroll">,

    ],
  })
})

app.frame('/polygon', (c) => {
  const { buttonValue, inputText, status} = c
  const fruit = inputText || buttonValue
  //Return can be an URL from internet to serve as an image line 24 = "http://pepe_imagenet.com",
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? '#17101F'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
              }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 16,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Aqui puedes mintear tu primer transacción en Bando
        </div>
      </div>
    ),
    intents: [
      <Button.link href="https://zora.com">Polygon</Button>,
      <Button.link href="https://zora.com">Arbitrum</Button>,
      <Button.link href="https://zora.com">Base</Button>,
    ],
  })
})

app.frame('/Arbitrum', (c) => {
  const { buttonValue, inputText, status} = c
  const fruit = inputText || buttonValue
  //Return can be an URL from internet to serve as an image line 24 = "http://pepe_imagenet.com",
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? '#17101F'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
              }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 16,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Aqui puedes mintear tu primer transacción en Bando
        </div>
      </div>
    ),
    intents: [
      <Button.link href="https://zora.com">Polygon</Button>,
      <Button.link href="https://zora.com">Arbitrum</Button>,
      <Button.link href="https://zora.com">Base</Button>,
    ],
  })
})

app.frame('/Base', (c) => {
  const { buttonValue, inputText, status} = c
  const fruit = inputText || buttonValue
  //Return can be an URL from internet to serve as an image line 24 = "http://pepe_imagenet.com",
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? '#17101F'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
              }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 16,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Aqui puedes mintear tu primer transacción en Bando
        </div>
      </div>
    ),
    intents: [
      <Button.link href="https://zora.com">Polygon</Button>,
      <Button.link href="https://zora.com">Arbitrum</Button>,
      <Button.link href="https://zora.com">Base</Button>,
    ],
  })
})

app.frame('/Scroll', (c) => {
  const { buttonValue, inputText, status} = c
  const fruit = inputText || buttonValue
  //Return can be an URL from internet to serve as an image line 24 = "http://pepe_imagenet.com",
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? '#17101F'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
              }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 16,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          Aqui puedes mintear tu primer transacción en Bando
        </div>
      </div>
    ),
    intents: [
      <Button.link href="https://zora.com">Polygon</Button>,
      <Button.link href="https://zora.com">Arbitrum</Button>,
      <Button.link href="https://zora.com">Base</Button>,
    ],
  })
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
