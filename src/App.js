import React, { Component } from 'react';
import './App.css';
import Moviecard from './Moviesjs/Cardlist'
import RatingFilter from './Moviesjs/RatingFilter'
import Searchbymoviename from './Moviesjs/Searchbymoviename.js'

const theCards = [
  {
    id: '0001',
    name: 'Mission: Impossible - Fallout',
    image: 'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_UX182_CR0,0,182,268_AL_.jpg',
    description: 'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.',
    rate:'5',
    alt: 'Action, Adventure, Thriller ',
   },
   {
    id: '0002',  
    name: 'Horse Soldiers',
      image: 'https://m.media-amazon.com/images/M/MV5BNTEzMjk3NzkxMV5BMl5BanBnXkFtZTgwNjY2NDczNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: '12 Strong tells the story of the first Special Forces team deployed to Afghanistan after 9/11; under the leadership of a new captain, the team must work with an Afghan warlord to take down the Taliban.',
      rate:'2',
      alt: 'Action, Drama, History',
   },
   {
      id:'0003',
      name: 'A Wrinkle in Time',
      image: 'https://m.media-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him.',
      rate:'3',
      alt: 'Adventure, Family, Fantasy ',
   },
   {
      id:'0004',
      name: 'Tomb Raider',
      image: 'https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she discovers the island where her father disappeared.',
      rate:'5',
      alt: 'Action, Adventure, Fantasy',
     },
     {
        id:'0005',
        name: 'Annihilation',
        image: 'https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature do not apply.',
        rate:'4',
        alt: ' Adventure, Drama, Horror',
     },
     {
        id:'0006',
        name: 'Ocean\'s 8',
        image: 'https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'Debbie Ocean gathers an all-female crew to attempt an impossible heist at New York City\'s yearly Met Gala.',
        rate:'5',
        alt: 'Action, Comedy, Crime ',
     },
     {
      id:'0007',
      name: 'Jurassic World: Fallen Kingdom',
      image: 'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'When the island\'s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.',
      rate:'2',
      alt: 'Action, Adventure, Sci-Fi ',
     },
     {
        id:'0008',
        name: 'Skyscraper',
        image: 'https://m.media-amazon.com/images/M/MV5BOGM3MzQwYzItNDA1Ny00MzIyLTg5Y2QtYTAwMzNmMDU2ZDgxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'A security expert must infiltrate a burning skyscraper, 225 stories above ground, when his family are trapped inside by criminals.',
        rate:'4',
        alt: 'Action, Adventure, Thriller',
     },
     {  id:'0009',
        name: 'Venom',
        image: 'https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        description: 'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
        rate:'5',
        alt: 'Action, Sci-Fi',
     },
     {id:'0010',
      name: 'First Man',
      image: 'https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.',
      rate:'4',
      alt: 'Biography, Drama, History',
   },
   {  id:'0011',
      name: 'Dark Phoenix',
      image: 'https://m.media-amazon.com/images/M/MV5BMjM0NjcyMzU5Nl5BMl5BanBnXkFtZTgwNTE2MzU0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all the people living in the world.',
      rate:'5',
      alt: 'Action, Adventure, Sci-Fi',
   },
   {  id:'0012',
      name: 'Fantastic Beasts: The Crimes of Grindelwald',
      image: 'https://m.media-amazon.com/images/M/MV5BZjFiMGUzMTAtNDAwMC00ZjRhLTk0OTUtMmJiMzM5ZmVjODQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'The second installment of the "Fantastic Beasts" series set in J.K. Rowling\'s Wizarding World featuring the adventures of magizoologist Newt Scamander.',
      rate:'5',
      alt: 'Adventure, Family, Fantasy ',
   },
   {  id:'0013',
      name: 'Mary Poppins Returns',
      image: 'https://m.media-amazon.com/images/M/MV5BMTk0NDIzMTA1MF5BMl5BanBnXkFtZTgwMzM0MTUzNjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'Decades after her original visit, the magical nanny returns to help the Banks siblings and Michael\'s children through a difficult time in their lives.',
      rate:'5',
      alt: 'Animation, Drama, Family',
   },
   {  id:'0014',
      name: 'Nobody\'s Fool',
      image: 'https://m.media-amazon.com/images/M/MV5BMjM0MjQ2OTIyNl5BMl5BanBnXkFtZTgwMDM4MTgwNjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'A woman is released from prison and reunites with her sister. She soon discovers that her sister is in an online relationship with a man who may not be what he seems.',
      rate:'3',
      alt: 'Comedy, Drama, Romance',
   },
   {  id:'0015',
      name: 'Rampage',
      image: 'https://m.media-amazon.com/images/M/MV5BNDA1NjA3ODU3OV5BMl5BanBnXkFtZTgwOTg3MTIwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: 'When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago.',
      rate:'2',
      alt: 'Action, Adventure, Sci-Fi',
   },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosedrate: 5,
      movies: theCards,
      titleFilter: ''
    }

  }
  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rate >= this.state.chosedrate &&
        el.name.toLocaleLowerCase().includes(this.state.titleFilter.toLocaleLowerCase())
      )
  }

  addNewMovie(newMovie) {
    
      theCards.push(newMovie)
   
  }
 render() {
    return (
      <div className="App">
       <div className="headerstyling">
      <Searchbymoviename NameFilter value={this.state.titleFilter}
      onChange={(newNameFilter) => {
        this.setState({
          titleFilter: newNameFilter
        })
      }}/>
      
    
      <RatingFilter count={this.state.chosedrate} rChange={(newr) => { this.setState({ chosedrate: newr})}} /> 
      </div>
      <Moviecard  movies={
                this.getVisibleMovies()
              }
      
      onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />

      
      </div>
    );
  }
}

export default App;
