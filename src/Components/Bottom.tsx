import { useEffect, useState } from 'react'
import { Styles } from './App'
import littleIce from '../Assets/img/ice_copy.png'
import middleIce from '../Assets/img/ice_copy_2.png'
import bigIce from '../Assets/img/ice.png'
import muscle from '../Assets/img/muscle.png'
import liver from '../Assets/img/liver_1.png'
import brain from '../Assets/img/brain.png'
import lipid from '../Assets/img/lipid.png'
import lipid2 from '../Assets/img/lipid copy.png'
import arrowLeftBottom from '../Assets/img/Rectangle 11 copy 26.png'
import arrowBottom from '../Assets/img/Rectangle 11 copy 33.png'
import arrowRight from '../Assets/img/Rectangle 11 copy 36.png'
import arrowLeft from '../Assets/img/Rectangle 11 copy 37.png'
import arrowRightBottom from '../Assets/img/Rectangle 11 copy 38.png'
import arrowBottom2 from '../Assets/img/Rectangle 11 copy 29.png'
import arrowRight2 from '../Assets/img/Rectangle 11 copy 27.png'
import arrowLeft2 from '../Assets/img/Rectangle 11 copy 28.png'
import arrowUp2 from '../Assets/img/Rectangle 11 copy 34.png'
import '../CSS/Bottom.css'

