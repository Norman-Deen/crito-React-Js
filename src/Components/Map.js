import logo from "../Pic/Map.jpg"


// The provided React.js code defines a component named Map 
// that displays a map image. The image source is imported from the 
// "../Pic/Map.jpg" file, and it is rendered within a div element with
// the class "MapPic" for styling purposes. Additionally,
// it's worth noting that this component is part of the Contact page.

export default function Map() {

 return(

    <>
        <div className="MapPic">
          
          <img src={logo} alt="mappic" />

        </div>
      
    </>

)

}