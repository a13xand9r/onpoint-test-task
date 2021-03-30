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
  const style = {transform: `translateY(-${page * 100}vh)`}
  console.log('render')
  return (
    <div className="container">
      <div className="App" style={style}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}>
        <Top />
        <Center />
        <Bottom />
      </div>
    </div>
  );
}

export type Styles = {
  [key: string]: string
}

export default App;
