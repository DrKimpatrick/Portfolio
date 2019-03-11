import React from 'react';

const Icons = () => (
    <div className='iconTopWrapper'>
        <div className='iconInnerWrapper'>
          <a href='https://github.com/DrKimpatrick'><img src={require('../images/github2.png')} alt='social' width='50px' /></a>
          <a href='https://web.facebook.com/dr.kimpatrick'><img src={require('../images/facebook2.png')} alt='social' width='50px' /></a>
          <a href='https://twitter.com/DrKimpatrick'><img src={require('../images/twitter2.png')} alt='social' width='50px' /></a>
          <a href='https://www.linkedin.com/in/drkimpatrick'><img src={require('../images/linkedin.png')} alt='social' width='50px' /></a>
          <a href='https://profile.codersrank.io/user/drkimpatrick/asOthersSee'><img src={require('../images/coderank.jpg')} alt='social' width='50px' /></a>
        </div>
      </div>
)

export default Icons;