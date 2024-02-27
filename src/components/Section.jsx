

import info2 from "../assets/icons/info2.png"
import down_arrow1 from "../assets/icons/down_arrow2.png"
import fivesStar from "../assets/icons/fiveStar.png"
import cup from "../assets/icons/cup.png"
import diamond from "../assets/icons/diamond.png"
import fourAndHalfStar from "../assets/icons/fourAndHalfStar.png"
import write from "../assets/icons/write.png"

function Section({obj}) {

  const chooseStar = (star) =>{
    switch (star) {
      case 10:
        return fivesStar
      case 9:
        return fourAndHalfStar
      default:
        break;
    }
  }

  return (
  <div id="sectionTwoDiv" style={{height:obj?.mainHighlights?"436px":"255px"}}>
    <div style={{display:obj?.bestChoice?"flex":"none"}}>
      <img src={obj?.bestChoice?.icon === "cup"? cup : diamond} alt="" />
      <p>{obj?.bestChoice?.text}</p>
    </div>
    <div style={{border:obj?.idb?"1px solid #E1E4E6":null}}>
      {obj.id}
    </div>
    <div>
      <div>
        <img src={obj?.img?.src} alt="" />
        <p>{obj?.img?.capton}</p>
      </div>
      <div>
        <div>
          <p><span>{obj?.title}</span> {obj?.description}</p>
          {
            obj?.offer && (
              <div className="offer">
                {obj?.offer} off
              </div>
            )
          }
          <h4>Main highlights</h4>
          {obj?.mainHighlight && <p>{obj?.mainHighlight}</p>}
          {obj?.mainHighlights && (
            <div className="main_highlights">
              <div>
                <ul>
                  <li>9.9</li>
                  <li>8.9</li>
                  <li>8.9</li>
                </ul>
                <ul>
                  <li>Building Responsive</li>
                  <li>Cool </li>
                  <li>Docs</li>
                </ul>
              </div>
              <p>Why we love it</p>
              <div>
                <ul>
                  <li>
                    <div>
                      <img src={write} alt="" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={write} alt="" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={write} alt="" />
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>Documentation</li>
                  <li>Easy Use</li>
                  <li>Out of box</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div>
          <button>Show more</button>
          {
            obj?.showMore.more && <img src={down_arrow1} alt="" />
          }
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src={info2} alt="" />
            <h1>{obj?.rating?.number}</h1>
          </div>
          <p>{obj?.rating?.type}</p>
          <img src={chooseStar(obj?.rating?.stars)} alt="" />
        </div>
        <button>View</button>
      </div>
    </div>
  </div>
  )
}

export default Section
