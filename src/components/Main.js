import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="him" className={`${this.props.article === 'him' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Him</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Josh is a young up-and-coming lawyer from Kingsbridge, Devon. Here's a picture of Josh telling someone how it should be done.</p>
          <p>He's tall and drives a ford mondeo in disguise. I mean, he drives a ford mondeo disguised as a volvo. As far as I know he doesn't wear a disguise. He doesn't need to - he's a hero in real life anyway. We've no idea how he landed <a href="#her">Mary</a>.</p>
          
          {close}
        </article>

        <article id="her" className={`${this.props.article === 'her' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Her</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Mary is a bubbly, beautiful local lass with a passion for quilting. Her claim to fame is that she once quilted a quilt for Freddy Starr.</p>
          <p>Her goals in life are firstly to skinny dip on every continent, and then to eventually settle down with Josh and have 2.4 children. Josh doesn't understand how the 0.4 bit works.</p>
          <p>In fact I've only met her once so I'm making all this up.</p>
          {close}
        </article>

        <article id="when" className={`${this.props.article === 'when' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">When</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Don't know yet. Watch this space.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Polite Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main