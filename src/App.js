import { useEffect, useState } from 'react'
import css from './App.module.css'

const text = `文字組の基礎`

function App() {
  const [words, setWords] = useState([])

  useEffect(() => {
    const defaultBuilder = window.kuromoji.builder({ dicPath: 'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/' })
    defaultBuilder.build((err, tokenizer) => {
      if (err) {
        console.log(err)
      } else {
        const result = tokenizer.tokenize(text)
        console.log('result', result)
        setWords(result)
      }
    })

    return () => {}
  }, [])

  return (
    <div>
      <p className={css.main}>
        {words.map((item, key) => {
          return (
            <span key={key} className={item.pos === '助詞' ? css.min : ''}>
              {item.surface_form}
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default App
