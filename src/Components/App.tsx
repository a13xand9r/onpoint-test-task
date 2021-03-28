import { useEffect, useState } from 'react'
import '../CSS/App.css'
import { Bottom } from './Bottom'
import { Center } from './Center'
import { Top } from './Top'

const App = () => {
  const [styleApp, setStyleApp] = useState<Styles>({})
  const [page, setPage] = useState(0)
  const [line, setLine] = useState(-2)
  const [startX, setStartX] = useState<number>(0)
  const [startY, setStartY] = useState<number>(0)

  const onTouchStart = (e: any) => {
    setStartX(e.changedTouches[0].screenX)
    setStartY(e.changedTouches[0].screenY)
  }
  // const onScroll = (e: any) => {
  //   console.log(e)
  //   if (e.deltaY > 0 && page != 2) {
  //     setPage(page + 1)
  //   }
  //   if (e.deltaY < 0 && page !== 0) {
  //     setPage(page - 1)
  //   }
  // }
  const onTouchEnd = (e: any) => {
    const endX: number = e.changedTouches[0].screenX
    const endY: number = e.changedTouches[0].screenY
    // console.log(Math.abs(endY) - Math.abs(startY), Math.abs(endX) - Math.abs(startX))
    if (Math.abs(endY - startY) > Math.abs(endX - startX))
      endY < startY ? page < 2 && setPage(page + 1)
        : page > 0 && setPage(page - 1)
    // if (Math.abs(endY - startY) < Math.abs(endX - startX))
    //   endX > startX ? line < 0 && setLine(line + 1)
    //       : line > -2 && setLine(line - 1)

  }
  useEffect(() => {
    setStyleApp({transform: `translateY(-${page * 100}vh)`})
  }, [page])
  return (
    <div className="container">
      <div className="App" style={styleApp}
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
