import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image"; 

const config: DocsThemeConfig = {
  logo: <div className='logo'><Image
  src="/assets/images/icon.png"
  alt="Your image"
  width={50}
  height={57}
/><span className='logoText'>Wordslet</span></div>,
  project: {
    link: '',
  },
  chat: {
    link: '',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Wordslet @2023',
  },
}

export default config
