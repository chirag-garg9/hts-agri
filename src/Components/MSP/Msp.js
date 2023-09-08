import React from 'react'
import Card from "react-bootstrap/Card";
import "./Msp.css"
const Msp = () => {
  return (
         <div className="mx-0 my-0 py-4 msp flex flex-col">
        
            <h2 className="px-10 py-10 text-5xl text-center font-semibold transition ease-in-out delay-150 duration-300">Minimum Support Price & <div className="mt-2">Latest market trends</div></h2>
            <p className="px-20 m-6 text-left text-2xl font-medium">Get the govt. MSPs and latest market trends here.</p>
            
            <div className="py-6 flex items-center justify-evenly cards-row">
            <Card
              className="shadow-lg m-2 h-36 w-1/3 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center"
              style={{ width: "18rem", height: "325px" }}
            >
              <Card.Img
                variant="top"
                className="h-60 w-60"
                src="https://i.pinimg.com/736x/26/ed/a8/26eda8a584f06b2ef964f30bcccaa5b2.jpg"
                alt="paddy"
              />
              <Card.Body>
                <Card.Title className="text-center pt-2">
                  Paddy
                </Card.Title>
                <Card.Text>
                  <div className='flex text-lg'>Common : 2040  <div className='flex items-center justify-items-center increment-text'><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +100</div></div> 
                  <div className='flex text-lg'>Grade 'A' : 2060  <div className="flex items-center justify-items-center increment-text"><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +100</div></div>
                  
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="shadow-lg m-2 h-36 w-1/3 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center"
              style={{ width: "18rem", height: "325px" }}
            >
              <Card.Img
                variant="top"
                className="h-60 w-60"
                src="https://5.imimg.com/data5/SELLER/Default/2023/5/307932499/PE/IZ/SA/90819936/dry-yellow-corn-maize-500x500.jpeg"
                alt="maize"
              />
              <Card.Body>
                <Card.Title className="text-center">Maize</Card.Title>
                <Card.Text  className='flex text-lg'>
                  1962  <div className="flex items-center justify-items-center increment-text"><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +92 </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="shadow-lg m-2 h-36 w-1/3 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center"
              style={{ width: "18rem", height: "325px" }}
            >
              <Card.Img
                className="h-60 w-60"
                variant="top"
                src="https://cdn.pixabay.com/photo/2013/11/01/18/13/pearl-millet-204091_1280.jpg"
                alt="bajra"
              />
              <Card.Body>
                <Card.Title className="text-center pt-4">Bajra</Card.Title>
                <Card.Text  className='flex text-lg'>
                  2350  <div className="flex items-center justify-items-center increment-text"><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +100 </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

         
          <div className="py-6 flex items-center justify-evenly cards-row">
            <Card
              className="shadow-lg m-2 h-48 w-1/3 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center"
              style={{ width: "18rem", height: "325px" }}
            >
              <Card.Img
                variant="top"
                className="h-60 w-60"
                src="https://img.etimg.com/thumb/msid-100854265,width-300,height-225,imgsize-137958,,resizemode-75/tur-dal.jpg"
                alt="tur-dal"
              />
              <Card.Body>
                <Card.Title className="text-center mt-0">
                 Tur (Arhar)
                </Card.Title>
                <Card.Text  className='flex text-lg'>
                  6600  <div className="flex items-center justify-items-center increment-text"><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +300 </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="shadow-lg m-2 h-36 w-1/3 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center"
              style={{ width: "18rem", height: "325px" }}
            >
              <Card.Img
                variant="top"
                className="h-60 w-60"
                src="https://www.the-sustainable-fashion-collective.com/img/http/assets.the-sustainable-fashion-collective.com/assets/the-swatch-book/2014/11/cotton.png/7c098280951a28c0f2aa4291f179ae42.png"
                alt="cotton"
              />
              <Card.Body>
                <Card.Title className="text-center">Cotton</Card.Title>
                <Card.Text  className='flex text-lg'>
                  6080  <div className="flex items-center justify-items-center increment-text"><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +354 </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="shadow-lg m-2 h-36 w-1/3 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center"
              style={{ width: "18rem", height: "325px" }}
            >
              <Card.Img
                className="h-60 w-60"
                variant="top"
                src="https://m.media-amazon.com/images/I/71SGRh+9wML.jpg"
                alt="sunflower"
              />
              <Card.Body>
                <Card.Title className="text-center pt-4">Sunflower</Card.Title>
                <Card.Text  className='flex text-lg'>
                  6400  <div className="flex items-center justify-items-center increment-text"><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +385 </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="py-6 flex items-center justify-evenly cards-row">
            <Card
              className="shadow-lg m-2 h-48 w-1/3 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center"
              style={{ width: "18rem", height: "325px" }}
            >
              <Card.Img
                variant="top"
                className="h-60 w-60"
                src="https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop.jpg"
                alt="wheat"
              />
              <Card.Body>
                <Card.Title className="text-center mt-0">
                 Wheat
                </Card.Title>
                <Card.Text  className='flex text-lg'>
                  2015 <div className="flex items-center justify-items-center increment-text"><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +40 </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="shadow-lg m-2 h-36 w-1/3 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center"
              style={{ width: "18rem", height: "325px" }}
            >
              <Card.Img
                variant="top"
                className="h-60 w-60"
                src="https://www.amar-khamar.com/cdn/shop/products/BlackMustard2.jpg?v=1637861957"
                alt="mustard"
              />
              <Card.Body>
                <Card.Title className="text-center">Mustard</Card.Title>
                <Card.Text  className='flex text-lg'>
                  5050  <div className="flex items-center justify-items-center increment-text"><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +400 </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="shadow-lg m-2 h-36 w-1/3 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center"
              style={{ width: "18rem", height: "325px" }}
            >
              <Card.Img
                className="h-60 w-60"
                variant="top"
                src="https://www.icexindia.com/images/default-source/products/agri-products/fiber/raw-jute.png"
                alt="jute"
              />
              <Card.Body>
                <Card.Title className="text-center pt-4">Jute</Card.Title>
                <Card.Text  className='flex text-lg'>
                  4750  <div className="flex items-center justify-items-center increment-text"><span className="increase" class="material-symbols-outlined">
arrow_drop_up
</span> +250 </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

           
        </div>
  )
}

export default Msp