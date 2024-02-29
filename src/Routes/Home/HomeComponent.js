
import regular from "../../assets/img/regular.jpg"
import adventure from '../../assets/img/adventure.jpg'
import space from '../../assets/img/space.jpg'
import special from '../../assets/img/speacial.jpg'
import beach from '../../assets/img/beach.jpg'
import DirectoryComponent from "../../Component/category-component/Directory/DirectoryComponent"

function Home() {
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
    return (
      <DirectoryComponent categories={categories} />
    );
  }
  
export default Home;