import './App.scss';
import regular from './assets/img/regular.jpg'
import adventure from './assets/img/adventure.jpg'
import space from './assets/img/space.jpg'
import special from './assets/img/speacial.jpg'
import beach from './assets/img/beach.jpg'


const categories = [
  {
    id: 1,
    title: "Regular",
    img: regular,
  },
  {
    id: 2,
    title: "Astronomy",
    img: space,
    
  },
  {
    id: 3,
    title: "Special-Edition",
    img: special,
  },
  {
    id: 4,
    title: "Beach",
    img: beach,
  },
  {
    id: 5,
    title: "Adventure",
    img: adventure,
  },
]

function App() {
  return (
    <div className="categories-container">
      {categories.map( ({title, id, img}) => (
        <div key={id} className='category-container'>
          <div className='background-image'> <img src={img} />
          </div>
        <div className='category-body-container'>

          <h2>{title}</h2>
          <p>shoop Now</p>
        </div>
      </div>
      ) )}
    </div>
  );
}

export default App;
