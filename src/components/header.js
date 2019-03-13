import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css';
import Humburger from "./hamburger";
import DropDown from "./dropDown";


class Header extends React.Component {
  state = {
    hasScroll: false
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);

  }

  handleScroll = () => {
    // Getting the number of pixels the document has already been scrolled from the top
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50){
      this.setState({hasScroll: true});
    }else{
      this.setState({hasScroll: false});
    }
  }

  render(){
    return (
      <div className={this.state.hasScroll ? 'Header HeaderHasScroll': 'Header'}>
        <div className='HeaderGroup'>
            <Link to='#home'>Home</Link>
            <Link to='#about'>About me</Link>
            <Link to='#projects'>Projects</Link>
            <Link to='#skills'>skills</Link>
            <Link to='#gallery'><button>Gallery</button></Link>
            <div id='humburgerIcon'><Humburger/></div>
        </div>
        <DropDown/>
    </div>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
