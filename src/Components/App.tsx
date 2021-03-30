import { useState } from 'react'
import '../CSS/App.css'
import { Bottom } from './Bottom'
import { Center } from './Center'
import { Top } from './Top'

const App = () => {
  const [page, setPage] = useState(0)
  const [startX, setStartX] = useState<number>(0)
  const [startY, setStartY] = useState<number>(0)

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.changedTouches[0].screenX)
    setStartY(e.changedTouches[0].screenY)
  }
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX: number = e.changedTouches[0].screenX
    const endY: number = e.changedTouches[0].screenY
    if (Math.abs(endY - startY) > Math.abs(endX - startX))
      endY < startY ? page < 2 && setPage(page + 1)
        : page > 0 && setPage(page - 1)
  }
  const style = { transform: `translateY(-${page * 768}px)` }
  return (
    <div className="container">
      <div className="app" style={style}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}>
        <Top />
        <Center />
        <Bottom />
      </div>
      <div className="container__pages">
        <div className={`container__page${page === 0 ? '_current' : ''}`}></div>
        <div className={`container__page${page === 1 ? '_current' : ''}`}></div>
        <div className={`container__page${page === 2 ? '_current' : ''}`}></div>
      </div>
      {page === 0 && <div className="container__down">
        <p>Листайте вниз</p>
        <div></div>
      </div>}
    </div>
  );
}

export type Styles = {
  [key: string]: string
}

export default App;
