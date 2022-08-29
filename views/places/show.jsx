const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
                <div>
                    <img src='/images/coffee-1711012_640.jpg'/>
                </div>
                <div>
                <h2>
                    Rating
                </h2>
                <a>
                    Not Rated
                </a>
                <h1>
                    Description
                </h1>
                <a>
                    Location in phoenix, AZ and serving Coffe, Bakery
                </a>
            </div>
            <div>
                <h1>
                    Comments
                </h1>
                <a>
                    No comments yet!
                </a>
            </div>
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                Edit
            </a>
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                    Delete
                </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
