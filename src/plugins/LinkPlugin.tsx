import { formatURL } from '@/utils/url'
import React from 'react'
import { LinkPlugin as LexicalLinkPlugin } from '@lexical/react/LexicalLinkPlugin'

function LinkPlugin() {
  return (
    <LexicalLinkPlugin validateUrl={formatURL}/> 
  )
}

export default LinkPlugin