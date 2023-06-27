import Head from 'next/head';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="App">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name="og:title"
          content={siteTitle}
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <header className="App-header">
        <div className="App-Container">
          <div className="Header">
            <div className="Header-Left">
              <a
                className="Luigi-Logo"
                href="https://diddykong.live">
                <div className="Luigi-Logo-Symbol">
                  <img
                    src="images/logo.png"
                    alt="logo"
                  />
                </div>
                <div className="Luigi-Logo-Words">
                  <img
                    src="images/logo-words.png"
                    alt="logo"
                  />
                </div>
              </a>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=tokenaqui"
                target="_blank">
                Buy Now
              </a>
            </div>
            <div className="Header-Right">
              <div className="Header-Control">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA6CAYAAADybArcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgB7dnhTQJBFATgWSugA88KNBRgiBUYG7AFOzB2YAlSgVeBYAVABdABdHDMcLfk/pMNvM18yeOOX/CAd7ezAGZmdgVJD13XNTx8sB4Ry471lVLapaGJFWuCmLasFzWy4MkMsS3USIf49nd8OKACamSO+Fr9tDTkGvYGMem9v6X8jA298vCEWNa89LYwMzOzyuSEqPXWO+ItUZas/3FCVLhqENM5If6g/zYiOyXEPeLm9eyUEKugRlaIr83D/od+2BPi6YddZ0MzM9Yzyij1Aa1Zc15+q9hAMTMzu9h47xel8M6L0tLQgF5Jm9jR/kM8b2LnReMv4sXcTIvGaS0J8dsJ8cZMakmIy3FCfEBMGo3pOCF+su5RRqkbyQYadG7QwczMruEIATBl4Jej1UUAAAAASUVORK5CYII="
                  alt="logo"
                />
              </div>
              <nav className="Header-Nav">
                <ul>
                  {/* <li>
                    <a
                      href="https://t.me/LuigiInuBSC/93038"
                      target="_blank">
                      ⭐ Announcement <span className="Nav-Star">⭐</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/LuigiInuBSC/93048"
                      target="_blank">
                      ⭐ Week 2 Roadmap <span className="Nav-Star">⭐</span>
                    </a>
                  </li> */}
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#tokenomics">Tokenomics</a>
                  </li>
                  <li>
                    <a
                      href="https://pancakeswap.finance/swap?outputCurrency=tokenaqui"
                      target="_blank">
                      Buy Now
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
