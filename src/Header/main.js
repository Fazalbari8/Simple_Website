import React from 'react'
import './main.css'
const main = () => {
  return (
    <div>
    <div class="wrapper">
      <input type="checkbox" id="menuToggler" class="input-toggler" />
      <label for="menuToggler" class="menu-toggler">
        <span class="menu-toggler__line"></span>
        <span class="menu-toggler__line"></span>
        <span class="menu-toggler__line"></span>
      </label>
      <aside class="sidebar">
        <ul class="menu">
          <li class="menu__item"><a class="menu__link" href="#Home">Home</a></li>
          <li class="menu__item"><a class="menu__link" href="#Blog">Blog</a></li>
          <li class="menu__item"><a class="menu__link" href="#Portfolio">Portfolio</a></li>
          <li class="menu__item"><a class="menu__link" href="#About">About</a></li>
          <li class="menu__item"><a class="menu__link" href="#Contact">Contact</a></li>
        </ul>
      </aside>
      <main class="content">
        <div>
          <h1>CSS sidebar toggle</h1>
          <p>Pure CSS solution for hiding and showing sidebar.</p>
        </div>
        <div id="Home">
          <h1>Home</h1>
          <p>This is the home page.</p>
        </div>
        <div id="Blog">
          <h1>Blog</h1>
          <p>This is the blog page.</p>
        </div>
        <div id="Portfolio">
          <h1>Portfolio</h1>
          <p>This is the portfolio page.</p>
        </div>
         <div id="About">
          <h1>About</h1>
          <p>This is the about page.</p>
        </div>
         <div id="Contact">
          <h1>Contact</h1>
          <p>This is the contact page.</p>
        </div>
      </main>
    </div>
    </div>
    
  )
}

export default main