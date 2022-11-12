import { useEffect, useState } from 'react'
import css from './App.module.css'

const text = `私の名前はフロントエンジにゃーです。`

// 辞書格納フォルダパス
const DIC_URL = '/dict'

// WordCloudの情報として抽出する品詞（助詞、助動詞などは意味がないので拾わない）
const TARGET_POS = ['名詞', '動詞', '形容詞']

// kuromoji.jsの解析結果の値で特に値がない場合は以下の文字が設定される
const NO_CONTENT = '*'

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

    // builder({ dicPath: DIC_URL }).build((err, tokenizer) => {
    //   console.log('err', err)
    //   if (err) {
    //     console.log(err)
    //     return
    //   }

    //   const tokens = tokenizer.tokenize(text)

    //   console.log('tokens', tokens)
    // })
    return () => {}
  }, [])

  return (
    <div>
      <p className={css.main}>
        {words.map((item, key) => {
          return (
            <span key={key} className={item.pos === '助詞' && css.min}>
              {item.surface_form}
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default App
