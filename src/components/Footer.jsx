import downArrow3 from "../assets/icons/down_arrow3.png"

function Footer() {
  return (
    <div id="footer">
      <div>
        <div>
          <ul>
            <li>
              <h1>Categories</h1>
            </li>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h1>Contact</h1>
            </li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <div>
            <p>United States</p>
            <img src={downArrow3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
