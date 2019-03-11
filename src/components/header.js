import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css';


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
            <Link to='/'><img src={require('../images/patrick.jpg')} background='none' alt='logo' className='profilePic' /></Link>
            <Link to='/'>Home</Link>
            <Link to='/'>About me</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'><button>Article</button></Link>
        </div>
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
