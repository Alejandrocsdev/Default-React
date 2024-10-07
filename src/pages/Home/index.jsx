// 樣式模組 (css module)
import S from './style.module.css'

// 首頁
function Home() {
  return (
    <>
      <main className={S.main}>
        <div className={S.content}>This is Alejandro.C.S DEV React Template</div>
      </main>
    </>
  )
}

export default Home
