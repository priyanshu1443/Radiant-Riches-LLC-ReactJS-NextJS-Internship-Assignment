import "./styles/app.scss"

import Navigation from "./components/Navigation"
import Breadcumb from "./components/Breadcumb"

import verify from "./assets/icons/verify.png"
import info from "./assets/icons/info.png"
import down_arrow from "./assets/icons/down_arrow.png"
import Section from "./components/Section"
import Card from "./components/Card"
import Footer from "./components/Footer"


function App() {

  const options = ["Tools","AWS Builder", "Start Build", "Build Supplies","Tooling","BlueHosting"]

  const sectionTwoObject = [
    {
      id:1,
      idb:false,
      bestChoice:{
        icon:"cup",
        text:"Best choice"
      },
      img:{
        src:"https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        caption:"Builder 1"
      },
      title:"WixPro 72-Inch Responsive Website Builder-",
      description:"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainHighlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      showMore:{
        more:true
      },
      rating:{
        number:9.8,
        type:"Exceptional",
        stars:10
      }
    },
    {
      id:2,
      idb:true,
      bestChoice:{
        icon:"diamond",
        text:"Best Value"
      },
      img:{
        src:"https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        caption:"Builder"
      },
      title:"SiteCraft 68-Inch Ultimate Web Design Studio- ",
      description:"Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      mainHighlight:"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      showMore:{
        more:true
      },
      rating:{
        number:9.5,
        type:"Excellent",
        stars:9
      }
    },
    {
      id:3,
      idb:true,
      img:{
        src:"https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
        caption:"Builder 1"
      },
      title:"WixPro 72-Inch Responsive Website Builder-",
      description:"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      mainHighlight:"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      showMore:{
        more:false
      },
      rating:{
        number:9.3,
        type:"Exceptional",
        stars:10
      }
    },
  ]

  const sectionThreeObject = {
    id:4,
    idb:true,
    img:{
      src:"https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__",
      caption:"CDK"
    },
    title:"CDK Resposive Builder: ",
    description:"An extensive library of widgets and apps, and detailed step-by-step guides",
    offer:"26%",
    mainHighlights:true,
    showMore:{
      more:false
    },
    rating:{
      number:9.1,
      type:"Very Good",
      stars:8
    }
  }

  return (
    <>
      <header>
        <Navigation/>
      </header>
      <main>
        <section id="section1">
          <div>
            <h1 id="main_heading">Best Website builders in the US</h1>
            <hr />
            <div id="updates_detail">
              <ul>
                <li>
                  <img src={verify} alt="verify" />
                </li>
                <li>
                  <ul>
                    <li>Last Updated</li>
                    <li>-</li>
                    <li>February 22, 2020</li>
                  </ul>
                </li>
                
                <li>
                  <img src={info} alt="info" />
                </li>
                <li>Advertising Disclosure</li>
              </ul>
              <ul>
                <li>Top Relevant</li>
                <li>
                  <img src={down_arrow} alt="down_arrow" />
                </li>
              </ul>
            </div>
            <hr />
          </div>
          <div id="options">
            {
              options.map((option) => {
                return(
                  <div key={option}>
                    <p>{option}</p>
                  </div>
                )
              })
            }
          </div>
          <Breadcumb/>
        </section>
        <section className="section2">
          {
            sectionTwoObject.map((obj)=> <Section key={obj.id} obj={obj}/> )
          }
        </section>
        <section className="section2">
          <Section obj={sectionThreeObject}/>
        </section>
        <section id="section3">
          <h1>Related deals you might like for</h1>
          <div>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </section>
        <section id="section4">
          <h1>Sign up and get exclusive special deals</h1>
          <button>Sing Up</button>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