export const Bottom = () => {
  const [styleLine, setStyleLine] = useState<Styles>({})
  const [slide, setSlide] = useState(Slide.THIRD)
  const [sliderValue, setSliderValue] = useState(100)
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSliderValue(+e.currentTarget.value)

  const onTouchEndHandler = (e: React.TouchEvent<HTMLInputElement>) => {
      const interval = setInterval(() => {
        setSliderValue(value => {
          switch (slide) {
            case Slide.THIRD:
              if (value < 100) return value + 1
              else {
                clearInterval(interval)
                return value
              }
            case Slide.SECOND:
              if (value > 50) return value - 1
              else if (value < 50) return value + 1
              else {
                clearInterval(interval)
                return value
              }
            case Slide.FIRST:
              if (value > 0) return value - 1
              else {
                clearInterval(interval)
                return value
              }
            default: return value
          }
        })
      }, 10)
  }
  useEffect(() => {
    setStyleLine({ transform: `translateX(${slide * 100}vw)` })
  }, [slide])
  useEffect(() => {
    if (sliderValue > 75 && slide !== Slide.THIRD) setSlide(Slide.THIRD)
    if (sliderValue < 25 && slide !== Slide.FIRST) setSlide(Slide.FIRST)
    if (75 >= sliderValue  && sliderValue >= 25  && slide !== Slide.SECOND) setSlide(Slide.SECOND)
  }, [sliderValue])
  return (
    <div className="bottom">
      <div className="bottom__container" style={styleLine}>
        <div className="bottom__1 page1988">
          <img src={littleIce} alt="" className="page1988__ice1 little"/>
          <img src={middleIce} alt="" className="page1988__ice2 middle"/>
          <img src={bigIce}    alt="" className="page1988__ice3 big"/>
          <p className="page1988__header">Звенья патогенеза СД2</p>
          <div className="page1988__content">
            <div className="page1988__1 field">
              <p className="field__number">1</p>
              <p className="field__text">&beta;-клетки</p>
              <div className="field__circle">&beta;</div>
            </div>
            <div className="page1988__container">
              <div className="page1988__2 field">
                <p className="field__number">2</p>
                <p className="field__text">Мышцы</p>
                <div className="field__circle">
                  <img className="field__img" src={muscle} alt=""/>
                </div>
              </div>
              <div className="page1988__hyperglycemia">
                Гипергликимия
              </div>
              <div className="page1988__3 field">
                <p className="field__number">3</p>
                <p className="field__text">Печень</p>
                <div className="field__circle">
                  <img className="field__img" src={liver} alt=""/>
                </div>
              </div>
            </div>
            <img src={arrowLeftBottom} className="page1988__lba arrow" alt=""/>
            <img src={arrowRightBottom} className="page1988__rba arrow" alt=""/>
            <img src={arrowLeft} className="page1988__la arrow" alt=""/>
            <img src={arrowRight} className="page1988__ra arrow" alt=""/>
            <img src={arrowBottom} className="page1988__ba arrow" alt=""/>
          </div>
        </div>
        <div className="bottom__2 page2009">
          <img src={littleIce} alt="" className="page2009__ice1 little"/>
          <img src={middleIce} alt="" className="page2009__ice2 middle"/>
          <img src={bigIce}    alt="" className="page2009__ice3 big"/>
          <p className="page2009__header">Смертельный октет</p>
          <div className="page2009__content">
            <div className="page2009__container1">
              <div className="page2009__23">
                <p className="page2009__text_right">Инкрентиновый эффект</p>
                <div className="page2009__circle23">2</div>
              </div>
              <div className="page2009__1">
                <p className="page2009__number">1</p>
                <p className="page2009__text">&beta;-клетки</p>
                <div className="page2009__circle">&beta;</div>
              </div>
              <div className="page2009__23">
                <div className="page2009__circle23">3</div>
                <div className="page2009__defect">
                  <p className="page2009__text">Дефект </p>
                  <p className="page2009__text">&alpha;-клеток</p>
                </div>
              </div>
            </div>
            <div className="page2009__container2">
              <div className="page2009__23">
                <div className="page2009__kidneys">
                  <p className="page2009__number_right">8</p>
                  <p className="page2009__text">Почки</p>
                </div>
                <div className="page2009__circle">
                  <img src={lipid2} alt="" />
                </div>
              </div>
              <div className="page2009__hyperglycemia">
                Гиперликимия
              </div>
              <div className="page2009__23_right">
                <div className="page2009__circle">
                  <img src={lipid} alt="" />
                </div>
                <div className="page2009__fat-cells">
                  <p className="page2009__number_left">4</p>
                  <p className="page2009__text_thin">Жировые клетки</p>
                </div>
              </div>
            </div>
            <div className="page2009__container3">
              <div className="page2009__1">
                <div className="page2009__circle">
                  <img src={brain} alt="" />
                </div>
                <p className="page2009__number">7</p>
                <p className="page2009__text_thin-center">Головной мозг</p>
              </div>
              <div className="page2009__1">
                <div className="page2009__circle">
                  <img className="page2009__img-liver" src={liver} alt="" />
                </div>
                <p className="page2009__number">6</p>
                <p className="page2009__text">Печень</p>
              </div>
              <div className="page2009__1">
                <div className="page2009__circle_muscle">
                  <img className="page2009__img-muscle" src={muscle} alt="" />
                </div>
                <p className="page2009__number">5</p>
                <p className="page2009__text">Мышцы</p>
              </div>
            </div>
            <img src={arrowLeft2} className="page2009__la2 arrow" alt=""/>
            <img src={arrowRight2} className="page2009__ra2 arrow" alt=""/>
            <img src={arrowBottom2} className="page2009__ba1 arrow" alt=""/>
            <img src={arrowBottom2} className="page2009__ba2 arrow" alt=""/>
            <img src={arrowBottom2} className="page2009__ba3 arrow" alt=""/>
            <img src={arrowUp2} className="page2009__ua1 arrow" alt=""/>
            <img src={arrowUp2} className="page2009__ua2 arrow" alt=""/>
            <img src={arrowUp2} className="page2009__ua3 arrow" alt=""/>
          </div>
        </div>
        <div className="bottom__3 page2016">
          <img src={littleIce} alt="" className="page2016__ice1 little"/>
          <img src={middleIce} alt="" className="page2016__ice2 middle"/>
          <img src={bigIce}    alt="" className="page2016__ice3 big"/>
        </div>
      </div>
      <div className="bottom__line">
        <input className="bottom__slider" type="range" min="0" max="100" step="1"
          onChange={onChangeHandler}
          value={sliderValue}
          onTouchEnd={onTouchEndHandler} />
      </div>
    </div>
  )
}

enum Slide{
  FIRST = 0,
  SECOND = -1,
  THIRD = -2
}