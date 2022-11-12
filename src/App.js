import { useEffect } from 'react'
import kuromoji from 'kuromoji'

const text = `そこも場合もうその病気らに対して旨の時がしんませ。
単に事実に使用方はどうかその応用たないでもが思いてならないがも発展思いうべきて、
...
`

// 辞書格納フォルダパス
const DIC_URL = '/dict'

// WordCloudの情報として抽出する品詞（助詞、助動詞などは意味がないので拾わない）
const TARGET_POS = ['名詞', '動詞', '形容詞']

// kuromoji.jsの解析結果の値で特に値がない場合は以下の文字が設定される
const NO_CONTENT = '*'

function App() {
  useEffect(() => {
    kuromoji.builder({ dicPath: DIC_URL }).build((err, tokenizer) => {
      console.log('err', err)
      if (err) {
        console.log(err)
        return
      }

      const tokens = tokenizer.tokenize(text)

      console.log('tokens', tokens)
    })
  }, [])

  return (
    <div className="App">
      <p>hello</p>
    </div>
  )
}

export default App
