import type { FC } from 'react'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json'
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'

SyntaxHighlighter.registerLanguage('javascript', js)
SyntaxHighlighter.registerLanguage('json', json)

type CodeBlockProps = {
  children: string | string[]
  language?: 'js' | 'json'
}

const CodeBlock: FC<CodeBlockProps> = ({ children, language = 'json' }) => {
  return (
    <div className="flex w-screen max-w-full items-center justify-center p-8">
      <SyntaxHighlighter language={language} style={dark}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
