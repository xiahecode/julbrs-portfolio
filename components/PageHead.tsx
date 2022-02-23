import Head from 'next/head'
import * as React from 'react'
import * as types from 'lib/types'
import * as config from 'lib/config'

// TODO: remove duplication between PageHead and NotionPage Head

export const PageHead: React.FC<types.PageProps> = ({ site }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      {site?.description && (
        <>
          <meta name='description' content={site.description} />
          <meta property='og:description' content={site.description} />
        </>
      )}

      <meta name='theme-color' content='#EB625A' />
      <meta property='og:type' content='website' />
      {/* Goat Counter analytics */}
      {config.gcUrl && (
        <script
          data-goatcounter={config.gcUrl}
          async
          src='//gc.zgo.at/count.js'
        ></script>
      )}
      {config.gaCode && (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${config.gaCode}`}
        />
      )}
      {config.gaCode && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.gaCode}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
      )}
    </Head>
  )
}
