const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img id="Muffin" src='/images/taylor-kiser-zJR-P9dIGu8-unsplash.jpg' alt='Muffin' />
                <div>
                  Photo by <a href='https://www.instagram.com/foodfaithfit/'>Taylor Kiser</a> on <a href="https://unsplash.com/@foodfaithfit">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
