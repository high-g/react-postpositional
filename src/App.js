import kuromoji from 'kuromoji'

// 辞書格納フォルダパス
const DIC_URL = '/dict'

// WordCloudの情報として抽出する品詞（助詞、助動詞などは意味がないので拾わない）
const TARGET_POS = ['名詞', '動詞', '形容詞']

// kuromoji.jsの解析結果の値で特に値がない場合は以下の文字が設定される
const NO_CONTENT = '*'

function App() {
  return (
    <div className="App">
      <p>hello</p>
    </div>
  )
}

export default App
